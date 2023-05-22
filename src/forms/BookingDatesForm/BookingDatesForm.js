import React, { Component } from 'react';
import { string, bool, arrayOf, array, func } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import moment from 'moment';
import { required, bookingDatesRequired, composeValidators } from '../../util/validators';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Form, IconSpinner, PrimaryButton, FieldDateRangeInput, FieldSelect, FieldTextInput } from '../../components';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';

import css from './BookingDatesForm.module.css';

const identity = v => v;

export class BookingDatesFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    const el = document.createElement('script');
    el.onload = () => {
    window.Chargebee.registerAgain();
    };
    
    el.setAttribute('data-cb-site', 'automarketplace-test');
    
    el.setAttribute('src', 'https://js.chargebee.com/v2/chargebee.js');
    
    document.body.appendChild(el);
  }
  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { isUnit, listing } = this.props;
    const publicData = listing && listing.attributes && listing.attributes.publicData;
    const priceUnit = publicData && publicData.priceUnit;
    const priceUnitKey = priceUnit && (priceUnit === 'week' || priceUnit === 'month') ? priceUnit : 'day';
    const bookingDates = { startDate: moment().valueOf(), endDate: moment().add(1, 'day').valueOf()}
    const bookingDatesForPriceUnit = { startDate: moment().valueOf(), endDate: moment().add(1, priceUnitKey).valueOf()}
    const valuesForUnitType = {
      ...e,
      bookingDates: bookingDates,
      bookingData: bookingDates,
      isUnit,
    }

    const valuesForPriceUnit = {
      ...e,
      bookingDates: bookingDatesForPriceUnit,
      bookingData: bookingDatesForPriceUnit,
    }

    const values = isUnit ? valuesForUnitType : valuesForPriceUnit;
    
    const { startDate, endDate } = values.bookingDates || {};

    if (!startDate) {
      e.preventDefault();
      this.setState({ focusedInput: START_DATE });
    } else if (!endDate) {
      e.preventDefault();
      this.setState({ focusedInput: END_DATE });
    } else {
      this.props.onSubmit(values);
    }
  }

  // When the values of the form are updated we need to fetch
  // lineItems from FTW backend for the EstimatedTransactionMaybe
  // In case you add more fields to the form, make sure you add
  // the values here to the bookingData object.
  handleOnChange(formValues) {
    const { startDate, endDate } =
      formValues.values && formValues.values.bookingDates ? formValues.values.bookingDates : {};
    const listingId = this.props.listingId;
    const isOwnListing = this.props.isOwnListing;

    if (startDate && endDate && !this.props.fetchLineItemsInProgress) {
      this.props.onFetchTransactionLineItems({
        bookingData: { startDate, endDate, quantity: formValues.values.quantity },
        listingId,
        isOwnListing,
      });
    }
  }

  render() {
    const { rootClassName, className, isDaily, isHourly, isUnit, price: unitPrice, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            endDatePlaceholder,
            startDatePlaceholder,
            formId,
            handleSubmit,
            intl,
            isOwnListing,
            listing,
            submitButtonWrapperClassName,
            unitType,
            values,
            timeSlots,
            fetchTimeSlotsError,
            lineItems,
            fetchLineItemsInProgress,
            fetchLineItemsError,
          } = fieldRenderProps;
          const { startDate, endDate } = values && values.bookingDates ? values.bookingDates : {};

          const bookingStartLabel = intl.formatMessage({
            id: 'BookingDatesForm.bookingStartTitle',
          });
          const bookingEndLabel = intl.formatMessage({
            id: 'BookingDatesForm.bookingEndTitle',
          });
          const requiredMessage = intl.formatMessage({
            id: 'BookingDatesForm.requiredDate',
          });
          const startDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidStartDate',
          });
          const endDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidEndDate',
          });
          const timeSlotsError = fetchTimeSlotsError ? (
            <p className={css.sideBarError}>
              <FormattedMessage id="BookingDatesForm.timeSlotsError" />
            </p>
          ) : null;

          // This is the place to collect breakdown estimation data.
          // Note: lineItems are calculated and fetched from FTW backend
          // so we need to pass only booking data that is needed otherwise
          // If you have added new fields to the form that will affect to pricing,
          // you need to add the values to handleOnChange function
          const bookingData =
            startDate && endDate
              ? {
                  unitType,
                  startDate,
                  endDate,
                }
              : null;

          const showEstimatedBreakdown =
            bookingData && lineItems && !fetchLineItemsInProgress && !fetchLineItemsError;
          
          const { publicData } = listing && listing.attributes;
          const { priceUnit, category } = publicData;

          const hideEndDate = config.custom.DAILY_LISTING_TYPES.includes(category)
          const tireSection = config.custom.TIRE_LISTING_TYPE.includes(category)

          const bookingInfoMaybe = showEstimatedBreakdown ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingDatesForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} lineItems={lineItems} priceUnit={priceUnit} />
            </div>
          ) : null;

          const loadingSpinnerMaybe = fetchLineItemsInProgress ? (
            <IconSpinner className={css.spinner} />
          ) : null;

          const bookingInfoErrorMaybe = fetchLineItemsError ? (
            <span className={css.sideBarError}>
              <FormattedMessage id="BookingDatesForm.fetchLineItemsError" />
            </span>
          ) : null;

          const dateFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          };

          const now = moment();
          const today = now.startOf('day').toDate();
          const tomorrow = now
            .startOf('day')
            .add(1, 'days')
            .toDate();
          const startDatePlaceholderText =
            startDatePlaceholder || intl.formatDate(today, dateFormatOptions);
          const endDatePlaceholderText =
            endDatePlaceholder || intl.formatDate(tomorrow, dateFormatOptions);
          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          return (
            <Form onSubmit={handleSubmit} className={classes}>
              {timeSlotsError}
              <FormSpy
                subscription={{ values: true }}
                onChange={values => {
                  this.handleOnChange(values);
                }}
              />
              {
                isHourly || isDaily ?
                  <FieldDateRangeInput
                    className={css.bookingDates}
                    name="bookingDates"
                    unitType={unitType}
                    startDateId={`${formId}.bookingStartDate`}
                    startDateLabel={bookingStartLabel}
                    startDatePlaceholderText={startDatePlaceholderText}
                    endDateId={`${formId}.bookingEndDate`}
                    endDateLabel={bookingEndLabel}
                    endDatePlaceholderText={endDatePlaceholderText}
                    focusedInput={this.state.focusedInput}
                    onFocusedInputChange={this.onFocusedInputChange}
                    format={identity}
                    timeSlots={timeSlots}
                    hideEndDate={hideEndDate}
                    useMobileMargins
                    validate={composeValidators(
                      required(requiredMessage),
                      bookingDatesRequired(startDateErrorMessage, endDateErrorMessage)
                    )}
                    disabled={fetchLineItemsInProgress}
                  /> :
                  null
              }
              {bookingInfoMaybe}
              {loadingSpinnerMaybe}
              {bookingInfoErrorMaybe}

              {
                !config.custom.SUBSCRIPTION_LISTING_TYPES.includes(category) ?
                <p className={css.smallPrint}>
                  <FormattedMessage
                    id={
                      isOwnListing
                        ? 'BookingDatesForm.ownListing'
                        : 'BookingDatesForm.youWontBeChargedInfo'
                    }
                  />
                </p> : null
              }
              { tireSection ?
                <div>
                  <FieldTextInput
                    type='number'
                    inputMode='numeric'
                    max='4'
                    min='1'
                    id='quantity'
                    name='quantity'
                    placeholder='Quantity'
                    className={css.tireQuantity}
                  />
                </div>
               : null }

              <div className={submitButtonClasses}>
                {
                  config.custom.SUBSCRIPTION_LISTING_TYPES.includes(category) ? 
                    <a className={css.subscriptionBtn} href={void(0)} data-cb-type="checkout" data-cb-item-0={ listing.id.uuid + "-USD-Monthly"} data-cb-item-0-quantity="1" >Subscribe</a> :
                    <PrimaryButton type="submit">
                      <FormattedMessage id={'BookingDatesForm.requestToBuy'} />
                    </PrimaryButton>
                }
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

BookingDatesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  timeSlots: null,
  lineItems: null,
  fetchLineItemsError: null,
};

BookingDatesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  isOwnListing: bool,
  timeSlots: arrayOf(propTypes.timeSlot),

  onFetchTransactionLineItems: func.isRequired,
  lineItems: array,
  fetchLineItemsInProgress: bool.isRequired,
  fetchLineItemsError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingDatesForm = compose(injectIntl)(BookingDatesFormComponent);
BookingDatesForm.displayName = 'BookingDatesForm';

export default BookingDatesForm;
