import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Execute a função do pai</button>

    </div>
  )
}

export default ExecuteFunction