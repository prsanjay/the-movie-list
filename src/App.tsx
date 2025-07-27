import './App.css'
import { useState, useEffect } from 'react';

interface CardProps {
  title: string
}

const Card = ({ title }: Readonly<CardProps>) => {

  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  // Log when movie is liked/unliked.
  // Using useEffect as we need to do something which is out side of rendering part
  useEffect(() => {
    console.log(`${title} has been liked/unliked ${isLiked}`);
  }, [isLiked]);

  return (
    <div className="card" onClick={() => setCount((currCount: number) => currCount+1)}>
      <h2>{title} -- {count} time clicked</h2>
      <button onClick={() => { setIsLiked(!isLiked) }}>
        {isLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Kung fu Panda" />
    </div>
  )
}

export default App;
