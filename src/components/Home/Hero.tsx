"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./SplideArrow.css";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <header className="bg-background">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 relative">
          <Splide
            options={{
              perMove: 1,
              arrows: false,
              pagination: true,
              perPage: 1,
              direction: "ttb",
              paginationDirection: "ttb",
              wheel: true,
              height: 200,
              gap: 20,
              releaseWheel: true,
            }}
          >
            {[1, 2, 3, 4].map((e) => (
              <SplideSlide key={e}>
                <div className="max-w-2xl lg:mx-12 lg:order-2 max-lg:pr-8">
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                    Welcome to Nexify
                  </h1>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                    Transform your digital experience with a diverse collection
                    of premium products curated just for you. Explore, discover,
                    and support talented creators from around the world.
                  </p>
                  <div className="mt-6">
                    <Button>Start with Nexify!</Button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://img.freepik.com/free-photo/laptop-with-credit-card-payment-online-shopping-bag-ecommerce-concept-blue-background-3d-illustration_56104-1788.jpg?w=826&t=st=1701697501~exp=1701698101~hmac=052dcc308de76b6c644dbe2f3c7dced7ecdbcd2dd13c58913f4d433435a8d948"
            alt="online marketplace"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
