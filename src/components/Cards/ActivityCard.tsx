
interface ActivityCard {
    cardImgUrl: string,
    title: string,
    description: string,
    avatarImgUrl: string,
}

export default function ActivityCard(props: { details: ActivityCard[] }) {

    const { details } = props

    return (
        <>
            {   // Mapping over the details array to render each element as a card
                details.map((item, index) => (
                    <div key={index} className="shadow-xl w-full h-auto">
                        {/* Image Container */}
                        <figure className="h-40 w-full overflow-hidden">
                            <img src={item.cardImgUrl} className="w-full h-full object-cover" />
                        </figure>
                        {/* Details about the Activities (title,description) */}
                        <div className="avatar absolute z-10 bg-opacity-50 -mt-3 ms-40">
                            <div className="w-10 h-10 rounded-full ring ring-offset-2 ring-transparent">
                                <img src={item.avatarImgUrl} alt="Avatar" />
                            </div>
                        </div>
                        <div className={`p-4 text-white bg-black font-zilla`}>
                            <p>{item.title}</p>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div >
                ))
            }
        </>
    )
}