import Image from "next/image";

export const Security = () => {
  return (
    <div
      id="security"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-6 lg:py-14"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blueside-dark mb-6">
          Your Data, Your Control
        </h2>
        <p className="sm:text-base lg:text-lg font-subtitle text-blueside-dark max-w-3xl">
          BlueSide has been built with the security of your data as a top
          priority.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* No Training Card */}
        <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl text-blueside-dark font-medium">
                No Training
              </h3>
              <div className="relative mr-2">
                <div className="absolute top-1/2 -translate-y-2">
                  <span className="h-4 w-4 rounded-full bg-green-500/40 animate-ping absolute"></span>
                  <span className="h-4 w-4 rounded-full bg-green-500 absolute"></span>
                </div>
              </div>
            </div>
            <p className="text-blueside-dark/80 text-sm">
              Your data remains private. We never use your documents to train
              our models.
            </p>
          </div>
        </div>

        {/* Data Transparency Card */}
        <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl text-blueside-dark font-medium">
                Data Transparency
              </h3>
              <div className="relative mr-2">
                <div className="absolute top-1/2 -translate-y-2">
                  <span className="h-4 w-4 rounded-full bg-green-500/40 animate-ping absolute"></span>
                  <span className="h-4 w-4 rounded-full bg-green-500 absolute"></span>
                </div>
              </div>
            </div>
            <p className="text-blueside-dark/80 text-sm">
              We will always communicate with you about where your data is
              stored and processed.
            </p>
          </div>
        </div>

        {/* GDPR Compliance Card */}
        <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl text-blueside-dark font-medium">
                GDPR Ready
              </h3>
              <div className="relative mr-2">
                <div className="absolute top-1/2 -translate-y-2">
                  <span className="h-4 w-4 rounded-full bg-green-500/40 animate-ping absolute"></span>
                  <span className="h-4 w-4 rounded-full bg-green-500 absolute"></span>
                </div>
              </div>
            </div>
            <p className="text-blueside-dark/80 text-sm">
              Fully compliant with GDPR requirements for data protection and
              privacy.
            </p>
          </div>
        </div>

        {/* Data Redaction Card */}
        <div className="group relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl text-blueside-dark font-medium">
                Coming soon: PII Redaction
              </h3>
              <div className="relative mr-2">
                <div className="absolute top-1/2 -translate-y-2">
                  <span className="h-4 w-4 rounded-full bg-yellow-400/40 animate-ping absolute"></span>
                  <span className="h-4 w-4 rounded-full bg-yellow-400 absolute"></span>
                </div>
              </div>
            </div>
            <p className="text-blueside-dark/80 text-sm">
              Advanced features to automatically redact sensitive information
              before it is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
