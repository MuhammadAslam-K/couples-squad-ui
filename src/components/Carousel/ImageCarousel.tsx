
function ImageCarousel(props: { images: string[] }) {

    const { images } = props
    return (
        <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
                {   // Mapping through each image in the images array
                    images.map((item, index) => (
                        <div key={index} className="carousel-item mr-10 last:mr-0">
                            <img className="h-72 w-full" src={item} alt={`Carousel item ${index + 1}`} />
                        </div>))
                }
            </div>
        </div>
    )
}

export default ImageCarousel