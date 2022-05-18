import {useState} from 'react'

import memesData from "../memesData.js"




const Meme = () => {

  
  const [url, setNewUrl] = useState("")

  function getMeme() {
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    //const url = memesArray[randomNum].url
    setNewUrl(memesArray[randomNum].url)
  }

  return (
    <div>
      <div className="form">
        <input type="text" className="form-text" placeholder="Top text"/>
        <input type="text" className="form-text" placeholder="Bottom text"/>
        <button className="form-submit" onClick={getMeme}>Get meme</button>
            
      </div>
      <img src={url} alt={url} className="memeImage" />;
      
    </div>
  )
}

export default Meme
