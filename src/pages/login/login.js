import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { Formik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import { fetchWithBody } from "../../utils/fetch";

function Login() {
  const history = useHistory();
  return (
    <div className="Login">
      <Sidebar />

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eum
            in sequi debitis quia accusantium deserunt ex, id praesentium libero
            similique delectus aliquam molestiae eius iste cum adipisci dolorem
            corporis?
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(JSON.stringify(values, null, 2));

              fetchWithBody("http://aroacedb-back.herokuapp.com/auth", "POST", {
                email: values.email,
                password: values.password,
              })
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit"
                  >
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
