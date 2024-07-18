import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="h-[120px] bg-black">
        <div className="flex items-center justify-between gap-4 bg-black max-w-[1440px] px-[90px] py-[24px] mx-auto">
          <Image src="/logo.svg" alt="logo" width={100} height={68} />
          <label className="input input-bordered flex items-center gap-2 w-[651px] h-[57px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost text-white">Categories</button>
            <button className="btn btn-ghost text-white">
              <Image src="/en.svg" alt="en" width={20} height={20} />
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
