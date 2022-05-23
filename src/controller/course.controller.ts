import {Request, Response} from "express";
import { get } from "lodash";
import { createCourse, findCourse, findAndUpdate, findAllCourses } from "../service/course.service";

export async function createCourseHandler(req: Request, res: Response){
    const userId = get(req, "user._id");
    const body = req.body;

    const course = await createCourse({ ...body, user: userId });

    return res.send(course);

}

export async function updateCourseHandler(req: Request, res: Response){
    const userId = get(req, "user._id");
    const courseId = get(req, "params.courseId");
    const update = req.body;

    const course = await findCourse({ courseId });

    if(!course) return res.sendStatus(404);

    if(String(course.user) !== userId) return res.sendStatus(401);

    const updatedCourse = await findAndUpdate( { courseId }, update, { new: true });

    return res.send(updatedCourse);
    
}

export async function getCourseHandler(req: Request, res: Response){
    const courseId = get(req, "params.courseId");
    const course = await findCourse({ courseId });

    if(!course) return res.sendStatus(404);

    return res.send(course);    
}

export async function getAllCursesHandler(req: Request, res: Response){

    const allCourses = await findAllCourses();

    if(!allCourses) return res.sendStatus(404);

    return res.send(allCourses);

}