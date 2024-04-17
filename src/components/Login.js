import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register a new account
        </h2>
      </div>
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.fullname = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail Address
                </label>
              </div>
              <div className="mt-2">
                <Field
                  type="email"
                  name="email"
                  placeholder=" E-mail:"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <Field
                  type="password"
                  name="password"
                  placeholder=" Password: "
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div class="text-sm">
                  <p class="font-semibold text-indigo-600 hover:text-indigo-500 ml-64 mt-4">
                    Forgot password?
                  </p>
                </div>
              </div>

              <ErrorMessage
                name="password"
                component="div"
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => navigate("/dashboard")}
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
              <p class="mt-10 text-center text-sm text-gray-500">
                Don't have an account?
                <button
                  onClick={() => navigate("/register")}
                  class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:visible:outline focus-visible:outline-indigo-600 ml-10"
                >
                  Register
                </button>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
