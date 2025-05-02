import { useState } from 'react';

import './index.css';
import Navbar from './assets/Components/Navbar';
import Sidebar from './assets/Components/Sidebar';
import Intro from './assets/Components/Intro';
import TransformHiring from './assets/pages/TransformHiring';
import HowPrismWorks from './assets/pages/HowPrismWorks';
import Testimonies from './assets/pages/Testimonies';
import Transportation from './assets/pages/Transportation';
import ReadyToTransform from './assets/pages/ReadyToTransform';
import Footer from './assets/pages/Footer';
import LoginPopUp from './assets/pages/LoginPopUp';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen font-poppins bg-[#15192D] overflow-x-hidden">
      <Sidebar setShowLogin={setShowLogin} />
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <Intro />
      <TransformHiring />
      <HowPrismWorks />
      <Testimonies />
      <Transportation />
      <ReadyToTransform />
      <Footer />
    </div>
  );
}

export default App;
