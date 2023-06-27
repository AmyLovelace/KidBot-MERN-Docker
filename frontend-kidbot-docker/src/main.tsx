import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StoryForm from './components/StoryForm'
import Navbar from './types/navBar'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Navbar appName="KidBot"/>
    <StoryForm/>
  </React.StrictMode>
)
