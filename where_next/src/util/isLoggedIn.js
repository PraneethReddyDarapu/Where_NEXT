const IsLoggedIn = () => {
  let token = localStorage.getItem("token");
  if (token && token.length > 10) {
    return true;
  } else {
    localStorage.removeItem("token");
    return false;
  }
};

export default IsLoggedIn;
