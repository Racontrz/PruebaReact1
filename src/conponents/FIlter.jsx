import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Filter() {
  const [filter, setFilter] = useState('')
  return (
    <Form.Select aria-label="Default select example" className="m-3" onChange={(e) => setFilter(e.target.value)}>
      <option value='' desabled hidden> Ordenar Por</option>
      <option value="1">A - Z</option>
      <option value="2">Z - A</option>
    </Form.Select>
  );
}

export default Filter;