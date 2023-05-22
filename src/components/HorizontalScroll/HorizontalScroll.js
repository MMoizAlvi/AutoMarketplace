import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { ScrollArrow } from '../../components';

import css from './HorizontalScroll.module.css';

const getOffsetWidth = elem => {
  const styles = window.getComputedStyle(elem);
  const innerOffsetWidth = elem.offsetWidth;
  const [marginLeft, marginRight] = [styles.marginLeft, styles.marginRight].map(value =>
    Number(value.split('px')[0])
  );

  return innerOffsetWidth + marginLeft + marginRight;
};

function HorizontalScroll({ className, scrollClassName, children }) {
  const scrollContainerRef = useRef(null);

  const onScrollArrowClickLeft = useCallback(
    e => {
      if (!scrollContainerRef.current) return;

      const listingCard = scrollContainerRef.current.firstChild;
      const offset = getOffsetWidth(listingCard);

      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft - offset;
    },
    [scrollContainerRef]
  );

  const onScrollArrowClickRight = useCallback(
    e => {
      if (!scrollContainerRef.current) return;

      const listingCard = scrollContainerRef.current.firstChild;
      const offset = getOffsetWidth(listingCard);

      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft + offset;
    },
    [scrollContainerRef]
  );

  const rootClassName = cns(css.root, className || '');
  const scrollContainerClassName = cns(css.scrollContainer, scrollClassName || '');
  return (
    <div className={rootClassName}>
      <div ref={scrollContainerRef} className={scrollContainerClassName}>
        {children}
      </div>
      <ScrollArrow
        className={css.scrollArrow}
        onClick={onScrollArrowClickLeft}
        direction={'left'}
      />
      <ScrollArrow
        className={css.scrollArrow}
        onClick={onScrollArrowClickRight}
        direction={'right'}
      />
    </div>
  );
}

HorizontalScroll.propTypes = {
  className: PropTypes.string,
  scrollClassName: PropTypes.string,
  children: PropTypes.node,
};

export default HorizontalScroll;
