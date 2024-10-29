// Call to action button

export const CtaButton = () => {
  return (
    <div className="flex justify-center lg:justify-between items-center">
      <a
        href="https://cal.com/blueside/30min"
        target="_blank"
        rel="noopener"
        id="cta-button"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
            disabled:opacity-50 bg-blueside text-white shadow hover:bg-blueside/90 px-8 py-4 group relative
            w-60 gap-2 overflow-hidden text-lg font-medium transform-gpu ring-offset-current
            transition-all duration-300 ease-out hover:ring-2 hover:ring-blueside hover:ring-offset-2"
      >
        <span
          className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white
            opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96"
        ></span>
        <p>Book a demo</p>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

// old simpler version
{
  /* <div className="flex justify-center lg:justify-between items-center">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdQTOjOiPgFbajD8vm9JU4vi-ez7uq4FmfIBiYRqkg67gfI6Q/viewform?usp=sf_link"
        target="_blank"
        rel="noopener"
        className="px-8 py-4 text-lg font-semibold text-center text-white bg-indigo-600 rounded-md
        hover:bg-indigo-700">
        Join the Waitlist
      </a>
    </div> */
}
