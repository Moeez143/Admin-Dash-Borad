import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Siderbar({ OpenSidebarToggle , OpenSidebar }) {
  return (
    <aside id='sidebar' className={OpenSidebarToggle ? 'siderbar-responsive' : ''}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='header_icon' onClick={OpenSidebarToggle}/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to='/'>
                    <BsGrid1X2Fill className='icon' /> Dashborad
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/FakeData'>
                    <BsGrid1X2Fill className='icon' /> Fake Data
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Product'>
                    <BsFillArchiveFill className='icon' /> Product
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Categories'>
                    <BsFillGrid3X3GapFill className='icon' /> Categories
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Customer'>
                    <BsPeopleFill className='icon' /> Customer
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Inventory'>
                    <BsListCheck className='icon' /> Inventory
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Report'>
                    <BsMenuButtonWideFill className='icon' /> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/Settings'>
                    <BsFillGearFill className='icon' /> Settings
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Siderbar