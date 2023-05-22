import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import carWash from './washCar.png';
import maintenanceCar from './maintenanceCar.png'
import thread1 from './Group 33.png'
import thread2 from './Group 41.png'
import maintenanceImg from './maintenance.png'
import tyreImg from './tyre.png'
import carwashImg from './carwash.png'

import css from './MaintenancePlans.module.css';

const MaintenancePlansPage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="Maintenenace Plans"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'MaintenenacePlans',
        description: 'About Maintenance Plans',
        name: 'ManangingYourMainteneance',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Maintenance Plans</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                We work with trusted local automotive technicians and vendors to
                help them grow a subscription-based business and help our users
                save money and have peace of mind.
              </p>
              <div className={css.container}>
                <div className={css.imgsContainer}>
                  <div><img src={maintenanceCar} alt="img"/></div>
                  <div><img src={thread1} alt="img"/></div>
                  <div><img src={carWash} alt="img"/></div>
                  <div><img src={thread2} alt="img"/></div>
                  <div><img src={maintenanceCar} alt="img"/></div>
                </div>
                <div className={css.textContainer}>
                  <div>
                    <h1 className={css.heading}>Maintenance Plans</h1>
                    <p className={css.paragraph}>
                      We work with trusted local automotive technicians and vendors to
                      help them grow a subscription-based business and help our users
                      save money and have peace of mind.
                    </p>
                    <h4 className={css.subHeading}>Learn more ></h4>
                  </div>
                  <div>
                    <h1 className={css.heading}>Tire Plans</h1>
                    <p className={css.paragraph}>
                      We work with trusted local automotive technicians and vendors to
                      help them grow a subscription-based business and help our users
                      save money and have peace of mind.
                    </p>
                    <h4 className={css.subHeading}>Learn more ></h4>
                  </div>
                  <div>
                    <h1 className={css.heading}>Car Wash Plans</h1>
                    <p className={css.paragraph}>
                      We work with trusted local automotive technicians and vendors to
                      help them grow a subscription-based business and help our users
                      save money and have peace of mind.
                    </p>
                    <h4 className={css.subHeading}>Learn more ></h4>
                  </div>
                </div>
              </div>
              <h1 className={css.pageTitle}>Vehicle Maintenance Plans</h1>
              <p className={css.paragraph}>
                Customized plans uniquely built by vehicle brand and model. Plans
                cover common maintenance (i.e., oil & filter changes, fluid flush, tire
                rotation) and diagnostics. Our goal is to connect our users to trustable
                vendors that help them save money. Our vendors perform regular
                multi-point inspections (with reports) and we organize and file all of
                your maintenance records. Our plans should significantly reduce your
                annual vehicle maintenance bills and time lost without your vehicle.
              </p>
              <div>
                <img src={maintenanceImg} alt="maintenance image"/>
              </div>
              <div className={css.buttonContainer}>
                <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=maintenance_plans">
                  <button className={css.maintenancePlansBtn}>Maintenance Plans 
                  <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  
                      viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg">
                      <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                  </svg>
                  </button>
                </a>
              </div>
              <h1 className={css.pageTitle}>Tire Plans</h1>
              <p className={css.paragraph}>
                  Choose from a variety of tire plans that include installation and
                  balancing at market leading prices. Many of our plans have tire
                  warranties included, which helps you save money in case of one-off
                  incidences (i.e. nail in tire).
              </p>
              <div>
                <img src={tyreImg} alt="maintenance image"/>
              </div>
              <div className={css.buttonContainer}>
                <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=tire_plans">
                  <button className={css.tirePlansBtn}>
                      Tire Plans
                      <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64"  
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                      </svg>
                    </button>
                </a>
              </div>
              <h1 className={css.pageTitle}>Car Wash & Detailing Plans</h1>
              <p className={css.paragraph}>
                  Choose from a variety of monthly plans offered by local car wash and
                  detailing shops.
              </p>
              <div>
                <img src={carwashImg} alt="maintenance image"/>
              </div>
              <div className={css.buttonContainer}>
                <a href="/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&amp;bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&amp;pub_category=car_wash_plans">
                  <button className={css.carWashPlansBtn}>Car Wash Plans 
                    <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                    </svg>
                  </button>
                </a>
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

export default MaintenancePlansPage;
