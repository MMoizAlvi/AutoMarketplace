import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import { TopbarSearchForm } from '../../forms';
import { createResourceLocatorString, pathByRouteName } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import css from './SectionHero.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

const SectionHero = props => {
  const { rootClassName, className, handleOnClick, viewport, history } = props;

  const classes = classNames(rootClassName || css.root, className);
  const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;

  const handleSubmit = (values) => {
    const { query } = values;
    const searchParams = {
      keywords: query,
    };

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, searchParams));
  }

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.search}
      onSubmit={handleSubmit}
      desktopInputRoot={css.searchRoot}
      onSearchClick={handleSubmit}
    />
  );

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <p className={css.heroSubTitle}>
          <FormattedMessage id="SectionYoutubeAutomarketplace" />
          <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=maintenance_plans">
            <span><FormattedMessage id="SectionHero.search" /></span>
          </a>,
          <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=tire_plans">
            <span><FormattedMessage id="SectionHero.autoMaintenance" /></span>
          </a>
          <span><FormattedMessage id="SectionHero.and" /></span>
          <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=car_wash_plans">
            <FormattedMessage id="SectionHero.carWash" />
          </a><FormattedMessage id="SectionHero.listing" />
        </p>
        {
          isMobileLayout ? search :
          <button className={css.heroButton} onClick={handleOnClick}>
            <FormattedMessage id="SectionHero.userOwnedMarketplace" />
          </button>
        }
        {
          /*<NamedLink
            name="SearchPage"
            className={css.heroButton}
          >
            <FormattedMessage id="SectionHero.browseButton" />
          </NamedLink>*/
        }
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
