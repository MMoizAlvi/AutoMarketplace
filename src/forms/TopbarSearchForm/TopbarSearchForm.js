import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import { intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { Form } from '../../components';
import IconHourGlass from '../../components/LocationAutocompleteInput/IconHourGlass';
import css from './TopbarSearchForm.module.css';
import { withViewport } from '../../util/contextHelpers';
import { compose } from 'redux';

const identity = v => v;

const MAX_MOBILE_SCREEN_WIDTH = 768;

class TopbarSearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        render={formRenderProps => {
          const { rootClassName, className, desktopInputRoot, intl, viewport, handleSubmit } = formRenderProps;
         
          const isMobile = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
          const desktopInputRootClass = desktopInputRoot || css.desktopInputRoot;
          const rootClass = isMobile ? css.mobileInputRoot : desktopInputRootClass
          const rootClasses = classNames(rootClass, css.root)
          const formClasses = classNames(rootClassName, className);
          const inputClass = isMobile ? css.mobileInput : css.desktopInput 
          const classes = classNames(css.input, inputClass);
          
          return (
            <Form className={formClasses} onSubmit={ (e) => {
              e.preventDefault();
              handleSubmit(e);
            }}>
              <div className={rootClasses}>
                <Field
                  name="query"
                  format={identity}
                  render={({ input, meta }) => {
                    const { name } = input;
                    return (
                      <input
                        className={classes}
                        autoComplete="off"
                        type="search"
                        name="query"
                        ref={this.searchRef}
                        placeholder={isMobile ? intl.formatMessage({ id: 'TopbarSearchForm.mobilePlaceholder' }) : intl.formatMessage({ id: 'TopbarSearchForm.desktopPlaceholder' })}
                        {...input}
                      />
                    );
                  }}
                /> 
                <div className={isMobile ? css.mobileIcon : css.desktopIcon} onClick={(e) => isMobile ?  handleSubmit({query: this.searchRef.current.value}) : e.preventDefault() }>
                   <IconHourGlass />  
                </div>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

const { func, string, bool } = PropTypes;

TopbarSearchFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  desktopInputRoot: null,
  isMobile: false,
};

TopbarSearchFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  desktopInputRoot: string,
  onSubmit: func.isRequired,
  isMobile: bool,

  // from injectIntl
  intl: intlShape.isRequired,
  
};

export default compose(
  withViewport,
  injectIntl
)(TopbarSearchFormComponent);

