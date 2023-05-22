import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton} from '../../components';
import StarRatings from 'react-star-ratings';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import config from '../../config';

import css from './ListingPage.module.css';

const SectionHeading = props => {
  const {
    priceTitle,
    formattedPrice,
    richTitle,
    category,
    hostLink,
    showContactUser,
    onContactUser,
    isGuideListing,
    priceUnit,
    totalRating,
    isSchedulingListing,
  } = props;

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;
  const unitTranslationKey = isNightly
    ? 'ListingPage.perNight'
    : isDaily
    ? 'ListingPage.perDay'
    : 'ListingPage.perUnit';
  return (
    <div className={css.sectionHeading}>
      {
        !isGuideListing ? 
          <div className={css.desktopPriceContainer}>
            <div className={css.desktopPriceValue} title={priceTitle}>
              {formattedPrice}
              {
                isSchedulingListing ? 
                <h4 className={css.perMonth}>per month</h4> : null
              }
            </div>
          </div> : null
      }
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {category}
          <FormattedMessage className={css.hostLink} id="ListingPage.hostedBy" values={{ name: hostLink }} />
          {showContactUser ? (
            <span className={css.contactWrapper}>
              <span className={css.separator}>•</span>
              <InlineTextButton rootClassName={css.contactLink} onClick={onContactUser}>
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
          <span className={css.ratingRating}>
            <span className={css.separator}>•</span>
            <span className={css.ratedStar}>
              <StarRatings
                rating={totalRating}
                starRatedColor="#FB09FF"
                numberOfStars={1}
                starDimension="20px"
                starSpacing="1px"
              />
            </span>
            <span className={css.rating}>
              {totalRating}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
