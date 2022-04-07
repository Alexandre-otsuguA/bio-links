import { ReactNode } from 'react';
import NextHead from 'next/head';
import NextImg from 'next/image';
import NextLink from 'next/link';
import useSound from 'use-sound';

import {
  IInstagram,
  ISpotify,
  ITwitter,
  IGithub,
  IClashRoyale
} from 'components/icons';
import * as S from './styles';

type LinkProps = {
  children: ReactNode;
  to: string;
  css: any;
};

export const Link = ({ children, to, ...props }: LinkProps) => {
  const [play] = useSound('/sounds/greeting.mp3', { volume: 1 });

  return (
    <NextLink href={to} passHref>
      <S.link
        target='_blank'
        rel='noopener noreferrer'
        onMouseDown={() => play()}
        {...props}
      >
        {children}
      </S.link>
    </NextLink>
  );
};

const Home = ({
  profile = {
    avatarURL: 'https://github.com/Alexandre-otsuguA.png',
    name: 'AUGUSTO',
    description: `
    Farei do editor uma arena de batalhas épicas entre mim e os bugs,
    cujo único objetivo é alcançar o próximo nível no estilo while(true).
  `,
    links: [
      {
        Icon: IClashRoyale,
        content: 'Clash Royale',
        bg: '$clashRoyale',
        to: 'https://link.clashroyale.com/invite/friend/pt?tag=99J00V898&token=39ttsmsr&platform=android'
      },
      {
        Icon: ITwitter,
        content: 'Twitter',
        bg: '$twitter',
        to: 'https://twitter.com/aleaugusto_eth'
      },
      {
        Icon: IInstagram,
        content: 'Instagram',
        bg: '$instagram',
        to: 'https://www.instagram.com/aleaugusto.dev/'
      },
      {
        Icon: IGithub,
        content: 'GitHub',
        bg: '$github',
        to: 'https://github.com/Alexandre-otsuguA'
      },
      {
        Icon: ISpotify,
        content: 'Spotify',
        bg: '$spotify',
        to: 'https://open.spotify.com/user/7n7pie29ertzd6yki2e577fjn'
      }
    ]
  }
}) => {
  return (
    <>
      <NextHead>
        <title>{profile.name}</title>
        <meta name='description' content={profile.description} />
      </NextHead>
      <S.root>
        <S.header>
          <S.avatar>
            <NextImg
              src={profile.avatarURL}
              alt={`${profile.avatarURL} Face`}
              width={64}
              height={64}
              objectFit='cover'
              quality={100}
              priority
              draggable={false}
            />
          </S.avatar>
          <S.name>{profile.name}</S.name>
        </S.header>
        <S.main>
          <p>{profile.description}</p>
        </S.main>
        <S.links>
          {profile.links.map(({ Icon, content, bg, ...props }, idx) => (
            <li key={content}>
              <Link css={{ bg, animationDuration: `.${idx + 4}s` }} {...props}>
                <Icon />
                {content}
              </Link>
            </li>
          ))}
        </S.links>
      </S.root>
    </>
  );
};

export default Home;
