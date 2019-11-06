import { styled } from '../style/theme';

export const ContentWidth = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 3em;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  line-height: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;
