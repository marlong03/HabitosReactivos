import React from 'react';
import Topbar from '../components/general/Topbar';
import Footerbar from '../components/general/Footerbar';
import CalentarLine from '../components/CalentarLine';
import { DateProvider } from '../components/contexts/DateContext'; // Importa el proveedor

function UsuarioPage() {
  return (
    <DateProvider>
      <div>
        <Topbar />
        <CalentarLine />
        <Footerbar />
      </div>
    </DateProvider>
  );
}

export default UsuarioPage;
