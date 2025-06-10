
import { Editorial } from "../models/editorialesModels"
import { Request, Response } from "express"

const addEditorial = async (req:Request, res: Response):Promise<any> => { 
  try {
    const { name, intCode } = req.body
    console.log(req.body)
    if (!name || !intCode) { 
      return res.status(400).json({
        success: false,
        message: "Name and Int Code are required"
      });
    };
    const newEditorial = await new Editorial({
      name, 
      intCode
    }).save()
    
    return res.status(201).json({
      success: true, 
      message: "Editorial successfully created",
      data: newEditorial
    })
    
    
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Unknown Error"
    return res.status(500).json({
      success: false,
      message: "Failed to create editorial",
      error: errMessage
    })

  }
}

const getEditoriales = async (req: Request, res: Response): Promise<any> => {
  try {
    const allEditoriales = await Editorial.find()
    return res.status(200).json({
      success: true,
      message: allEditoriales.length > 0 ? "Editoriales registradas:" : "Editoriales not found",
      data: allEditoriales
    })
    
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Unknown Error"
    return res.status(500).json({
      success: false,
      message: "Failed to create editorial",
      error: errMessage
    })
    
  }
 }

const deleteEditorial = async (req: Request, res: Response): Promise<any> => {
  try {
  const { id } = req.params
    const delEdit = await Editorial.findByIdAndDelete(id)
    console.log(delEdit)
    return res.status(200).json({
      success: true,
      message: "Editorial successfully deleted", 
      data: delEdit
    })
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Unknown Error"
    return res.status(500).json({
      success: false,
      message: "Failed to create editorial",
      error: errMessage
    });
  
}
  
}

const updateEditorial = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const { name, intCode } = req.body
    const updaEd = await Editorial.findByIdAndUpdate(id, { name, intCode }, { new: true })
    console.log(updaEd)
    return res.status(201).json({
      success: true,
      message: "Ed successfully udated",
      data:updaEd
    })
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Unknown Error"
    return res.status(500).json({
      success: false,
      message: "Failed to create editorial",
      error: errMessage
    });
    
  }
 }

export {addEditorial, getEditoriales, deleteEditorial , updateEditorial }