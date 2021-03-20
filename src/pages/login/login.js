import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { Formik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import { fetchWithBody } from "../../utils/fetch";
import MobileHeader from "../../components/mobile-header/mobile-header";

function Login() {
  const history = useHistory();
  return (
    <div className="Login">
      <Sidebar />
      <MobileHeader />

      <div className="login-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="login-box">
          <h2>Login</h2>
          <p>Admin login for the database. Non-admin users can't be created.</p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));

              fetchWithBody(
                "https://aroacedb-back.herokuapp.com/auth",
                "POST",
                {
                  email: values.email,
                  password: values.password,
                }
              )
                .then((res) => res.json())
                .then((resJson) => {
                  const data = resJson.data;
                  console.log(data);
                  console.log(resJson.data.token);

                  localStorage.setItem("token", resJson.data.token);
                  const newToken = localStorage.getItem("token");

                  const decodedToken = jwt_decode(newToken);
                  console.log(decodedToken);

                  if (newToken) {
                    history.push("/dashboard");
                  }
                })
                .catch((err) => {
                  console.log(err);
                  alert(
                    "Error loging in. Are you sure your credentials are correct?"
                  );
                });
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Required"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input
                    id="email"
                    placeholder="User"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}

                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <button type="submit" className="submit">
                    Login
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
