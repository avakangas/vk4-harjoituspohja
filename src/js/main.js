import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items.js';
import { getUsers, addUser } from './users.js';
import { getData } from './testdata';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

getData();
  //Haetaan GET all items nappi ja tehdään rajapinta
  const getItemsButton = document.querySelector('.get_items');
  getItemsButton.addEventListener('click', getItems);
  //getItems();

  const getUsersButton = document.querySelector('.get_users');
  getUsersButton.addEventListener('click', getUsers);

  const addUserForm = document.querySelector('.formpost');
  addUserForm.addEventListener('click', addUser);

