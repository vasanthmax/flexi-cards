import React from 'react';
import Tick from '../assets/tick.png';

const PricingCard = ({
  planName,
  planPrice,
  planLink,
  planfeature1,
  planfeature2,
  planfeature3,
  planfeature4,
  planfeature5,
}) => {
  return (
    <div className='PricingCard'>
      <h3 className='plan-pricing'>{planName}</h3>
      <h1 className='price'>
        {planPrice} <span>INR</span>
      </h1>
      <a href={planLink}>
        <button>Get Started</button>
      </a>
      <ul>
        {planfeature1 === '' ? (
          ''
        ) : (
          <li>
            <span>
              <img src={Tick} alt='' />
            </span>{' '}
            {planfeature1}
          </li>
        )}
        {planfeature2 === '' ? (
          ''
        ) : (
          <li>
            <span>
              <img src={Tick} alt='' />
            </span>{' '}
            {planfeature2}
          </li>
        )}
        {planfeature3 === '' ? (
          ''
        ) : (
          <li>
            <span>
              <img src={Tick} alt='' />
            </span>{' '}
            {planfeature3}
          </li>
        )}
        {planfeature4 === '' ? (
          ''
        ) : (
          <li>
            <span>
              <img src={Tick} alt='' />
            </span>{' '}
            {planfeature4}
          </li>
        )}
        {planfeature5 === '' ? (
          ''
        ) : (
          <li>
            <span>
              <img src={Tick} alt='' />
            </span>{' '}
            {planfeature5}
          </li>
        )}
      </ul>
    </div>
  );
};

export default PricingCard;
