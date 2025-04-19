import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../services/AuthServices';

function RegisterPage() {
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({}); // Para manejar errores del backend
  const [errorMessage, setErrorMessage] = useState(''); // Almacenar el mensaje de error general

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', fields.username);
    formData.append('email', fields.email);
    formData.append('password', fields.password);

    try {
      const response = await registerUser(formData);
      console.log('Registro exitoso:', response.data);
      // Limpiar los errores si el registro fue exitoso
      setErrors({});
      setErrorMessage('');
    } catch (error) {
      console.error('Error en el registro:', error.response.data);
      if (error.response && error.response.data) {
        setErrors(error.response.data); // Almacenar errores del backend
        setErrorMessage('Por favor corrige los errores antes de continuar.');
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-indigo-600 pb-4 rounded-xl">
          <h1 className="mt-5 text-center text-3xl font-bold text-white">HabitosAtomicos</h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Mostrar alerta de error si hay algún error */}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-500 text-white text-sm rounded-md">
              <strong>{errorMessage}</strong>
              <ul className="mt-2">
                {Object.values(errors).map((errorList, index) => (
                  <li key={index}>{errorList[0]}</li> // Mostrar cada error en la lista
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={sendForm} method="POST" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Nombre de Usuario
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="border-2 border-solid block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  value={fields.username}
                  onChange={handleChange}
                />
              </div>
              {/* Mostrar error debajo del campo de usuario */}
              {errors.username && <p className="text-red-600 text-sm">{errors.username[0]}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="border-2 border-solid block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  value={fields.email}
                  onChange={handleChange}
                />
              </div>
              {/* Mostrar error debajo del campo de email */}
              {errors.email && <p className="text-red-600 text-sm">{errors.email[0]}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="border-2 border-solid block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  value={fields.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
