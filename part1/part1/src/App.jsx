const Hello = (props) => {
  console.log(props);

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='World' age='6000' />
      <Hello name='John' age='18' />
      <Hello name='Paul' age='20' />
      <Hello name={name} age={age} />
    
    </div>
  )
}

export default App
