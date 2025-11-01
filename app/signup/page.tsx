"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { SignupFormData, signupSchema } from "./signupSchema";
import { registerUser } from "@/apiServices/auth";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("Account created successfully! Please log in.");
      reset();
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to create account. Please try again.";
      toast.error(message);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md md:mt-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Create an account</h1>
          <p className="text-muted-foreground">
            Let's get started. Fill in the details below to create your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <Input
              {...register("username")}
              placeholder="Full Name"
              className="w-full"
              disabled={mutation.isPending}
            />
            {errors.username && (
              <p className="text-destructive text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full"
              disabled={mutation.isPending}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full"
              disabled={mutation.isPending}
            />
            {errors.password && (
              <p className="text-destructive text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <p className="text-muted-foreground text-sm mt-1">
              Minimum 8 characters.
            </p>
          </div>

          {/* Submit Button with Loading */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-10 font-semibold"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        {/* Sign in Link */}
        <div className="text-center mt-4">
          <span className="text-muted-foreground">
            Already have an account?{" "}
          </span>
          <Link
            href="/login"
            className="underline font-semibold hover:no-underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
