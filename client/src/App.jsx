import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from 'components/Header'
import TeachersPage from 'pages/TeachersPage'
import ClassesPage from './pages/ClassesPage'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/classes" />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/classes" element={<ClassesPage />} />
    </Routes>
  </BrowserRouter>
)

export default App