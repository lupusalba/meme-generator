import { useState } from 'react'

import memesData from "../memesData.js"




const Meme = () => {



  //const [meme, setNewUrl] = useState(meme)

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })



function handelChange(event) {
  const {name, value} = event.target

  setMeme(prevMeme => ({
    ...prevMeme,
    [name]: value
  }))
}
  const [allMemeImages, setMemeImages] = useState(memesData)

  function getMeme() {
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url

    

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  return (
    <div>
      <div className="form">
        <input
          type="text"
          className="form-text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handelChange} 
        />
        <input
          type="text"
          className="form-text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handelChange}
        />
        <button className="form-submit" onClick={getMeme}>Get meme</button>

      </div>
      
      <div className="meme">
        <img src={meme.randomImage} alt={meme.randomImage} className="memeImage" />;
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>


    </div>
  )
}

export default Meme
