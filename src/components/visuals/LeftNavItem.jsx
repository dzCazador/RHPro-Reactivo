import React from 'react'

export default function LeftNavItem(props) {
    const {name,href,icon,type,onClick} = props
    return (
        <li className="nav-item menu-items">
            <a className="nav-link" onClick={onClick}>
            <span className="menu-icon">
                <i className={icon}></i>
            </span>
            <span className={type}>{name}</span>
            </a>
        </li>
    )
}
