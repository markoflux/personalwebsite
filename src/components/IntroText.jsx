import React from 'react';
import styled from 'react-emotion';
import Plx from 'react-plx';
import tw from '../../tailwind';

const Subtitle = styled.p`
  ${tw('font-sans text-white text-xs md:text-lg lg:text-2xl xl:text-3xl md:my-4 lg:mt-8 text-center lg:text-left')};
`;

const IntroTextPlxData = [
  {
    start: 0,
    duration: 450,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
  {
    start: 100,
    duration: 200,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
        startValue: 150,
        endValue: 150,
        property: 'translateY',
      },
    ],
  },
  {
    start: 300,
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

const IntroText = () => (
  <Plx parallaxData={IntroTextPlxData}>
    <Subtitle>
      Powered by creative ideas and driven by the technologies of tomorrow I design and develop products &
      services that enrich people’s lives
    </Subtitle>
  </Plx>
);

export default IntroText;
