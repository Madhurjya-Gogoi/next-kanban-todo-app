import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-500 py-2">
      <div className="w-[82%] mx-auto flex gap-1 items-center">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <p className="text-xl">Todo App</p>
      </div>
    </div>
  );
};

export default Navbar;
