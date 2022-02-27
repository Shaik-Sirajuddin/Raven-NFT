import React, { Component } from 'react';
import Footer from './Footer';
import AnimRoadmap from '../other/AnimRoadmap';
import Roadmap from './Roadmap';
import SectionOne from './SectionOne';
import MainPageHeader from './MainPageHeader';
import { showCanvas } from '../other/helper';
export default class Main extends Component {
    render() {
        showCanvas();
        return <div>
     <MainPageHeader />

      <SectionOne />
     
      {/* <Story /> */}
     
      <AnimRoadmap />

      <Roadmap />


      {/* <FAQ /> */}

      <Footer />
    </div>;
    }
}
