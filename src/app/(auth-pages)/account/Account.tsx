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
    <div className="flex items-center justify-center pt-16 px-4 sm:px-0">
      <div className="w-full max-w-[450px] p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-blueside-dark mb-6 sm:mb-8 text-center">
          Account Settings
        </h1>

        <div className="space-y-6 sm:space-y-8">
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h2 className="text-xl text-blueside-dark font-medium mb-4">
              Get Started with BlueSide
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Ready to enhance your contract review process? Click below to get set up in Microsoft Word.
            </p>
            <button
              onClick={() => router.push("/onboarding")}
              className="bg-blueside text-sm rounded-full hover:bg-blueside/90 text-white flex justify-center py-2.5 sm:py-3 w-full shadow-lg"
            >
              Set Up BlueSide
            </button>
          </div>

          {!showDeleteInfo ? (
            <button
              onClick={() => setShowDeleteInfo(true)}
              className="bg-white text-sm rounded-full hover:bg-red-50 text-red-500 flex justify-center py-2.5 sm:py-3 w-full border border-red-500"
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
                className="bg-gray-100 text-sm rounded-full hover:bg-gray-200 text-blueside-dark flex justify-center py-2.5 sm:py-3 w-full"
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
