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

const LeftAndRight = () => {
  const [ clicks, setClicks ] = useState({
    left: 0,
    right:0
  })
  const [ allClicks, setAll ] = useState([])
  const [ total, setTotal ] = useState(0)

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    console.log("left before", clicks.left)
    setClicks(newClicks)
    console.log("left after", clicks.left) // async problem
    setAll(allClicks.concat('L')) //don't use push 

    setTotal(clicks.left + clicks.right)
  }

  const handleRightClick = () => {
    console.log("right before", clicks.right)
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
    console.log("right after", clicks.right) // async problem
    setAll(allClicks.concat('R'))

    setTotal(clicks.left + clicks.right)
  }

  return (
    <div>
      <h3>Left and Right</h3>
      Left: {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      Right: {clicks.right}
      <button onClick={handleRightClick}>right</button>
      <p>{allClicks.join(' ')}</p>
      <p>total: {total}</p>
    </div>
  )
}

const History = (props) => {
  return props.allClicks.length === 0 ? (
    <div>
      the app is used by pressing the buttons
    </div>
  ) : (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const LeftAndRight2 = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])
  const [ total, setTotal ] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))

    const updatedLeft = left + 1 // fix async

    setLeft(updatedLeft)

    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))

    const updatedRight = right + 1

    setRight(updatedRight)

    setTotal(left + updatedRight)
  }

  return (
    <div>
      <h3>Left and Right 2</h3>
      Left: {left}
      <button onClick={handleLeftClick}>left</button>
      Right: {right}
      <button onClick={handleRightClick}>right</button>
      <History allClicks={allClicks} />
      <p>total: {total}</p>
    </div>
  )
}


const HelloButton = () => {
  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      <h2>Hello button</h2>
      <button onClick={hello('world')}>world</button>
      <button onClick={hello('react')}>react</button>
      <button onClick={hello('function')}>function</button>
    </div>
  )
}



const Display = ({ counter }) => <div>Counter: {counter}</div>

const Button = ({ text, handleClick }) =>
(
  <button onClick={handleClick}>{text}</button>
)


const App = () => {
  // destructuring assignment (see bottom comment)
  // useState(0) returns an array initialized with the value 0
  // counter starts as 0
  // setCounter modifies the state e.g. setCounter(2)
  const [ counter, setCounter ] = useState(0);


  // OBS: useState and useEffect (HOOKS) CANNOT BE USED 
  // INSIDE LOOPS, CONDITIONAL EXPRESSIONS OR
  // ANY PLACE THAT IS NOT DEFINING A COMPONENT


  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  console.log('rendering with counter value', counter)

  // const handleClick = () => {
  //   console.log("clicked")
  // }

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='World' age='6000' />
      <Hello name='John' age='18' />
      <Hello name='Paul' age='20' />
      <Hello name={name} age={age} />

      <Display counter={counter}/>

      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={setToZero} text='zero' />
      <Button handleClick={decreaseByOne} text='minus' />

      <LeftAndRight />
      <LeftAndRight2 />

      <HelloButton />

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
    console.log('hello, my name is ', this.name)
  },
}


setTimeout(arto.greet.bind(auto), 1000)
*/

export default App
