import axios from 'axios';
import { useState, useEffect } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, [])
    return <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={require('../../images/aboutMe.jpg')} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, id.</p>
            <span className="sidebarItem">
                CATEGORIES
            </span>
            <ul className="sidebarList">
                {cats.map(c => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                <i className="sidebarIcons fa-brands fa-square-twitter"></i>
                <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcons fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>;
}
