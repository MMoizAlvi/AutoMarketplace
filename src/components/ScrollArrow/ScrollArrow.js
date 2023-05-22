import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import css from './styles.module.css';

function ScrollArrow(props) {
  const { onClick, className, direction, customStyles } = props;
  const rootClass = cns({
    [css.root]: true,
    [className]: !!className,
    [css.left]: direction === 'left',
    [css.right]: direction === 'right',
  });

  const handleClick = e => {
    onClick(e);
  };

  return (
    <div style={{ ...customStyles }} className={rootClass} onClick={handleClick}>
      <div className={css.img} />
    </div>
  );
}

ScrollArrow.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['left', 'right']),
  customStyles: PropTypes.object,
  className: PropTypes.string,
};

export default memo(ScrollArrow);
