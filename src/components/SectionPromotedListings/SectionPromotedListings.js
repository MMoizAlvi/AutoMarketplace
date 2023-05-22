import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ListingCard, HorizontalScroll } from '../../components';
import { withViewport } from '../../util/contextHelpers';
import { compose } from 'redux';
import { injectIntl } from '../../util/reactIntl';
import css from '../../containers/LandingPage/LandingPagePromotedListings.module.css';

const SectionPromotedListings = props => {
  const {
    rootClassName,
    className,
    intl,
    promotedListings,
    preHighlightTitle,
    highlightTitle,
    postHighlightTitle,
    subTitle,
    showAll,
    allRelatedQuery,
    viewport,
    bannerClass,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const MAX_MOBILE_SCREEN_WIDTH = 768;
  const isMobile = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
  // Panel width relative to the viewport
  const panelMediumWidth = 50;
  const panelLargeWidth = 62.5;

  const cardRenderSizes = [
    '(max-width: 767px) 100vw',
    `(max-width: 1023px) ${panelMediumWidth}vw`,
    `(max-width: 1920px) ${panelLargeWidth / 2}vw`,
    `${panelLargeWidth / 3}vw`,
  ].join(', ');

  return (
    <div className={classes}>
      <div className={css.header}>
        <div className={css.title}>
          {preHighlightTitle && <FormattedMessage id={preHighlightTitle} />}
          {highlightTitle && (
            <span className={css.titleHighlight}>
              <FormattedMessage id={highlightTitle} />
            </span>
          )}
          {postHighlightTitle && <FormattedMessage id={postHighlightTitle} />}
        </div>
      </div>

      {subTitle && (
        <p className={css.subTitle}>
          <FormattedMessage id={subTitle} />
        </p>
      )}

      <div>
        {promotedListings ? (
          <HorizontalScroll className={css.promotedListingContainer}>
            {promotedListings.map(pl => (
              <ListingCard
                className={css.listingCard}
                key={pl.id.uuid}
                listing={pl}
                renderSizes={cardRenderSizes}
              />
            ))}
          </HorizontalScroll>
        ) : null}
      </div>

      {allRelatedQuery && showAll && (
        <div className={css.buttonWrap}>
          <a href={`/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&pub_category=${allRelatedQuery}`}>
            <p className={css.showAll}>
              <FormattedMessage id={showAll} /> 
              { isMobile ? null : ` >>>` } 
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

SectionPromotedListings.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionPromotedListings.propTypes = {
  rootClassName: string,
  className: string,
};

export default compose(
  withViewport,
  injectIntl
)(SectionPromotedListings);

