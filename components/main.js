import React from 'react';
import HeaderContainer from '../containers/header/header_container';
import HomeContainer from '../containers/home/home_container';
import AboutUsContainer from '../containers/about_us/about_us_container';
import TeamContainer from '../containers/team/team_container';
import RecruitmentContainer from '../containers/recruitment/recruitment_container';
import ContactContainer from '../containers/contact/contact_container';
import Footer from '../components/footer/footer'

const Main = () =>(
    <div style={{'minWidth': '1480px'}} >
       <HeaderContainer/>
       <HomeContainer/>
       <AboutUsContainer/>
       <TeamContainer/>
       <RecruitmentContainer/>
       <ContactContainer/>
       <Footer/>
    </div>
);

export default Main;
