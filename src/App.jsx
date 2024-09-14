import React, { useState } from 'react'
import Structure from './components/structure/Structure'
import Homepage from './components/homepage/Homepage'
import NameForm from './components/nameForm/NameForm'

const App = () => {
  // localStorage.clear()

  const [username, setUsername] = useState('')

  if(localStorage.length == ''){
    localStorage.setItem('user', '')
  }
  


  return (
    <div>
      <Structure />
      {localStorage.getItem('user') == '' ? <NameForm username={username} setUsername={setUsername} /> : <Homepage />}
    </div>
  )
}

export default App