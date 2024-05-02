import * as yup from "yup";

const MESSAGE_REQUIRED = "Campo obligatorio*";
const MESSAGE_EMAIL_INVALID = "Ingrese un email valido. Ej. example@gmail.com.";
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;

const validationSchema = yup.object({
    fullname: yup
        .string("Ingrese su nombre completo")
        .min(4, "Su nombre tiene que tener al menos 4 caracteres")
        .required(MESSAGE_REQUIRED),
    email: yup
        .string("Ingrese su email")
        .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
        .required(MESSAGE_REQUIRED),
    consult: yup
        .string("Ingrese su consulta")
        .min(15, "Su consulta tiene que tener al menos 15 caracteres")
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;