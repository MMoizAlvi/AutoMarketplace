import React from 'react';
import { formatMoney } from '../../util/currency';
import { FormattedMessage } from '../../util/reactIntl';
import css from './BookingBreakdown.module.css';

const LineItemDiscount = props => {
    const { transaction, intl } = props;
    const unitType = 'line-item/discount';
    const unitDiscount = transaction && transaction.attributes && transaction.attributes.lineItems.find(
        item => item.code === unitType && !item.reversal
    );
    const total = unitDiscount ? formatMoney(intl, unitDiscount.lineTotal) : null;
    return(
        unitDiscount ?
            <>
                <hr className={css.totalDivider} />
                <div className={css.subTotalLineItem}>
                    <span className={css.itemLabel}>
                        <FormattedMessage id="LineItems.discount" />
                    </span>
                    <span className={css.itemValue}>
                        {total}
                    </span>
                </div>
            </> 
      : null
    )
}
export default LineItemDiscount;