
// interface LocationCardDetails {
//     imageUrl: string,
//     location: string,
//     events: number,
//     typeOne: string,
//     typeTwo: string,
// }

// function LocationCard(props: { details: LocationCardDetails[] }) {

//     const { details } = props

//     return (
//         <div className="card card-side  shadow-xl">
//             <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-[104px] h-[104px]" alt="Movie" /></figure>
//             <div className="m-3 bg-white">
//                 <h2 className="card-title text-gray-600">Istanbul, Turkey</h2>
//                 <div className="text-black">
//                     <span>20 Events</span>
//                     <span> . Hotels</span>
//                     <span> . Resort</span>
//                 </div>
//             </div>
//         </div>)
// }

// export default LocationCard

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
                <div key={index} className="card card-side shadow-xl flex-row">
                    <figure><img src={item.imageUrl} className="w-[104px] h-[104px] object-cover" alt={item.location} /></figure>
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
