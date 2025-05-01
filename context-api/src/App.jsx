import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import userContextProvider from './context/UserContextProvider'

function App() {

  return (
    <userContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </userContextProvider>
  )
}

export default App
