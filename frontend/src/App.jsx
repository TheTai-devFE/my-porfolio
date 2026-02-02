import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Placeholder pages - sẽ viết lại sau
function Blog() {
  return (
    <div className="min-h-screen pt-32 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
