import { useEffect } from 'react';
import Splitter from 'split-html-to-chars';
import { TimelineLite, Back } from 'gsap';
import classNames from 'classnames';

import Page from 'components/page';

import {
  homeContainer,
  home,
  charHighlighted,
  fullName,
  fullNameContainer,
  hoverEffect,
  hoverEffectTop,
  hoverEffectBottom
} from './scss/Home.scss';
import { createRandomOrigin, getRandomDuration } from './Home.helpers';

const Home = () => {
  const timeline = new TimelineLite();
  const defaultPosition = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    ease: Back.easeOut,
    rotation: 0
  };
  useEffect(() => {
    const target = document.getElementById('MayowaFalade');
    target.outerHTML = Splitter(
      target.outerHTML,
      '<span class="character">$</span>'
    );
    const characterNodes = document.getElementsByClassName('character');

    timeline.to('#MayowaFalade', 0, { opacity: 1 });
    [].forEach.call(characterNodes, (character, i) => {
      timeline.fromTo(
        character,
        getRandomDuration(),
        createRandomOrigin(i),
        defaultPosition,
        0
      );
    });
  });

  return (
    <Page>
      <div className={homeContainer}>
        <div className={home}>
          <div className={fullNameContainer}>
            <span className={classNames(hoverEffect, hoverEffectTop)} />
            <h1 id="MayowaFalade" className={fullName}>
              <span className={classNames(charHighlighted, 'character')}>
                M
              </span>
              ayowa
              <span className={classNames(charHighlighted, 'character')}>
                F
              </span>
              alade
            </h1>
            <span className={classNames(hoverEffect, hoverEffectBottom)} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
