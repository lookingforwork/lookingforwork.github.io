"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const processingRef = useRef(false);

  useEffect(() => {
    const handleCallback = async () => {
      // Check if we're already processing
      if (processingRef.current) return;
      processingRef.current = true;

      try {
        const storedData = localStorage.getItem("pendingEulaAcceptance");
        if (!storedData) {
          throw new Error("EULA acceptance data not found");
          // TODO: check to push to /error
        }
        const pendingEulaData = JSON.parse(storedData);

        // Get the current user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError) throw userError;

        if (user) {
          // Store EULA acceptance
          const eulaAcceptance = {
            user_id: user.id,
            eula_version: "1.0",
            accepted_at: pendingEulaData.accepted_at,
            ip_address: await fetch("https://api.ipify.org?format=json")
              .then((r) => r.json())
              .then((data) => data.ip),
            user_agent: navigator.userAgent,
          };

          const { error: eulaError } = await supabase
            .from("eula_acceptances")
            .insert([eulaAcceptance]);

          if (eulaError) throw eulaError;

          // Clear the pending EULA data
          localStorage.removeItem("pendingEulaAcceptance");

          // Successful verification - redirect to account page
          router.push("/account");
        }
      } catch (error) {
        console.error("Error recording EULA acceptance:", error);
        router.push("/error");
      } finally {
        processingRef.current = false;
      }
    };

    handleCallback();
  }, [router, supabase]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Confirming your email...</p>
    </div>
  );
}
