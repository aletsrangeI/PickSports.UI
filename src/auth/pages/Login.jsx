import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../store/apis/authApi";
import { startRegister } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";
import { useChekAuthenticated } from "../../hooks/useCheckAuthenticated";
import { useCheckIsChecking } from "../../hooks";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { checkingCredentials, logout } from "../../store/auth/authSlice";

export const Login = () => {
  const isChecking = useCheckIsChecking();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();

  const MySwal = withReactContent(Swal);

  const onSubmit = async (data) => {
    dispatch(checkingCredentials());

    if (!isValid) return;

    try {
      data.token = "";
      data.UserId = 0;
      data.Nombres = "";
      data.Apellidos = "";

      const response = await login(data);
      if (response.data.isSuccess) {
        dispatch(startRegister(response.data.data));
      } else if (!response.error.data.isSuccess) {
        MySwal.fire({
          title: <p>Error</p>,
          icon: "error",
          text: response.error.data.message,
          confirmButtonColor: "#c0ff30",
          confirmButtonText: "Ok",
        });
        dispatch(logout());
      }
    } catch (error) {
      dispatch(logout());

      MySwal.fire({
        title: <p>Error</p>,
        icon: "error",
        text: error.message,
      });
    }
  };

  const { email, password } = errors;

  return (
    <div className="wrapper">
      <h2>Login</h2>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <div className="input-box">
          <input
            type="text"
            id="email"
            placeholder="Ingresa email"
            {...register("email", {
              required: "Email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Por favor, ingresa un correo electrónico válido",
              },
            })}
          />
          {email !== undefined && <h3>{email.message}</h3>}
        </div>

        <div className="input-box">
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Password es requerido",
            })}
          />
          {password !== undefined && <h3>{password.message}</h3>}
        </div>

        {isChecking ? (
          <div className="container-loader">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="input-box button">
            <input type="submit" value={"Registrarse ahora"} />
          </div>
        )}
      </form>
    </div>
  );
};
