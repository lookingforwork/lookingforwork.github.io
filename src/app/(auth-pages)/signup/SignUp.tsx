"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";

export default function SignUp() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [agreed, setAgreed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      // Create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/callback`,
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("No user data returned");

      // Store EULA acceptance info in localStorage to be used after email confirmation
      localStorage.setItem(
        "pendingEulaAcceptance",
        JSON.stringify({
          email,
          accepted_at: new Date().toISOString(),
        })
      );

      // redirect to confirm email
      router.push("/confirm-email");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(
        errorMessage === "Database error saving new user"
          ? "A problem occured please try again, if the problem persists contact joel@blueside.app"
          : errorMessage
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <input
          name="email"
          title="email"
          type="email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          name="password"
          title="password"
          type="password"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          id="eula-checkbox"
        />
        <label htmlFor="eula-checkbox">I accept the EULA</label>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button
        disabled={!agreed}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
}
