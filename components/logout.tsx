"use client";
import { logout } from "./action";

const Logout = () => {
  return (
    <div onClick={() => logout()}>
      <div className="bg-red-600 font-malikfont text-white text-sm px-4 py-2 rounded-45 cursor-pointer">
        LOG OUT
      </div>
    </div>
  );
};

export default Logout;
