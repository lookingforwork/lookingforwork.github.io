import Image from "next/image"

export const Footer = () => {
  return (
      <footer>
        <div className="container flex flex-row flex-wrap justify-center items-center p-8 mx-auto
        text-sm text-gray-600 text-center">
          <p>
            Copyright © {new Date().getFullYear()}. Made with ♥ by Opterum LTD.&nbsp; 
          </p>
          <div className="flex gap-x-1">
            Follow us on
            <a href="https://www.linkedin.com/company/guardnote/?viewAsMember=true" target="_blank" rel="noopener">
              <span className="sr-only">Linkedin</span>
              <Image
                  src="/img/linkedin-grey.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-5"
                />
            </a>
          </div>
        </div>
      </footer>
  )
}