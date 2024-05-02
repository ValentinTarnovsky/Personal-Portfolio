import * as yup from "yup";

const MESSAGE_REQUIRED = "Required field*";
const MESSAGE_EMAIL_INVALID = "Enter a valid email. E.g.: example@gmail.com.";
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;

const validationSchema = yup.object({
    fullname: yup
        .string("Enter your full name")
        .min(4, "Enter a full name that have more than 4 characters")
        .required(MESSAGE_REQUIRED),
    email: yup
        .string("Enter your email")
        .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
        .required(MESSAGE_REQUIRED),
    consult: yup
        .string("Enter your inquiry")
        .min(15, "The inquiry must have at least 15 characters")
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;