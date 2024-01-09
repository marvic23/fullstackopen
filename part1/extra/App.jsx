import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  // GOOD PRACTICE
  const results = filterItems(foods, query)

  function handleChange(e) {
    setQuery(e.target.value)
  }
  
  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  /* REMOVED FROM SEARCHBAR, LIFTING STATE UP https://react.dev/learn/sharing-state-between-components
  const [query, setQuery] = useState('');
  
  function handleChange(e) {
    setQuery(e.target.value)
  }
  */

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
