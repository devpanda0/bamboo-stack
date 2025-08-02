import '@/polyfill'

import { OpenAPIHandler } from '@orpc/openapi/fetch'
import { experimental_SmartCoercionPlugin as SmartCoercionPlugin } from '@orpc/json-schema'
import {
    experimental_ArkTypeToJsonSchemaConverter as ArkTypeToJsonSchemaConverter
} from '@orpc/arktype'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { onError } from '@orpc/server'
import { OpenAPIReferencePlugin } from '@orpc/openapi/plugins'
import router from '@/orpc/router'
import {db} from "@/lib/db.ts";

const handler = new OpenAPIHandler(router, {
    interceptors: [
        onError((error) => {
            console.error(error)
        }),
    ],
    plugins: [
        new SmartCoercionPlugin({
            schemaConverters: [new ArkTypeToJsonSchemaConverter()],
        }),
        new OpenAPIReferencePlugin({
            schemaConverters: [new ArkTypeToJsonSchemaConverter()],
            specGenerateOptions: {
                info: {
                    title: 'TanStack ORPC Playground',
                    version: '1.0.0',
                },
                commonSchemas: {
                    //example: Todo: { schema: TodoSchema },
                    UndefinedError: { error: 'UndefinedError' },
                },
                security: [{ bearerAuth: [] }],
                components: {
                    securitySchemes: {
                        bearerAuth: {
                            type: 'http',
                            scheme: 'bearer',
                        },
                    },
                },
            },
            docsConfig: {
                authentication: {
                    securitySchemes: {
                        bearerAuth: {
                            token: 'default-token',
                        },
                    },
                },
            },
        }),
    ],
})

async function handle({ request }: { request: Request }) {
    const { response } = await handler.handle(request, {
        prefix: '/api',
        context: {
            headers: request.headers,
            db,
        },
    })

    return response ?? new Response('Not Found', { status: 404 })
}

export const ServerRoute = createServerFileRoute('/api/$').methods({
    HEAD: handle,
    GET: handle,
    POST: handle,
    PUT: handle,
    PATCH: handle,
    DELETE: handle,
})
