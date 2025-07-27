import './App.css'

interface CardProps {
  title: string
}

const Card = ({ title }: Readonly<CardProps>) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Use of Props</h2>
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Kung fu Panda" />
    </div>
  )
}

export default App;
