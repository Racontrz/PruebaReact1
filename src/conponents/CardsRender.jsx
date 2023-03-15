import Card from 'react-bootstrap/Card';


function CardsRender({ colabs, }) {
  return (
    <>
      <Card border="dark mt-4 m-2" style={{ width: '15rem' }}>
        <Card.Header>{colabs.username}</Card.Header>
        <Card.Body>
          <Card.Text>{colabs.email}</Card.Text>
          <hr />
          <Card.Text>{colabs.name}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardsRender;