"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword && password !== "");
  }, [password, confirmPassword]);

  useEffect(() => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    setIsPasswordValid(hasSpecialChar && isLongEnough);
  }, [password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!isPasswordValid) {
      setMessage("Password must be at least 8 characters long and include one special character");
      setLoading(false);
      return;
    }

    if (!passwordsMatch) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setMessage("Password updated successfully. Redirecting...");

      // Sign out the user
      await supabase.auth.signOut();

      // Redirect to login page after successful password reset
      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      setMessage("Error updating password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[400px] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Set New Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                disabled={loading}
              />
              <label
                htmlFor="password"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                New Password
              </label>
            </div>
            {password && !isPasswordValid && (
              <p className="mt-2 max-w-[280px] text-xs text-red-500">
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
                disabled={loading}
              />
              <label
                htmlFor="confirm-password"
                className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-4 peer-focus:text-blueside-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Confirm Password
              </label>
            </div>
            {confirmPassword && !passwordsMatch && (
              <p className="mt-2 max-w-[300px] text-xs text-red-500">
                Passwords do not match
              </p>
            )}
          </div>

          {message && (
            <div
              className={`px-2 sm:px-3 py-2 sm:py-3 rounded-full text-xs break-words text-center ${message.includes("Error")
                ? "bg-red-100 border border-red-400 text-red-600"
                : "bg-green-100 border border-green-400 text-green-600"
                }`}
              role="alert"
            >
              <span className="block sm:inline">{message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !passwordsMatch || !isPasswordValid}
            className="bg-blueside text-xs rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
