import Image from "next/image"

export const Navbar = () => {
  return (
    <header>
      <div className="flex max-w-7xl mx-auto py-5 px-8 justify-center lg:justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <span>
            <Image
              src="/img/gaurdnote-logo-grey.svg"
              alt="N"
              width="32"
              height="32"
              className="w-8"
            />
          </span>
          <span>Guardnote</span>
        </div>
      </div>
    </header>
  )
}