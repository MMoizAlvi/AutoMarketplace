import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingLocationForm } from '../../forms';
import { types as sdkTypes } from '../../util/sdkLoader';

import css from './EditListingLocationPanel.module.css';
const { LatLng } = sdkTypes;

class EditListingLocationPanel extends Component {
  constructor(props) {
    super(props);

    this.getInitialValues = this.getInitialValues.bind(this);

    this.state = {
      initialValues: this.getInitialValues(),
    };
  }

  getInitialValues() {
    const { listing, currentUser} = this.props;
    const { privateData } = currentUser.attributes.profile;
    const currentListing = ensureOwnListing(listing);
    const { geolocation, publicData } = currentListing.attributes;

    // Only render current search if full place object is available in the URL params
    // TODO bounds are missing - those need to be queried directly from Google Places
    
    const userAddress = privateData && privateData.location;
    const userBuilding = privateData && privateData.building;
    const addressValue = userAddress && userAddress.selectedPlace.address
    const origin = userAddress && userAddress.selectedPlace.origin && 
      new LatLng(userAddress.selectedPlace.origin.lat, userAddress.selectedPlace.origin.lng)

    const userLocationFieldsPresent =
      userAddress && addressValue && origin;

    const userLocation = userLocationFieldsPresent ? {
          search: addressValue,
          selectedPlace: {address: addressValue , origin: origin }
        }
      : null

    const locationFieldsPresent =
      publicData && publicData.location && publicData.location.address && geolocation;

    const location = publicData && publicData.location ? publicData.location : {};
    const { address, building } = location;
    return {
      building: building ? building : userBuilding,
      location: locationFieldsPresent
        ? {
            search: address,
            selectedPlace: { address, origin: geolocation },
          }
        : userLocationFieldsPresent
        ? userLocation : null,
    };
  }

  render() {
    const {
      className,
      rootClassName,
      listing,
      disabled,
      ready,
      onSubmit,
      onChange,
      submitButtonText,
      panelUpdated,
      updateInProgress,
      errors,
    } = this.props;

    const classes = classNames(rootClassName || css.root, className);
    const currentListing = ensureOwnListing(listing);
    const isPublished =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditListingLocationPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingLocationPanel.createListingTitle" />
    );
    
    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditListingLocationForm
          className={css.form}
          initialValues={this.state.initialValues}
          onSubmit={values => {
            const { building = '', location } = values;
            // If location not added save NY as location for search to find the listing on search page
            const selectedPlace = location && location.selectedPlace;
            const address = selectedPlace && selectedPlace.address || "New York City, New York, United States";
            const origin = selectedPlace && selectedPlace.origin || new LatLng(40.7306, -73.9866);
            const predictionContext = location && 
                                      location.selectedPrediction &&
                                      location.selectedPrediction.context

            const place = predictionContext && predictionContext.filter( c => c.id.match(/place./))[0]
            const region = predictionContext && predictionContext.filter( c => c.id.match(/region./))[0]
            const placeValue = place && place.text;
            const regionValue = region && region.text;
            const cityState = placeValue +", "+ regionValue
            const updatedPublicData = {
              location: { address, building },
            }
            const publicData = placeValue && regionValue ? {
              ...updatedPublicData,
              cityState: cityState,
            } : updatedPublicData;
            const updateValues = {
              geolocation: origin,
              publicData,
            };
            this.setState({
              initialValues: {
                building,
                location: { search: address, selectedPlace: { address, origin } },
              },
            });
            onSubmit(updateValues);
          }}
          onChange={onChange}
          saveActionMsg={submitButtonText}
          disabled={disabled}
          ready={ready}
          updated={panelUpdated}
          updateInProgress={updateInProgress}
          fetchErrors={errors}
        />
      </div>
    );
  }
}
const { func, object, string, bool } = PropTypes;

EditListingLocationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingLocationPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingLocationPanel;
