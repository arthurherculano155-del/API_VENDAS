import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  typeCast: function(field, next){
    if(field.type === "TINY" && field.length === 1){
      return (field.string() === "1")
    } else if(field.type.includes("DECIMAL")){
      return Number(field.type)
    } else{
      return next();
    }
  }
})

console.log('Conectou com MYSQL!');
export { con };