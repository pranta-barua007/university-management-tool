import mongoose from "mongoose";
import mongoConstants from "../mongo-constants.js";

const departmentSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  code: {
    type: mongoose.SchemaTypes.String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default mongoose.model(mongoConstants.DEPARTMENT, departmentSchema);
