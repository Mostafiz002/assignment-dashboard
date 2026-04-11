"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const { error } = await signUp(email, password);

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created successfully!");
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="email" placeholder="Email" required />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            <Button className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Sign Up"}
            </Button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
