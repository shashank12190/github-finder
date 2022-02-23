import React from 'react'
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/layout/Footer'
import { GitHubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import User from './pages/User'

const App = () => {
  return (
    <GitHubProvider>
      <AlertProvider>

        <Router>
          <div className='flex flex-col justify-between h-screen'>

            <Navbar />
            <main className='container mx-auto px-2 pb-12'>

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/notfound' element={<NotFound />} /> */}
                <Route path='*' element={<NotFound />} />
                <Route path='/user/:login' element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  )
}

export default App
