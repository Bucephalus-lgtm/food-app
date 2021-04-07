import { Fragment } from "react"

export const SearchResults = ({ meals }) => {
    return (
        <Fragment>
            <div className="meal-result">
                <h2 className="title">Your Search Results:</h2>
                <div id="meal">
                    {
                        meals.map(meal => (
                            <Fragment>
                                <div className="meal-item">
                                    <div className="meal-img">
                                        <img src={meal.strMealThumb} alt="food" />
                                    </div>
                                    <div className="meal-name">
                                        <h3>{meal.strMeal}</h3>
                                        <a href="#" className="recipe-btn">Get Recipe</a>
                                    </div>
                                </div>
                            </Fragment>
                        )
                        )
                    }
                </div>
            </div>


            <div className="meal-details">
                <button type="button" className="btn recipe-close-btn" id="recipe-close-btn">
                    <i className="fas fa-times"></i>
                </button>

            </div>
        </Fragment>
    )
}