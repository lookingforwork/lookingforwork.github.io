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
    <div className="max-w-2xl mx-auto w-full px-6 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-8">
          Account Settings
        </h1>

        <div className="mb-12">
          <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
            <h2 className="text-xl text-blueside-dark font-medium mb-4">
              Get Started with BlueSide
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Ready to enhance your contract review process? Click below to set up BlueSide in your Microsoft Word.
            </p>
            <button
              onClick={() => router.push("/onboarding")}
              className="w-full py-3 px-4 bg-blueside hover:bg-blueside-600 text-white rounded-lg transition-colors duration-300"
            >
              Set Up BlueSide
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl text-blueside-dark font-medium mb-6">
            Account Management
          </h2>

          {!showDeleteInfo ? (
            <button
              onClick={() => setShowDeleteInfo(true)}
              className="w-full py-3 px-4 bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors duration-300"
            >
              Delete Account
            </button>
          ) : (
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-blueside-dark mb-4">
                How to Delete Your Account
              </h3>
              <p className="text-gray-600 mb-4">
                To delete your account and all associated data, please email{" "}
                <a
                  href="mailto:joel@blueside.app"
                  className="text-blueside hover:underline"
                >
                  joel@blueside.app
                </a>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Please include your email address ({user.email}) in the request. We
                will process your deletion request within 30 days as required by
                GDPR.
              </p>
              <button
                onClick={() => setShowDeleteInfo(false)}
                className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300 text-blueside-dark"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
