
import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./assets/scss/main.scss"  
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import SignUpPage from './Pages/SignUpPage'
import Details from './Pages/DetailsPage';
import NotFound from './Pages/NotFoundPage';
import LogIn from './Pages/LoginPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
