import { useState, useEffect } from "react"


const Card = ({URL, URL_FOR_IMG, handleClick, items, setItems}) => {
  
  
  
  

  useEffect(()=> {
    let arr = []
    fetch(URL)
  .then((res) => {return res.json()})
  .then((data) => {
    
    (data.results).map((name) => {
      //console.log(name.name)
      // setItems([...items, name.name])
      arr = [...arr, name.name]
      
    } )

    console.log(arr)
    setItems(arr)
  })
  }, [])
    
  
  console.log(items)
  

  
 
  
  

  return (
    <div className="items noise">
      {items.map((item, index) => (
        <div className="grain">
          <a className="card" key={index} onClick={() =>handleClick(item)}>
            <img 
              src={`https://img.pokemondb.net/artwork/large/${item}.jpg`}
              height={220}
              width={220}
              
            />
        
          </a>
          <p className="pokeName">{item}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Card
