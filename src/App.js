import { Fragment, useState } from 'react';
import { SearchPage } from './components/SearchPage';
import { SearchResults } from './components/SearchResults';
import { fetchRecipies } from './api/fetchRecipies';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

const App = () => {
  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] = useState([]);

  const search = async () => {
    const res = await fetchRecipies(ingredient);
    setMeals(res.data.meals);
    console.log(res.data);
  }

  return (
    <Fragment>
      <div className="container">

        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit">
              {/* < /> */}
            </IconButton>
            <Typography variant="h6">
              Food Recipe App
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="meal-wrapper">
          <SearchPage ingredient={ingredient} handleChange={e => setIngredient(e.target.value)} search={search} />

          {meals ? <SearchResults meals={meals} /> :
            <h4>Sorry, dear! No recipes found for your requested ingredient!</h4>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;