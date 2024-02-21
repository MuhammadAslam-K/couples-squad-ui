
interface CategoryDetail {
    imageUrl: string;
    type: string;
}

function CategoryCard(props: { details: CategoryDetail[], bgColour: string }) {

    // Destructuring props to extract details and bgColour.
    const { details, bgColour } = props;

    return (
        <>
            {   // Mapping over the details array to render each category as a card
                details.map((item, index) => (
                    <div key={index} className="shadow-xl w-full h-auto">
                        {/* Image Container */}
                        <figure className="h-56 w-full overflow-hidden">
                            <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover" />
                        </figure>
                        {/* Type Details */}
                        <div className={`p-4 text-center font-semibold text-white ${bgColour}`}>
                            <h2>{item.type}</h2>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default CategoryCard;
