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
  ${tw('w-full lg:w-3/4')};
`;

const Avatar = styled.img`
  ${tw('block w-3/4 md:w-1/2 ml-auto mr-auto lg:w-full xl:w-full lg:mr-8 h-auto md:mt-8')};
`;

const IconContainer = styled.div`
  ${tw('text-center lg:text-left')};
`;

const IconWrapper = styled.a`
  ${tw('pr-4 text-center')};
`;

const AvatarParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 580,
        endValue: 100,
        property: 'translateX',
      },
      {
        startValue: 0,
        endValue: 300,
        property: 'translateY',
      },
    ],
  },
  {
    start: 300,
    end: 3000,
    properties: [
      {
        startValue: 300,
        endValue: 3000,
        property: 'translateY',
      },
    ],
  },
];

const HeroParallaxData = [
  {
    start: 0,
    end: 0,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
        startValue: 400,
        endValue: 400,
        property: 'translateX',
      },
    ],
  },
];

const Index = () => (
  <React.Fragment>
    <SEO />
    <Container>
      <Content>
        <Plx parallaxData={AvatarParallaxData}>
          <AvatarContainer>
            <Avatar src={avatar} alt="Marko Bradic" />
          </AvatarContainer>
        </Plx>
        <Plx parallaxData={HeroParallaxData}>
          <Hero>
            <BigTitle>
              Hey, nice to meet you! <br /> I'm <b>Marko Bradic</b>.
            </BigTitle>
            <Subtitle>
              Powered by creative ideas and driven by the technologies of tomorrow I design and develop products &
              services that enrich people’s lives.
            </Subtitle>
            <IconContainer>
              <IconWrapper href="https://www.linkedin.com/in/markobradic/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="2x" />
              </IconWrapper>
              <IconWrapper href="https://www.xing.com/profile/Marko_Bradic/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'xing-square']} color="white" size="2x" />
              </IconWrapper>
            </IconContainer>
          </Hero>
        </Plx>
      </Content>
    </Container>
  </React.Fragment>
);

export default Index;
