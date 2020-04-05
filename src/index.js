import dishes from './menu.json';
import postFoodItemTemplate from './templates/post-food-item.hbs';
import './styles.css';
import './theme';

const refs = {
  postDish: document.querySelector('.js-menu'),
};

makePostDishes(dishes);
function makePostDishes(dishes) {
  const markup = dishes.map(dish => postFoodItemTemplate(dish)).join('');
  refs.postDish.insertAdjacentHTML('beforeend', markup);
}
