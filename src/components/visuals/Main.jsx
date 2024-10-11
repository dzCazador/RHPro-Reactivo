import React,{useState} from 'react'
import LeftNavMenu from './LeftNavMenu'
import TopNavMenu from './TopNavMenu'
import MainMenu from './MainMenu'
import "../../../assets/css/style.css"
import "../../../assets/vendors/mdi/css/materialdesignicons.min.css"

export default function Main() {
  const [selectedMenu, setSelectedMenu] = useState('home');
  return (
    <>
    <div className="container-scroller">
        <LeftNavMenu onMenuSelect={setSelectedMenu}/>
        <div className="container-fluid page-body-wrapper" >
            <TopNavMenu/>
            <div className="main-panel" style={{width: '80%'}}>
            <MainMenu selectedMenu={selectedMenu}/>
            </div>            
        </div>    

    </div>
    </>
  )
}
