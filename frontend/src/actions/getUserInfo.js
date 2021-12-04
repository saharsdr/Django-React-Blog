function getUserInfo() {
  const userInfo = localStorage.getItem("user-info");
  const userLogin = userInfo ? JSON.parse(userInfo) : null;
  return userLogin;
}

export default getUserInfo;
