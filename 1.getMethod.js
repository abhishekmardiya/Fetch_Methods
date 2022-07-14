//*****************************************.then method************************************************************ */

//normal function
fetch("https://reqres.in/api/users?page=2")
  .then(function (res) {
    res.json().then(function (data) {
      console.log(data.data);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

//arrow function
fetch("https://reqres.in/api/users?page=2")
  .then((res) => res.json().then((data) => console.log(data.data)))
  .catch((err) => console.log(err));

//*****************************************async-await method************************************************************ */

//normal function
async function getData() {
  try {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
}
getData();

//arrow function
let getData = async () => {
  try {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};
getData();
