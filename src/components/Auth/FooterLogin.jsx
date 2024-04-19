import React from "react";

const FooterLogin = () => {
  return (
    <footer className="w-full px-3 text-white bg-black py-7 md:px-12 lg:px-16 opacity-40">
      <p className="pl-3 text-sm md:text-base lg:text-lg">
        Questions? Call 000-802-319-9164
      </p>
      <ul className="flex flex-wrap">
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          FAQ
        </li>
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          Help Centre
        </li>
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          Terms of Use
        </li>
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          Privacy
        </li>
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          Cookie Preferences
        </li>
        <li className="w-full pt-2 pb-1 pl-3 underline sm:w-1/2 md:w-1/3 lg:w-auto md:min-w-1/3 lg:min-w-72">
          Corporate Information
        </li>
      </ul>
    </footer>
  );
};

export default FooterLogin;
