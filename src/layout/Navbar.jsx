import './Navbar.scss';
import LogoIcon from '../assets/logo.png'
import Responsive from '../assets/responsive.png'
import NavIcon from '../components/NavIcon';
import ActiveNotification from '../assets/active-notification.png'
import Profile from '../assets/profile-image.png'
import Chevron from '../assets/chevron-down.png'
import Message from '../assets/message-circle.png'
import SearchForm from '../components/SearchForm';

const Navbar=()=>{
    return (
       <div className="navbar">
        <div className="left-nav">
        <img src={Responsive} alt={Responsive} />
        <img src={LogoIcon} alt={LogoIcon} />
            
        </div>
        <div className="right-nav">
            <div className="nav-input">
                <SearchForm/>
            </div>
            <div className="nav-icons">
            <NavIcon url={Message}/>
            <NavIcon url={ActiveNotification}/>
            <NavIcon url={Profile}/>
            <NavIcon url={Chevron}/>
            </div>
        </div>
       </div>
    )
};

export default Navbar;