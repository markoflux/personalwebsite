/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Plx from 'react-plx';
import SEO from '../components/SEO';
// import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
// import { hidden } from '../styles/utils';
// import { colors } from '../../tailwind';
import avatar from '../images/avatar.png';
import '../styles/global';

library.add(fas, far, fab);

const Container = styled.div`
  ${tw('container w-full absolute pin-b')};
`;

const Content = styled.div`
  ${tw('flex flex-col-reverse lg:flex lg:flex-row items-center')};
`;

const Hero = styled.div`
  ${tw('p-4 w-full md:w-2/3 block lg:w-1/3 xl:w-1/3 lg:mr-auto')};
`;

const BigTitle = styled.h1`
  ${tw(
    'font-sans font-normal text-xl md:text-2xl lg:text-2xl xl:text-4xl text-white mb-6 tracking-wide text-center lg:text-left'
  )};
`;

const Subtitle = styled.p`
  ${tw('font-sans text-white text-xs md:text-lg lg:text-lg xl:text-2xl md:my-4 lg:mt-8 text-center lg:text-left')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const AvatarContainer = styled.div`
  ${tw('w-full lg:w-1/2')};
`;

const Avatar = styled.img`
  ${tw('block w-1/2 md:w-3/5 ml-auto mr-auto lg:w-3/5 xl:w-1/2 lg:mr-8 h-auto md:mt-8')};
`;

const IconContainer = styled.div`
  ${tw('text-center lg:text-left')};
`;

const IconWrapper = styled.a`
  ${tw('pl-2 pr-2 lg:pl-0 lg:pr-4 text-center')};
`;

const JobDesc = styled.p`
  ${tw('text-xs md:text-m lg:text-m xl:text-lg')};
`;

const JobLink = styled.a`
  ${tw('text-blue hover:text-blue-light')};
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <Container>
      <Content>
        <AvatarContainer>
          <Avatar src={avatar} alt="Marko Bradic" />
        </AvatarContainer>
        <Hero>
          <BigTitle>
            👋🏻 Hey, nice to meet you!
            <br />
            <br />
            <span>
              I'm <b>Marko Bradic</b>
            </span>
            <br />
            <JobDesc>
              Product Manager
              <JobLink href="https://deloittedigital.de" target="_blank">
                @DeloitteDigital
              </JobLink>
            </JobDesc>
          </BigTitle>
          <Subtitle>
            Powered by creative ideas and driven by the technologies of tomorrow I design and develop products &
            services that enrich people’s lives
          </Subtitle>
          <IconContainer>
            <IconWrapper href="https://www.linkedin.com/in/markobradic/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" className="hover-blue" size="2x" />
            </IconWrapper>
            <IconWrapper href="https://www.xing.com/profile/Marko_Bradic/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'xing-square']} color="white" className="hover-blue" size="2x" />
            </IconWrapper>
          </IconContainer>
        </Hero>
      </Content>
    </Container>
  </React.Fragment>
);

export default Index;
