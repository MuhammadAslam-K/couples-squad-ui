
function ImageCarousel(props: { images: string[] }) {

    const { images } = props
    return (
        <div>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    {
                        images.map((item, index) => (
                            <div key={index} className="carousel-item mr-10 ml-10 last:mr-0">
                                <img className="h-72 w-full" src={item} alt={`Carousel item ${index + 1}`} />
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel