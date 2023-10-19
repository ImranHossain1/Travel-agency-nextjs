"use client";
import React from "react";
import { Layout } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header, Content } = Layout;
const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[80vh] relative">
      <Image
        height={1000}
        width={1000}
        src="/assets/bus-1.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-semibold uppercase">
          Bus TICKETS
        </h1>
        <p className="text-1xl md:text-2xl italic text-white  mt-5">
          Find your next destination
        </p>
        <Link
          href="/available-journies"
          className="btn bg-blue-700 hover:bg-blue-600 text-white mt-6 text-lg px-8 ms:px-10"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
