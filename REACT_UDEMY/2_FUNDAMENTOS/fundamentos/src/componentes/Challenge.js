const Challenge = () => {

    const a = 2
    const b = 5

    const handleMySumEvent = () =>{
        console.log(a + b )
    }

    return(<div>

        <h1>{a}</h1>
        <h1>{b}</h1>
        <button onClick = {handleMySumEvent}>Some a e b</button>
        </div>
    )
}

export default Challenge