import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';


import css from './AutomktRewards.module.css';
import captialAccessImg from './capitalAccess.png'
import cryptoRewardsImg from './cryptoReward.png'
import maintenanceImg from './maintenance.png'
import top from './top.png'
import bottom from './bottom.png'


const heading = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="AUTOMKT Rewards"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AUTOMKT Rewards',
        description: 'AUTOMKT Rewards',
        name: 'AUTOMKT Rewards',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.automktTitle}><span className={css.span}>A</span>UTOMKT Rewards Program</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.automktContent}>
                AUTOMKT tokens can be used to claim unique rewards.
              </p>
              <div className={css.captialAccessContainer}>
                <div className={css.dottedLine}>
                  <img className={css.capitalAccess} src={captialAccessImg} alt="Capital access image"/>
                  {/* <img src={top} alt="Capital access image"/> */}
                </div>
                <div>
                  <h3 className={css.heading}>Access to Capital</h3>
                  <p className={css.paragraph}>
                    Access to no interest advances
                  </p>
                </div>
              </div>
              {/* <img src={top} alt="Capital access image"/> */}
              <div className={css.captialAccessContainer}>
                <img className={css.maintenance} src={maintenanceImg} alt="Capital access image"/>
                <div>
                  <h3 className={css.heading}>Discounted Auto Parts & Service</h3>
                  <p className={css.paragraph}>
                    Save on tires, parts, maintenance, inspections, etc.
                  </p>
                </div>
              </div>
              <div className={css.captialAccessContainer}>
                <img className={css.crypto} src={cryptoRewardsImg} alt="Crypto Rewards image"/>
                <div>
                  <h3 className={css.heading}>Crypto Rewards</h3>
                  <p className={css.paragraph}>
                    Win Bitcoin, Ethereum, Solana and other crypto
                  </p>
                </div>
              </div>
              <div className={css.buttonContainer}>
                <NamedLink name="CurrentOffersPage" className={css.userOwned}>
                  <button className={css.currentOffersBtn}>Coming Soon
                    <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64" 
                      xmlns="http://www.w3.org/2000/svg"><path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                    </svg>
                  </button>
                </NamedLink>
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

export default heading;
