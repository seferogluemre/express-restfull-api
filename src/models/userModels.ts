import { pool } from "../db";

export const getAllUsers = async () => {
  const result = await pool.query("select * from students");
  console.log(result.rows);
  return result.rows;
};
getAllUsers();
// export const getUserById = async (id: number) => {
//   const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//   return result.rows[0];
// };

// export const createUser = async (name: string, email: string, age: number) => {
//   const result = await pool.query(
//     "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
//     [name, email, age]
//   );
//   return result.rows[0];
// };

// export const updateUser = async (
//   id: number,
//   name: string,
//   email: string,
//   age: number
// ) => {
//   const result = await pool.query(
//     "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
//     [name, email, age, id]
//   );
//   return result.rows[0];
// };

// export const deleteUser = async (id: number) => {
//   await pool.query("DELETE FROM users WHERE id = $1", [id]);
// };
