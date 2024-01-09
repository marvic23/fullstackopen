import { useState } from 'react'

const Hello = ({ name, age }) => {
  //const { name, age } = props;

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  // destructuring assignment (see bottom comment)
  // useState(0) returns an array initialized with the value 0
  // counter starts as 0
  // setCounter modifies the state e.g. setCounter(2)
  const [ counter, setCounter ] = useState(0);

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  console.log("rendering component " + counter)

  const handleClick = () => {
    console.log("clicked")
  }

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='World' age='6000' />
      <Hello name='John' age='18' />
      <Hello name='Paul' age='20' />
      <Hello name={name} age={age} />

      <p>Counter: {counter}</p>

      <button onClick={handleClick}>plus</button>
      <button onClick={increaseByOne}>inc counter</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}

/* DESTRUCTURING ASSIGNMENT
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
*/

/* OLD REACT
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}


setTimeout(arto.greet.bind(auto), 1000)
*/

export default App
