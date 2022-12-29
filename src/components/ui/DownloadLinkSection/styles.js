import styled from 'styled-components';
import tw from 'tailwind.macro';

export const LinkButtonSection = styled.div`
  ${tw`flex flex-wrap  w-full`};
`;

export const LinkButton = styled.a`
outline: none !important;

${tw`py-2 px-8 rounded-full border border-blue-500 text-white`};

${({ primary }) => (primary ? tw`bg-blue-500` : tw`text-blue-500`)};

/* This renders the buttons above... Edit me! */

  ${tw`uppercase mb-4 text-lg font-bold text-left`};
  ${({ center }) => center && tw`text-center`};

`;

