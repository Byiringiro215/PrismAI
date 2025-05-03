import React, { useRef, useEffect } from 'react';
import './index.css';
import Navbar from './assets/Components/Navbar';
import Intro from './assets/Components/Intro';
import Sidebar from './assets/Components/Sidebar';
import TransformHiring from './assets/pages/TransformHiring';
import HowPrismWorks from './assets/pages/HowPrismWorks';
import Testimonies from './assets/pages/Testimonies';
import Transportation from './assets/pages/Transportation';
import ReadyToTransform from './assets/pages/ReadyToTransform';
import Footer from './assets/pages/Footer';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startTime = 9;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = startTime;
      video.play();
    };

    const loopFromStart = () => {
      video.currentTime = startTime;
      video.play();
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('ended', loopFromStart);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('ended', loopFromStart);
    };
  }, []);

  return (
    <div className="min-h-screen font-poppins bg-[#15192D] overflow-x-hidden">
      <Sidebar />

      <div className="relative h-[100vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <Navbar />
          <Intro />
        </div>
      </div>

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
