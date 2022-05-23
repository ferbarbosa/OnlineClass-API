import { application, Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import { createUserSessionHandler } from "./controller/session.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema, createUserSessionSchema } from "./schema/user.schema";
import { createCourseSchema, updateCourseSchema } from "./schema/course.schema";
import { createCourseHandler, updateCourseHandler, getCourseHandler, getAllCursesHandler } from "./controller/course.controller";

export default function(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    //Register User
    app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

    //Login
    //app.post(
    //    "/api/sessions",
    //    validateRequest(createUserSessionSchema),
    //    createUserSessionHandler
    //);

    app.post(
        "/api/addcourse",
        validateRequest(createCourseSchema),
        createCourseHandler
    );

    app.put(
        "/api/courses/:courseId",
        validateRequest(updateCourseSchema),
        updateCourseHandler
    );

    app.get("/api/courses/:courseId", getCourseHandler);

    app.get("/api/courses", getAllCursesHandler);
}