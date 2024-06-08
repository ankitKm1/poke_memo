import { useEffect, useState } from "react"
import Card from "./Card"
import Navbar from "./Navbar"


const URL = 'https://pokeapi.co/api/v2/pokemon?limit=25'
const URL_FOR_IMG ='https://img.pokemondb.net/artwork/large/' //name.jpg


const Cards = () => {

  const [items, setItems] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  
  const handleClick = (item) => {
    
    const suffled= [...items].sort(()=> Math.random()-0.5)
    setItems(suffled)
    
    if(clicked.includes(item)){
      if(score > bestScore) {
        setBestScore(score)
      }
      setScore(0)
      setClicked([])
      alert('Game End! Start New...')
      return ;
    }

    setScore(score+1)
    
    setClicked([...clicked, item])
    
  }

  
  
  return (
    <div className="screen">
      <Navbar 
        score= {score}
        bestScore={bestScore}
      />
      
      <Card
        URL= {URL}
        URL_FOR_IMG= {URL_FOR_IMG}
        handleClick= {handleClick}
        items={items}
        setItems={setItems}
      />
    </div>
  )
}

export default Cards






