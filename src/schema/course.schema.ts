import { object, string, ref, array } from "yup";

const payload = {
    body: object({
        title: string().required("Title is required"),
        description: string()
            .required("Description is required")
            .min(10, "Description is too short - min 10 chars"),
        lessons: array().of(object()
                .shape({
                    title: string().required("A title is required"), 
                    videoUrl: string().required("The video url is required"),
                })
                .required(),
        ),
    }),
};

export const createCourseSchema = object({
    ...payload,
});

export const updateCourseSchema = object({
    params: object({
        postId: string().required("PostId is required"),
    }),
    ...payload,
});

