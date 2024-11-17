"use client";
import { useState } from "react";

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light"
                >
                    ×
                </button>
                <h2 className="text-2xl font-medium text-blueside-dark mb-4">Contact Us</h2>
                <p className="text-sm text-gray-600 mb-4">Send us an email at:</p>
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
                    <span className="text-blueside-dark flex-grow font-medium">jake@blueside.app</span>
                    <button
                        onClick={copyEmail}
                        className={`${copyText === "Copied!"
                            ? "bg-green-500"
                            : "bg-blueside hover:bg-blueside-600"
                            } text-white px-4 py-2 rounded-lg transition-colors duration-300`}
                    >
                        {copyText}
                    </button>
                </div>
            </div>
        </div>
    );
}; 