"use client";

import { motion } from "framer-motion";

export const FeatureEmail = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-0 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
      <div className="flex flex-col mx-0 sm:mx-12 py-12 pr-0 lg:pr-24 lg:mx-0 lg:py-8 lg:w-1/2 xl:w-3/5 lg:shrink-0">
        <div className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
          Client Updates Made Easy
        </div>
        <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
          Generate professional emails that match your communication style,
          summarizing contract changes for your clients with perfect clarity and
          consistency.
        </div>
      </div>

      <div className="rounded-2xl w-full max-w-[400px] lg:min-w-[400px] h-[300px] sm:h-[350px] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Email Template */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute bg-white rounded-lg shadow-xl p-4 sm:p-6 w-64 sm:w-72"
          >
            {/* Email Header */}
            <div className="space-y-2 mb-4">
              <motion.div
                className="h-2.5 w-24 bg-gray-200 rounded"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="h-2.5 w-32 bg-gray-200 rounded"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
            </div>

            {/* Email Body */}
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%", "100%"] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className="h-2 bg-gray-100 rounded"
                />
              ))}
            </div>

            {/* Floating Change Highlights */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, y: [0, -5, 0] }}
              transition={{
                scale: { delay: 0.6, duration: 0.3 },
                y: { duration: 2, repeat: Infinity },
              }}
              className="absolute -right-3 top-12"
            >
              <div className="bg-green-100 rounded-lg p-2 shadow-lg">
                <div className="text-xs text-green-500">Clause 1.2</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, y: [0, -5, 0] }}
              transition={{
                scale: { delay: 0.8, duration: 0.3 },
                y: { duration: 2, repeat: Infinity, delay: 0.5 },
              }}
              className="absolute -left-3 top-24"
            >
              <div className="bg-yellow-100 rounded-lg p-2 shadow-lg">
                <div className="text-xs text-yellow-500">Clause 2.3</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Writing Cursor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-50, 0, 0, 50],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute h-2 w-0.5 bg-blueside rounded top-[138px] left-[120px]"
          />
        </div>
      </div>
    </div>
  );
};
