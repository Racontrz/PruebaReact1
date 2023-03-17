const Characters = ({ characters }) =>{
  if (!characters) {
    return <div className="m-3">
      <h4>Personaje No Existe</h4>
    </div>
  }
  return (
  <div>
    <div className="row">
    {characters.map((item, index) => (
      <div key={index} className='col'> 
        <div className='card m-3'>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
          </div>
          <img src={item.image} alt=""/>
        </div>
      </div>
    ))}
    </div>
  </div>
  
  
   
  );
}

export default Characters;