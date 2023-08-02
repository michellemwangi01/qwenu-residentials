import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar href="#">Qwenu Apartments</Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;