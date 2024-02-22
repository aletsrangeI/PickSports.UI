import React, { useState } from "react";
import "./css/auth.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  authApi,
  useRegisterNewUserMutation,
} from "../../../store/apis/authApi";
import { startRegister } from "../../../store/auth/thunks";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const [registerNewUser, { isLoading, isError }] =
    useRegisterNewUserMutation();

  const onSubmit = async (data) => {
    if (!isValid) return;

    try {
      data.token = "";
      const response  = await registerNewUser(data);
      if (!response.data.isSuccess)
        alert(`Error al crear usuario: ${response.message}`);

      dispatch(startRegister(response.data));
    } catch (error) {
      // Aquí puedes manejar el error del registro
    }
  };

  const { nombres, apellidos, email, password, confirmPassword } = errors;
  const passwordActualValue = watch("password");
  return (
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
            placeholder="Enter email"
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
                value === passwordActualValue || "Las contraseñas no coinciden",
            })}
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
          />

          {confirmPassword !== undefined && <h3>{confirmPassword.message}</h3>}
        </div>

        <div className="policy">
          <input type="checkbox" name="policy" id="policy" />
          <h3>Acepto los terminos de servicio</h3>
        </div>

        <div className="input-box button">
          <input type="submit" value={"Registrarse ahora"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
