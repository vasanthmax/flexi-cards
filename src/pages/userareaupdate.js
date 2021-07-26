import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Card from '../components/Card';
import { Collapse } from 'antd';
import { Slider } from 'antd';
import FlipCard from '../components/flipCard';
import PricingCard from '../components/pricingCard';
import { useSelector, useDispatch } from 'react-redux';
import { FlexiApiGet } from '../action/FlipCardGet';
import { FlexiNormalApiGet } from '../action/NormalCardget';
import { FlexiPricingApiGet } from '../action/PricingCardGet';
import { UpdateCards } from '../action/updateAction';

const { Panel } = Collapse;

const UserAreaUpdate = () => {
  const dispatch = useDispatch();
  const cardid = new URLSearchParams(window.location.search).get('id');
  const sheetid = new URLSearchParams(window.location.search).get('sheet');
  const cardTypeParams = window.location.pathname.split('/').pop();
  const cardTypeSelector = useSelector(
    (state) =>
      state[`${cardTypeParams.toLowerCase()}getReducer`][
        `${cardTypeParams.toLowerCase()}card`
      ]?.data
  );

  console.log(cardTypeSelector);
  useEffect(() => {
    if (cardTypeParams === 'Flip') {
      dispatch(FlexiApiGet(cardid));
    }
    if (cardTypeParams === 'Pricing') {
      dispatch(FlexiPricingApiGet(cardid));
    }
    if (cardTypeParams === 'Normal') {
      dispatch(FlexiNormalApiGet(cardid));
    }
    Tabletop.init({
      key: sheetid.toString(),
      simpleSheet: true,
    })

      .then((lol) => {
        console.log(lol[0]);
        setSinglecard(lol[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [cardType, setCardType] = useState();
  if (cardTypeSelector) {
    setTimeout(() => {
      setCardType(cardTypeSelector.cardtype);
    }, 1000);
  }

  const selector = useSelector((state) => state.flipReducer.flip);
  const selectorPricing = useSelector((state) => state.pricingReducer.pricing);
  const selectorNormal = useSelector((state) => state.normalReducer.normal);

  const [cardColor, setCardColor] = useState('#ffffff');
  const options = ['Normal', 'Flip', 'Pricing'];
  const [id, setId] = useState('');
  const [singleCard, setSinglecard] = useState();
  const [keys, setkey] = useState([]);
  const AvatarShape = ['Round', 'Square', 'Rounded square'];
  const defaultShape = AvatarShape[0];
  const [avatar, setAvatarShape] = useState(defaultShape);
  const [nameColor, setnameColor] = useState('#000000');
  const [nameSize, setnameSize] = useState('21');
  const [positionColor, setpositionColor] = useState('#777777');
  const [positionSize, setpositionSize] = useState('18');
  const [titleSize, setTitleSize] = useState('21');
  const [titleColor, setTitleColor] = useState('#000000');
  const [reviewSize, setReviewSize] = useState('17');
  const [reviewColor, setReviewColor] = useState('#777777');

  const [serviceColor, setServiceColor] = useState('#000000');
  const [serviceSize, setServiceSize] = useState('14');

  const dropdown2 = [
    'Photo',
    'Name',
    'Title',
    'Ratings',
    'Position',
    'Review',
    'Logo',
    'Service',
    'Default',
  ];
  const flipcardDropdown = [
    'Title',
    'Name',
    'Price',
    'Photo',
    'Description',
    'Goto',
  ];
  const pricingDropdown = [
    'Plan Name',
    'Plan Price',
    'Plan Link',
    'Plan Feature 1',
    'Plan Feature 2',
    'Plan Feature 3',
    'Plan Feature 4',
    'Plan Feature 5',
  ];
  // FlipCard Constants
  const [Fliptitle, setFlipTitle] = useState('Title');
  const [FlipName, setFlipName] = useState('Name');
  const [FlipPhoto, setFlipPhoto] = useState(
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  );
  const [FlipPrice, setFlipPrice] = useState('$Price');
  const [FlipDescription, setFlipDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  );
  const [Goto, setGoto] = useState('https://google.com');
  //flipCardEditables
  const [FlipTitleSize, setFlipTitleSize] = useState('20');
  const [FlipTitleColor, setFlipTitleColor] = useState('#000000');
  const [FlipCardColor, setFlipCardColor] = useState('#000000');
  const [FlipNameSize, setFlipNameSize] = useState('28');
  const [FlipNameColor, setFlipNameColor] = useState('#ffffff');
  const [FlipPriceSize, setFlipPriceSize] = useState('20');
  const [FlipPriceColor, setFlipPriceColor] = useState('#ffffff');
  const [FlipDescriptionSize, setFlipDescriptionSize] = useState('12');
  const [FlipDescriptionColor, setFlipDescriptionColor] = useState('#777777');
  const [FlipButtonColor, setFlipButtonColor] = useState('#fc8f00');
  const [FlipButtonTextColor, setFlipButtonTextColor] = useState('#ffffff');

  // Pricing Card Constants
  const [PricingPlanName, setPricingPlanName] = useState('Starter');
  const [PricingPlanPrice, setPricingPlanPrice] = useState('$1');
  const [PricingPlanLink, setPricingPlanLink] = useState(
    'https://www.google.com'
  );
  const [PricingFeature1, setPricingFeature1] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature2, setPricingFeature2] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature3, setPricingFeature3] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature4, setPricingFeature4] = useState(
    'Custom and secure business email'
  );
  const [PricingFeature5, setPricingFeature5] = useState(
    'Custom and secure business email'
  );
  //Pricing Card Editables
  const [PricingCardColor, setPricingCardColor] = useState('#ffffff');
  const [PricingPlanSize, setPricingPlanSize] = useState('20');
  const [PricingPlanColor, setPricingPlanColor] = useState('#000');
  const [PricingPriceSize, setPricingPriceSize] = useState('36');
  const [PricingPriceColor, setPricingPriceColor] = useState('#1a73e8');
  const [PricingFeatureSize, setPricingFeatureSize] = useState('14');
  const [PricingFeatureColor, setPricingFeatureColor] = useState('#616161');
  const [PricingButtonTextColor, setPricingButtonTextColor] =
    useState('#1a73e8');
  const [PricingButtonColor, setPricingButtonColor] = useState('#fff');

  if (singleCard) {
    for (let value of Object.keys(singleCard)) {
      if (keys.findIndex((ch) => ch.key === value) === -1) {
        keys.push({ key: value });
      }
    }
  }
  const [Title, setTitle] = useState('Title');
  const [Photo, setPhoto] = useState(
    'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'
  );
  const [Review, setReview] = useState('review');
  const [Name, setName] = useState('Name');
  const [Ratings, setRatings] = useState('5');
  const [Position, setPosition] = useState('Position');
  const [Service, setService] = useState('Service');
  const [Logo, setLogo] = useState(
    'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png'
  );
  console.log(keys);
  const fontoptions = [
    'Poppins',
    'monospace',
    'Georgia',
    'Times New Roman',
    'Arial',
    'Papyrus',
  ];

  const ScrollType = ['Horizontal', 'Vertical'];
  const defaultScroll = ScrollType[0];
  const [scrollvalue, setScrollValue] = useState(defaultScroll);
  const fontdefault = fontoptions[0];
  const [fontname, Setfont] = useState(fontdefault);
  const [FlipFont, setFlipFont] = useState(fontdefault);
  const [PricingFont, setPricingFont] = useState(fontdefault);

  //FlipKeys
  const [FlipTitleKey, setFlipTitleKey] = useState('');
  const [FlipPhotoKey, setFlipPhotoKey] = useState('');
  const [FlipNameKey, setFlipNameKey] = useState('');
  const [FlipDescKey, setFlipDescKey] = useState('');
  const [FlipPriceKey, setFlipPriceKey] = useState('');
  const [FlipGotoKey, setFlipGotoKey] = useState('');

  //FlipValue
  const [FlipTitleValue, setFlipTitleValue] = useState('');
  const [FlipPhotoValue, setFlipPhotoValue] = useState('');
  const [FlipNameValue, setFlipNameValue] = useState('');
  const [FlipDescValue, setFlipDescValue] = useState('');
  const [FlipPriceValue, setFlipPriceValue] = useState('');
  const [FlipGotoValue, setFlipGotoValue] = useState('');

  //PricingKeys
  const [PricingPlanNameKey, setPricingPlanNameKey] = useState('');
  const [PricingPlanLinkKey, setPricingPlanLinkKey] = useState('');
  const [PricingPriceKey, setPricingPriceKey] = useState('');
  const [PricingFeature1Key, setPricingFeature1Key] = useState('');
  const [PricingFeature2Key, setPricingFeature2Key] = useState('');
  const [PricingFeature3Key, setPricingFeature3Key] = useState('');
  const [PricingFeature4Key, setPricingFeature4Key] = useState('');
  const [PricingFeature5Key, setPricingFeature5Key] = useState('');

  //PricingDropdownvalues
  const [PricingPlanNamevalue, setPricingPlanNamevalue] = useState('');
  const [PricingPlanLinkvalue, setPricingPlanLinkvalue] = useState('');
  const [PricingPricevalue, setPricingPricevalue] = useState('');
  const [PricingFeature1value, setPricingFeature1value] = useState('');
  const [PricingFeature2value, setPricingFeature2value] = useState('');
  const [PricingFeature3value, setPricingFeature3value] = useState('');
  const [PricingFeature4value, setPricingFeature4value] = useState('');
  const [PricingFeature5value, setPricingFeature5value] = useState('');

  //NormalCardKeys
  const [Namekey, setNameKey] = useState('');
  const [Photokey, setPhotoKey] = useState('');
  const [Reviewkey, setReviewKey] = useState('');
  const [Servicekey, setServiceKey] = useState('');
  const [Titlekey, setTitleKey] = useState('');
  const [Ratingskey, setRatingsKey] = useState('');
  const [Logokey, setLogoKey] = useState('');
  const [Positionkey, setPositionKey] = useState('');
  //NormalCardValues
  const [Namevalue, setNamevalue] = useState('');
  const [Photovalue, setPhotovalue] = useState('');
  const [Reviewvalue, setReviewvalue] = useState('');
  const [Servicevalue, setServicevalue] = useState('');
  const [Titlevalue, setTitlevalue] = useState('');
  const [Ratingsvalue, setRatingsvalue] = useState('');
  const [Logovalue, setLogovalue] = useState('');
  const [Positionvalue, setPositionvalue] = useState('');

  const saveToDatabase = () => {
    if (cardType === 'Flip') {
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        namekey: FlipNameKey,
        titlekey: FlipTitleKey,
        pricekey: FlipPriceKey,
        descriptionkey: FlipDescKey,
        photokey: FlipPhotoKey,
        gotokey: FlipGotoKey,
        namevalue: FlipNameValue,
        titlevalue: FlipTitleValue,
        pricevalue: FlipPriceValue,
        descriptionvalue: FlipDescValue,
        photovalue: FlipPhotoValue,
        gotovalue: FlipGotoValue,
        titlesize: FlipTitleSize,
        titlecolor: FlipTitleColor,
        namesize: FlipNameSize,
        namecolor: FlipNameColor,
        cardcolor: FlipCardColor,
        pricesize: FlipPriceSize,
        pricecolor: FlipPriceColor,
        descriptionsize: FlipDescriptionSize,
        descriptioncolor: FlipDescriptionColor,
        buttoncolor: FlipButtonColor,
        buttontextcolor: FlipButtonTextColor,
        textfont: FlipFont,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
      window.location.replace('http://localhost:3000/dashboard');
    }
    if (cardType === 'Pricing') {
      console.log('princing');
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        plannamekey: PricingPlanNameKey,
        planpricekey: PricingPriceKey,
        planlinkkey: PricingPlanLinkKey,
        planfeature1key: PricingFeature1Key,
        planfeature2key: PricingFeature2Key,
        planfeature3key: PricingFeature3Key,
        planfeature4key: PricingFeature4Key,
        planfeature5key: PricingFeature5Key,
        plannamevalue: PricingPlanNamevalue,
        planpricevalue: PricingPricevalue,
        planlinkvalue: PricingPlanLinkvalue,
        planfeature1value: PricingFeature1value,
        planfeature2value: PricingFeature2value,
        planfeature3value: PricingFeature3value,
        planfeature4value: PricingFeature4value,
        planfeature5value: PricingFeature5value,
        pricingcardcolor: PricingCardColor,
        pricingplansize: PricingPlanSize,
        princingplancolor: PricingPlanColor,
        pricingpricesize: PricingPriceSize,
        pricingpricecolor: PricingPriceColor,
        pricingbuttoncolor: PricingButtonColor,
        pricingbuttontextcolor: PricingButtonTextColor,
        pricingfeaturecolor: PricingFeatureColor,
        princingfeaturesize: PricingFeatureSize,
        pricingfont: PricingFont,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
      window.location.replace('http://localhost:3000/dashboard');
    }

    if (cardType === 'Normal') {
      const FlexiApiDetails = {
        sheetid: sheetid,
        cardtype: cardType,
        namekey: Namekey,
        photokey: Photokey,
        reviewkey: Reviewkey,
        titlekey: Titlekey,
        ratingskey: Ratingskey,
        logokey: Logokey,
        servicekey: Servicekey,
        positionkey: Positionkey,
        namevalue: Namevalue,
        photovalue: Photovalue,
        reviewvalue: Reviewvalue,
        titlevalue: Titlevalue,
        ratingsvalue: Ratingsvalue,
        logovalue: Logovalue,
        servicevalue: Servicevalue,
        positionvalue: Positionvalue,
        cardcolor: cardColor,
        avatarshape: avatar,
        namecolor: nameColor,
        namesize: nameSize,
        positioncolor: positionColor,
        positionsize: positionSize,
        titlecolor: titleColor,
        titlesize: titleSize,
        reviewcolor: reviewColor,
        reviewsize: reviewSize,
        servicecolor: serviceColor,
        servicesize: serviceSize,
        fontname: fontname,
        scrolltype: scrollvalue,
      };
      console.log(FlexiApiDetails);
      dispatch(UpdateCards(cardid, cardType, FlexiApiDetails));
      window.location.replace('http://localhost:3000/dashboard');
    }
  };

  useEffect(() => {
    console.log(cardTypeSelector);
    if (cardTypeSelector && singleCard && cardType === 'Flip') {
      setTimeout(() => {
        setFlipName(singleCard[cardTypeSelector?.namekey]);
        setFlipTitle(singleCard[cardTypeSelector?.titlekey]);
        setFlipPhoto(singleCard[cardTypeSelector?.photokey]);
        setFlipPrice(singleCard[cardTypeSelector?.pricekey]);
        setGoto(singleCard[cardTypeSelector?.gotokey]);
        setFlipDescription(singleCard[cardTypeSelector?.descriptionkey]);
        setFlipTitleSize(cardTypeSelector?.titlesize);
        setFlipTitleColor(cardTypeSelector?.titlecolor);
        setFlipCardColor(cardTypeSelector.cardcolor);
        setFlipNameSize(cardTypeSelector?.namesize);
        setFlipNameColor(cardTypeSelector?.namecolor);
        setFlipPriceSize(cardTypeSelector?.pricesize);
        setFlipPriceColor(cardTypeSelector?.pricecolor);
        setFlipDescriptionSize(cardTypeSelector?.descriptionsize);
        setFlipDescriptionColor(cardTypeSelector?.descriptioncolor);
        setFlipButtonColor(cardTypeSelector?.buttoncolor);
        setFlipButtonTextColor(cardTypeSelector?.buttontextcolor);
      }, 1000);
    }

    if (cardTypeSelector && singleCard && cardType === 'Pricing') {
      setPricingPlanName(singleCard[cardTypeSelector?.plannamekey]);
      setPricingPlanPrice(singleCard[cardTypeSelector?.planpricekey]);
      setPricingPlanLink(singleCard[cardTypeSelector?.planlinkkey]);
      setPricingFeature1(singleCard[cardTypeSelector?.planfeature1key]);
      setPricingFeature2(singleCard[cardTypeSelector?.planfeature2key]);
      setPricingFeature3(singleCard[cardTypeSelector?.planfeature3key]);
      setPricingFeature4(singleCard[cardTypeSelector?.planfeature4key]);
      setPricingFeature5(singleCard[cardTypeSelector?.planfeature5key]);
      setPricingCardColor(cardTypeSelector?.pricingcardcolor);
      setPricingPlanSize(cardTypeSelector?.pricingplansize);
      setPricingPlanColor(cardTypeSelector?.princingplancolor);
      setPricingPriceSize(cardTypeSelector?.pricingpricesize);
      setPricingPriceColor(cardTypeSelector?.pricingpricecolor);
      setPricingFeatureSize(cardTypeSelector?.princingfeaturesize);
      setPricingFeatureColor(cardTypeSelector?.pricingfeaturecolor);
      setPricingButtonTextColor(cardTypeSelector?.pricingbuttontextcolor);
      setPricingButtonColor(cardTypeSelector?.pricingbuttoncolor);
    }
    if (cardTypeSelector && singleCard && cardType === 'Normal') {
      setTitle(singleCard[cardTypeSelector?.titlekey]);
      setPhoto(singleCard[cardTypeSelector?.photokey]);
      setReview(singleCard[cardTypeSelector?.reviewkey]);
      setName(singleCard[cardTypeSelector?.namekey]);
      setRatings(singleCard[cardTypeSelector?.ratingskey]);
      setPosition(singleCard[cardTypeSelector?.positionkey]);
      setService(singleCard[cardTypeSelector?.servicekey]);
      setLogo(singleCard[cardTypeSelector?.logokey]);
      setAvatarShape(cardTypeSelector?.avatarshape);
      setnameColor(cardTypeSelector?.namecolor);
      setnameSize(cardTypeSelector?.namesize);
      setpositionColor(cardTypeSelector?.positioncolor);
      setpositionSize(cardTypeSelector?.positionsize);
      setTitleSize(cardTypeSelector?.titlesize);
      setTitleColor(cardTypeSelector?.titlecolor);
      setReviewSize(cardTypeSelector?.reviewsize);
      setReviewColor(cardTypeSelector?.reviewcolor);
      setCardColor(cardTypeSelector?.cardcolor);
      setServiceColor(cardTypeSelector?.servicecolor);
      setServiceSize(cardTypeSelector?.servicesize);
    }
  }, [singleCard]);
  useEffect(() => {
    if (cardTypeSelector && singleCard && cardType === 'Flip') {
      setTimeout(() => {
        setFlipNameValue(cardTypeSelector?.namevalue);
        setFlipTitleValue(cardTypeSelector?.titlevalue);
        setFlipPhotoValue(cardTypeSelector?.photovalue);
        setFlipPriceValue(cardTypeSelector?.pricevalue);
        setFlipDescValue(cardTypeSelector?.descriptionvalue);
        setFlipGotoValue(cardTypeSelector?.gotovalue);
        setFlipNameKey(cardTypeSelector?.namekey);
        setFlipTitleKey(cardTypeSelector?.titlekey);
        setFlipPhotoKey(cardTypeSelector?.photokey);
        setFlipPriceKey(cardTypeSelector?.pricekey);
        setFlipDescKey(cardTypeSelector?.descriptionkey);
        setFlipGotoKey(cardTypeSelector?.gotokey);
      }, 2000);
    }
    if (cardTypeSelector && singleCard && cardType === 'Pricing') {
      setTimeout(() => {}, 2000);
    }
    if (cardTypeSelector && singleCard && cardType === 'Normal') {
      setTimeout(() => {
        setNameKey(cardTypeSelector?.namekey);
        setPhotoKey(cardTypeSelector?.photokey);
        setReviewKey(cardTypeSelector?.reviewkey);
        setServiceKey(cardTypeSelector?.servicekey);
        setTitleKey(cardTypeSelector?.titlekey);
        setRatingsKey(cardTypeSelector?.ratingskey);
        setLogoKey(cardTypeSelector?.logokey);
        setPositionKey(cardTypeSelector?.positionkey);
        setNamevalue(cardTypeSelector?.namevalue);
        setPhotovalue(cardTypeSelector?.photovalue);
        setReviewvalue(cardTypeSelector?.reviewvalue);
        setServicevalue(cardTypeSelector?.servicevalue);
        setTitlevalue(cardTypeSelector?.titlevalue);
        setRatingsvalue(cardTypeSelector?.ratingsvalue);
        setLogovalue(cardTypeSelector?.logovalue);
        setPositionvalue(cardTypeSelector?.positionvalue);
      }, 2000);
    }
  }, [singleCard, cardTypeSelector]);
  return (
    <div className='userarea'>
      <div className='navigation'>
        <div className='nav-left'>
          <p className='nav-title'>User Area</p>
        </div>
        <button className='button-help'>
          Help <span>i</span>
        </button>
      </div>
      <div className='fetch-area'>
        <label htmlFor='sheetid'>Sheet Id</label>
        <div className='fetch-input'>
          <input type='text' name='sheetid' value={sheetid} readOnly />
        </div>
      </div>
      <div className='card-type'>
        <label htmlFor='cardtype'>Card Type</label>
        <div className='card-select'>
          <Dropdown
            arrowClassName='myArrowClassName'
            arrowClosed={<span className='arrow-closed' />}
            arrowOpen={<span className='arrow-open' />}
            options={options}
            onChange={(e) => {
              setCardType(e.value);
            }}
            value={cardType}
            placeholder='Select an Card'
            disabled
          />
        </div>
      </div>
      <div className='work-area'>
        <p className='workarea-title'>Headings</p>
        <div className='headings'>
          <div className='element-section'>
            <div className='selector-section'>
              {singleCard ? (
                cardType === 'Normal' ? (
                  keys.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.key} />
                        <div className='dropdown-section'>
                          {ch.key === cardTypeSelector?.namekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Namevalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.titlekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Titlevalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.ratingskey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Ratingsvalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.positionkey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Positionvalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.servicekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Servicevalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.logokey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Logovalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.reviewkey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Reviewvalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.photokey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={Photovalue}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={dropdown2}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setTitleKey(keyvalue);
                                  setTitlevalue(e.value);
                                  setTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setPhotoKey(keyvalue);
                                  setPhotovalue(e.value);
                                  setPhoto(singleCard[keyvalue]);
                                }
                                if (e.value === 'Review') {
                                  const keyvalue = keys[index]['key'];
                                  setReviewKey(keyvalue);
                                  setReviewvalue(e.value);
                                  setReview(singleCard[keyvalue]);
                                }
                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setNameKey(keyvalue);
                                  setNamevalue(e.value);
                                  setName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Ratings') {
                                  const keyvalue = keys[index]['key'];
                                  setRatingsKey(keyvalue);
                                  setRatingsvalue(e.value);
                                  setRatings(singleCard[keyvalue]);
                                }
                                if (e.value === 'Logo') {
                                  const keyvalue = keys[index]['key'];
                                  setLogoKey(keyvalue);
                                  setLogovalue(e.value);
                                  setLogo(singleCard[keyvalue]);
                                }
                                if (e.value === 'Position') {
                                  const keyvalue = keys[index]['key'];
                                  setPositionKey(keyvalue);
                                  setPositionvalue(e.value);
                                  setPosition(singleCard[keyvalue]);
                                }
                                if (e.value === 'Service') {
                                  const keyvalue = keys[index]['key'];
                                  setServiceKey(keyvalue);
                                  setServicevalue(e.value);
                                  setService(singleCard[keyvalue]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : cardType === 'Flip' ? (
                  keys.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.key} />
                        <div className='dropdown-section'>
                          {ch.key === cardTypeSelector?.namekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipNameValue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.titlekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipTitleValue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.pricekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipPriceValue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.photokey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipPhotoValue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.descriptionkey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipDescValue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.gotokey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={FlipGotoValue}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={flipcardDropdown}
                              onChange={(e) => {
                                if (e.value === 'Title') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipTitleKey(keyvalue);
                                  setFlipTitleValue(e.value);
                                  setFlipTitle(singleCard[keyvalue]);
                                }
                                if (e.value === 'Photo') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPhotoKey(keyvalue);
                                  setFlipPhotoValue(e.value);
                                  setFlipPhoto(singleCard[keyvalue]);
                                }

                                if (e.value === 'Name') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipNameKey(keyvalue);
                                  setFlipNameValue(e.value);
                                  setFlipName(singleCard[keyvalue]);
                                }

                                if (e.value === 'Description') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipDescKey(keyvalue);
                                  setFlipDescValue(e.value);
                                  setFlipDescription(singleCard[keyvalue]);
                                }
                                if (e.value === 'Price') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipPriceKey(keyvalue);
                                  setFlipPriceValue(e.value);
                                  setFlipPrice(singleCard[keyvalue]);
                                }
                                if (e.value === 'Goto') {
                                  const keyvalue = keys[index]['key'];
                                  setFlipGotoKey(keyvalue);
                                  setFlipGotoValue(e.value);
                                  setGoto(singleCard[keyvalue]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : cardType === 'Pricing' ? (
                  keys.map((ch, index) => {
                    return (
                      <div className='selector'>
                        <input type='text' readOnly value={ch.key} />
                        <div className='dropdown-section'>
                          {ch.key === cardTypeSelector?.plannamekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingPlanNamevalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planpricekey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingPricevalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planlinkkey ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingPlanLinkvalue}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planfeature1key ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingFeature1value}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planfeature2key ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingFeature2value}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planfeature3key ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingFeature3value}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planfeature4key ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingFeature4value}
                              placeholder='Select an option'
                            />
                          ) : ch.key === cardTypeSelector?.planfeature5key ? (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={PricingFeature5value}
                              placeholder='Select an option'
                            />
                          ) : (
                            <Dropdown
                              arrowClassName='myArrowClassName'
                              arrowClosed={<span className='arrow-closed' />}
                              arrowOpen={<span className='arrow-open' />}
                              options={pricingDropdown}
                              onChange={(e) => {
                                if (e.value === 'Plan Name') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanNameKey(keyvalue);
                                  setPricingPlanNamevalue(e.value);
                                  setPricingPlanName(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Price') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPriceKey(keyvalue);
                                  setPricingPricevalue(e.value);
                                  setPricingPlanPrice(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Link') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingPlanLinkKey(keyvalue);
                                  setPricingPlanLinkvalue(e.value);
                                  setPricingPlanLink(singleCard[keyvalue]);
                                }

                                if (e.value === 'Plan Feature 1') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature1Key(keyvalue);
                                  setPricingFeature1value(e.value);
                                  setPricingFeature1(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 2') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature2Key(keyvalue);
                                  setPricingFeature2value(e.value);
                                  setPricingFeature2(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 3') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature3Key(keyvalue);
                                  setPricingFeature3value(e.value);
                                  setPricingFeature3(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 4') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature4Key(keyvalue);
                                  setPricingFeature4value(e.value);
                                  setPricingFeature4(singleCard[keyvalue]);
                                }
                                if (e.value === 'Plan Feature 5') {
                                  const keyvalue = keys[index]['key'];
                                  setPricingFeature5Key(keyvalue);
                                  setPricingFeature5value(e.value);
                                  setPricingFeature5(singleCard[keyvalue]);
                                }
                              }}
                              value={''}
                              placeholder='Select an option'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  'Please Select a Card Type'
                )
              ) : (
                <div>
                  {' '}
                  <div className='selector'>
                    <input type='text' readOnly />
                    <div className='dropdown-section'>
                      <Dropdown
                        arrowClassName='myArrowClassName'
                        arrowClosed={<span className='arrow-closed' />}
                        arrowOpen={<span className='arrow-open' />}
                        options={options}
                        onChange={''}
                        value={''}
                        placeholder='Select an option'
                      />
                    </div>
                  </div>
                  <div className='selector'>
                    <input type='text' readOnly />
                    <div className='dropdown-section'>
                      <Dropdown
                        arrowClassName='myArrowClassName'
                        arrowClosed={<span className='arrow-closed' />}
                        arrowOpen={<span className='arrow-open' />}
                        options={options}
                        onChange={''}
                        value={''}
                        placeholder='Select an option'
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='editable-section'>
                {singleCard ? (
                  cardType === 'Normal' ? (
                    <Collapse accordion>
                      <Panel header='Card Color' key='1'>
                        <p>Color</p>
                        <input
                          value={cardColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setCardColor(e.target.value);
                          }}
                        />
                      </Panel>
                      <Panel header='Avatar Customize' key='2'>
                        <p>Shape</p>
                        <Dropdown
                          options={AvatarShape}
                          onChange={(e) => {
                            setAvatarShape(e.value);
                          }}
                          value={avatar}
                          placeholder={'Select an option'}
                        />
                      </Panel>
                      <Panel header='Name Customize' key='3'>
                        <p>Color</p>
                        <input
                          value={nameColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setnameColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(nameSize)}
                          onChange={(value) => {
                            setnameSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Position Customize' key='4'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={positionColor}
                          onChange={(e) => {
                            setpositionColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(positionSize)}
                          onChange={(value) => {
                            setpositionSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Title Customize' key='5'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={titleColor}
                          onChange={(e) => {
                            setTitleColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(titleSize)}
                          onChange={(value) => {
                            setTitleSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Review Customize' key='6'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={reviewColor}
                          onChange={(e) => {
                            setReviewColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(reviewSize)}
                          onChange={(value) => {
                            setReviewSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Service Customize' key='7'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={serviceColor}
                          onChange={(e) => {
                            setServiceColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(serviceSize)}
                          onChange={(value) => {
                            setServiceSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Font Customize' key='8'>
                        <p>Font</p>
                        <Dropdown
                          options={fontoptions}
                          onChange={(e) => {
                            Setfont(e.value);
                          }}
                          value={fontname}
                          placeholder={'Select an option'}
                        />
                      </Panel>
                      <Panel header='Scroll Customize' key='9'>
                        <p>Scroll Type</p>
                        <Dropdown
                          options={ScrollType}
                          onChange={(e) => {
                            setScrollValue(e.value);
                          }}
                          value={scrollvalue}
                          placeholder={scrollvalue}
                        />
                      </Panel>
                    </Collapse>
                  ) : cardType === 'Flip' ? (
                    <Collapse accordion>
                      <Panel header='Title Customize' key='1'>
                        <p>Color</p>
                        <input
                          value={FlipTitleColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setFlipTitleColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(FlipTitleSize)}
                          onChange={(value) => {
                            setFlipTitleSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Card Color' key='2'>
                        <p>Color</p>
                        <input
                          value={FlipCardColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setFlipCardColor(e.target.value);
                          }}
                        />
                      </Panel>
                      <Panel header='Name Customize' key='3'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={FlipNameColor}
                          onChange={(e) => {
                            setFlipNameColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(FlipNameSize)}
                          onChange={(value) => {
                            setFlipNameSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Price Customize' key='4'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={FlipPriceColor}
                          onChange={(e) => {
                            setFlipPriceColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(FlipPriceSize)}
                          onChange={(value) => {
                            setFlipPriceSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Description Customize' key='5'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={FlipDescriptionColor}
                          onChange={(e) => {
                            setFlipDescriptionColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(FlipDescriptionSize)}
                          onChange={(value) => {
                            setFlipDescriptionSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Button Customize' key='6'>
                        <p>Button Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={FlipButtonColor}
                          onChange={(e) => {
                            setFlipButtonColor(e.target.value);
                          }}
                        />
                        <p>Button Text Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={FlipButtonTextColor}
                          onChange={(e) => {
                            setFlipButtonTextColor(e.target.value);
                          }}
                        />
                      </Panel>
                      <Panel header='Font Customize' key='7'>
                        <p>Font</p>
                        <Dropdown
                          options={fontoptions}
                          onChange={(e) => {
                            setFlipFont(e.value);
                          }}
                          value={FlipFont}
                          placeholder={'Select an option'}
                        />
                      </Panel>
                      <Panel header='Scroll Customize' key='8'>
                        <p>Scroll Type</p>
                        <Dropdown
                          options={ScrollType}
                          onChange={(e) => {
                            setScrollValue(e.value);
                          }}
                          value={scrollvalue}
                          placeholder={scrollvalue}
                        />
                      </Panel>
                    </Collapse>
                  ) : cardType === 'Pricing' ? (
                    <Collapse accordion>
                      <Panel header='Card Color' key='1'>
                        <p>Color</p>
                        <input
                          value={PricingCardColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setPricingCardColor(e.target.value);
                          }}
                        />
                      </Panel>
                      <Panel header='Plan Customize' key='2'>
                        <p>Color</p>
                        <input
                          value={PricingPlanColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setPricingPlanColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(PricingPlanSize)}
                          onChange={(value) => {
                            setPricingPlanSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Price Customize' key='3'>
                        <p>Color</p>
                        <input
                          value={PricingPriceColor}
                          type='color'
                          name=''
                          id=''
                          onChange={(e) => {
                            setPricingPriceColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(PricingPriceSize)}
                          onChange={(value) => {
                            setPricingPriceSize(value.toString());
                          }}
                        />
                      </Panel>
                      <Panel header='Button Customize' key='4'>
                        <p>Button Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={PricingButtonColor}
                          onChange={(e) => {
                            setPricingButtonColor(e.target.value);
                          }}
                        />
                        <p>Button Text Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={PricingButtonTextColor}
                          onChange={(e) => {
                            setPricingButtonTextColor(e.target.value);
                          }}
                        />
                      </Panel>
                      <Panel header='Feature Customize' key='5'>
                        <p>Color</p>
                        <input
                          type='color'
                          name=''
                          id=''
                          value={PricingFeatureColor}
                          onChange={(e) => {
                            setPricingFeatureColor(e.target.value);
                          }}
                        />
                        <p>Font Size</p>
                        <Slider
                          defaultValue={parseInt(PricingFeatureSize)}
                          onChange={(value) => {
                            setPricingFeatureSize(value.toString());
                          }}
                        />
                      </Panel>

                      <Panel header='Font Customize' key='6'>
                        <p>Font</p>
                        <Dropdown
                          options={fontoptions}
                          onChange={(e) => {
                            setPricingFont(e.value);
                          }}
                          value={PricingFont}
                          placeholder={'Select an option'}
                        />
                      </Panel>
                      <Panel header='Scroll Customize' key='7'>
                        <p>Scroll Type</p>
                        <Dropdown
                          options={ScrollType}
                          onChange={(e) => {
                            setScrollValue(e.value);
                          }}
                          value={scrollvalue}
                          placeholder={scrollvalue}
                        />
                      </Panel>
                    </Collapse>
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          {singleCard ? (
            <div className='design-area'>
              {cardType === 'Normal' ? (
                <Card
                  Name={Name}
                  Photo={Photo}
                  Review={Review}
                  Title={Title}
                  Ratings={Ratings}
                  Companylogo={Logo}
                  Service={Service}
                  Position={Position}
                  cardColor={cardColor}
                  avatarShape={avatar}
                  nameColor={nameColor}
                  nameSize={nameSize}
                  positionColor={positionColor}
                  positionSize={positionSize}
                  titleColor={titleColor}
                  titleSize={titleSize}
                  reviewColor={reviewColor}
                  reviewSize={reviewSize}
                  serviceColor={serviceColor}
                  serviceSize={serviceSize}
                  fontname={fontname}
                ></Card>
              ) : cardType === 'Flip' ? (
                <FlipCard
                  Name={FlipName}
                  Title={Fliptitle}
                  Price={FlipPrice}
                  Description={FlipDescription}
                  Goto={Goto}
                  Photo={FlipPhoto}
                  flipTitleSize={FlipTitleSize}
                  flipTitleColor={FlipTitleColor}
                  FlipNameColor={FlipNameColor}
                  FlipNameSize={FlipNameSize}
                  FlipCardColor={FlipCardColor}
                  FlipPriceColor={FlipPriceColor}
                  FlipPriceSize={FlipPriceSize}
                  FlipDescriptionColor={FlipDescriptionColor}
                  FlipDescriptionSize={FlipDescriptionSize}
                  FlipButtonColor={FlipButtonColor}
                  FlipButtonTextColor={FlipButtonTextColor}
                  FlipFont={FlipFont}
                ></FlipCard>
              ) : cardType === 'Pricing' ? (
                <PricingCard
                  planName={PricingPlanName}
                  planPrice={PricingPlanPrice}
                  planLink={PricingPlanLink}
                  planfeature1={PricingFeature1}
                  planfeature2={PricingFeature2}
                  planfeature3={PricingFeature3}
                  planfeature4={PricingFeature4}
                  planfeature5={PricingFeature5}
                  PricingCardColor={PricingCardColor}
                  PricingPlanColor={PricingPlanColor}
                  PricingPlanSize={PricingPlanSize}
                  PricingPriceColor={PricingPriceColor}
                  PricingPriceSize={PricingPriceSize}
                  PricingButtonColor={PricingButtonColor}
                  PricingButtonTextColor={PricingButtonTextColor}
                  PricingFeatureColor={PricingFeatureColor}
                  PricingFeatureSize={PricingFeatureSize}
                  PricingFont={PricingFont}
                ></PricingCard>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </div>
        <button className='update-button' onClick={() => saveToDatabase()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UserAreaUpdate;
