import Link from "next/link";

export default async function ConfirmEmailPage() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">
      <div className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Check your email</h1>

        <div className="mb-6 text-gray-600">
          We&apos;ve sent you a confirmation email. Please click the link in the
          email to verify your account.
        </div>

        <div className="text-sm text-gray-500">
          Didn&apos;t receive the email?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Try signing up again
          </Link>
        </div>
      </div>
    </main>
  );
}
