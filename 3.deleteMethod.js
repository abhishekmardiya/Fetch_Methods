//*****************************************.then method************************************************************ */
fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
});

//*****************************************async await method************************************************************ */
let deleteData = async () => {
  await fetch("https://reqres.in/api/users/2", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
deleteData();
