import React from 'react';
import { FieldSelect } from '../../components';
import css from './EditListingDescriptionForm.module.css';

class CustomCategoriesSelectFieldMaybe extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { id,
            name,
            categories,
            category,
            handleCategoryChange,
            validate,
            intl
          } = this.props;
    const categoryLabel = intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryLabel',
    });
    
    return (
      <div>
        <FieldSelect className={css.category} name={name} id={id} label={categoryLabel} onChange={(e) => handleCategoryChange(e.target.value)} validate={validate}>
          {categories.map(c => 
            c.hideFromFilters ?
                (<option key={c.key} value={c.key}>
                  {c.label}
                </option>)
              : (<optgroup label={c.label}>
                  {c.subCategories && c.subCategories.map(subCategory => (
                    <option key={subCategory.key} value={subCategory.key}>
                      {subCategory.label}
                    </option>
                  ))}
                </optgroup>)
          )}
        </FieldSelect>
      </div>
    )
  }
}

export default CustomCategoriesSelectFieldMaybe;
