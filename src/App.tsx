import { useState } from 'react'

function App() {

  const [text, setText] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const clear = () => {
    setText("")
  }

  let chars = text.length
  let words = text.split(/[\s\n]+/).filter(word => word.length > 0).length

  return(
    <>
      <p className='counter'>{ words } words, {chars} characters</p>
      <form className="form">
        <textarea value={text} onChange={handleChange} className="input" placeholder="Enter your text here"></textarea>
      </form>
      <button onClick={clear}>Clear</button>
    </>
  )
}

export default App