import React, { Suspense } from 'react'

// Components With lazy loading
const ActivityCard = React.lazy(() => import("../components/Cards/ActivityCard"));
const CategoryCard = React.lazy(() => import("../components/Cards/CategoryCard"));
const LocationCard = React.lazy(() => import("../components/Cards/LocationCard"));
const PurchaseCard = React.lazy(() => import("../components/Cards/PurchaseCard"));
const ActivitiesCarousel = React.lazy(() => import("../components/Carousel/ActivitiesCarousel"));
const ImageCarousel = React.lazy(() => import("../components/Carousel/ImageCarousel"));

import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import MeetupInfo from '../components/Info/MeetupInfo';
import Footer from '../components/Footer/Footer';
import { Loader } from '../components/ui/Loader';


// ICONS
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CiMusicNote1 } from "react-icons/ci"
import { HiOutlineFire } from "react-icons/hi"
import { BiLike } from "react-icons/bi"
import { PiTagChevron } from "react-icons/pi"
import { MdOutlineLocationOn } from "react-icons/md"

//  DEMO DATA
import { activitiesCardDetails, activitiesDetails, categoryDetails, featuredDetails, mainImages, musicDetails, popularCitiesForMeetupsDetails, upcomingEvents } from "../data/demoData"

function HomePage() {

    return (
        <>
            <div className="bg-white flex justify-center">
                <div className="w-10/12 bg-white">
                    {/* Navbar Component */}
                    <Navbar />

                    {/* Intro section */}
                    <section className="text-center my-10 mb-14 text-black font-zilla">
                        <h1 className="font-medium text-4xl my-5">The people platform—Where <br /> interests become friendships</h1>
                        <p>Whatever your interest, from hiking and reading to networking and skill sharing, <br /> there are thousands of people who share it on Meetup. Events are happening <br /> every day sign up to join the fun.</p>
                    </section>

                    {/* Search Section */}
                    <div className="my-10">
                        <Search />   {/* Search Component */}
                    </div>

                    {/* Main Image Slider */}
                    <div className="my-5 mt-20">
                        <Suspense fallback={<Loader />}>
                            <ImageCarousel images={mainImages} />    {/* Image Carousel Component */}
                        </Suspense>
                    </div>

                    <section className="text-center my-20 mb-14 text-black font-zilla">
                        <h1 className="font-medium text-4xl my-5">The people platform—Where <br /> interests become friendships</h1>
                    </section>

                    {/* Category Section */}
                    <div className="my-4">
                        <div className="flex justify-end my-4 space-x-2">
                            <button className="p-2 rounded border border-gray-400 hover:bg-gray-100 flex items-center justify-center">
                                <FaArrowLeft />   {/* Left Arrow from react-icons */}
                            </button>
                            <button className="p-2 rounded bg-black text-white hover:bg-gray-800 flex items-center justify-center">
                                <FaArrowRight />    {/* Right Arrow from react-icons */}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <Suspense fallback={<Loader />}>
                                <CategoryCard details={categoryDetails} bgColour={"bg-black"} />    {/* Category Card Component */}
                            </Suspense>
                        </div>
                    </div>

                    {/* Music Section */}
                    <div className="flex flex-col mt-40">
                        <div className="flex items-center justify-between w-full">
                            <CiMusicNote1 className="text-pink-600 text-4xl" />     {/* Music Icon from react-icons */}
                            <p className="font-semibold text-3xl text-black font-zilla">Music</p>
                            <div className="flex-grow border-t-[2px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />        {/* Arrow Icon from react-icons */}
                            </div>
                        </div>
                        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <Suspense fallback={<Loader />}>
                                <PurchaseCard details={musicDetails} />     {/* Purchase Card Component */}
                            </Suspense>
                        </div>
                    </div>

                    {/* Activities Section */}
                    <div className="flex flex-col mt-36">
                        <div className="flex items-center justify-between w-full">
                            <HiOutlineFire className="text-pink-500 text-4xl" />        {/* Fire Icon from react-icons */}
                            <p className="font-semibold text-3xl text-black font-zilla">Activities</p>
                            <div className="flex-grow border-t-[2px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />        {/* Arrow Icon from react-icons */}
                            </div>
                        </div>

                        <div className="my-6">
                            <Suspense fallback={<Loader />}>
                                <ActivitiesCarousel details={activitiesDetails} />      {/* Image Carousel Component */}
                            </Suspense>
                            <div className="my-10 mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                <Suspense fallback={<Loader />}>
                                    <ActivityCard details={activitiesCardDetails} />     {/* Activity Card Component */}
                                </Suspense>
                            </div>
                        </div>
                    </div>

                    {/* Features Sections */}
                    <div className="flex flex-col mt-24">
                        <div className="flex items-center justify-between w-full">
                            <BiLike className="text-pink-500 text-4xl" />       {/* Thumbs up Icon from react-icons */}
                            <p className="font-semibold text-3xl text-black font-zilla">Features</p>
                            <div className="flex-grow border-t-[2px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />     {/* Arrow Icon from react-icons */}
                            </div>
                        </div>
                        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <Suspense fallback={<Loader />}>
                                <PurchaseCard details={featuredDetails} />      {/* Purchase Card Component */}
                            </Suspense>
                        </div>
                    </div>

                    {/* Upcoming Events Sections */}
                    <div className="flex flex-col my-24">
                        <div className="flex items-center justify-between w-full">
                            <PiTagChevron className="text-pink-500 text-4xl" />         {/* PiTagChevron  Icon from react-icons */}
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-black font-zilla">Upcoming Events</p>
                            <div className="flex-grow border-t-[2px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />        {/* Arrow Icon from react-icons */}
                            </div>
                        </div>

                        <div className="my-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            <Suspense fallback={<Loader />}>
                                <CategoryCard details={upcomingEvents} bgColour={"bg-red-500"} />      {/* Category Card Component */}
                            </Suspense>
                        </div>
                    </div>

                    {/* Popular cities Meetup Section */}
                    <div className="flex flex-col my-24">
                        <div className="flex items-center justify-between w-full">
                            <MdOutlineLocationOn className="text-pink-500 text-4xl" />
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-black font-zilla">Popular cities on Meetup</p>
                            <div className="flex-grow border-t-[2px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />        {/* Arrow Icon from react-icons */}
                            </div>
                        </div>
                        <div className="my-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Suspense fallback={<Loader />}>
                                <LocationCard details={popularCitiesForMeetupsDetails} />       {/* Location Card Component */}
                            </Suspense>
                        </div>

                    </div>

                    {/* MeetUp Info Section */}
                    <div className="flex flex-col my-24">
                        <div className="flex items-center justify-between w-full">
                            <p className="font-semibold text-3xl text-black font-zilla">How Meetup  <span className="bg-black text-white px-2">works</span></p>
                            <div className="flex-grow border-t-[1px] border-gray-200 mx-4"></div>
                            <div className="flex items-center text-black hover:underline cursor-pointer">
                                <p>See more</p>
                                <FaLongArrowAltRight className="ml-2" />        {/* Arrow Icon from react-icons */}
                            </div>
                        </div>
                        <div className="my-10">
                            <MeetupInfo />      {/* Meetup Info Component */}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-black flex justify-center">
                <Footer />      {/* Footer Component */}
            </div>
        </>
    )
}

export default HomePage