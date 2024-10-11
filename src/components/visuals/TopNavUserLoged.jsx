import React from 'react'

export default function TopNavUserLoged(props) {
    const {name,type,picture}=props
  return (
    <li className="nav-item dropdown">
    <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
      <div className="navbar-profile">
        <img className="img-xs rounded-circle" src={`assets/images/faces/${picture}`} alt=""/>
        <p className="mb-0 d-none d-sm-block navbar-profile-name">{name}</p>
        <i className="mdi mdi-menu-down d-none d-sm-block"></i>
      </div>
    </a>
    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
      <h6 className="p-3 mb-0">Perfil</h6>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-settings text-success"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Configuracion</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item preview-item">
        <div className="preview-thumbnail">
          <div className="preview-icon bg-dark rounded-circle">
            <i className="mdi mdi-logout text-danger"></i>
          </div>
        </div>
        <div className="preview-item-content">
          <p className="preview-subject mb-1">Salir</p>
        </div>
      </a>
      <div className="dropdown-divider"></div>
      <p className="p-3 mb-0 text-center">Configuracion Avanzada</p>
    </div>
  </li>
  )
}
