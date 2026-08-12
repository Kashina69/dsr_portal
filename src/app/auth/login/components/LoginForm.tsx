"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getPasswordStrength, loginSchema } from "../login.validation";
import { PasswordStrengthIndicator } from "./PasswordStrength";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const strength = getPasswordStrength(password);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                email: fieldErrors.email?.[0] ?? "",
                password: fieldErrors.password?.[0] ?? "",
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
                    <CardContent className="my-4 space-y-4">
                        <div className="space-y-2">
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
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-invalid={!!errors.password}
                            />
                            {errors.password && (
                                <p className="text-sm text-destructive">{errors.password}</p>
                            )}
                        </div>
                        <PasswordStrengthIndicator strength={strength} />
                    </CardContent>
                    <CardFooter className="flex-col gap-3">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Link
                            href="/auth/forgot-password"
                            className="text-sm text-primary underline-offset-4 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
