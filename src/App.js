// import { useState } from 'react';
// import './App.css'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
// import Alerts from './components/Alerts'
// import {
//   BrowserRouter as Router,
//   Routes, // Change Switch to Routes
//   Route
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'grey';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar TextUtil="TextUtils" Home=" Home" AboutUs="About Us" mode={mode} toggleMode={toggleMode} />
//         <Alerts alert="This is alert" />
//         <div className="container my=3">
//           {/* <Routes> Change Switch to Routes */}
//             {/* <Route exact path="/about" element={<About />} /> */}
//             {/* <Route exact path="/" element={<TextForm heading="Enter your text below to analyze" mode={mode} />} /> */}
//           {/* </Routes> */}
//           <TextForm heading="Enter your text below to analyze" mode={mode} />
//           <About />
//         </div>
//       {/* </Router> */}
//     </>
//   );
// }

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBackgroundColor('grey');
    } else {
      setMode('light');
      setBackgroundColor('white');
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Navbar TextUtil="TextUtils" Home=" Home" AboutUs="About Us" mode={mode} toggleMode={toggleMode} />
      <Alerts alert="This is alert" />
      <div className="container my-3">
        <TextForm heading="Enter your text below to analyze" mode={mode} />
        <About/>
      </div>
    </div>
  );
}

export default App;



// export default App;
