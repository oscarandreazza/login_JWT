const bcrypt = require("bcryptjs");
const password = "Meu password";
const jwt = require("jsonwebtoken");

const user = {
  id: "20",
  name: "João",
  username: "joao@gmail.com",
  password: "123457",
};

const secret = "segredinho";
const token = jwt.sign({ id: user.id, user: user.username }, secret, {
  expiresIn: 20,
});

console.log(token);

/* const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlciI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjE5MDY5OTM4fQ.KAESfZj8yXeH26EPr1SAz0loSyDEkFBXtDsELzmrQQY";

const validData = jwt.verify(token, secret); */

/* console.log(validData); */
//method para criptografar uma string. Transformando a mesma em hash.
// o HASH é uma promisse. O HASHSYnc é como se já tivessemos utilizando o await.

/* const salt = bcrypt.genSaltSync(14);
const cryptPassword = bcrypt.hashSync(password, salt); */

const dbPassSaved =
  "$2a$14$ODXUY.5UPBI400bJccUh..83/8n01ol9C5OZKy9.aeZnKhnD36ZUi";

bcrypt.compareSync(password, dbPassSaved);

console.log(bcrypt.compareSync(password, dbPassSaved));

//o salt é um número que é utilizado no algoritmo de criptografia. Para garantir que uma mesma string, tenha o mesmo cript. E sim gerar um diferente.
//o def é sempre 10
