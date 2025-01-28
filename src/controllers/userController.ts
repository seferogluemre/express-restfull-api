import { Request, Response } from "express";
import { getAllUsers } from "../models/userModels";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

// export const getUser = async (req: Request, res: Response) => {
//   const user = await getUserById(Number(req.params.id));
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// };

// export const addUser = async (req: Request, res: Response) => {
//   const { name, email, age } = req.body;
//   const newUser = await createUser(name, email, age);
//   res.status(201).json(newUser);
// };

// export const editUser = async (req: Request, res: Response) => {
//   const { name, email, age } = req.body;
//   const updatedUser = await updateUser(Number(req.params.id), name, email, age);
//   if (!updatedUser) return res.status(404).json({ message: "User not found" });
//   res.json(updatedUser);
// };

// export const removeUser = async (req: Request, res: Response) => {
//   await deleteUser(Number(req.params.id));
//   res.status(204).send();
// };
