import CategoryCard from "../components/Cards/CategoryCard"
import PurchaseCard from "../components/Cards/PurchaseCard"
import ImageCarousel from "../components/Carousel/ImageCarousel"
import Navbar from "../components/Navbar/Navbar"
import Search from "../components/Search/Search"

function HomePage() {

    const mainImages = [
        '/img/hero-section-img1.jpg',
        '/img/hero-section-img2.jpg',
        '/img/hero-section-img3.jpg'
    ]

    const categoryDetails = [
        { imageUrl: '/img/categorys/categorys-img1.jpg', type: "Single" },
        { imageUrl: '/img/categorys/categorys-img2.jpg', type: "Couples" },
        { imageUrl: '/img/categorys/categorys-img3.jpg', type: "Activities" },
        { imageUrl: '/img/categorys/categorys-img4.jpg', type: "Experience" },
        { imageUrl: '/img/categorys/categorys-img5.jpg', type: "Offline" },
        { imageUrl: '/img/categorys/categorys-img6.jpg', type: "Marriage" },
        { imageUrl: '/img/categorys/categorys-img7.jpg', type: "Online" },
        { imageUrl: '/img/categorys/categorys-img8.jpg', type: "Personal" }
    ]

    const musicDetails = [
        { imageUrl: '../../public/img/music/music-img1.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img2.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img3.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img4.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img5.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img6.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img7.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '../../public/img/music/music-img8.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
    ]

    return (
        <div className="bg-white flex justify-center">
            <div className="w-10/12">
                <Navbar />   {/* Navbar component */}

                <section className="text-center my-10 mb-14 text-black font-zilla"> {/*  Intro Section */}
                    <h1 className="font-medium text-4xl my-5">The people platform—Where <br /> interests become friendships</h1>
                    <p>Whatever your interest, from hiking and reading to networking and skill sharing, <br /> there are thousands of people who share it on Meetup. Events are happening <br /> every day sign up to join the fun.</p>
                </section>

                <div className="my-10">
                    <Search /> {/* Search input component */}
                </div>

                <div className="my-5 mt-20">
                    <ImageCarousel images={mainImages} />  {/* ImageCarousel Component */}
                </div>

                <section className="text-center my-20 mb-14 text-black font-zilla">
                    <h1 className="font-medium text-4xl my-5">The people platform—Where <br /> interests become friendships</h1>
                </section>

                <div className="my-20">
                    <CategoryCard details={categoryDetails} bgColour={"black"} />
                </div>

                <div className="my-10 mt-20">
                    <PurchaseCard details={musicDetails} />
                </div>

            </div>
        </div>

    )
}

export default HomePage