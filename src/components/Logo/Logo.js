import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import config from '../../config';
import IconLogo from './IconLogo';
import LogoImage from './logo.png';
import footerLogo from './logoFooter.png';
import css from './Logo.module.css';

const Logo = props => {
  const { className, format, variant, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);
  const desktopClasses = classNames(css.logoDesktop, className);

  if (format === 'desktop' && variant !== 'footer') {
    return <img className={desktopClasses} src={LogoImage} alt={config.siteTitle} {...rest} />;
  }else if(format === 'desktop' && variant === 'footer'){
    return <img className={desktopClasses} src={footerLogo} alt={config.siteTitle} {...rest} />
  }

  return <IconLogo className={mobileClasses} variant {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
