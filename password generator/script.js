function passwordGenerator(num) {
  let password = "";

  const availableNum =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

  if (num < 8) {
    return "your password is too short";
  } else {
    for (let i = 0; i < num; i++) {
      password =
        password +
        availableNum
          .charAt(Math.floor(Math.random() * (availableNum.length - 1)))
          .toString();
    }
  }

  if (password.match(/^([^0-9]*|[^A-Z]*|[^a-z]*|[^a-zA-Z0-9]*)$/)) {
    passwordGenerator(num);
  }
  return password;
}

console.log(passwordGenerator(8));
