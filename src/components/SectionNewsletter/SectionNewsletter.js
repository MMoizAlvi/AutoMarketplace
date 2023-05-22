import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionNewsletter.module.css';

const SectionNewsletter = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.newsletterWrapper}>
        <div>
          <div className={css.newsletterContent}>
            <div>
              <iframe className={css.tlcmktiFrame} src="https://tlcmkt.substack.com/embed" height="315" scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionNewsletter.defaultProps = { rootClassName: null, className: null };

SectionNewsletter.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionNewsletter;
