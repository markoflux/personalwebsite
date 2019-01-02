/* global tw */
import React from 'react';
import styled from 'react-emotion';
import Delay from 'react-delay';
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
import Greeting from '../components/Greeting';
import IntroText from '../components/IntroText';

library.add(fas, far, fab);

const StartPage = styled.div``;

const Container = styled.div`
  ${tw('container w-full absolute pin-b')};
`;

const Content = styled.div`
  ${tw('flex flex-col-reverse lg:flex lg:flex-row items-center')};
`;

const Hero = styled.div`
  ${tw('p-4 w-full md:w-2/3 block lg:w-1/3 xl:w-1/3 lg:mr-auto xl:mr-auto')};
`;

const AvatarContainer = styled.div`
  ${tw('w-full lg:w-1/2')};
`;

const Avatar = styled.img`
  ${tw('block w-2/3 md:w-1/2 ml-auto mr-auto lg:w-1/2 xl:w-1/2 lg:mr-8 h-auto md:mt-8')};
`;

const AvatarParallaxData = [
  {
    start: 0,
    duration: 3000,
    properties: [
      {
        startValue: 0,
        endValue: 3000,
        property: 'translateY',
      },
    ],
  },
];

const Index = () => (
  <React.Fragment>
    <SEO />
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <Delay wait={25}>
      <Container>
        <Content>
          <AvatarContainer>
            <Plx parallaxData={AvatarParallaxData}>
              <Avatar src={avatar} alt="Marko Bradic" />
            </Plx>
          </AvatarContainer>
          <Hero>
            <Greeting />
            <IntroText />
          </Hero>
        </Content>
      </Container>
    </Delay>
  </React.Fragment>
);

export default Index;
