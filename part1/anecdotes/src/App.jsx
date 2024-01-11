import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const getRandomInt = () => Math.floor(Math.random() * anecdotes.length)

  const setRandom = () => {
    const updatedSelect = getRandomInt
    setSelected(updatedSelect)
  }

  // or: new Uint8Array(anectdotes.length)
  const [ votes, setVotes ] = useState(Array(anecdotes.length).fill(0))

  const copy = [...votes]

  const setToVotes = (index) => {
    copy[index] += 1
    setVotes(copy)
    console.log(copy) // console.log(votes) has async problem
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />has {votes[selected]} votes
      <Button handleClick={()=>setToVotes(selected)} text='vote' />
      <Button handleClick={setRandom} text='next anecdote'/>
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

export default App
