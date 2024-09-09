import React from 'react'
import { Link } from 'react-router-dom'

function Adult() {
  return (
    <div>
        <div className="button-group">
        <div className="card learning">
          <img src="learning.jpeg" className="card-image" alt="" />
          <h1>Learning</h1>
          <button className="level-button"><Link to='/showarticle'>Learning</Link></button>
        </div>
        <div className="card beginner">
          <img src="https://files.oaiusercontent.com/file-YTphv00WBond7ZCBaoUZBUHT?se=2024-08-31T07%3A02%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc1fbd1b6-8ac8-43b0-8036-429bbb84f716.webp&sig=TFIJbPn1NE%2B1Qb9ApCjyNqYPztzXBUDh9KMkVBuhgd0%3D" alt="" className="card-image" />
          <h1>Beginner Level</h1>
          <button className="level-button"><Link to='/level1'>Beginner Level</Link></button>
        </div>
        <div className="card intermediate">
          <img src="https://files.oaiusercontent.com/file-FGUwrfRCzYZWX8k66ys2OJca?se=2024-08-31T07%3A16%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dab183c31-9b1f-447a-85ab-0df20ee6a0d1.webp&sig=YXPeSuoVU22XDdUXMOT9AjROwkhQ0VJBacnQ737xzZM%3D" alt="" className="card-image" />
          <h1 style={{fontSize:"40px"}} >Intermediate Level</h1>
          <button className="level-button"><Link to='/level2'>Intermediate Level</Link></button>
        </div>
        <div className="card advance">
          <img src="https://files.oaiusercontent.com/file-5v4bzKSHlZskpAuLzy9uyGxo?se=2024-08-31T07%3A11%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D65dd995c-de2d-4214-b8ef-046a4feed54e.webp&sig=eQq2dqxUtakcAn1K2dpPs3EIgHyjeGX8nVlGYw6YgNs%3D" alt="" className="card-image" />
          <h1>Advance Level</h1>
          <button className="level-button"><Link to='/level3'>Advanced Level</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Adult