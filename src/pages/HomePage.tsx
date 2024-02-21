import ActivityCard from "../components/Cards/ActivityCard"
import CategoryCard from "../components/Cards/CategoryCard"
import LocationCard from "../components/Cards/LocationCard"
import PurchaseCard from "../components/Cards/PurchaseCard"
import ActivitiesCarousel from "../components/Carousel/ActivitiesCarousel"
import ImageCarousel from "../components/Carousel/ImageCarousel"
import Footer from "../components/Footer/Footer"
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
        { imageUrl: '/img/music/music-img1.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img2.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img3.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img4.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img5.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img6.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img7.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img8.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
    ]

    const featuredDetails = [
        { imageUrl: '/img/music/music-img1.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img2.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img3.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img4.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img5.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img6.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img7.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
        { imageUrl: '/img/music/music-img8.jpg', location: "Kochi", date: "Feb 12", description: "The Music with love: Online class Taken by robert smith.", price: "233.99" },
    ]

    const upcomingEvents = [
        { imageUrl: '/img/Upcoming-Events/img-1.png', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-2.png', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-3.jpg', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-4.jpg', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-5.jpg', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-6.jpg', type: "Class" },
        { imageUrl: '/img/Upcoming-Events/img-7.jpg', type: "Couple" },
        { imageUrl: '/img/Upcoming-Events/img-8.jpg', type: "Music" },
        { imageUrl: '/img/Upcoming-Events/img-9.png', type: "Matrimoni" },
        { imageUrl: '/img/Upcoming-Events/img-10.png', type: "Event" },
        { imageUrl: '/img/Upcoming-Events/img-11.jpg', type: "Speech" },
        { imageUrl: '/img/Upcoming-Events/img-12.jpg', type: "Class" },
    ]

    const popularCitiesForMeetupsDetails = [
        { imageUrl: '/img/Meetup/img-1.jpg', location: "Istanbul, Turkey", events: 20, typeOne: "Hotels", typeTwo: "Resorts" },
        { imageUrl: '/img/Meetup/img-2.jpg', location: "Sydney, Australia", events: 20, typeOne: "Hotels", typeTwo: "Class" },
        { imageUrl: '/img/Meetup/img-3.jpg', location: "Baku, Azerbaijan", events: 20, typeOne: "Hotels", typeTwo: "Class" },
        { imageUrl: '/img/Meetup/img-4.jpg', location: "Istanbul, Turkey", events: 20, typeOne: "Hall", typeTwo: "Resorts" },
        { imageUrl: '/img/Meetup/img-5.jpg', location: "Sydney, Australia", events: 20, typeOne: "School", typeTwo: "Dating" },
        { imageUrl: '/img/Meetup/img-6.jpg', location: "Baku, Azerbaijan", events: 20, typeOne: "Hotels", typeTwo: "Gettogether" },
        { imageUrl: '/img/Meetup/img-7.jpg', location: "Istanbul, Turkey", events: 20, typeOne: "Caffe", typeTwo: "Resorts" },
        { imageUrl: '/img/Meetup/img-8.jpg', location: "Sydney, Australia", events: 90, typeOne: "Iceland", typeTwo: "Dating" },
        { imageUrl: '/img/Meetup/img-9.jpg', location: "Baku, Azerbaijan", events: 2, typeOne: "Court", typeTwo: "Class" },
    ]

    const activitiesDetails = [
        { imageUrl: '/img/activites/main-img3.png', avatarImgUrl: "/img/activites/avatar-img1.png", description: "How to become Smart and gentle in relationships online-Thomas Hope", accountName: "Thomas Hope", views: "53k", uploadedAt: "Today" },
        { imageUrl: '/img/activites/main-img2.png', avatarImgUrl: "/img/activites/avatar-img2.png", description: "How to become Smart and gentle in relationships online-Thomas Hope", accountName: "Thomas Hope", views: "53k", uploadedAt: "2 week ago" },
    ]

    const activitiesCardDetails = [
        { cardImgUrl: '/img/activites/activites-card-img1.jpg', title: "Wijaya Abadi", description: 'Basic Equipment to play skateboard safely-online', avatarImgUrl: '/img/activites/activites-card-avatar-img1.jpg' },
        { cardImgUrl: '/img/activites/activites-card-img2.jpg', title: "Wijaya Abadi", description: 'Basic Equipment to play skateboard safely-online', avatarImgUrl: '/img/activites/activites-card-avatar-img1.jpg' },
        { cardImgUrl: '/img/activites/activites-card-img3.jpg', title: "Wijaya Abadi", description: 'Basic Equipment to play skateboard safely-online', avatarImgUrl: '/img/activites/activites-card-avatar-img1.jpg' },
        { cardImgUrl: '/img/activites/activites-card-img4.jpg', title: "Wijaya Abadi", description: 'Basic Equipment to play skateboard safely-online', avatarImgUrl: '/img/activites/activites-card-avatar-img1.jpg' },
        { cardImgUrl: '/img/activites/activites-card-img5.jpg', title: "Wijaya Abadi", description: 'Basic Equipment to play skateboard safely-online', avatarImgUrl: '/img/activites/activites-card-avatar-img1.jpg' }
    ]

    return (
        <>

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

                    <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <CategoryCard details={categoryDetails} bgColour={"black"} />
                    </div>

                    <div className="my-10 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <PurchaseCard details={musicDetails} />
                    </div>

                    <div className="my-5 mt-20">
                        <ActivitiesCarousel details={activitiesDetails} />
                        <div className="my-10 mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            <ActivityCard details={activitiesCardDetails} />
                        </div>
                    </div>

                    <div className="my-10 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <PurchaseCard details={featuredDetails} />
                    </div>

                    <div className="my-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                        <CategoryCard details={upcomingEvents} bgColour={"red-600"} />
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        <LocationCard details={popularCitiesForMeetupsDetails} />
                    </div>

                </div>
            </div>
            <div className="bg-black flex justify-center">
                <Footer />
            </div>
        </>
    )
}

export default HomePage