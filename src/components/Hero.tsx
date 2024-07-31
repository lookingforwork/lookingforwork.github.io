import { Container } from "@/components/Container";
import { Video } from "./Video";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-24">
          <h1 className="text-4xl font-bold leading-snug tracking-tight 
          text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Effortlessly Compare Legal Documents
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            The all-in-one legal document compare tool,
            so you never miss an untracked change again!
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQTOjOiPgFbajD8vm9JU4vi-ez7uq4FmfIBiYRqkg67gfI6Q/viewform?usp=sf_link"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Video videoId="Sx28sQc2wDw" />
      </div>
    </Container>
  );
}