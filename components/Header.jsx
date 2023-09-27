import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { useRouteState } from '../components/context-api/RouteContext'


function BasicExample() {
    const { state } = useRouteState();

    const logoutFun = () => {
        window.location.href = '/login'
        localStorage.removeItem('token');
    }

    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand className=' text-white' href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className=' text-white mx-3 text-decoration-none' to="/">Home</NavLink>
                        <NavLink className=' text-white  mx-3  text-decoration-none' to="/about">About</NavLink>
                        <NavLink className=' text-white  mx-3  text-decoration-none' to="/admin">Admin</NavLink>
                        <NavLink className=' text-white  mx-3  text-decoration-none' to="/info">Organization</NavLink>
                    </Nav>
                    <div className='ms-auto'>
                        {state === true ?
                            <NavLink className=' text-white  mx-3  text-decoration-none'> <span onClick={logoutFun}> Logout</span></NavLink>
                            : <NavLink className=' text-white  mx-3  text-decoration-none' to="/login">Login</NavLink>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;