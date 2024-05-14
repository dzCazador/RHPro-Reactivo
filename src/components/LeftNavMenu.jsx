import React from 'react'
import LeftNavItem from './LeftNavItem'
import LeftNavUserLoged from './LeftNavUserLoged'


export default function LeftNavMenu() {
  return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html">RHPRO - Reactivo</a>
            <a className="sidebar-brand brand-logo-mini" href="index.html">Rxxxx</a>
        </div>
        <ul className="nav">
        <LeftNavUserLoged name='Daniela Marcelino' picture='face1.jpg' type='Remuneraciones'/>
    <li className="nav-item nav-category">
        <span className="nav-link">Navegación</span>
    </li>
    <LeftNavItem name='Administracion de Personal' icon='mdi mdi-contacts' type='menu-title'/>
    <LeftNavItem name='Liquidacion de Haberes' icon='mdi mdi-table-large' type='menu-title'/>
    <LeftNavItem name='Gestion de Tiempos' icon='mdi mdi-speedometer' type='menu-title'/>
    <LeftNavItem name='Informacion Gerencial' icon='mdi mdi-chart-bar' type='menu-title'/>
    <LeftNavItem name='Alertas' icon='mdi mdi-flash-alert-outline' type='menu-title'/>            
    <LeftNavItem name='Capacitacion' icon='mdi mdi-chair-rolling' type='menu-title'/>    
    <LeftNavItem name='Evaluacion de Desempeño' icon='mdi mdi-test-tube' type='menu-title'/>    
    <LeftNavItem name='Seguridad y Auditoria' icon='mdi mdi-security' type='menu-title'/>    

    

    <li className="nav-item menu-items">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
        <span className="menu-icon">
            <i className="mdi mdi-laptop"></i>
        </span>
        <span className="menu-title">Basic UI Elements</span>
        <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-basic">
        <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
        </ul>
        </div>
    </li>
    </ul>
    </nav>
  )
}