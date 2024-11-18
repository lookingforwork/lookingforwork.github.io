"use client";

import { motion } from "framer-motion";

export const FeatureParser = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center px-0 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
            <div className="rounded-2xl w-full max-w-[400px] lg:min-w-[400px] h-[300px] overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Animated Document Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bg-white rounded-lg shadow-xl p-4 w-64 h-80"
                    >
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-2/3 bg-white rounded animate-pulse"></div>
                            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-full bg-white rounded animate-pulse"></div>
                            <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                        </div>

                        {/* Floating Context Bubbles */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute -right-4 top-8"
                        >
                            <div className="absolute inset-0 bg-blue-100/50 rounded-full animate-pulse p-3"></div>
                            <div className="bg-blue-100 rounded-full p-2 shadow-lg relative">
                                <div className="w-8 h-8 bg-blueside rounded-full flex items-center justify-center text-white text-xs">
                                    1.4
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="absolute -left-4 top-24"
                        >
                            <div className="absolute inset-0 bg-green-100/50 rounded-full animate-pulse p-3"></div>
                            <div className="bg-green-100 rounded-full p-2 shadow-lg relative">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                                    2b
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.9, duration: 0.3 }}
                            className="absolute -right-4 bottom-24"
                        >
                            <div className="absolute inset-0 bg-yellow-100/50 rounded-full animate-pulse p-3"></div>
                            <div className="bg-yellow-100 rounded-full p-2 shadow-lg relative">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                                    3i
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col mx-0 sm:mx-12 py-12 pl-0 lg:pl-24 lg:mx-0 lg:py-8 lg:w-1/2 xl:w-3/5 lg:shrink-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
                    Complete Document Understanding
                </div>
                <div className="sm:text-base lg:text-lg font-subtitle text-blueside-dark">
                    BlueSide reads and understands your entire document. This means we can spot how changes in one section might affect others, just like an experienced lawyer would.
                </div>
            </div>
        </div>
    );
}; 