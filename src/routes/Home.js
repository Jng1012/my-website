import React from 'react';
import Navbar from '../components/NavBar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Job from '../components/JobExperience';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Job />
      <Footer />
    </div>
  )
}

export default Home
