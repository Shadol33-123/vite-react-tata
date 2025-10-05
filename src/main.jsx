import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* 🔔 Contenedor global de los toasts */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        toastStyle={{
          fontSize: '1.5rem',   // tamaño del texto
          padding: '1.5rem',    // espacio interno
          borderRadius: '12px', // bordes redondeados
          minWidth: '300px',    // ancho mínimo
          maxWidth: '600px',    // ancho máximo (opcional)
          width: '100%',        // ancho relativo a la pantalla
        }}
        bodyStyle={{
          textAlign: 'center',
          lineHeight: '1.6',    // separación de líneas
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
)
