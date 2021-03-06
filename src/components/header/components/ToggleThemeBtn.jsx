import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function ToggleThemeBtn({ changeTheme }) {
  return (
    <button
      className="
      flex justify-between
      focus:outline-none
      bg-gray-300 dark:bg-black
      border-black border rounded-full dark:border-white
      w-16 p-1
      text-xl font-bold
      relative
      transition
      "
      onClick={changeTheme}
    >
      <BsCircleFill
        className="
        absolute
        transition
        dark:translate-x-8
        text-gray-500
        border-2 border-black
        rounded-full
        "
      />
      <IoMoon className="text-white" />
      <IoSunny className="text-black" />
    </button>
  );
}
