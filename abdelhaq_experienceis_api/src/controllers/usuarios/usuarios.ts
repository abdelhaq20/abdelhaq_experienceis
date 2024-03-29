import express, { Request, Response } from 'express';
import db from '../../db/db';
import { RowDataPacket } from 'mysql2';


const router = express.Router();


// GET
router.get("/", (req, res) => {
  const query = "SELECT * FROM usuarios";
  db.query(query,(error, results:any) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al obtener los usuarios");
      return;
    }
    res.json(results);
  });
});

// GET JSON
/********* 
router.get("/", (req, res) => {
  const results = [
    { id: 1, name: 'abdelhaq', surname1: 'achrourou', surname2: '', email: 'abdelhaqdillen@gmail.com' },
    { id: 2, name: 'admin2', surname1: 'admin2', surname2: 'admin2', email: 'admin2@yopmail.com' },
    { id: 3, name: 'admin3', surname1: 'admin3', surname2: 'admin3', email: 'admin3@yopmail.com' },
    { id: 4, name: 'user4', surname1: 'surname4_1', surname2: 'surname4', email: 'user4@yopmail.com' },
    { id: 5, name: 'user5', surname1: 'surname5_1', surname2: 'surname5', email: 'user5@yopmail.com' },
    { id: 6, name: 'user6', surname1: 'surname6_1', surname2: 'surname6', email: 'user6@yopmail.com' },
    { id: 7, name: 'user7', surname1: 'surname7_1', surname2: 'surname7', email: 'user7@yopmail.com' },
    { id: 8, name: 'user8', surname1: 'surname8_1', surname2: 'surname8', email: 'user8@yopmail.com' },
    { id: 9, name: 'user9', surname1: 'user9', surname2: '', email: 'user9@yopmail.com' },
    { id: 10, name: 'user10', surname1: 'user9', surname2: '', email: 'user9@yopmail.com' },
    { id: 11, name: 'user11', surname1: 'user9', surname2: '', email: 'user9@yopmail.com' },
    { id: 12, name: 'user12', surname1: 'user9', surname2: '', email: 'user9@yopmail.com' },
    { id: 13, name: 'user13', surname1: 'user9', surname2: '', email: 'user9@yopmail.com' }
  ];

  res.json(results);
});
*/


//POST
router.post("/", (req, res) => {
  const { name, surname1, surname2, email } = req.body;

  if (!name || !surname1 || !email) {
    return res.status(400).json({ error: "Nombre, apellido y correo electrónico son campos requeridos" });
  }
  const query = "INSERT INTO usuarios (name, surname1, surname2, email) VALUES (?, ?, ?, ?)";
  const values = [name, surname1, surname2, email];

  db.query(query, values, (error, results:any) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al agregar el usuario");
      return;
    }
    res.json({ message: "Usuario agregado correctamente", userId: results.insertId });
  });
});


//PUT
router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const { name, surname1, surname2, email } = req.body;

  if (!name || !surname1 || !email) {
    return res.status(400).json({ error: "Nombre, apellido y correo electrónico son campos requeridos" });
  }
  const query = "UPDATE usuarios SET name=?, surname1=?, surname2=?, email=? WHERE id=?";
  const values = [name, surname1, surname2, email, userId];

  db.query(query, values, (error) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al actualizar el usuario");
      return;
    }
    res.json({ message: "Usuario actualizado correctamente", userId });
  });
});


// DELETE
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  const query = "DELETE FROM usuarios WHERE id=?";
  const values = [userId];

  db.query(query, values, (error) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).send("Error al eliminar el usuario");
      return;
    }
    res.json({ message: "Usuario eliminado correctamente", userId });
  });
});


export default router;