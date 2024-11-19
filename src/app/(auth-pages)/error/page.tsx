"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Error() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-start min-h-screen max-w-7xl mx-auto px-6 sm:px-8 bg-white pt-20">
      <div className="flex flex-col items-center gap-16">
        {/* Torn Paper Animation */}
        <div className="w-32 h-44 relative flex items-center justify-center">
          {/* Top Half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -15 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-0 w-full h-1/2 bg-white border border-gray-200 shadow-md"
            style={{
              clipPath: `polygon(
                0 0, 
                100% 0, 
                100% 95%, 
                90% 98%, 
                85% 95%,
                80% 99%, 
                75% 95%,
                70% 98%,
                65% 94%,
                60% 99%,
                55% 95%,
                50% 98%,
                45% 94%,
                40% 99%,
                35% 95%,
                30% 98%,
                25% 94%,
                20% 99%,
                15% 95%,
                10% 98%,
                5% 94%,
                0 98%
              )`
            }}
          >
            <div className="p-3 space-y-1.5">
              <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-1.5 bg-gray-200 rounded w-full"></div>
              <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
            </div>
          </motion.div>

          {/* Pulsing X */}
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute z-10"
            style={{
              fontSize: '2rem',
              color: '#ef4444',
              fontWeight: 'bold'
            }}
          >
            ✕
          </motion.div>

          {/* Bottom Half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 15 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute bottom-0 w-full h-1/2 bg-white border border-gray-200 shadow-md"
            style={{
              clipPath: `polygon(
                0 2%, 
                5% 6%,
                10% 2%,
                15% 5%,
                20% 1%,
                25% 6%,
                30% 2%,
                35% 5%,
                40% 1%,
                45% 6%,
                50% 2%,
                55% 5%,
                60% 1%,
                65% 6%,
                70% 2%,
                75% 5%,
                80% 1%,
                85% 5%,
                90% 2%,
                95% 6%,
                100% 2%,
                100% 100%,
                0 100%
              )`
            }}
          >
            <div className="p-3 pt-4 space-y-1.5">
              <div className="h-1.5 bg-gray-200 rounded w-full"></div>
              <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
              <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="max-w-xl text-center">
          <h1 className="text-4xl sm:text-5xl font-medium text-blueside-dark mb-6">
            Oops! Something went wrong
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-subtitle text-blueside-dark mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-blueside text-white px-8 py-4 rounded-xl hover:bg-blueside-600 transition-colors duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    </main>
  );
}
