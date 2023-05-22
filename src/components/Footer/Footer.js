import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import { withViewport } from '../../util/contextHelpers';
import { compose } from 'redux';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  IconSocialMediaLinkedin,
  IconSocialMediaYoutube,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';
import LogoImage from "./logo.png"
import arrowUp from './arrowUp.png'

import css from './Footer.module.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle, siteLinkedinPage, siteYoutubePage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });
  const goToLinkedin = intl.formatMessage({ id: 'Footer.goToLinkedin' });
  const goToYoutube = intl.formatMessage({ id: 'Footer.goToYoutube' });
  
  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;

  const linkedinLink = siteLinkedinPage ? (
    <ExternalLink key="linkToLinkedin" href={siteLinkedinPage} className={css.icon} title={goToLinkedin}>
      <IconSocialMediaLinkedin />
    </ExternalLink>
  ) : null;

  const youtubeLink = siteYoutubePage ? (
    <ExternalLink key="linkToYoutube" href={siteYoutubePage} className={css.icon} title={goToYoutube}>
      <IconSocialMediaYoutube />
    </ExternalLink>
  ) : null;
  return [youtubeLink, twitterLink, fbLink, instragramLink, linkedinLink].filter(v => v != null);
};

const Footer = props => {
  const MAX_MOBILE_SCREEN_WIDTH = 768;
  const { rootClassName, className, viewport, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);
  const isMobile = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
  const variant = 'footer';

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          { isMobile ? 
          <>
            <Logo variant={variant}/>
            <p className={css.footerContent}> 
              YouTube channel focused on general automotive content
              & the NYC for-hire transportation industry
            </p> 
          </>
          : null }
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo variant={variant} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.link}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                {/* <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=tlc_car_rental,car_for_sale,car_rental',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.cars" />
                  </NamedLink>
                </li> */}
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=maintenance_and_repair_services,maintenance_plans',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.service_and_parts" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=tires,rims,tire_plans,tire_rim_services',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.tires" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=car_wash_plans,detailing',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.car_wash_and_detailing" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=towing,body_shops',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.body_shops" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            {/* <div className={css.searchesExtra}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=tlc_insurance,dmv_insurance',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.tlc_insurance" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=black_car_bases,luxury_limo_bases,livery_bases',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.fhv_work" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?pub_category=parking,gas_stations,food_carts,fhv_rest_stops,public_restrooms,electric_charging_station',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.nyc_maper" />
                  </NamedLink>
                </li>
              </ul>
            </div> */}
            { isMobile ?
            <div className={css.ArrowContainer}>
              <NamedLink name="LandingPage" className={css.arrowLink}>
                <img src={arrowUp} alt="Up Arrow Button" className={css.arrowImage} />
              </NamedLink>
            </div>
            : null }
            <div className={css.extraLinks}>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default compose(
  withViewport,
  injectIntl
)(Footer);

