import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function Navbar() {
    return (

        
        <div className = "navbar">
            
            <div className = "logo">
                <NavLink to='/' onClick={scrollToTop}>Aditya Khot</NavLink>
            </div>

            <div className = "navlinks-container">
                <NavLink to='/' className = "navlink-left" onClick={scrollToTop}>Home</NavLink>
                <NavLink to='/play' onClick={scrollToTop}>Community</NavLink>
                <NavLink to='/about' className = "navlink-right" onClick={scrollToTop}>About</NavLink>
            </div>

        </div>
    );
    }
