import { styled } from '../style/theme';

export const ContentWidth = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  line-height: 1.5em;
`;
