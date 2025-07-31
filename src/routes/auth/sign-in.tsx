import {createFileRoute, useRouter} from "@tanstack/react-router";

import {Button} from "@/components/button";
import {Logo} from "@/components/logo";
import {signIn} from "@/lib/auth-client";

export const Route = createFileRoute("/auth/sign-in")({
    component: RouteComponent,
});

function RouteComponent() {
    const router = useRouter();

    return (
        <main className="flex-1 flex flex-col items-center justify-center gap-4">
            <header className="flex flex-col justify-center items-center gap-2">
                <Logo/>
                <h1 className="font-extrabold text-2xl">Bamboo Stack</h1>
            </header>
            <Button
                onClick={async () =>
                    await signIn.social({
                        provider: "discord",
                        fetchOptions: {
                            onSuccess: () => {
                                router.invalidate();
                            },
                        },
                    })
                }
                type="button"
            >
                Sign in
            </Button>
        </main>
    );
}
