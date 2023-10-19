import React from "react";
import { Layout, Steps } from "antd";

const { Header, Content } = Layout;
const { Step } = Steps;

const BookingProcess = () => {
  return (
    <section className="0">
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-3xl font-bold text-center">
          4 EASY STEPS FOR BOOKING YOUR NEXT DESTINATION
        </h2>
        <div className="divide-y divide-gray-700">
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M256 0C114.611 0 0 114.612 0 256s114.611 256 256 256 256-114.612 256-256S397.389 0 256 0zm0 480c-123.514 0-224-100.486-224-224 0-74.525 43.864-141.327 112.421-172.687 7.823-3.633 17.358.315 21.084 8.138 3.735 7.82-.315 17.364-8.138 21.083-59.029 27.521-95.368 68.868-95.368 118.466 0 92.582 94.228 168 210.422 168 92.438 0 168-75.562 168-168 0-49.598-36.339-90.945-95.368-118.466-7.822-3.719-11.873-13.263-8.138-21.083 3.725-7.822 13.26-11.771 21.084-8.138C370.136 133.673 414 200.475 414 275.001c0 123.514-100.486 224-224 224z" />
                <path d="M312 152h-80c-8.837 0-16 7.163-16 16s7.163 16 16 16h80c8.837 0 16-7.163 16-16s-7.163-16-16-16zM264 224c-8.837 0-16 7.163-16 16v144c0 8.837 7.163 16 16 16s16-7.163 16-16V240c0-8.837-7.163-16-16-16z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase dark:text-violet-400">
                Step 1 - Login
              </span>
              <span className="text-xl font-bold md:text-2xl uppercase">
                Please Register yourself and logged in to explore our services
              </span>
              <span className="mt-4 dark:text-gray-300">
                We recommend signing in or signing up to access Travel BD.com
                through our website, Android, or iOS app. Get started for a
                seamless and convenient experience as you plan your journey with
                us.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M500 232h-48v-40h-72v40h-40v72h40v40h72v-40h48zm-208 232H40a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h252l88 88V500a24 24 0 0 1-24 24zm-72 0h-72v-72H176v72H104V344h40v-40h72v40h40z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase dark:text-violet-400">
                Step 2 - Select Your Starting and EndPoints
              </span>
              <span className="uppercase text-xl font-bold md:text-2xl">
                We Provided Both AC and NON AC bus service
              </span>
              <span className="mt-4 dark:text-gray-300">
                Experience our versatile bus services, offering both comfortable
                AC and cost-effective non-AC options for your journey.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 464c-119.104 0-216-96.896-216-216 0-119.104 96.896-216 216-216 119.104 0 216 96.896 216 216 0 119.104-96.896 216-216 216zm-21.736-228.712l-83.12-48c-7.392-4.264-16.664-1.288-20.92 6.104-4.264 7.392-1.288 16.664 6.104 20.92l67.68 39.04V368c0 8.824 7.176 16 16 16s16-7.176 16-16V184c0-8.824-7.176-16-16-16zm71.472 194.048H160c-8.824 0-16 7.176-16 16s7.176 16 16 16h144c8.824 0 16-7.176 16-16s-7.176-16-16-16z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase dark:text-violet-400">
                Step 3 - Find your desireable date and sits
              </span>
              <span className="text-xl font-bold md:text-2xl uppercase">
                Make Sure Select Date/Time and choose your Sits
              </span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300">
                Select your date, time, and seats with ease
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M436.84 103.16a12 12 0 0 0-16.97 0l-33.34 33.34-36.74-36.74a12 12 0 0 0-16.97 0L58.57 338.84a12 12 0 0 0 0 16.97l18.69 18.69a12 12 0 0 0 16.97 0L267 198.13l36.73 36.74a12 12 0 0 0 16.97 0l37.06-37.06 33.34-33.34a12 12 0 0 0 0-16.97z" />
                <path d="M338.84 75.16L320.15 56.47a12 12 0 0 0-16.97 0L268.02 75.16l36.73 36.74 18.69-18.69a12 12 0 0 0 0-16.97z" />
                <path d="M341.05 169.08L198.13 12.16a12 12 0 0 0-16.97 0L75.16 171.87a12 12 0 0 0 0 16.97l131.79 131.79z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase dark:text-violet-400">
                Step 4 - Payments
              </span>
              <span className="text-xl font-bold md:text-2xl uppercase">
                Make Sure You complete your booking
              </span>
              <span className="mt-4 dark:bg-gray-800 dark:text-gray-300">
                After booking your sits, make sure you booked your sits with
                complete payments!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
