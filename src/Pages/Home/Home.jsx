import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the World's largest cryptocurrecy Marketplace. Sign up to explore more about cryptocurrecy</p>

        <form action="">
            <input type="text" placeholder='Search crypto..' />
            <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home;