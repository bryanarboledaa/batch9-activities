const fetch = require("node-fetch");
fetch("api//jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
