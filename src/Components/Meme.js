import memesData from "../memesData"

const randomNum = () => {
  return Math.floor(Math.random() * 99);
}

const getMeme = () => {
  return memesData["data"]["memes"][randomNum()]
}

let meme = getMeme();


const Meme = () => {
  return (
    <div>
      <div className="form">
        <input type="text" className="form-text" placeholder="Top text"/>
        <input type="text" className="form-text" placeholder="Bottom text"/>
        <input type="submit" className="form-submit" />
      </div>
      <img src={meme["url"]} alt={meme["name"]} className="memeImage" />
    </div>
  )
}

export default Meme
