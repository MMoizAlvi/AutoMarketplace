import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const customFieldValueLabel = (field, key) => {
  if(Array.isArray(key)){
    let options = [];
    key.map(k => {
      const option = field.options.find(f => f.key === k);
      const optionLabel = option ? option.label : null;
      if (optionLabel) 
        options.push(optionLabel)
    })
    return options.join(', ')
  }
  else{
    const option = field.options.find(f => f.key === key);
    return option ? option.label : null; 
  }
  
};

const SectionCustomFieldsMaybe = props => {
  const { categoryDetails, publicData } = props;
  const fields = categoryDetails ? categoryDetails.fields : null;
  return fields ?
      <div className={css.customFieldsContainer}>
        {fields.map(f => 
          (<div className={css.customField}>
            <p className={css.customFieldTitle}>
              {f.label} :
            </p>
            <p className={css.customFieldValue}>
              {f.type === 'dropdown' ? customFieldValueLabel(f, publicData[f.key]) : publicData[f.key]}
            </p>
          </div>)
        )}
      </div>
  : null;
};

export default SectionCustomFieldsMaybe;
