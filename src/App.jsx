import {useState} from 'react'
import data from './resources/countryData.json'
import "./App.css"

function App() {

    const [value, setValue] = useState("")
    const [output, setoutput] = useState([])

    const search = (e) => {
        const inputValue = e.target.value.toLowerCase()
        setValue(inputValue);
        const filteredData = data
          .filter((item) => item.name.toLowerCase().startsWith(inputValue))
          .slice(0, 10)
        setoutput(filteredData.map((item) => item.name))
      };

      function handleEscape(event) {
        if (event.key === "Escape" && value.trim() !== "") {
          console.log("Escape")
          setoutput([])
          setValue("")
        }
      }


    return (
        
        <div id='container'>

          <div id='flexbox'>

          <h1 id='heading' >Search !</h1>
          
          <div id='search-holder'>
            <input type="text" value={value} onChange={(e) => {search(e)}} onKeyDown={handleEscape} placeholder="Country name..."/>
            <button>Search</button>
          </div>
          
          {output.map((item, index) => (
            <div className='items' id={index}> {item} </div>
          ))}

          </div>
          
        
        </div>
  
  )
}

export default App
