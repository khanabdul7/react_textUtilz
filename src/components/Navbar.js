import PropTypes from 'prop-types';
import Alerts from './Alerts';
import { Outlet, Link } from 'react-router-dom';

let Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to={`/`}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={``}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`about`}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">Enable/Disable Dark Mode</label>
                </div>
            </nav>
            <Alerts alert={props.alert}/>
            <div>
                <Outlet />
            </div>
        </>
    )

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'set title here'
};

export default Navbar;    