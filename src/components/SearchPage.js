export const SearchPage = ({ handleChange, ingredient, search }) => {
    return (
        <div>
            <div className="meal-search">
                <h2 className="title">Find Meals For Your Ingredients</h2>
                <p>Real food doesn't have ingredients, real food is ingredients.<br />
                    <cite>- Jamie Oliver</cite>
                </p>

                <div className="meal-search-box">
                    <input
                        type="text"
                        className="search-control"
                        placeholder="Enter an ingredient"
                        id="search-input"
                        value={ingredient}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="search-btn btn"
                        id="search-btn"
                        onClick={search}
                        >
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
