"use client";

export const SecurityButton = () => {
    const scrollToDemo = () => {
        const demoSection = document.getElementById("security");
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-center lg:justify-between items-center">
            <button
                onClick={scrollToDemo}
                id="demo-button"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
            disabled:opacity-50 bg-transparent text-blueside-dark shadow px-4 py-4 group relative
            w-32 gap-2 overflow-hidden text-lg font-medium transform-gpu ring-offset-current
            transition-all duration-300 ease-out ring-blueside-dark ring-1 hover:ring-blueside-dark hover:bg-blueside-navy/10"
            >
                <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-blueside-navy
            opacity-5 transition-all duration-1000 ease-out group-hover:-translate-x-96"
                ></span>
                <p>Privacy</p>
                <svg className="w-4 h-4 text-blueside-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                </svg>
            </button>
        </div>
    );
}; 