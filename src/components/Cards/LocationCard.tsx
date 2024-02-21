
interface LocationCardDetails {
    imageUrl: string,
    location: string,
    events: number,
    typeOne: string,
    typeTwo: string,
}

function LocationCard(props: { details: LocationCardDetails[] }) {
    const { details } = props;

    return (
        <>
            {details.map((item, index) => (
                <div key={index} className="card shadow-xl flex flex-col md:flex-row">
                    <figure><img src={item.imageUrl} className="w-full md:w-[104px] h-auto md:h-[104px] object-cover" alt={item.location} /></figure>
                    <div className="m-3 bg-white">
                        <h2 className="card-title text-gray-600">{item.location}</h2>
                        <div className="text-black">
                            <span>{item.events} Events</span>
                            <span> . {item.typeOne}</span>
                            <span> . {item.typeTwo}</span>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}

export default LocationCard;
