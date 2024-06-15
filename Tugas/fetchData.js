const fetchUserNames = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.error("Error fetching user names:", error);
  }
};

fetchUserNames();
