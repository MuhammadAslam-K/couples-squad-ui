
interface ActivitiesDetails {
    imageUrl: string,
    description: string,
    accountName: string,
    views: string,
    uploadedAt: string,
    avatarImgUrl: string
}

function ActivitiesCarousel(props: { details: ActivitiesDetails[] }) {

    const { details } = props
    return (
        <div>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item overflow-hidden">
                    {
                        details.map((item, index) => (
                            <div key={index} className="relative mr-10 ml-10 last:mr-0 overflow-hidden">
                                <div className="absolute z-10 p-4 text-white bg-opacity-50 w-full">
                                    <p className="text-2xl font-zilla m-3 mt-6">How to become Smart <br /> and gentle in relationships <br /> online - Thomas Hope</p>

                                    <div className="mt-28 m-3 flex items-center">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded-full ring ring-offset-2">
                                                <img src={item.avatarImgUrl} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div className="m-2 flex flex-col justify-center">
                                            <h5 className="text-lg font-semibold">{item.accountName}</h5>
                                            <h5 className="text-sm">{item.views} views <span>. {item.uploadedAt}</span></h5>
                                        </div>
                                    </div>

                                </div>

                                <img className="h-96 w-full" src={item.imageUrl} alt={`Carousel item ${index + 1}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivitiesCarousel