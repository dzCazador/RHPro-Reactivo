import React,{useEffect, useState} from 'react'
import LeftNavItem from './LeftNavItem'
import LeftNavUserLogged from './LeftNavUserLogged'


export default function LeftNavMenu({ onMenuSelect }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const response = await fetch('http://localhost:3000/rhpro/mainMenu/jose');
          if (!response.ok) {
            throw new Error('Failed to fetch menu items');
          }
  
          const data = await response.json();
          setMenuItems(data);
        } catch (err) {
          console.error('Error fetching menu items:', err);
          setError(err.message);
        }
      };
  
      fetchMenuItems();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const getIcon = (menuname) => {
      switch (menuname) {
        case 'ADMPER':
          return 'mdi mdi-contacts';
        case 'LIQUIDACION':
          return 'mdi mdi-table-large';
        case 'GTI':
          return 'mdi mdi-speedometer';
        case 'Informacion Gerencial':
          return 'mdi mdi-chart-bar';
        case 'Alertas':
          return 'mdi mdi-flash-alert-outline';
        case 'CAPACITACION':
          return 'mdi mdi-chair-rolling';
        case 'EVALUACION':
          return 'mdi mdi-test-tube';
        case 'SUPERVISOR':
          return 'mdi mdi-security';
        default:
          return 'mdi mdi-contacts';
      }
    };
  
    return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <MainLogo/>
        <ul className="nav">
            <LeftNavUserLogged name='Daniela Marcelino' picture='face1.jpg' type='Remuneraciones' />
            <Title name="Navegacion" onClick={()=>onMenuSelect('home')}/>
            {menuItems.map((item)=>(
              <LeftNavItem
              key={item.menuname}
              name={item.menudesabr}
              icon={item.icon?item.icon:'mdi mdi-contacts'}
              type='menu-title'/>
                 // Ajusta esto según tu lógica
              )
            )}
            <LeftNavItem name='Administracion de Personal' icon='mdi mdi-contacts' type='menu-title' onClick={()=>onMenuSelect('administracion')}/>
            <LeftNavItem name='Liquidacion de Haberes' icon='mdi mdi-table-large' type='menu-title' onClick={() => onMenuSelect('liquidacion')}/>
            <LeftNavItem name='Gestion de Tiempos' icon='mdi mdi-speedometer' type='menu-title' onClick={() => onMenuSelect('tiempos')}/>
            <LeftNavItem name='Informacion Gerencial' icon='mdi mdi-chart-bar' type='menu-title' onClick={() => onMenuSelect('infoger')}/>
            <LeftNavItem name='Alertas' icon='mdi mdi-flash-alert-outline' type='menu-title' onClick={() => onMenuSelect('alerta')}/>            
            <LeftNavItem name='Capacitacion' icon='mdi mdi-chair-rolling' type='menu-title' onClick={() => onMenuSelect('capacita')}/>    
            <LeftNavItem name='Evaluacion de Desempeño' icon='mdi mdi-test-tube' type='menu-title' onClick={() => onMenuSelect('evalua')}/>    
            <LeftNavItem name='Seguridad y Auditoria' icon='mdi mdi-security' type='menu-title' onClick={() => onMenuSelect('seguridad')}/>    

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

function MainLogo(){
    return (
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html">RHPRO - Reactivo</a>
            <a className="sidebar-brand brand-logo-mini" href="index.html">Rxxxx</a>
        </div>
    )
}
function Title(props){
    const {name,onClick}=props
    return (
        <li className="nav-item nav-category">
            <span className="nav-link" onClick={onClick}>{name}</span>
        </li>
    )
}