import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface CourseDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  lessons: Array<any>;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, default: true },
    description: { type: String, default: true },
    lessons: { type: Array, default: true },
  },
  { timestamps: true }
);

const Course = mongoose.model<CourseDocument>("Course", CourseSchema);

export default Course;