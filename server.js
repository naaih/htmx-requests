import express from "express";
// import xss from 'xss'

const app = express();

// MIDDLEWARE:
// set static folder
app.use(express.static("public"));
//parse url encoded stuff sent by html
app.use(express.urlencoded({ extended: true }));
// parse json stuff sent by the apui
app.use(express.json());

// Get requests to fetch users
app.get("/users", async (req, res) => {
  setTimeout(async () => {
      const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
          ${users.map((user) => `<li>${user.name}</li>`).join("")}
        </ul>
      `);
  }, 10);

  // const users = [
  //     {id: 1, name: 'naaih'},
  //     {id: 2, name: 'naaih'},
  //     {id: 3, name: 'naaih'},
  //     {id: 4, name: 'naaih'},
  //     {id: 5, name: 'naaih'},
  //     {id: 6, name: 'naaih'},
  //     {id: 7, name: 'naaih'},
  //     {id: 8, name: 'naaih'},
  // ];
});

// server started on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
