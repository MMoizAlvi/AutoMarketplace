import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import LogoImage from './logo.png';
import FooterLogo from './logoFooter.png'

const IconLogo = props => {
  const { className, variant, ...rest } = props;
  if(variant === 'footer'){
    <img className={className} src={FooterLogo} alt={config.siteTitle} {...rest} />
  }
  return (
    <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
