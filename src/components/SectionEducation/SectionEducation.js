import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionEducation.module.css';

const SectionEducation = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.educationWrapper}>
        <div className={css.educationContent}>
          <div>
            <h1>Education</h1>
            <p>
              Free education series made for NYC TLC drivers, but open to any Auto Marketplace user. Topics focus on personal finance and investing.
            </p>
            <p>
              Sign-up to our newsletter to be added to the mailing list.
            </p>
            <a className={css.button} href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionEducation.defaultProps = { rootClassName: null, className: null };

SectionEducation.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionEducation;
