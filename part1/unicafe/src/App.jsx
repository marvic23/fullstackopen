import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

// combine with d3.js later
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = ( (good * 1) + (bad * -1) ) / total
  const positive = good / total

  return total === 0 ? (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  ) : (
    <div>
      <h2>statistics</h2>
      <table>
      <tbody>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App