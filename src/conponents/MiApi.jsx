import CardsRender from './CardsRender'
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

/* const urlApi = 'https://pokeapi.co/api/v2/pokemon/1' */
const urlApi = 'https://jsonplaceholder.typicode.com/users'




function MiApi() {
  const [texto, setTexto] = useState('')
  const [apiData, setApiData] = useState([])
  useEffect(()=>{
    getData()
  }, [])

  const getData = async() =>{
    const res = await fetch(urlApi)
    const data = await res.json()
    setApiData(data)
  }  
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
 
      <div className='d-flex flex-wrap'>
        {apiData.filter((item) => {
          return texto.toLocaleLowerCase() === '' ? item : item.name.toLowerCase().includes(texto) ||
            texto.toLocaleLowerCase() === '' ? item : item.email.toLowerCase().includes(texto) ||
            texto.toLocaleLowerCase() === '' ? item : item.username.toLowerCase().includes(texto)
        }).map(getData => <CardsRender key={getData.id} colabs={getData} />)}

      </div>
    
    </div>
    
  );
}

export default MiApi;