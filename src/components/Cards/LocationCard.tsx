
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
            {   // Mapping over the details array to render each element as a card
                details.map((item, index) => (
                    <div key={index} className="shadow-md flex flex-col md:flex-row">
                        {/* Image Container */}
                        <figure>
                            <img src={item.imageUrl} className="w-24 h-24 md:w-[104px] md:h-[104px] object-cover" alt={item.location} />
                        </figure>
                        {/* Event details (location,number of events, types of events) */}
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
