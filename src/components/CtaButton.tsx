// Call to action button

export const CtaButton = () => {
  return (
    <div className="flex justify-center lg:justify-between items-center">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdQTOjOiPgFbajD8vm9JU4vi-ez7uq4FmfIBiYRqkg67gfI6Q/viewform?usp=sf_link"
        target="_blank"
        rel="noopener"
        id="cta-button"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
              disabled:opacity-50 bg-blueside text-white shadow hover:bg-blueside/90 px-4 py-3 group relative
              w-36 overflow-hidden text-base font-normal transform-gpu ring-offset-current
              transition-all duration-300 ease-out hover:ring-2 hover:ring-blueside hover:ring-offset-2"
      >
        <span
          className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white
              opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96"
        ></span>
        <p>Contact Us</p>
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
