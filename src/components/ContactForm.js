import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      subject: "",
      textarea: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your name"),
      subject: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Please enter a subject"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      textarea: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Please write a messawge"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="contact-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-display">
          <div className="form-group2">
            <input
              type="text"
              placeholder="YOUR NAME"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            ></input>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="required">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-group2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div className="required1">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="YOUR SUBJEXT"
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          ></input>
          {formik.touched.subject && formik.errors.subject ? (
            <div className="required2">{formik.errors.subject}</div>
          ) : null}
        </div>
        <div className="form-group">
          <textarea
            placeholder="YOUR MESSAGE"
            name="textarea"
            type="textarea"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.textarea}
          ></textarea>
          {formik.touched.textarea && formik.errors.textarea ? (
            <div className="required3">{formik.errors.textarea}</div>
          ) : null}
        </div>
        <button type="submit" className="contact-submit">
          SEND MESSAGE
          <i className="bx bx-send"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
