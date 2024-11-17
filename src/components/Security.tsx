import Image from "next/image";

export const Security = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
                    Your Data, Your Control
                </h2>
                <p className="sm:text-base lg:text-lg font-subtitle text-blueside-dark max-w-3xl">
                    We never train on your data, maintain complete transparency about data storage,
                    and ensure GDPR compliance. Coming soon: advanced data redaction features for
                    enhanced privacy control.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
                {/* No Training Card */}
                <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl text-blueside-dark font-medium">No Training</h3>
                            <div className="relative">
                                <span className="h-4 w-4 rounded-full bg-green-500 animate-ping absolute inset-0"></span>
                                <span className="h-4 w-4 rounded-full bg-green-500 relative"></span>
                            </div>
                        </div>
                        <p className="text-blueside-dark/80 text-sm">
                            Your data remains private. We never use your documents to train our models.
                        </p>
                    </div>
                </div>

                {/* Data Transparency Card */}
                <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl text-blueside-dark font-medium">Data Transparency</h3>
                            <div className="relative">
                                <span className="h-4 w-4 rounded-full bg-green-500 animate-ping absolute opacity-75"></span>
                                <span className="h-4 w-4 rounded-full bg-green-500 relative"></span>
                            </div>
                        </div>
                        <p className="text-blueside-dark/80 text-sm">
                            Full visibility into where and how your data is stored and processed.
                        </p>
                    </div>
                </div>

                {/* GDPR Compliance Card */}
                <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl text-blueside-dark font-medium">GDPR Ready</h3>
                            <div className="relative">
                                <span className="h-4 w-4 rounded-full bg-green-500 animate-ping absolute opacity-75"></span>
                                <span className="h-4 w-4 rounded-full bg-green-500 relative"></span>
                            </div>
                        </div>
                        <p className="text-blueside-dark/80 text-sm">
                            Fully compliant with GDPR requirements for data protection and privacy.
                        </p>
                    </div>
                </div>

                {/* Data Redaction Card */}
                <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl text-blueside-dark font-medium">Data Redaction</h3>
                            <div className="relative">
                                <span className="h-4 w-4 rounded-full bg-yellow-400 animate-ping absolute opacity-75"></span>
                                <span className="h-4 w-4 rounded-full bg-yellow-500 relative"></span>
                            </div>
                        </div>
                        <p className="text-blueside-dark/80 text-sm">
                            Coming soon: Advanced features to control and redact sensitive information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};