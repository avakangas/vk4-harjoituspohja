//async function getData() {
    const getData = async () => {
        try {
          //tehdään pyyntö HTTP GET
          const response = await fetch('https://api.chucknorris.io/jokes/random');
          const data = await response.json();
          console.log('Vitsi!');
          console.log(data);
        } catch (error) {
          console.error('Virhe:', error);
        }
      };
      
      getData();

    export {getData}