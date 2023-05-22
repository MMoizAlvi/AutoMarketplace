import React from 'react';
import { FieldSelect, FieldTextInput, FieldCheckbox } from '../../components';
import { required, composeValidators } from '../../util/validators';
import css from './EditListingDescriptionForm.module.css';

const CustomFields = props => {
  const { category, categories} = props;
  const subCategory = categories && category ? categories.map(cat => cat.subCategories).filter((subCategories) => subCategories && subCategories.filter(subcat => subcat.key === category)[0])[0].filter(subcat=>subcat.key === category)[0] : null;
  const categoryBasedCustomFields = subCategory ? subCategory.fields : null;

  return categoryBasedCustomFields
    ? categoryBasedCustomFields.map(fieldConfig => {
        switch (fieldConfig.type) {
          case 'dropdown':
            return (
              <FieldSelect
                key={fieldConfig.key}
                className={css.customField}
                type="select"
                name={fieldConfig.key}
                id={fieldConfig.key}
                label={fieldConfig.label}
                validate={fieldConfig.required_message ? composeValidators(required(fieldConfig.required_message)) : null}
                multiple={fieldConfig.multiselect === 'true'}
              >
                {fieldConfig.options.map(o => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </FieldSelect>
            );
          case 'checkbox':
            return (
              <FieldCheckbox
                key={fieldConfig.key}
                id={fieldConfig.key}
                className={css.customField}
                name={fieldConfig.key}
                label={fieldConfig.label}
                value="true"
                validate={fieldConfig.required_message ? composeValidators(required(fieldConfig.required_message)) : null}
              />
            );
          default:
            return (
              <FieldTextInput
                key={fieldConfig.key}
                id={fieldConfig.key}
                name={fieldConfig.key}
                className={css.customField}
                type={fieldConfig.type}
                label={fieldConfig.label}
                placeholder={fieldConfig.placeholder}
                validate={fieldConfig.required_message ? composeValidators(required(fieldConfig.required_message)) : null}
              />
            );
        }
      })
    : null;
};
export default CustomFields;
