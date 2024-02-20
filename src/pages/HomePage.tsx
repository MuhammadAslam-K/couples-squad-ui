import Navbar from "../components/Navbar/Navbar"
import Search from "../components/Search/Search"

function HomePage() {
    return (
        <div className="bg-white flex justify-center">
            <div className="w-10/12">
                <Navbar />   {/* Navbar component */}

                <div className="text-center my-10 mb-14 text-black font-zilla"> {/*  Intro Section */}
                    <h1 className="font-medium text-4xl my-5">The people platform—Where <br /> interests become friendships</h1>
                    <p>Whatever your interest, from hiking and reading to networking and skill sharing, <br /> there are thousands of people who share it on Meetup. Events are happening <br /> every day sign up to join the fun.</p>
                </div>

                <Search /> {/* Search input component */}
            </div>
        </div>

    )
}

export default HomePage