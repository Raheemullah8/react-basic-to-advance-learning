import UsercontextProvider from './assets/context/UsercontextProvider'
import './App.css'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {
 

  return (
    <UsercontextProvider>
  
     <Login />
     <Profile />  
    </UsercontextProvider>
  )
}

export default App
