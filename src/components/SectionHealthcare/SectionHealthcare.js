import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHealthcare.module.css';

const SectionHealthcare = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.healthcareWrapper}>
        <div className={css.healthcareContent}>
          <div>
            <h1>Healthcare</h1>
            <p>
              We partner with Click2MD to offer NYC TLC drivers and their families <span className={css.bold}>discounted rates for
              telemedicine and prescription medication management.</span>
            </p>
            <a className={css.button} href="https://www.click2md.healthcare/">Click2MD</a>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHealthcare.defaultProps = { rootClassName: null, className: null };

SectionHealthcare.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHealthcare;
