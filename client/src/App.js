import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import SavedIdeasPage from './pages/SavedIdeasPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 120px)', py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/saved" element={<SavedIdeasPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
