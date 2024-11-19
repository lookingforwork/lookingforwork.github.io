"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback: (isIntersecting: boolean) => void) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                callback(entry.isIntersecting);
            },
            { threshold: 1.0 } // Video will play when 80% visible
        );

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [callback]);

    return elementRef;
};

export const Onboarding = () => {
    const VideoPlayer = ({ src }: { src: string }) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        const containerRef = useIntersectionObserver((isIntersecting) => {
            if (videoRef.current) {
                if (isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            }
        });

        return (
            <div ref={containerRef} className="relative w-fit">
                <div className="absolute inset-0 rounded-xl" />
                <video
                    ref={videoRef}
                    src={src}
                    className="rounded-lg shadow-lg"
                    muted
                    loop
                    playsInline
                />
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark font-medium mb-6">
                    Getting Started with BlueSide
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-blueside-dark/80">
                    Follow these simple steps to start using BlueSide in Microsoft Word
                </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-16">
                {/* Step 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blueside text-white rounded-full flex items-center justify-center font-medium">
                                    1
                                </div>
                                <h2 className="text-xl text-blueside-dark font-medium">Create an Account</h2>
                            </div>
                            <p className="text-blueside-dark/80 mb-4">
                                If you haven't already, sign up for a BlueSide account to get started. You'll need to verify your email address.
                            </p>
                            <Link
                                href="/signup"
                                className="inline-block bg-blueside text-white px-6 py-2 rounded-full hover:bg-blueside/90 transition-colors"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <VideoPlayer src="/vid/signup-preview.mp4" />
                    </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row-reverse items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blueside text-white rounded-full flex items-center justify-center font-medium">
                                    2
                                </div>
                                <h2 className="text-xl text-blueside-dark font-medium">Download the Add-in</h2>
                            </div>
                            <p className="text-blueside-dark/80 mb-4">
                                Install BlueSide directly from inside Microsoft Word. Click the add-in button in the top right of the screen then search for BlueSide.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <VideoPlayer src="/vid/store-preview.mp4" />
                    </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blueside text-white rounded-full flex items-center justify-center font-medium">
                                    3
                                </div>
                                <h2 className="text-xl text-blueside-dark font-medium">Start Using BlueSide</h2>
                            </div>
                            <p className="text-blueside-dark/80 mb-4">
                                Sign in to BlueSide in the side panel, and click analyze to start generating summaries of the tracked changes in the document.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <VideoPlayer src="/vid/login-preview.mp4" />
                    </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col md:flex-row-reverse items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blueside text-white rounded-full flex items-center justify-center font-medium">
                                    4
                                </div>
                                <h2 className="text-xl text-blueside-dark font-medium">Check Change Significance</h2>
                            </div>
                            <p className="text-blueside-dark/80 mb-4">
                                The traffic light indicators shows the impact of each change. Green for minor, yellow for moderate, and red for significant changes.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <VideoPlayer src="/vid/light-preview.mp4" />
                    </div>
                </motion.div>

                {/* Step 5 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-blueside text-white rounded-full flex items-center justify-center font-medium">
                                    5
                                </div>
                                <h2 className="text-xl text-blueside-dark font-medium">Sort and Filter Changes</h2>
                            </div>
                            <p className="text-blueside-dark/80 mb-4">
                                Use the top bar to sort and filter changes by their significance.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <VideoPlayer src="/vid/filter-preview_1.mp4" />
                    </div>
                </motion.div>
            </div>

            {/* Help Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-16 text-center"
            >
                <p className="text-blueside-dark/80 mb-4">
                    Need help getting started? Contact our support team:
                </p>
                <a
                    href="mailto:jake@blueside.app"
                    className="text-blueside hover:underline"
                >
                    jake@blueside.app
                </a>
            </motion.div>
        </div>
    );
}; 