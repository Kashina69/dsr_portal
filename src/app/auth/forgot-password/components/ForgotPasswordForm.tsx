"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { forgotPasswordSchema } from "../forgot-password.validation";

export function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const result = forgotPasswordSchema.safeParse({ email });
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                email: fieldErrors.email?.[0] ?? "",
            });
            return;
        }
        setErrors({});
    }

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                        D
                    </div>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className=" my-4 space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email}</p>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-3">
                        <Button type="submit" className="w-full">
                            Send reset link
                        </Button>
                        <Link
                            href="/auth/login"
                            className="text-sm text-primary underline-offset-4 hover:underline"
                        >
                            Back to login
                        </Link>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
