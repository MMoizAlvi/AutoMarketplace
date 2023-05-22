import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import bnplImg from './bnpl.png'
import completedImg from './completed.png'
import mailImg from './mail.png'

import css from './BNPL.module.css';

const BNPLPage = () => {
  
  // prettier-ignore
  return (
    <StaticPage
      title="BNPL"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'BNPL',
        description: 'About BNPL',
        name: 'BNPLPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}><span className={css.span}>B</span>uy Now, Pay Later (BNPL)</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p>
                According to AAA, 64 million American drivers (one in three) are unable to pay for unexpected
                car repairs without going into debt. This is why we've integrated leading Buy Now,
                Pay Later (BNPL) provider Affirm as a payment option. In addition, we also have our own BNPL program for select users.
              </p>
              <img src={bnplImg} alt="image" className={css.bnplImage}/>
              <h1 className={css.pageTitle}><span className={css.span}>A</span>ffirm</h1>
              <p>
                Affirm is a leading BNPL provider in the US. Getting approval to shop with Affirm is subject to their assessment
                (i.e., AutoMarketplace has no influence on Affirm's approval  process).
                Click <a href="/" className={css.link}>here</a> to learn more about Affirm's financial products.
              </p>
              <img src={completedImg} alt="image" className={css.completedImage}/>
              <h1 className={css.pageTitle}><span className={css.span}>A</span>utoMarketplace BNPL</h1>
              <p>
                AutoMarketplace works with certain NYC TLC drivers to offer a BNPL financial product.
                Please email <span className={css.email}>info@automarketplace.io</span> to inquire about the product.
              </p>
              <p>
                Currently, we are focused on running a program for full-time NYC TLC drivers who fit the following criteria.
                The below criteria should be used for guidance and does not ensure approval to the program.
              </p>
              <img src={mailImg} alt="image" className={css.mailImage}/>
              <div>
                <h1 className={css.listTitle}>Minimum Requirements for AutoMarketplace BNPL:</h1>
                <ul>
                  <li className={css.listItem}>At least 1 year driving in the NYC TLC industry</li>
                  <li className={css.listItem}>Uber/Lyft rating of 4.90 & above</li>
                  <li className={css.listItem}>Greater than 2,500 for-hire trips </li>
                </ul>
              </div>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default BNPLPage;
