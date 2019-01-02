import React from 'react';
import styled from 'react-emotion';
import Plx from 'react-plx';
import tw from '../../tailwind';

const BigTitle = styled.h1`
  ${tw(
    'font-sans font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 tracking-wide text-center lg:text-left'
  )};
`;

const JobDesc = styled.p`
  ${tw('text-xs md:text-m lg:text-m xl:text-xl')};
`;

const JobLink = styled.a`
  ${tw('text-blue hover:text-blue-light')};
`;

const GreetingPlxData = [
  {
    start: 0,
    duration: 100,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
      {
        startValue: 30,
        endValue: 0,
        property: 'translateY',
      }
    ],
  },
];

const Greeting = () => (
  <Plx parallaxData={GreetingPlxData}>
    <BigTitle>
      Hey, nice to meet you!
      <br />
      <br />
      <span>
        I'm <b>Marko Bradic</b>
      </span>
      <br />
      <JobDesc>
        Product Manager
        <JobLink href="https://deloittedigital.de" rel="noopener" target="_blank">
          @DeloitteDigital
        </JobLink>
      </JobDesc>
    </BigTitle>
  </Plx>
);

export default Greeting;
