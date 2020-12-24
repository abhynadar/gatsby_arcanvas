import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
${tw`bg-gray-100 border-b border-gray-200 -mb-px`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;
