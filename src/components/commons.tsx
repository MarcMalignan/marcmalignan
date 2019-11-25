import { styled } from '../style/theme';

export const ContentWidth = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.small};
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 3em;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    font-size: 2.5em;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  line-height: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ParagraphInsert = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.small} 0;

  &:last-child {
    margin-bottom: 0;
  }
`;
