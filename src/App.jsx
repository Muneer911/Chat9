import './App.css'
import { Brand,Cta,Navbar } from './components'
import { Blog,Footer,Possibility,WhatGPT,Header,Features } from './Container'
function App() {

  return (
    
      <div className='app'>
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
          
        </div>
       <div>
            <Brand/>
            <WhatGPT/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
      </div>
    
  )
}

export default App
