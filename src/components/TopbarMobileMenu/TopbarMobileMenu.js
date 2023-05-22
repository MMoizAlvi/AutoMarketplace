/**
 *  TopbarMobileMenu prints the menu content for authenticated user or
 * shows login actions for those who are not authenticated.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import { AvatarLarge, InlineTextButton, NamedLink, NotificationBadge } from '../../components';

import css from './TopbarMobileMenu.module.css';

const TopbarMobileMenu = props => {
  const {
    isAuthenticated,
    currentPage,
    currentUserHasListings,
    currentUser,
    notificationCount,
    onLogout,
  } = props;

  const user = ensureCurrentUser(currentUser);

  if (!isAuthenticated) {
    const signup = (
      <NamedLink name="SignupPage" className={css.signupLink}>
        <FormattedMessage id="TopbarMobileMenu.signupLink" />
      </NamedLink>
    );

    const login = (
      <NamedLink name="LoginPage" className={css.loginLink}>
        <FormattedMessage id="TopbarMobileMenu.loginLink" />
      </NamedLink>
    );

    const signupOrLogin = (
      <span className={css.authenticationLinks}>
        <FormattedMessage id="TopbarMobileMenu.signupOrLogin" values={{ signup, login }} />
      </span>
    );
    return (
      <div className={css.root}>
        <div className={css.content}>
          <div className={css.authenticationGreeting}>
            <FormattedMessage
              id="TopbarMobileMenu.unauthorizedGreeting"
              values={{ lineBreak: <br />, signupOrLogin }}
            />
          </div>
        </div>
        <div className={css.footer}>
          <NamedLink className={css.createNewListingLink} name="NewListingPage">
            <FormattedMessage id="TopbarMobileMenu.newListingLink" />
          </NamedLink>
        </div>
      </div>
    );
  }

  const notificationCountBadge =
    notificationCount > 0 ? (
      <NotificationBadge className={css.notificationBadge} count={notificationCount} />
    ) : null;

  const displayName = user.attributes.profile.firstName;
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  return (
    <div className={css.root}>
      <AvatarLarge className={css.avatar} user={currentUser} />
      <div className={css.content}>
        <span className={css.greeting}>
          <FormattedMessage id="TopbarMobileMenu.greeting" values={{ displayName }} />
        </span>
        <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
          <FormattedMessage id="TopbarMobileMenu.logoutLink" />
        </InlineTextButton>

        <NamedLink
          className={classNames(css.inbox, currentPageClass('InboxPage'))}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <FormattedMessage id="TopbarMobileMenu.inboxLink" />
          {notificationCountBadge}
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ManageListingsPage'))}
          name="ManageListingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.yourListingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
          name="ProfileSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.profileSettingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('AccountSettingsPage'))}
          name="AccountSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.accountSettingsLink" />
        </NamedLink>
        <NamedLink name="AboutPage" className={css.aboutUs}>
          <FormattedMessage id="TopbarMobileMenu.aboutUsLink" />
        </NamedLink>
        <NamedLink name="Web3MarketplacePage" className={css.web3Marketplace}>
          <FormattedMessage id="TopbarMobileMenu.web3MarketplaceLink" />
        </NamedLink>
        {/* <NamedLink name="ManageYourMaintenance" className={css.manageYourMaintenance}>
          <FormattedMessage id="TopbarMobileMenu.ManagingYourMaintenanceLink" />
        </NamedLink>
        <NamedLink name="UserOwnershipPage" className={css.userOwned}>
          <FormattedMessage id="TopbarMobileMenu.userOwnedMktPlaceLink" />
        </NamedLink> */}
        <NamedLink name="HowItWorks" className={css.HowItWorks}>
          <FormattedMessage id="TopbarMobileMenu.HowItWorksLink" />
        </NamedLink>
        {/* <NamedLink name="BlockchainPage" className={css.blockchain}>
          <FormattedMessage id="TopbarMobileMenu.WhatIsBlockchainLink" />
        </NamedLink> */}
        {/* <NamedLink name="EarningAUTOMKTTokenPage" className={css.earningTokens}>
          <FormattedMessage id="TopbarMobileMenu.EarningAUTOMKTTokensLink" />
        </NamedLink> */}
        <NamedLink name="AutomktRewards" className={css.automktRewards}>
          <FormattedMessage id="TopbarMobileMenu.AUTOMKTRewardsLink" />
        </NamedLink>
        <NamedLink name="BNPLPage" className={css.bnplPage}>
          <FormattedMessage id="TopbarMobileMenu.BNPLLink" />
        </NamedLink>
        <NamedLink name="ElectricVehicle" className={css.evPage}>
          <FormattedMessage id="TopbarMobileMenu.EVs" />
        </NamedLink>
      </div>
      <div className={css.footer}>
        <NamedLink className={css.createNewListingLink} name="NewListingPage">
          <FormattedMessage id="TopbarMobileMenu.newListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

TopbarMobileMenu.defaultProps = { currentUser: null, notificationCount: 0, currentPage: null };

const { bool, func, number, string } = PropTypes;

TopbarMobileMenu.propTypes = {
  isAuthenticated: bool.isRequired,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  notificationCount: number,
  onLogout: func.isRequired,
};

export default TopbarMobileMenu;
