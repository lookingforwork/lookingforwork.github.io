"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactPopup = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [copyText, setCopyText] = useState("Copy");

    const copyEmail = () => {
        navigator.clipboard.writeText("jake@blueside.app");
        setCopyText("Copied!");
        setTimeout(() => setCopyText("Copy"), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50"
                    />

                    {/* Floating Box */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed right-4 top-20 w-[320px] bg-white rounded-xl shadow-2xl z-50"
                    >
                        <div className="p-5">
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div>
                                <h2 className="text-xl font-medium text-blueside-dark mb-2">Contact Us</h2>
                                <p className="text-sm text-gray-600 mb-4">Send us an email at:</p>

                                <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                                    <span className="text-blueside-dark flex-grow font-medium text-sm">
                                        jake@blueside.app
                                    </span>
                                    <button
                                        onClick={copyEmail}
                                        className={`${copyText === "Copied!"
                                                ? "bg-green-500"
                                                : "bg-blueside hover:bg-blueside-600"
                                            } text-white px-3 py-1.5 rounded-lg transition-colors duration-300 text-sm`}
                                    >
                                        {copyText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}; 