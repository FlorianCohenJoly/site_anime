import MyButton from './components/home';
import Popup from './components/popup';
import './styles/App.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Navbar from './components/Navbar';



function App() {

  const constraintsRef = useRef(null)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Popup message="j'ai" title='ff' title_button='ok' />
        <Popup message="reussis" title='thomas la merde ' title_button='toto' />
        <Popup message="hehe" />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Hello, Framer Motion!
        </motion.div>
        <motion.div ref={constraintsRef}>
          <motion.div
            drag
            dragConstraints={constraintsRef}

          />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
