"use client";
import { useSearchParams } from "next/navigation";

interface ChangeData {
  rating: number;
  reasoning: string;
}

export default function ExportPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  let parsedData: ChangeData[] = [];
  try {
    if (data) {
      const decodedData = decodeURIComponent(atob(data));
      parsedData = JSON.parse(decodedData);
    }
  } catch (error) {
    console.error("Error parsing data:", error);
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 80) return "bg-red-500";
    if (rating >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  const downloadCSV = () => {
    const csvContent = [
      ["Change #", "Risk Level", "Analysis"],
      ...parsedData.map((change, index) => [
        `Change ${index + 1}`,
        change.rating >= 80 ? "High" : change.rating >= 50 ? "Medium" : "Low",
        change.reasoning.replace(/\n/g, " "),
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "change_analysis.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex flex-col items-center mb-24 mt-24">
          <h1 className="text-3xl font-bold text-blueside-dark mb-12">
            Change Analysis Report
          </h1>
          <button
            onClick={downloadCSV}
            className="bg-blueside hover:bg-blueside/90 text-white px-8 py-4 rounded-lg flex items-center gap-3 shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CSV
          </button>
        </div>

        {parsedData.map((change, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 space-y-3 transform transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-blueside-dark">
                Change {index + 1}
              </h2>
              <div
                className={`w-4 h-4 rounded-full ${getRatingColor(
                  change.rating
                )}`}
              />
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 whitespace-pre-wrap">
                {change.reasoning}
              </p>
            </div>
          </div>
        ))}

        {parsedData.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No change data available
          </div>
        )}
      </div>
    </main>
  );
}
