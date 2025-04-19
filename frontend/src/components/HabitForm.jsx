import React from 'react'
import { Link } from 'react-router-dom'

function HabitForm() {
  return (
    <div className='bg-neutral-900 text-white p-8  relative  '>
        <Link to="/">
            <button className='mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

            </button>
        </Link>

        <h1 className='text-4xl mb-1 '>Nombre de hábito</h1>
        <p>Tipo de hábito</p>
        <hr className='my-5'/>
        <p className='font-bold'>ESTILOS</p>

        <div className='m-2 px-8 bg-neutral-800 rounded-xl w-80 '>
            <button className='py-3'>Icono</button>
            <hr />
            <button className='py-3'>Color</button>
        </div>
        <p className='font-bold'>REPETIR</p>
        <div className='m-2 px-8 bg-neutral-800 rounded-xl w-80 '>
            <button className='py-3'>Días de hábito</button>
        </div>
        <p className='font-bold'>HACERLO</p>
        <div className='flex flex-wrap'>
            <button className='bg-neutral-800 hover:bg-indigo-500 rounded-xl p-3 m-2'>Cualquier momento</button>
            <button className='bg-neutral-800 hover:bg-indigo-500 rounded-xl p-3 m-2'>Mañana</button>
            <button className='bg-neutral-800 hover:bg-indigo-500 rounded-xl p-3 m-2'>Tarde</button>
            <button className='bg-neutral-800 hover:bg-indigo-500 rounded-xl p-3 m-2'>Noche</button>

        </div>
        <p className='font-bold'>OBJETIVO DIARIO</p>
        <div className='m-2 px-8 bg-neutral-800 rounded-xl w-80  py-3 '>
            <p>Objetivo</p>
        </div>
        <p className='font-bold'>RECORDATORIO</p>
        <div className='m-2 px-8 bg-neutral-800 rounded-xl w-80  py-3 '>
            <div className="flex items-center mb-4">
                <p>Recordatorio para este hábito</p>
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
        </div>
        <div className='flex justify-center'>
            <button className="bg-gray-700 hover:bg-indigo-500 text-white font-bold p-5 rounded-xl uppercase">
                crear nuevo hábito
            </button>
        </div>




    </div>
  )
}

export default HabitForm