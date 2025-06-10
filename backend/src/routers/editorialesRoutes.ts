import { Router } from "express";
import { addEditorial, deleteEditorial, getEditoriales, updateEditorial } from "../controllers/editorialesControllers";

const editRouter = Router()

editRouter.get("/", getEditoriales)
editRouter.post("/", addEditorial)
editRouter.delete("/:id", deleteEditorial)
editRouter.patch("/:id", updateEditorial)

export { editRouter }