import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                D
            </div>
            <h1 className="text-3xl font-bold tracking-tight">DSR Portal</h1>
            <p className="max-w-sm text-center text-muted-foreground">
                Employee tracking and daily reporting system.
            </p>
            <div className="flex gap-3">
                <Link
                    href="/auth/login"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
                >
                    Login
                </Link>
                <Link
                    href="/auth/forgot-password"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-input bg-background px-2.5 text-sm font-medium hover:bg-muted"
                >
                    Forgot password
                </Link>
            </div>
        </div>
    );
}
