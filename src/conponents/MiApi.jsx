import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Characters from './Characters';

function MiApi() {
  const [texto, setTexto] = useState('')
  const [characters, setCharacters] = useState([])
  
  const getData = async() => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`);
    const data = await res.json();
    // desestructuracion de data / es para no estar llamando data.name .image . etc
    const { results } = data
         
    setCharacters(results)
    
    }

  useEffect(()=>{
    getData()
  }, [texto])
  
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="me-5"
          aria-label="Search"
          value={texto}
          onChange = {(e) => setTexto (e.target.value )}
        />
      </Form>
      {/* props es la info que comparte entre padres e hijos */}
    <Characters characters={characters} /> 
 
    </div>
    
  );
}

export default MiApi;