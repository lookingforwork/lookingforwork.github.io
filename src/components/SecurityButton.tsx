"use client";

export const SecurityButton = () => {
    const scrollToDemo = () => {
        const demoSection = document.getElementById("security");
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToDemo}
            id="demo-button"
            className="bg-transparent ease-in-out transition-[background-color,color,padding,border-radius] duration-300 flex text-blueside-dark rounded-lg text-sm text-center leading-normal hover:bg-blueside-navy  hover:outline-none hover:text-white laptop:text-sm mt-5 mb-4 py-2 px-4"
        >
            Data Security
        </button>
    );
}; 