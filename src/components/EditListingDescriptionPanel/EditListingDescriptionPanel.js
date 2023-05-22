import React, { useState } from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingDescriptionForm } from '../../forms';
import config from '../../config';

import css from './EditListingDescriptionPanel.module.css';

const EditListingDescriptionPanel = props => {
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
    category,
    handleCategoryChange,
  } = props;


  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, publicData } = currentListing.attributes;
  const {
    make,
    model,
    year,
    mileage,
    owner_type,
    exterior_color,
    interior,
    insurance_coverage,
    insurance_deductible,
    tlc_inspection_expiration,
    last_dmv_inspection,
    dmv_registration_expiration,
    drivetrain,
    part_number,
    part_make,
    type,
    applicable_to,
    number,
    size,
    install,
    contact_name,
    liability_companies_offered,
    physical_damage_companies_offered,
  } = publicData
  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDescriptionPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDescriptionForm
        className={css.form}
        initialValues={{ title,
          description,
          category: category,
          make,
          model,
          year,
          mileage,
          owner_type,
          exterior_color,
          interior,
          insurance_coverage,
          insurance_deductible,
          tlc_inspection_expiration,
          last_dmv_inspection,
          dmv_registration_expiration,
          drivetrain,
          part_number,
          part_make,
          type,
          applicable_to,
          number,
          size,
          install,
          contact_name,
          liability_companies_offered,
          physical_damage_companies_offered,
        }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { title,
            description,
            category,
            make,
            model,
            year,
            mileage,
            owner_type,
            exterior_color,
            interior,
            insurance_coverage,
            insurance_deductible,
            tlc_inspection_expiration,
            last_dmv_inspection,
            dmv_registration_expiration,
            drivetrain,
            part_number,
            part_make,
            type,
            applicable_to,
            number,
            size,
            install,
            contact_name,
            liability_companies_offered,
            physical_damage_companies_offered ,
          } = values;
          const updateValues = {
            title: title.trim(),
            description,
            publicData: { 
              category,
              make,
              model,
              year,
              mileage,
              owner_type,
              exterior_color,
              interior,
              insurance_coverage,
              insurance_deductible,
              tlc_inspection_expiration,
              last_dmv_inspection,
              dmv_registration_expiration,
              drivetrain,
              part_number,
              part_make,
              type,
              applicable_to,
              number,
              size,
              install,
              contact_name,
              liability_companies_offered,
              physical_damage_companies_offered,
            },
          };

          onSubmit(updateValues);
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        setCategory={handleCategoryChange}
        category={category}
      />
    </div>
  );
};

EditListingDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingDescriptionPanel.propTypes = {
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

export default EditListingDescriptionPanel;
