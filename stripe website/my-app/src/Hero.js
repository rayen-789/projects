import React from 'react';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src='https://raw.githubusercontent.com/john-smilga/react-projects/181d6adf89c8c61c72a0b8c5c1a8ad6af15e6d19/13-stripe-submenus/final/src/images/hero.svg' className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;