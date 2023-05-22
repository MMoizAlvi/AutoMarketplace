import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import evImage from './ev.png'
import css from './ElectricVehicle.module.css';

const ElectricVehiclePage = () => {
  
  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Automarketplace',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}><span className={css.span}>E</span>lectric Vehicles (EVs)</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                The coming years will likely see an increased adoption of battery electric vehicles (EVs) as more models become available,
                driving range increases and charging infrastructure is built out. EVs have fewer moving parts than gas-powered vehicles,
                but are not immune from maintenance (i.e., tires, brakes, body work).
              </p>
              <p className={css.paragraph}>
                As EV adoption increases and the demand for third party repair and services rises
                (i.e., outside of warranty or non-warranty work), AutoMarketplace will focus on expanding its EV-related content & listings.
              </p>
              <img src={evImage} className={css.image} alt="EV image"/>
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

export default ElectricVehiclePage;