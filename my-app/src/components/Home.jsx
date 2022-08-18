import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav style={{display:"flex", flexDirection:"column"}}>
        <Link to="/state">UseState Hook</Link>
        <Link to="/effect">UseEffect Hook</Link>
        <Link to="/context">UseContext Hook</Link>
        <Link to="/reducer-state">UseReducerwithState Hook</Link>
        <Link to="/reducer">UseReducer Hook</Link>
        <Link to="/ref">UseRef Hook</Link>
        <Link to="/memo">UseMemo Hook</Link>
        <Link to="/callback">UseCallback Hook</Link>
        <Link to="/custom">Custom Hook</Link>
      </nav>
    </div>
  )
}

export default Home