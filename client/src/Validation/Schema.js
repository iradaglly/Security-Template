import * as yup from "yup";

export const Validation = yup.object().shape({
    title: yup.string().required("title is required"),

    commentCount: yup
        .number()
        .integer("commentCount must be an integer")
        .positive("commentCount cannot be negative number")
        .required("commentCount is required"),
        likeCount: yup
        .number()
        .integer("likeCount must be an integer")
        .positive("likeCount cannot be negative number")
        .required("likeCount is required"),
    desc: yup
        .string()
        .required("desc is required"),
        image: yup
        .string()
        .required("desc is required"),   
});