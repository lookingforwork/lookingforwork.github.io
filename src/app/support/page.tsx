import SupportFaq from "@/components/support/SupportFaq";

export default function SupportPage() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">
      <div className="flex flex-col shrink text-blueside-dark p-6">
        <h2 className="text-3xl font-bold mb-6 mt-8">Support</h2>
        <p className="max-w-[535px] text-blueside-dark text-sm font-light">
          Please share your thoughts, questions, and ideas. We are here to help.
          Email use at{" "}
          <a
            href="mailto:jake@blueside.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            jake@blueside.app
          </a>
        </p>
      </div>
      <SupportFaq />
    </main>
  );
}
