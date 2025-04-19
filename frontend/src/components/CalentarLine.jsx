import React, { useState, useEffect, useContext } from 'react';
import 'flowbite';
import { Link } from 'react-router-dom';
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import { DateContext } from './contexts/DateContext';

const CalentarLine = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { date, setDate } = useContext(DateContext); // Corregido el uso de useContext
  const habits = [1, 1, 1, 1, 1, 11, 1];
  const [isOpen, setIsOpen] = useState(false); // Agregado estado para manejar el menú desplegable
  const onSelectedDay = (dateSelected) => {
    const selected = new Date(dateSelected); // Convierte la fecha a objeto Date
    console.log(dateSelected);
    
    if (!isNaN(selected.getTime())) { // Verifica si es una fecha válida
        setSelectedDate(selected);
    }
};

useEffect(() => {
    if (selectedDate) {
        const day = selectedDate.getDate();
        const month = selectedDate.toLocaleString('es-ES', { month: 'long' });
        const year = selectedDate.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
    }
    
}, [selectedDate]);

  return (
    <div className="bg-neutral-900 h-screen text-white p-5 mt-1 relative -top-6 rounded-2xl">
      <div>
        <ReactHorizontalDatePicker
          selectedDay={(x)=>console.log(x)
          }
          enableScroll={true}
          enableDays={200}
          enableDaysBefore={2}
        />
      </div>
      <div className="w-full overflow-x-auto my-4 flex flex-wrap justify-between">
        <div className="flex space-x-2 min-w-max">
          <button className="bg-gray-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            TODOS
          </button>
          <button className="bg-gray-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            MAÑANA
          </button>
          <button className="bg-gray-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            TARDE
          </button>
          <button className="bg-gray-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            NOCHE
          </button>
        </div>
        <div>
          <Link to="new">
            <button className="bg-gray-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl uppercase">
              Crear un nuevo hábito
            </button>
          </Link>
        </div>
      </div>

      <div>
        <p className="uppercase font-bold">Hábitos para hoy</p>
      </div>
      <div>
        <ul className="flex flex-wrap">
          {habits.map((habit, index) => (
            <li key={index}>
              <div className="bg-indigo-500 p-3 flex rounded-xl justify-between w-80 m-4">
                <div className="block">
                  <p className="font-bold">Nombre actividad</p>
                  <small>No terminado</small>
                </div>

                <button
                  id={`dropdownDefaultButton${index}`}
                  onClick={() => setIsOpen((prev) => !prev)} // Corrige el manejo del estado
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>

                {/* Mostrar el dropdown solo si isOpen es true */}
                {isOpen && (
                  <div
                    id={`dropdown${index}`}
                    className="z-10 mt-16 mx-24 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Descansa un día
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Editar
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalentarLine;
