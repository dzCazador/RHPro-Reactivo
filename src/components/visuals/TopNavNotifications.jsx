import React from 'react'

export default function TopNavNotifications() {
    return (
        <li className="nav-item dropdown border-left">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
        <i className="mdi mdi-bell"></i>
        <span className="count bg-danger"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
        <h6 className="p-3 mb-0">Notifications</h6>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
            <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-calendar text-success"></i>
            </div>
            </div>
            <div className="preview-item-content">
            <p className="preview-subject mb-1">Eventos para Hoy</p>
            <p className="text-muted ellipsis mb-0"> Recordatorio de que tienes un evento hoy. </p>
            </div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
            <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-settings text-danger"></i>
            </div>
            </div>
            <div className="preview-item-content">
            <p className="preview-subject mb-1">Configuraciones</p>
            <p className="text-muted ellipsis mb-0"> Actualizar Dashboard </p>
            </div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
            <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-link-variant text-warning"></i>
            </div>
            </div>
            <div className="preview-item-content">
            <p className="preview-subject mb-1">Modulo Administrador</p>
            <p className="text-muted ellipsis mb-0">  </p>
            </div>
        </a>
        <div className="dropdown-divider"></div>
        <p className="p-3 mb-0 text-center">Ver Todas las Notificaciones</p>
        </div>
    </li>
    )
}
