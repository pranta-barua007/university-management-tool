let usersDatabase = [
  //users table
  {
    email: "rakib@gmail.com",
    password: "rakib123",
  },
  {
    email: "mary@gmail.com",
    password: "mary123",
  },
];

//data access layer (introduce specific functionality to access model or table)

function insertUser(email, password) {
  // insert in users table
  const data = {
    email,
    password,
  };
  console.log(
    `INSERT INTO usersDatabase(email, password) VALUES (${email},${password})`
  );
  usersDatabase.push(data);

  return usersDatabase;
}

function findUserByEmail(email) {
  // find in users table
  console.log(`SELECT FROM usersDatabase WHERE email = ${email}`);
  return usersDatabase.find((user) => user.email === email);
}

export { insertUser, findUserByEmail };
