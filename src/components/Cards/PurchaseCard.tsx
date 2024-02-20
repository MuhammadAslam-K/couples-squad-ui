
interface CardDetails {
    imageUrl: string,
    location: string,
    date: string,
    description: string,
    price: string
}

function PurchaseCard(props: { details: CardDetails[] }) {
    const { details } = props;

    return (
        <>
            {details.map((item, index) => (
                <div key={index} className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={item.imageUrl} alt="Event" className="w-full object-cover h-48" /></figure>
                    <div className="card-body bg-white">
                        <div className="flex justify-between">
                            <h2 className="card-title">{item.location}</h2>
                            <span>{item.date}</span>
                        </div>
                        <p className="text-black font-zilla">{item.description}</p>
                        <div className="card-actions justify-between text-black font-zilla">
                            <h1 className="font-semibold text-xl">${item.price}</h1>
                            <button className="btn btn-outline text-black">Book Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PurchaseCard;
