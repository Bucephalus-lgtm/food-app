export const SearchPage = ({ handleChange, ingredient, search }) => {
    return (
        <div>
            <div className="meal-search">
                <h2 className="title">Seek for your meals by your favorite ingredient...</h2>
                <p>“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”
<br />
                    <cite>― J.R.R. Tolkien</cite>
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

// recipe-pwapp