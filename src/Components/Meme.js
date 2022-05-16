import React from 'react'

const Meme = () => {
  return (
    <div>
      <form className="form">
        <input type="text" className="form-text" placeholder="Top text"/>
        <input type="text" className="form-text" placeholder="Bottom text"/>
        <input type="submit" className="form-submit" />
      </form>
    </div>
  )
}

export default Meme
