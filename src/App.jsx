 import React from 'react';
import Navbar from './components/Navbar';
 
 const App = () => {
  return (
    <main>
       <header className='flex items-center justify-between py-6 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>

          {/* => Background Color set  */}
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          {/* => Import Navbar */}
          <Navbar />
          
       </header>
    </main>
  );
 };
 
 export default App;