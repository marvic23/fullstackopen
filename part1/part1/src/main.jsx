import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

/*
# npm 6.x (outdated, but still used by some):
npm create vite@latest part1 --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest part1 -- --template react

cd part1
npm install

# The application is started as follows
npm run dev
*/