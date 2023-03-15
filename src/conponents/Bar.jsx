import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Bar() {

    return (
    <div className='my-3'>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <h1>APIs</h1>
          </Container>
        </Navbar>

      </Container>
    </div>
  );
}

export default Bar;