import {fetchData} from './fetch';

const addUsers = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').ariaValueMax.trim();
  const password = document.querySelector('#password').ariaValueMax.trim();
  const email = document.querySelector('#email').ariaValueMax.trim();

  const bodyData = {
    username: 'Uusi käyttäjä',
    password: 'salasana',
    email: 'newuser@example.com'
  }
  // url 
  const url = 'http://localhost:3000/api/users';
  //const users = await fetchData(url);

 //optiot
  const options = {
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  };
  console.log(options);

  const response = await fetchData(url, options);
  
  if (response.error){
    console.log('Tapahtui virhe fetch haussa!!');
    return
  }

console.log(users);
};


  
export {getUsers, addUsers};