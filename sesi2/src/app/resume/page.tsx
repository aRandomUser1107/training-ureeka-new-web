"use client";

import Image from 'next/image'
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Experience", link: "/experience" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

 
export default function Page() {
  return (
    <>
    <Navbar>
        <NavBody>
            <NavItems items={navItems} />
        </NavBody>
    </Navbar>
    <div className="flex flex-col items-center p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="mt-12 text-4xl font-bold text-center">
          This is <span className="text-blue-500">The Resume</span>
        </h1>
      </div>
    <div className='flex justify-center items-center mt-12'>
        <Image
        src="/resume template.png"
        width={300}
        height={300}
        alt="image of a resume template"
        />
    </div>
    </>
    
  )
}