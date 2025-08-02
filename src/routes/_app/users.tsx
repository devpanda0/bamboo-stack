import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {orpc} from "@/orpc/client.ts";

export const Route = createFileRoute("/_app/users")({
  loader: async ({ context }) =>
    await context.queryClient.ensureQueryData(
      orpc.test.queryOptions({
        retry: true
      })
    ),
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(orpc.test.queryOptions());

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
            {data}
          </tbody>
        </table>
      </section>
    </article>
  );
}
