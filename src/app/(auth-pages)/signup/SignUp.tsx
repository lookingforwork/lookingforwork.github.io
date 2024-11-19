"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";

export default function SignUp() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [agreed, setAgreed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword && password !== "");
  }, [password, confirmPassword]);

  useEffect(() => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    setIsPasswordValid(hasSpecialChar && isLongEnough);
  }, [password]);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/callback`,
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("No user data returned");

      localStorage.setItem(
        "pendingEulaAcceptance",
        JSON.stringify({
          email,
          accepted_at: new Date().toISOString(),
        })
      );

      router.push("/confirm-email");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(
        errorMessage === "Database error saving new user"
          ? "A problem occurred please try again, if the problem persists contact joel@blueside.app"
          : errorMessage
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[400px] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4 sm:space-y-6">
          <div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block text-xs px-4 sm:px-6 py-2.5 sm:py-3 w-full text-gray-900 bg-transparent rounded-full border border-blueside-dark focus:outline-none focus:ring-0 focus:border-blueside-dark peer"
                placeholder=" "
                disabled={isLoading}
              />
              <label
                htmlFor="email"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Email
              </label>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block text-xs px-6 py-3 w-full text-gray-900 bg-transparent rounded-full border border-blueside-dark focus:outline-none focus:ring-0 focus:border-blueside-dark peer"
                placeholder=" "
                disabled={isLoading}
              />
              <label
                htmlFor="password"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Password
              </label>
            </div>
            {password && !isPasswordValid && (
              <p className="mt-2 text-xs text-red-500 break-words">
                Password must be at least 8 characters long and include one special character
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block text-xs px-6 py-3 w-full text-gray-900 bg-transparent rounded-full border border-blueside-dark focus:outline-none focus:ring-0 focus:border-blueside-dark peer"
                placeholder=" "
                disabled={isLoading}
              />
              <label
                htmlFor="confirm-password"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Confirm Password
              </label>
            </div>
            {confirmPassword && !passwordsMatch && (
              <p className="mt-2 text-xs text-red-500">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              id="eula-checkbox"
              className="rounded border-gray-300 text-blueside focus:ring-blueside"
            />
            <label htmlFor="eula-checkbox" className="text-blueside-dark text-xs">
              I accept the{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-600 px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-xs break-words"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!agreed || isLoading || !passwordsMatch || !isPasswordValid}
            className="bg-blueside text-xs rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
