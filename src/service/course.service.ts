import{
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions
} from "mongoose";

import Course, { CourseDocument } from "../model/course.model";

export function createCourse(input: DocumentDefinition<CourseDocument>){
    return Course.create(input);
}

export function findCourse(
    query: FilterQuery<CourseDocument>,
    options: QueryOptions = { lean: true }
) {
    return Course.findOne(query, {}, options);
}

export function findAllCourses(){
    return Course.find();
}

export function findAndUpdate(
    query: FilterQuery<CourseDocument>,
    update: UpdateQuery<CourseDocument>,
    options: QueryOptions
) {
    return Course.findOneAndUpdate(query, update, options);
}