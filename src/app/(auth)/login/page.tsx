"use client";

import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Welcome back!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="email" placeholder="Email" required />
            <Input name="password" type="password" placeholder="Password" required />

            <Button className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* 🔥 toggle link */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}