
interface CategoryDetail {
    imageUrl: string;
    type: string;
}

function CategoryCard(props: { details: CategoryDetail[], bgColour: string }) {
    const { details, bgColour } = props;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {details.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-xl w-full h-auto">
                    <figure className="h-56 w-full overflow-hidden">
                        <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover" />
                    </figure>
                    <div className={`p-4 bg-black text-center font-semibold text-white bg-${bgColour}`}>
                        <h2 className="">{item.type}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryCard;
