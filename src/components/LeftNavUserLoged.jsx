import React from 'react'

export default function LeftNavUserLoged(props) {
    const {name,type,picture}=props

    return (
    <li className="nav-item profile">
        <div className="profile-desc">
        <div className="profile-pic">
            <div className="count-indicator">
            <img className="img-xs rounded-circle " src={`../../assets/images/faces/${picture}`} alt=""/>
            <span className="count bg-success"></span>
            </div>
            <div className="profile-name">
            <h5 className="mb-0 font-weight-normal">{name}</h5>
            <span>{type}</span>
            </div>
        </div>
        
        <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></a>
        <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
            <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-settings text-primary"></i>
                </div>
            </div>
            <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Configuracion de la Cuenta</p>
            </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-onepassword  text-info"></i>
                </div>
            </div>
            <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Cambiar Password</p>
            </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item preview-item">
            <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-calendar-today text-success"></i>
                </div>
            </div>
            <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Cosas por Hacer</p>
            </div>
            </a>
        </div>
        </div>
    </li>
    )
}
