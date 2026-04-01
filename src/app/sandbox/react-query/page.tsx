import Link from "next/link";
import { LiveQueryCard } from "@/components/sandbox/live-query-card";
import { Button } from "@/components/ui/button";

export default function ReactQuerySandboxPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 px-6 py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              React Query sandbox
            </h1>
            <p className="text-muted-foreground">
              Test query loading, cache behavior, and manual refetching.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/sandbox" />}
            >
              All sandboxes
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/" />}
            >
              Back to landing
            </Button>
          </div>
        </div>

        <LiveQueryCard />
      </div>
    </main>
  );
}
