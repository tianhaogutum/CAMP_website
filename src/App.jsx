import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ContactPage from './components/contact/ContactPage'
import ProjectPage from './components/project/ProjectPage'
import ProjectsPage from './components/projects/ProjectsPage'
import TeamPage from './components/team/TeamPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  )
}

export default App