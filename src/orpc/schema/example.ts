import {type} from "arktype";

export const ExampleSchema = type({
    id: "number.integer >= 1",
    name: "string",
    description: "string",
})