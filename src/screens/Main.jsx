import React, { Component } from 'react';
import Footer from './Footer';
import Roadmap from './Roadmap';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import MainPageHeader from './MainPageHeader';
import Testimonial from './Testimonial';
import Team from './Team';
import CareFacility from './CareFacility';
import Banner from './banner';
export default class Main extends Component {
    render() {
       
        return <div>
      <Banner/>
      <MainPageHeader />
      <SectionOne />
      <SectionTwo />
      <Testimonial/>
      <Roadmap/>
      <CareFacility/>
      <Team/>
      <Footer />
    </div>;
    }
}
