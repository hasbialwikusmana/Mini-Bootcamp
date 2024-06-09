let username = "Hasbi Alwi Kusmana";

const auth = {
  checkUsername: function (data) {
    if (data === username) {
      return true;
    } else {
      return false;
    }
  },
  login: function (data) {
    let username = this.checkUsername(data);
    if (username) {
      return "login success, welcome " + data;
    } else {
      return "login failed, username not found";
    }
  },

  register: function (data) {
    let username = this.checkUsername(data);
    if (!username) {
      return "register success, please login";
    } else {
      return "register failed, username already exist";
    }
  },
};

console.log(auth.login("Hasbi Alwi Kusmana"));
console.log(auth.register("Hasbi Alwi Kusmana"));
