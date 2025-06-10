import { Schema, model } from "mongoose";
import { IEditoriales } from "../types/editorialesTypes";

const editSchema = new Schema<IEditoriales>({
  name: { type: String, required: true, trim: true },
  intCode: { type: Number, required: true }
});

const Editorial = model<IEditoriales>("Editorial", editSchema)

export { Editorial }