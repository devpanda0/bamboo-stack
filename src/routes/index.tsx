import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className={"bg-bp-500"}>
            <center>
                <h1 className="font-extrabold text-2xl">Welcome</h1>
            </center>
        </div>
    );
}
