import React, { useState } from 'react'
import Structure from './components/structure/Structure'
import Homepage from './components/homepage/Homepage'
import NameForm from './components/nameForm/NameForm'

const App = () => {
  const [username, setUsername] = useState('')

  
  return (
    <div>
      <Structure />
      {username == '' ? <NameForm username={username} setUsername={setUsername} /> : <Homepage />}
    </div>
  )
}

export default App