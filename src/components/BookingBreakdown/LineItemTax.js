import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import css from './BookingBreakdown.module.css';

const LineItemTax = props => {
    const { transaction, intl } = props;
    const unitType = 'line-item/tax';
    const unitTax = transaction && transaction.attributes && transaction.attributes.lineItems.find(
        item => item.code === unitType && !item.reversal
    );
    const total = unitTax ? formatMoney(intl, unitTax.lineTotal): null;
    return(
        unitTax ?
        <>
            <hr className={css.totalDivider} />
            <div className={css.subTotalLineItem}>
                <span className={css.itemLabel}>
                    <FormattedMessage id="LineItems.tax"/>
                </span>
                <span className={css.itemValue}>
                    {total}
                </span>
            </div>
        </>
        : null
    )
}
export default LineItemTax;