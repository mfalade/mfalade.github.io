import React from 'react';
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from '@styled-icons/boxicons-logos';

import { Container, StyledLink } from './styles';

function SocialLinks() {
  const socialLinks = [
    { href: '', title: 'Link to LinkedIn', icon: Linkedin, id: 'LinkedIn' },
    { href: '', title: 'Link to Github', icon: Github, id: 'Github' },
    { href: '', title: 'Link to Instagram', icon: Instagram, id: 'Instagram' },
    { href: '', title: 'Link to Twitter', icon: Twitter, id: 'Twitter' },
  ];
  return (
    <Container>
      {socialLinks.map(({ id, title, href, icon: Icon }) => (
        <StyledLink key={id} href={href}>
          <Icon title={title} />
        </StyledLink>
      ))}
    </Container>
  );
}

export default SocialLinks;
