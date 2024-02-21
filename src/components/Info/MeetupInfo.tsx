export default function MeetupInfo() {
    return (
        <div className="flex flex-col md:flex-row items-start justify-between w-full p-4 text-black">
            <div className="md:flex-1 space-y-5">
                <div>
                    <div className="flex gap-20">
                        <p>Posted on December 31, 2021 Business</p>
                        <div className="mt-3 m-2 bg-black w-7/12 h-[1px]"></div>
                    </div>
                    <h1 className="font-zilla text-2xl my-8">New Jersey-based writer and college <br /> student Brianna Stryker wanted to <br /> meet friends in her hometown</h1>
                </div>

                <div>
                    <div className="flex gap-20">
                        <p>Posted on December 31, 2021 Business</p>
                        <div className="mt-3 m-2 bg-black w-4/12 h-[1px]"></div>
                    </div>
                    <h1 className="font-zilla my-8">Great host and Great college student Brianna Stryker <br /> wanted to meet friends in her hometown</h1>
                </div>

                <div>
                    <div className="flex gap-20">
                        <p>Posted on December 31, 2021 Business</p>
                        <div className="mt-3 m-2 bg-black w-4/12 h-[1px]"></div>
                    </div>
                    <h1 className="font-zilla my-8">Winning Dressing Tips And Strategies For couples</h1>
                </div>
            </div>

            <div className="md:mt-0 mt-8">
                <div className="w-72 h-80 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
                    <img src="/img/meetup-info-img2.png" alt="Slanting" className="object-cover w-full h-auto" style={{ transform: 'rotate(-20deg)' }} />
                </div>
            </div>

        </div>

    )
}