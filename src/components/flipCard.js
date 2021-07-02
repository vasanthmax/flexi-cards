import React from 'react';
const FlipCard = ({
  Name,
  Title,
  Price,
  Description,
  Goto,
  Photo,
  flipTitleSize,
  flipTitleColor,
  FlipNameColor,
  FlipNameSize,
  FlipCardColor,
  FlipPriceColor,
  FlipPriceSize,
  FlipDescriptionColor,
  FlipDescriptionSize,
  FlipButtonColor,
  FlipButtonTextColor,
  FlipFont,
}) => {
  return (
    <div className='flipcover' style={{ fontFamily: `${FlipFont}` }}>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src={Photo}
              alt='Avatar'
              style={{ height: '300px', width: '300px' }}
            />
            <p
              className='front-title'
              style={{
                fontSize: `${flipTitleSize}px`,
                color: `${flipTitleColor}`,
              }}
            >
              {Title}
            </p>
          </div>
          <div
            className='flip-card-back'
            style={{
              backgroundColor: `${FlipCardColor}`,
            }}
          >
            <h1
              className='title-back'
              style={{
                fontSize: `${FlipNameSize}px`,
                color: `${FlipNameColor}`,
              }}
            >
              {Name}
            </h1>
            <p
              className='price'
              style={{
                fontSize: `${FlipPriceSize}px`,
                color: `${FlipPriceColor}`,
              }}
            >
              {Price}
            </p>
            <p
              className='product-details'
              style={{
                fontSize: `${FlipDescriptionSize}px`,
                color: `${FlipDescriptionColor}`,
              }}
            >
              {Description}
            </p>

            <a href={`${Goto}`} target=''>
              <button
                className='goto'
                style={{
                  background: `${FlipButtonColor}`,
                  color: `${FlipButtonTextColor}`,
                }}
              >
                Go to
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
