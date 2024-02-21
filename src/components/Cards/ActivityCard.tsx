
interface ActivityCard {
    cardImgUrl: string,
    title: string,
    description: string,
    avatarImgUrl: string,
}

function ActivityCard(props: { details: ActivityCard[] }) {

    const { details } = props

    return (
        <>
            {
                details.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl w-full h-auto">
                        <figure className="h-40 w-full overflow-hidden">
                            <img src={item.cardImgUrl} className="w-full h-full object-cover" />
                        </figure>
                        <div className="avatar absolute z-10 bg-opacity-50 mt-36 ms-40">
                            <div className="w-10 h-10 rounded-full ring ring-offset-2 ring-transparent">
                                <img src={item.avatarImgUrl} alt="Avatar" />
                            </div>
                        </div>
                        <div className={`p-4 text-white bg-black font-zilla`}>
                            <p>{item.title}</p>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ActivityCard