import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUps } from "../redux/SignUpSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    dispatch(signUps(values));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>
      <Formik
        initialValues={{ fullname: "", email: "", password: "", country:""}}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().required("Fullname is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSignUp(values);
           
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form className="space-y-6" action="#" method="POST">
              <div className="mt-2">
                <Field
                  type="text"
                  name="fullname"
                  placeholder=" Fullname:"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="fullname"
                component="div"
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />
              <div className="mt-2">
                <Field
                  type="email"
                  name="email"
                  placeholder=" E-mail:"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />
              <div className="mt-2">
                <Field
                  type="password"
                  name="password"
                  placeholder=" Password:"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />
              <div className="mt-2">
                <Field
                  type="text"
                  name="country"
                  placeholder=" Country:"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="country"
                component="div"
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
              <p
                className="mt-10 text-center text-m text-gray-600 cursor-pointer hover:text-indigo-700"
                onClick={() => navigate("/")}
              >
                Already have an account?
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
