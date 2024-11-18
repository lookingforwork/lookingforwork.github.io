export const FeatureButton = () => {
    const scrollToFeature = () => {
        const featureSection = document.getElementById("features");
        if (featureSection) {
            featureSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToFeature}
            id="feature-button"
            className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal hover:bg-blueside-navy  hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4"
        >
            Features
        </button>
    );
}; 