import React from 'react'

export default function TopNavMessages() {
  return (
      <li className="nav-item dropdown border-left">
        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <i className="mdi mdi-email"></i>
          <span className="count bg-success"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <h6 className="p-3 mb-0">Mensajes</h6>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face4.jpg" alt="image" className="rounded-circle profile-pic"/>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1">Jorge te ha enviado un mensaje</p>
              <p className="text-muted mb-0"> Hace un Minuto </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face2.jpg" alt="image" className="rounded-circle profile-pic"/>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1">Marcela te ha enviado un Mensaje</p>
              <p className="text-muted mb-0"> Hace 15 Minutos </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face3.jpg" alt="image" className="rounded-circle profile-pic"/>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject ellipsis mb-1">Foto de Perfil Actualizada</p>
              <p className="text-muted mb-0"> Hace 18 Minutos </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <p className="p-3 mb-0 text-center">4 Nuevos Mensajes</p>
        </div>
      </li>
  )
}
