import React from 'react';
import styled from 'react-emotion';
import Plx from 'react-plx';
import tw from '../../tailwind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`
  ${tw('text-center lg:text-left')};
`;

const IconWrapper = styled.a`
  ${tw('pl-2 pr-2 lg:pl-0 lg:pr-4 text-center')};
  color: transparent;
`;

const SocialMedia = () => (
  <IconContainer>
    <IconWrapper href="https://www.linkedin.com/in/markobradic/" rel="noopener" target="_blank">
      .
      <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" className="hover-blue" size="2x" />
    </IconWrapper>
    <IconWrapper href="https://www.xing.com/profile/Marko_Bradic/" rel="noopener" target="_blank">
      .
      <FontAwesomeIcon icon={['fab', 'xing-square']} color="white" className="hover-blue" size="2x" />
    </IconWrapper>
  </IconContainer>
);

export default SocialMedia;