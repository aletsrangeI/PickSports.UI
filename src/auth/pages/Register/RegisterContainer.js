import React from "react";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useRegister } from "../../api/apiSlice";
import { authApi } from "../../../store/apis/authApi";
import Register from "./Register";
const formData = {
  nombres: "",
  apellidos: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formValidations = {
  nombres: [(value) => value.length > 0],

  apellidos: [(value) => value.length > 0],

  email: [(value) => /\S+@\S+\.\S+/.test(value), "Ingrese un email válido"],

  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],

  confirmPassword: [
    (value, { password }) => value === password,
    "Las contraseñas no coinciden",
  ],
};

const RegisterContainer = () => {
  const {
    nombres,
    apellidos,
    email,
    password,
    confirmPassword,
    onInputChange,
    isFormValid,
    nombresValid,
    apellidosValid,
    emailValid,
    passwordValid,
    confirmPasswordValid,
  } = useForm(formData, formValidations);
  const [formSubmitted, setformSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { mutate: register } = useRegister(authApi.endpoints.register); // Llamada a la función register de authApi

  const onSubmit = async (e) => {
    e.preventDefault();

    alert("aaaaa")

    setformSubmitted(true);

    if (!isFormValid){
      alert(
        "bbbbbb"
      )
    }
    if (password !== confirmPassword) return;

    try {
      await register({ nombres, apellidos, email, password }); // Llamada al endpoint register con los datos del formulario
      // Aquí puedes manejar el éxito del registro
    } catch (error) {
      // Aquí puedes manejar el error del registro
    }
  };

  return (
    <Register
      nombres={nombres}
      apellidos={apellidos}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterContainer;
