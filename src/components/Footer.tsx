import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div
        className="container flex flex-row flex-wrap justify-center items-center p-8 mx-auto
        text-xs text-gray-400 text-center"
      >
        <p>
          Copyright © {new Date().getFullYear()} OPTERUM LTD. All Rights Reserved.&nbsp;
        </p>
      </div>
    </footer>
  );
};
