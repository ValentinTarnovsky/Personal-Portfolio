import { useState, useContext } from "react";
import { useFormik } from "formik";
import { Box, Button } from "@mui/material";
// import axios from "axios";
import "./contact.scss";

import validationSchemaEn from "./formContactEn.validation.js";
import validationSchemaEs from "./formContactEs.validation.js";
import MyContext from "../../contexts/MyContext";

import InputField from "../InputField.jsx";
import Alert from "../Alert.jsx";
// import { MAIL_URL } from "../../../constants/api.js";

const Contact = () => {
    const [ openAlert, setOpenAlert ] = useState(false);

    const { langData, portfolioConfig } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.contact && langData.contact[prop] ? langData.contact[prop] : prop;
    const validationSchema = portfolioConfig && portfolioConfig.length > 0 && portfolioConfig[1].lang === "en" ? validationSchemaEn : validationSchemaEs;
    // const sendEmail = async (values) => {
    //     const { fullname, telephone, email, consult } = values;

    //     const queryParams = new URLSearchParams({
    //         name: fullname,
    //         email: email,
    //         phone: telephone,
    //         query: consult,
    //     });

    //     const url = `${MAIL_URL}?${queryParams.toString()}`;

    //     try {
    //         const response = await axios.get(url);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         return "Error sending email";
    //     }
    // };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
            email: "",
            consult: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // sendEmail(values);
            setOpenAlert(true);
            resetForm();
        },
    });

    return (
        <Box
            component="form"
            className="contact container spacing"
            id="contact"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>
            <h3 className="title">Contact</h3>

            <InputField
                label={getLangText("name")}
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                errorMessage={formik.touched.fullname && formik.errors.fullname}
                inputProps={{ maxLength: 25 }}/>

            <InputField
                label={getLangText("mail")}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 50 }}/>

            <InputField
                label={getLangText("comments")}
                name="consult"
                multiline
                rows={5}
                value={formik.values.consult}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.consult && Boolean(formik.errors.consult)}
                errorMessage={formik.touched.consult && formik.errors.consult}
                inputProps={{ maxLength: 150 }}/>

            <Button
                className="contact__button"
                type="submit">
                {getLangText("submit")}
            </Button>

            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="Thank you for reaching out. I will be answering you soon!"/>
        </Box>
    );
};

export default Contact;