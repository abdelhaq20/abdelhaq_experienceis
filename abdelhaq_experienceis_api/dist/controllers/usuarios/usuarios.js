"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../db/db"));
const router = express_1.default.Router();
/************************************ MUY IMPORTANTE ***************************
 *
 * Estimado revisor del código,
 *
 * He desarrollado el backend conectado a la base de datos MySQL para habilitar funcionalidades adicionales.
 * En la prueba se requería implementar un método POST, y he utilizado todos los métodos (POST, GET, PUT, DELETE).
 * Además, he incluido un endpoint GET que no está relacionado con la base de datos por si no deseas conectarlo.
 *
 * Ten en cuenta cambiar el usuario y la contrseña en el archivo db.ts
 *
 * Agradezco tu revisión y espero tener la oportunidad de colaborar en el futuro.
 *
 * ¡Gracias y espero que nos conozcamos algún día (^-^)!
 */
// GET
router.get("/", (req, res) => {
    const query = "SELECT * FROM usuarios";
    db_1.default.query(query, (error, results) => {
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
    db_1.default.query(query, values, (error, results) => {
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
    db_1.default.query(query, values, (error) => {
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
    db_1.default.query(query, values, (error) => {
        if (error) {
            console.error("Error:", error);
            res.status(500).send("Error al eliminar el usuario");
            return;
        }
        res.json({ message: "Usuario eliminado correctamente", userId });
    });
});
exports.default = router;
