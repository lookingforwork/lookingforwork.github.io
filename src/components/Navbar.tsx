import Image from "next/image"

export const Navbar = () => {
  return (
    <header className="bg-gray-50/75 border-b-2 border-gray-200/80 relative z-50">
      <div className="flex max-w-7xl mx-auto py-5 px-8 justify-center lg:justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <span>
            <Image
              src="/img/BlueSide-thicker.svg"
              alt="BlueSide"
              width="32"
              height="32"
              className="w-40"
            />
          </span>
        </div>
      </div>
    </header>
  )
}