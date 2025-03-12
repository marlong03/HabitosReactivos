import React from 'react'
import Topbar from '../components/general/Topbar'
import Footerbar from '../components/general/Footerbar'
import CalentarLine from '../components/CalentarLine'
function UsuarioPage() {
  return (
    <div>
        <Topbar></Topbar>
        <CalentarLine></CalentarLine>
        <Footerbar></Footerbar>
    </div>
  )
}

export default UsuarioPage