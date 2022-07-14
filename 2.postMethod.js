//*****************************************.then method************************************************************ */

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "morpheus",
    job: "leader",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//*****************************************async-await method************************************************************ */

let postData = async () => {
  try {
    let res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
postData();
