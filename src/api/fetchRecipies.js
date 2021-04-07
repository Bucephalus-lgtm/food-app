import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export const fetchRecipies = async ingredient => {
    const response = axios.get(URL, {
        params: {
            i: ingredient
        }
    });

    return response;
}