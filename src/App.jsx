import React, { Suspense, useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoadingPage from './Components/LoadingPage'; // Import the LoadingPage component

const Section_1 = React.lazy(() => import('./Components/Section1/Section_1'));
const Section2 = React.lazy(() => import('./Components/Section2/Section2'));
const Section3 = React.lazy(() => import('./Components/Section3/Section3'));
const Section4 = React.lazy(() => import('./Components/Sections4/Section4'));
const Wheel = React.lazy(() => import('./Components/Wheel'));

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 5 seconds
    }, 4000);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Section_1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Wheel />
            <Footer />
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
