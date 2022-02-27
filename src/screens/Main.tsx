import React, { Component } from 'react';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import Perks from './Perks';
import AnimRoadmap from '../other/AnimRoadmap';
import Roadmap from './Roadmap';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Story from './Story';
import MainPageHeader from './MainPageHeader';
import { Link } from 'react-router-dom';
import { showCanvas } from '../other/helper';

export default class Main extends Component {
  render() {
    showCanvas()
    return <div>
     <MainPageHeader/>

      <SectionOne />
     
      {/* <Story /> */}
     
      <AnimRoadmap />

      <Roadmap />


      {/* <FAQ /> */}

      <Footer />
    </div>;
  }
}
