import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import SidebarUser from "../../components/sidebar-user/sidebar-user";
import { Formik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";

function Login() {
  return (
    <div className="Login">
      <SidebarUser />

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

              // fazerRequisicaoComBody("http://localhost:8081/auth", "POST", {
              //   email: values.email,
              //   password: values.password,
              // })
              //   .then((res) => res.json())
              //   .then((resJson) => {
              //     const dados = resJson.dados;
              //     	console.log(dados);
              //      console.log(resJson.dados.token);

              //       localStorage.setItem("token", resJson.dados.token);
              // 	  const novoToken = localStorage.getItem("token");

              // 	  const tokenDecoded = jwt_decode(novoToken);
              // 	  console.log(tokenDecoded)

              // 	  if (novoToken) {
              //         // checar tipo do usuário através do token
              //         if (tokenDecoded.type === 1) {
              //           history.push("/pagina-de-sonhos");
              //         }else {
              // 			history.push("/em-analise");
              // 		}

              //     }
              //   });
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
