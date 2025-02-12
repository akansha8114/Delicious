import {LOGO_URL} from "../utils/contents";

//Step 2: Now lets make a component for Header:consistes Logo and NAv links
const Header = ()=> {
    return (
        <div className='header'>
            <div className="nav-container">
                <div className='logo-container'>
                <img 
                    className="logo" 
                    src = {LOGO_URL}
                />
                </div>
                    <ul className='nav-items'>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) ;
} ;
export default Header;