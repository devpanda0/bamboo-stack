// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-root-of-your-application

import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { NotFound } from "@/components/not-found";
import { routeTree } from "./routeTree.gen";
import * as TanstackQuery from "@/components/RootProvider.tsx";

export function createRouter() {
  const rqContext = TanstackQuery.getContext()

  const router = createTanStackRouter({
    context: { ...rqContext },
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    Wrap: (props) => {
      return (
          <TanstackQuery.Provider {...rqContext}>
            {props.children}
          </TanstackQuery.Provider>
      )
    },
  });

  return routerWithQueryClient(router, rqContext.queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
