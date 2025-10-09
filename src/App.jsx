import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ContactPage from './components/contact/ContactPage'
import ProjectPage from './components/project/ProjectPage'
import Project1 from './components/project/Project1'
import Project2 from './components/project/Project2'
import Project3 from './components/project/Project3'
import Project4 from './components/project/Project4'
import Project5 from './components/project/Project5'
import Project6 from './components/project/Project6'
import Project7 from './components/project/Project7'
import Project8 from './components/project/Project8'
import Project9 from './components/project/Project9'
import Project10 from './components/project/Project10'
import Project11 from './components/project/Project11'
import Project12 from './components/project/Project12'
import ProjectsPage from './components/projects/ProjectsPage'
import TeamPage from './components/team/TeamPage'
import { Imprint } from './components/legal/Imprint'
import { DataProtection } from './components/legal/DataProtection'
import { SFDR } from './components/legal/SFDR'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
        <Route path="/project7" element={<Project7 />} />
        <Route path="/project8" element={<Project8 />} />
        <Route path="/project9" element={<Project9 />} />
        <Route path="/project10" element={<Project10 />} />
        <Route path="/project11" element={<Project11 />} />
        <Route path="/project12" element={<Project12 />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/sfdr" element={<SFDR />} />
      </Routes>
    </Router>
  )
}

export default App