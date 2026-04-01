import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-xl space-y-5 rounded-2xl border bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex justify-center gap-3">
          <Button nativeButton={false} render={<Link href="/" />}>
            Go home
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/sandbox" />}>
            Open sandbox
          </Button>
        </div>
      </div>
    </main>
  );
}
