import React, { useState } from "react";
import "./css/auth.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  authApi,
  useRegisterNewUserMutation,
} from "../../../store/apis/authApi";
import { startRegister } from "../../../store/auth/thunks";
import { checkingCredentials, logout } from "../../../store/auth/authSlice";
import { useCheckIsChecking } from "../../../hooks";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const [registerNewUser, { isLoading, isError }] =
    useRegisterNewUserMutation();

  const MySwal = withReactContent(Swal);

  const onSubmit = async (data) => {
    dispatch(checkingCredentials());

    if (!isValid) return;
    try {
      data.token = "";
      const response = await registerNewUser(data);
      if (!response.data.isSuccess) {
        MySwal.fire({
          title: <p>Error</p>,
          icon: "error",
          text: "Hubo un problema al crear un usuario",
          confirmButtonColor: "#c0ff30",
          confirmButtonText: "Ok",
        });

        dispatch(logout());
      }
      dispatch(startRegister(response.data));
    } catch (error) {
      dispatch(logout());

      MySwal.fire({
        title: <p>Error</p>,
        icon: "error",
        text: "Hubo un problema al crear un usuario",
      });
    }
  };

  const { nombres, apellidos, email, password, confirmPassword } = errors;
  const passwordActualValue = watch("password");

  const isChecking = useCheckIsChecking();

  return (
    <div className="body-auth">
      <div className="wrapper">
        <h2>Registro</h2>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div className="input-box">
            <input
              type="text"
              {...register("nombres", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Minimo 6 caracteres",
                },
              })}
              id="nombres"
              placeholder="Ingresa tu nombres"
            />

            {nombres !== undefined && <h3>{nombres.message}</h3>}
          </div>

          <div className="input-box">
            <input
              type="text"
              {...register("apellidos", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Minimo 6 caracteres",
                },
              })}
              id="apellidos"
              placeholder="Ingresa tus apellidos"
            />
            {apellidos !== undefined && <h3>{apellidos.message}</h3>}
          </div>

          <div className="input-box">
            <input
              type="text"
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Por favor, ingresa un correo electrónico válido",
                },
              })}
              id="email"
              placeholder="Email"
            />
            {email !== undefined && <h3>{email.message}</h3>}
          </div>
          <div className="input-box">
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Minimo 6 caracteres",
                },
              })}
              id="password"
              placeholder="Ingresa una contraseña"
            />

            {password !== undefined && <h3>{password.message}</h3>}
          </div>
          <div className="input-box">
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Este campo es requerido",
                validate: (value) =>
                  value === passwordActualValue ||
                  "Las contraseñas no coinciden",
              })}
              id="confirmPassword"
              placeholder="Confirma tu contraseña"
            />

            {confirmPassword !== undefined && (
              <h3>{confirmPassword.message}</h3>
            )}
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
    </div>
  );
};
