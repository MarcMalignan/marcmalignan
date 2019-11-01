import React, { FC } from 'react';
import { styled } from '../style/theme';
import { ContentWidth, Paragraph } from './commons';

export const Content: FC<{}> = () => (
  <ContentContainer>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin vel ante sit amet viverra. Aenean sed
      est vitae odio lobortis posuere. Fusce ut dignissim velit. Etiam et mattis arcu. Maecenas faucibus eros pretium
      ipsum ullamcorper viverra. Suspendisse consectetur turpis in massa varius, in hendrerit leo gravida. Nulla
      facilisi.
    </Paragraph>
    <Paragraph>
      Morbi sed ligula fringilla, pulvinar sapien in, venenatis tortor. Mauris vel tellus a ex fermentum volutpat at
      quis diam. Suspendisse quam metus, malesuada quis vestibulum eu, tincidunt facilisis metus. Pellentesque
      ullamcorper, nulla vitae blandit vulputate, est nibh rutrum nulla, placerat vehicula magna leo sit amet diam. In
      commodo nulla sed mauris dignissim convallis. Aliquam mattis sapien vel urna cursus vestibulum. Nulla tempor leo
      risus, eget pharetra ex molestie non. Nulla condimentum dolor ut mollis eleifend. Praesent faucibus finibus ante
      eu tincidunt. Fusce faucibus, libero sit amet gravida varius, justo odio luctus mauris, sed mattis mauris dolor ut
      purus. Pellentesque at arcu vulputate, pretium ante luctus, eleifend nunc. Mauris lacinia nunc dolor, a eleifend
      odio molestie fermentum.
    </Paragraph>
    <Paragraph>
      In quis laoreet metus. Duis efficitur malesuada eros ut lacinia. Ut maximus nulla vel viverra ultricies. Integer
      mattis libero ut aliquet ultrices. Nullam at condimentum erat. Aliquam metus mauris, finibus vitae ornare vel,
      viverra ut neque. Suspendisse molestie hendrerit sem vitae consectetur. Cras velit arcu, ullamcorper in dapibus
      nec, interdum eu diam. Maecenas id ligula non ligula efficitur accumsan. Pellentesque in vulputate arcu, sed
      dictum nibh. Donec sit amet mi quis odio fringilla ullamcorper eget in mauris. Ut et ligula ex. Mauris aliquam et
      lorem vitae aliquet. Duis pulvinar varius velit vitae malesuada. Mauris mauris nunc, sollicitudin sit amet posuere
      et, ultrices non mi. Etiam mattis arcu non nunc tempus, at vestibulum nisl dictum.
    </Paragraph>
    <Paragraph>
      Maecenas id fringilla ante, nec vestibulum turpis. Praesent aliquam posuere libero, placerat dignissim neque
      faucibus ac. Curabitur cursus, justo sed fringilla elementum, diam mi scelerisque metus, sit amet tempor magna
      neque vitae purus. Morbi varius fringilla lorem id tempor. Cras sed massa eget velit pulvinar blandit vitae ut
      enim. Morbi molestie ut sem a fermentum. Curabitur lobortis luctus arcu eu suscipit.
    </Paragraph>
    <Paragraph>
      Aliquam ut mi tortor. Aenean rhoncus orci a ultrices eleifend. Nunc ac sollicitudin odio. Sed varius orci eget
      risus bibendum, vitae malesuada ante maximus. Quisque et orci cursus, consectetur purus et, tristique dolor.
      Maecenas lectus nisl, egestas ut consectetur id, rhoncus vel lacus. Donec sed aliquet felis. Nam erat sem, euismod
      nec libero id, elementum tincidunt massa. Donec ultrices leo leo, a laoreet nulla mollis ac. Phasellus ac congue
      quam, vel suscipit orci. Sed suscipit justo sapien, sed venenatis velit dignissim nec. Vivamus ligula orci,
      malesuada et nulla sed, sodales rutrum libero. Morbi dignissim arcu a arcu tempor efficitur. Pellentesque mattis
      dui et lacus imperdiet laoreet. Quisque hendrerit condimentum ultricies.
    </Paragraph>
  </ContentContainer>
);

const ContentContainer = styled(ContentWidth)`
  padding-top: ${({ theme }) => theme.spacings.huge};
  padding-bottom: ${({ theme }) => theme.spacings.huge};
`;
