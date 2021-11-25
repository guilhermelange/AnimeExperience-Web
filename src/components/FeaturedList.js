const FeaturedList = ({ items }) => {

    return (
        <div className="featured-options">
            <h1>Mais assistidos</h1>
            {items.results.slice(0, 4).map((item) => (
                <div>
                    <div className="option" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(/assets/${item.image_file})`
                    }}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedList;