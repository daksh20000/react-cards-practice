
import './App.css'
import Card from './Components/Card/Card'
import data from './Utils/data'

function App() {


  return (
    <>
    <h1 className='heading'> Caraousel heading</h1>
    <div className="container">
      {data.map((item)=>{
        return <Card {...item}/>
      })}
    </div>
    
    </>
  )
}

export default App
