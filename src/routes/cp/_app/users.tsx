import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cp/_app/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article className="space-y-4">
      <h1 className="font-extrabold text-2xl">Users</h1>
      <section className="-mx-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 align-middle whitespace-nowrap">
                Email
              </th>
              <th className="text-left px-4 py-2 align-middle whitespace-nowrap">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300 border-y border-slate-300 align-middle">
            sdsdfsdsdf
          </tbody>
        </table>
      </section>
    </article>
  );
}
