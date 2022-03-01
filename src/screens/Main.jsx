import React, { Component } from 'react';
import Footer from './Footer';
import AnimRoadmap from '../other/AnimRoadmap';
import Roadmap from './Roadmap';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Perks from './Perks';
import MainPageHeader from './MainPageHeader';
import { useRef } from 'react';
export default class Main extends Component {
    render() {
       
        return <div>
      <MainPageHeader />
      <SectionOne />
      <SectionTwo />
      <Roadmap/>
      <Footer />
    </div>;
    }
}
