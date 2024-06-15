// Menggunakan async/await
const fetchUserNames = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    const names = users.map((user) => user.name);
    console.log(names);
  } catch (error) {
    console.error("Error fetching user names:", error);
  }
};

fetchUserNames();

// Menggunakan then/catch

const fetchUsersNames = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      const names = users.map((user) => user.name);
      console.log(names);
    })
    .catch((error) => {
      console.error("Error fetching user names:", error);
    });
};

fetchUsersNames();
