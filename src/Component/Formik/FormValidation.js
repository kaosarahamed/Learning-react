import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

function FormValidation() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(5, "name must have atleast 5 charachters")
        .required(),
      email: yup.string().email("email is not valid").required(),
      password: yup
        .string()
        .min(5, "password must have atleast 5 charachters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <br />
        <h5>
          {formik.touched.name && formik.errors.name && formik.errors.name}
        </h5>
        <label htmlFor="email">email</label>
        <input
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <h5>
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </h5>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <h5>
          {formik.touched.password &&
            formik.errors.password &&
            formik.errors.password}
        </h5>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
