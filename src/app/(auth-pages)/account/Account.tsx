"use client";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Account() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [showDeleteInfo, setShowDeleteInfo] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/signin");
        return;
      }
      setUser(user);
    };

    getUser();
  }, [router, supabase]);

  if (!user) return null;

  return (
    <div>
      <p>Click here to get started now...</p>
      <button
        onClick={() => router.push("/onboarding")}
        className="w-full py-2 px-4 bg-green-300"
      >
        Get started now
      </button>
      <h1>Manage Account</h1>

      {!showDeleteInfo ? (
        <button
          onClick={() => setShowDeleteInfo(true)}
          className="w-full py-2 px-4 bg-red-500 text-white"
        >
          Delete account
        </button>
      ) : (
        <div className="mt-4 p-4 border border-red-200 bg-red-50 rounded-md">
          <h2 className="font-semibold mb-2">How to Delete Your Account</h2>
          <p>
            To delete your account and all associated data, please email{" "}
            <a
              href="mailto:joel@blueside.app"
              className="text-blue-600 underline"
            >
              joel@blueside.app
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Please include your email address ({user.email}) in the request. We
            will process your deletion request within 30 days as required by
            GDPR.
          </p>
          <button
            onClick={() => setShowDeleteInfo(false)}
            className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
