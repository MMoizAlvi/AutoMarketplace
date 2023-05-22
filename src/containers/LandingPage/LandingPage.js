import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { loadData } from './LandingPage.duck';
import config from '../../config';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { withViewport } from '../../util/contextHelpers';
import {
  Page,
  SectionHero,
  SectionYoutubeChannel,
  SectionHealthcare,
  SectionNewsletter,
  SectionEducation,
  SectionHowItWorks,
  SectionLocations,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  PlainTabs,
  Footer,
  SectionPromotedListings,
} from '../../components';
import { TopbarContainer } from '../../containers';
import Slider from "react-slick";

import facebookImage from '../../assets/saunatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/saunatimeTwitter-600x314.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './LandingPage.module.css';

import mainAutoRepairServices from './mainAutoRepairServices.png'
import mainTiresRims from './mainTiresRims.png'
import mainCarWashDetailing from './mainCarWashDetailing.png'
import mainBodyShopsTowing from './mainBodyShopsTowing.png'
import tires from './Tires.png'
import rims from './Rims.png'
import towing from './Towing.png'
import acCompressor from './ACcompressor.png'
import alternator from './Alternator.png'
import battery from './Battery.png'
import brakes from './Brakes.png'
import oilChange from './OilChange.png'
import otherAutoRepair from './OtherAutoRepair.png'
import radiator from './Radiator.png'
import stateInspection from './StateInspection.png'
import tireAlignment from './TireRotationAlignment.png'
import tireWheelReapir from './TireWheelRepair.png'
import tlc from './TLCMaintenancePackages.png'
import detailing from './Detailing.png'
import diagnostic from './Diagnostics.png'


import searchIcon from '../../assets/search.png';
import storeIcon from '../../assets/store.png';
import financeIcon from '../../assets/finance.png';
import findworkIcon from '../../assets/findwork.png';
import blockchainIcon from '../../assets/blockchain.png';
import tokensIcon from '../../assets/tokens.png';
import videoplayerIcon from '../../assets/videoplayer.png';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled, promotedListings, viewport } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;
  // const promotedCarRental = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'car_rental'
  // );
  // const promotedTlcCarRental = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'tlc_car_rental'
  // );
  // const promotedCarForSale = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'car_for_sale'
  // );
  // const promotedPart = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'part'
  // );
  // const promotedAccessories = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'accessories'
  // );
  // const promotedMaintenancePlans = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'maintenance_plans'
  // );
  const promotedService = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'maintenance_and_repair_services'
  );
  const promotedBrakes = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'brakes'
  );
  const promotedBattery = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'battery'
  );
  const promotedOilChange = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'oil_change'
  );
  const promotedDiagnostic = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'diagnostics'
  );
  const promotedStateInspection = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'state_inspection'
  );
  const promotedACcompressor = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'ac_compressor'
  );
  const promotedRadiator = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'radiator'
  );
  const promotedAlternator = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'alternator'
  );
  const promotedTLC = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'tlc_maintenance_packages'
  );
  const promotedOtherService = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'other_auto_repair'
  );

  // const promotedRepair = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'repair'
  // );
  const promotedRims = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'rims'
  );
  const promotedTirePlans = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'tire_rims'
  );
  const promotedTireAlignment = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'tire_rotation_alignment'
  );
  const promotedTires = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'tires'
  );
  const promotedTireRimServices = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'tire_rim_services'
  );
  const promotedBodyShops = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'body_shops'
  );
  const promotedTowing = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'towing'
  );
  // const promotedCollisionAndGlassWork = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'collision_work_glass'
  // );
  const promotedStandardAndDeluxeCleaning = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'car_wash_plans'
  );
  const promotedFullDetail = promotedListings.filter(
    pl => pl.attributes.publicData.category === 'detailing'
  );
  // const promotedTlcInsurance = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'tlc_insurance'
  // );
  // const promotedDmvInsurance = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'dmv_insurance'
  // );
  // const promotedDmvTlcServices = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'dmv_tlc_services'
  // );
  // const promotedProfessionaServices = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'professional_services'
  // );
  // const promotedNYCBaseWork = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'nyc_base_work'
  // );
  // const promotedOtherTransport = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'other_transport'
  // );
  // const promotedAutomotive = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'automotive'
  // );
  // const promotedParking = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'parking'
  // );
  // const promotedGasStations = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'gas_stations'
  // );
  // const promotedFoodCarts = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'food_carts'
  // );
  // const promotedFhvRestStops = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'fhv_rest_stops'
  // );
  // const promotedPublicRestrooms = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'public_restrooms'
  // );  
  // const promotedElectricChargingStations = promotedListings.filter(
  //   pl => pl.attributes.publicData.category === 'electric_charging_station'
  // );

  const howItWorksRef = useRef(null)
  const scrollToHowItWorks = () => howItWorksRef && howItWorksRef.current && howItWorksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [activeTab,setActiveTab] = useState({
    "vehicle_maintenance": "maintenance_and_repair_services",
    "tires": "tire_rims",
    "car_wash_and_detailing": "car_wash_plans",
    "body_shops": "body_shops",
  });
  const BANNERS = {
    "vehicle_maintenance": {
      "maintenance_and_repair_services": mainAutoRepairServices,
      "brakes": brakes,
      "battery": battery,
      "oil_change": oilChange,
      "diagnostics": diagnostic,
      "state_inspection": stateInspection,
      "ac_compressor": acCompressor,
      "radiator": radiator,
      "alternator": alternator,
      "tlc_maintenance_packages": tlc,
      "other_auto_repair": otherAutoRepair,
      },
    "tires": {
      "tire_rims": mainTiresRims,
      "tires": tires,
      "rims": rims,
      "tire_rotation_alignment": tireAlignment,
      "tire_rim_services": tireWheelReapir,
      },
    "car_wash_and_detailing":{
      "car_wash_plans": mainCarWashDetailing,
      "detailing": detailing,
      },
    "body_shops":{
      "body_shops": mainBodyShopsTowing,
      "towing": towing,
      }
  }
  const handleActive = (id) => {
    const category = Object.entries(BANNERS).filter(category => category[1][id])[0][0];
    const updatedSelectedSubCategory = {[category]: id}
    setActiveTab(
      {
        ...activeTab,
        ...updatedSelectedSubCategory,
      }
    )
  }
  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} handleOnClick={scrollToHowItWorks} viewport={viewport} />
          </div>
          {/* <div className={css.slider}>
            <Slider {...sliderSettings}>
              <div>
                <div className={css.slideContent}>maintenance_plans /></div>
                    <div className={css.slideInfo}>
                      <h4>One-Stop Shop & Search</h4>
                      <p>Cars, parts, tires, service & more</p>
                    </div>
                  </div>
                  <div className={css.slideSection}>
                    <div className={css.slideIcon}><img src={storeIcon} alt="store icon" /></div>
                    <div className={css.slideInfo}>
                      <h4>Create a Store</h4>
                      <p>Reach customers more efficiently</p>
                    </div>
                  </div>
                  <div className={css.slideSection}>
                    <div className={css.slideIcon}><img src={financeIcon} alt="finance icon" /></div>
                    <div className={css.slideInfo}>
                      <h4>Financial Products</h4>
                      <p>Interest free advances & other products</p>
                    </div>
                  </div>
                  <div className={css.slideSection}>
                    <div className={css.slideIcon}><img src={findworkIcon} alt="find work icon" /></div>
                    <div className={css.slideInfo}>
                      <h4>Find Work</h4>
                      <p>Open jobs from transport to technicians</p>
                    </div>
                  </div>
                  <div className={css.slideSection}>
                    <div className={css.slideBANNER["vehicle_maintenance"][activeTab[vehicle_maintenance]]Info}>
                      <h4>User Ownership</h4>
                      <p>Unique marketplace incentives</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.tokensSlideWrapper}>
                <div className={css.tokensSlide}>
                  <div>
                    <h4>AUTOMKT Tokens</h4>
                    <p>Earn & Spend Rewards, Own the Marketplace <br />Learn More >>></p>
                  </div>
                  <div className={css.tokensIcon}><img src={tokensIcon} alt="token icon" /></div>
                </div>
              </div>
              <div className={css.videoSlideWrapper}>
                <div className={css.videoSlide}>
                  <div>
                    <h4>Video-First Marketplace</h4>
                    <p>Listings & Vendors Brought to Life <br />Learn More >>></p>
                  </div>
                  <div className={css.videoplayerIcon}><img src={videoplayerIcon} alt="video player icon" /></div>
                </div>
              </div>
              
            </Slider>
          </div> */}
          <ul className={css.sections}>
            {/* <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedCars" /></h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'car_for_sale',
                      label: 'Cars for Sale',
                      content:
                        promotedCarForSale && promotedCarForSale.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedCarForSale}
                            showAll={'SectionPromotedCarForSale.showAll'}
                            allRelatedQuery={'car_for_sale'}
                          />
                        ) : null,
                    },
                    {
                      id: 'tlc_car_rental',
                      label: 'TLC Cars for Rent',
                      content:
                        promotedTlcCarRental && promotedTlcCarRental.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTlcCarRental}
                            showAll={'SectionPromotedTlcCarRental.showAll'}
                            allRelatedQuery={'tlc_car_rental'}
                          />
                        ) : null,
                    },
                    {
                      id: 'car_rental',
                      label: 'Cars for Rent',
                      content:
                        promotedCarRental && promotedCarRental.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedCarRental}
                            showAll={'SectionPromotedCarRental.showAll'}
                            allRelatedQuery={'car_rental'}
                          />
                        ) : null,
                    }
                  ]}
                />
              </div>
            </li> */}

            <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <div>
                  {
                    <a href={`/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&pub_category=${activeTab["vehicle_maintenance"]}`}>
                      <div className={css.banners} style={{
                        backgroundImage: 'url(' + `${(BANNERS["vehicle_maintenance"][activeTab["vehicle_maintenance"]])}` + ')',
                        }}>
                      </div>
                    </a>
                  }
                </div>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedVehicle"/>
                  <span className={css.heading}><FormattedMessage id="SectionPromotedMaintenance"/></span>
                </h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    // {
                    //   id: 'maintenance_plans',
                    //   label: 'Maintenance Plans',
                    //   handleActive: {handleActive},
                    //   content:
                    //     promotedMaintenancePlans && promotedMaintenancePlans.length > 0 ? (
                    //       <SectionPromotedListings
                    //         intl={intl}
                    //         promotedListings={promotedMaintenancePlans}
                    //         showAll={'SectionpromotedMaintenancePlans.showAll'}
                    //         allRelatedQuery={'maintenance_plans'}
                    //       />
                    //     ) : null,
                    // },
                    {
                      id: 'maintenance_and_repair_services',
                      label: 'Auto Repair & Services',
                      handleActive: {handleActive},
                      content:
                        promotedService && promotedService.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedService}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'maintenance_and_repair_services'}
                          />
                        ) : null,
                    },
                    {
                      id: 'brakes',
                      label: 'Brakes',
                      handleActive: {handleActive},
                      content:
                        promotedBrakes && promotedBrakes.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedBrakes}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'brakes'}
                          />
                        ) : null,
                    },
                    {
                      id: 'battery',
                      label: 'Battery',
                      handleActive: {handleActive},
                      content:
                        promotedBattery && promotedBattery.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedBattery}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'battery'}
                          />
                        ) : null,
                    },
                    {
                      id: 'oil_change',
                      label: 'Oil Change',
                      handleActive: {handleActive},
                      content:
                        promotedOilChange && promotedOilChange.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedOilChange}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'oil_change'}
                          />
                        ) : null,
                    },
                    {
                      id: 'diagnostics',
                      label: 'Diagnostics',
                      handleActive: {handleActive},
                      content:
                        promotedDiagnostic && promotedDiagnostic.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedDiagnostic}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'diagnostics'}
                          />
                        ) : null,
                    },
                    {
                      id: 'state_inspection',
                      label: 'State Inspection',
                      handleActive: {handleActive},
                      content:
                        promotedStateInspection && promotedStateInspection.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedStateInspection}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'state_inspection'}
                          />
                        ) : null,
                    },
                    {
                      id: 'ac_compressor',
                      label: 'A/C Compressor',
                      handleActive: {handleActive},
                      content:
                        promotedACcompressor && promotedACcompressor.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedACcompressor}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'ac_compressor'}
                          />
                        ) : null,
                    },
                    {
                      id: 'radiator',
                      label: 'Radiator',
                      handleActive: {handleActive},
                      content:
                        promotedRadiator && promotedRadiator.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedRadiator}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'radiator'}
                          />
                        ) : null,
                    },
                    {
                      id: 'alternator',
                      label: 'Alternator',
                      handleActive: {handleActive},
                      content:
                        promotedAlternator && promotedAlternator.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedAlternator}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'alternator'}
                          />
                        ) : null,
                    },
                    {
                      id: 'tlc_maintenance_packages',
                      label: 'TLC Maintenance Packages',
                      handleActive: {handleActive},
                      content:
                        promotedTLC && promotedTLC.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTLC}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'tlc_maintenance_packages'}
                          />
                        ) : null,
                    },
                    {
                      id: 'other_auto_repair',
                      label: 'Other Auto repair',
                      handleActive: {handleActive},
                      content:
                        promotedOtherService && promotedOtherService.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedOtherService}
                            showAll={'SectionPromotedService.showAll'}
                            allRelatedQuery={'other_auto_repair'}
                          />
                        ) : null,
                    },
                    // {
                    //   id: 'part',
                    //   label: 'Car Parts',
                    //   content:
                    //     promotedPart && promotedPart.length > 0 ? (
                    //       <SectionPromotedListings
                    //         intl={intl}
                    //         promotedListings={promotedPart}
                    //         showAll={'SectionPromotedPart.showAll'}
                    //         allRelatedQuery={'part'}
                    //       />
                    //     ) : null,
                    // },
                    // {
                    //   id: 'accessories',
                    //   label: 'Accessories',
                    //   content:
                    //     promotedAccessories && promotedAccessories.length > 0 ? (
                    //       <SectionPromotedListings
                    //         intl={intl}
                    //         promotedListings={promotedAccessories}
                    //         showAll={'SectionPromotedAccessories.showAll'}
                    //         allRelatedQuery={'accessories'}
                    //       />
                    //     ) : null,
                    // },
                  ]}
                />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <div>
                  {
                    <a href={`/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&pub_category=${activeTab["tires"]}`}>
                      <div className={css.banners} style={{
                        backgroundImage: 'url(' + `${(BANNERS["tires"][activeTab["tires"]])}` + ')',
                        }}>
                      </div>
                    </a>
                  }
                </div>
                <h2 className={css.categoryHeader}>
                  <FormattedMessage id="SectionPromotedTires"/>
                  <span className={css.heading}> <FormattedMessage id="SectionPromotedWheels"/></span>
                </h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'tire_rims',
                      label: 'Tire & Rims',
                      handleActive: {handleActive},
                      content:
                        promotedTirePlans && promotedTirePlans.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTirePlans}
                            showAll={'SectionPromotedTirePlans.showAll'}
                            allRelatedQuery={'tire_rims'}
                          />
                        ) : null,
                    },
                    {
                      id: 'tires',
                      label: 'Tires',
                      handleActive: {handleActive},
                      content:
                        promotedTires && promotedTires.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTires}
                            showAll={'SectionPromotedTires.showAll'}
                            allRelatedQuery={'tires'}
                          />
                        ) : null,
                    },
                    {
                      id: 'rims',
                      label: 'Rims',
                      handleActive: {handleActive},
                      content:
                        promotedRims && promotedRims.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedRims}
                            showAll={'SectionPromotedRims.showAll'}
                            allRelatedQuery={'rims'}
                          />
                        ) : null,
                    },
                    {
                      id: 'tire_rotation_alignment',
                      label: 'Tire Rotation & Alignment',
                      handleActive: {handleActive},
                      content:
                         promotedTireAlignment && promotedTireAlignment.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTireAlignment}
                            showAll={'SectionPromotedTireRimServices.showAll'}
                            allRelatedQuery={'tire_rotation_alignment'}
                          />
                        ) : null,
                    },
                    {
                      id: 'tire_rim_services',
                      label: 'Tire & Wheel Repair',
                      handleActive: {handleActive},
                      content:
                         promotedTireRimServices && promotedTireRimServices.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTireRimServices}
                            showAll={'SectionPromotedTireRimServices.showAll'}
                            allRelatedQuery={'tire_rim_services'}
                          />
                        ) : null,
                    },
                  ]}
                />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <div>
                  {
                    <a href={`/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&pub_category=${activeTab["car_wash_and_detailing"]}`}>
                      <div className={css.banners} style={{
                        backgroundImage: 'url(' + `${(BANNERS["car_wash_and_detailing"][activeTab["car_wash_and_detailing"]])}` + ')',
                        }}>
                      </div>
                    </a>
                  }
                </div>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedCarWash"/>
                  <span className={css.heading}><FormattedMessage id="SectionPromotedDetailing"/></span>
                </h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'car_wash_plans',
                      label: 'Car Wash Plans',
                      handleActive: {handleActive},
                      content:
                        promotedStandardAndDeluxeCleaning && promotedStandardAndDeluxeCleaning.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedStandardAndDeluxeCleaning}
                            showAll={'SectionPromotedStandardAndDeluxeCleaning.showAll'}
                            allRelatedQuery={'car_wash_plans'}
                          />
                        ) : null,
                    },
                    {
                      id: 'detailing',
                      label: 'Detailing',
                      handleActive: {handleActive},
                      content:
                        promotedFullDetail && promotedFullDetail.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedFullDetail}
                            showAll={'SectionPromotedFullDetail.showAll'}
                            allRelatedQuery={'detailing'}
                          />
                        ) : null,
                    },
                  ]}
                />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <div>
                  {
                    <a href={`/s?address=New%20York%20City%2C%20New%20York%2C%20United%20States&bounds=40.917577%2C-73.700272%2C40.477399%2C-74.25909&pub_category=${activeTab["body_shops"]}`}>
                      <div className={css.banners} style={{
                        backgroundImage: 'url(' + `${(BANNERS["body_shops"][activeTab["body_shops"]])}` + ')',
                        }}>
                      </div>
                    </a>
                  }
                </div>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedBodyShop"/>
                  <span className={css.heading}><FormattedMessage id="SectionPromotedTowing"/></span>
                </h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'body_shops',
                      label: 'Body Shops',
                      handleActive: {handleActive},
                      content:
                        promotedBodyShops && promotedBodyShops.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedBodyShops}
                            showAll={'SectionpromotedBodyShops.showAll'}
                            allRelatedQuery={'body_shops'}
                          />
                        ) : null,
                    },
                    {
                      id: 'towing',
                      label: 'Towing',
                      handleActive: {handleActive},
                      content:
                        promotedTowing && promotedTowing.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTowing}
                            showAll={'SectionPromotedTowing.showAll'}
                            allRelatedQuery={'towing'}
                          />
                        ) : null,
                    },
                    // {
                    //   id: 'collision_work_glass',
                    //   label: 'Collision & Glass',
                    //   content:
                    //     promotedCollisionAndGlassWork && promotedCollisionAndGlassWork.length > 0 ? (
                    //       <SectionPromotedListings
                    //         intl={intl}
                    //         promotedListings={promotedCollisionAndGlassWork}
                    //         showAll={'SectionPromotedCollisionAndGlassWork.showAll'}
                    //         allRelatedQuery={'collision_work_glass'}
                    //       />
                    //     ) : null,
                    // },
                  ]}
                />
              </div>
            </li>

            {/* <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedInsurances" /></h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'tlc_insurance',
                      label: 'TLC Insurance',
                      content:
                        promotedTlcInsurance && promotedTlcInsurance.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedTlcInsurance}
                            showAll={'SectionPromotedTlcInsurances.showAll'}
                            allRelatedQuery={'tlc_insurance'}
                          />
                        ) : null,
                    },
                    {
                      id: 'dmv_insurance',
                      label: 'DMV Insurance',
                      content:
                        promotedDmvInsurance && promotedDmvInsurance.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedDmvInsurance}
                            showAll={'SectionPromotedDmvInsurance.showAll'}
                            allRelatedQuery={'dmv_insurance'}
                          />
                        ) : null,
                    },
                    {
                      id: 'dmv_tlc_services',
                      label: 'DMV/TLC Services',
                      content:
                        promotedDmvTlcServices && promotedDmvTlcServices.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedDmvTlcServices}
                            showAll={'SectionPromotedDmvTlcServices.showAll'}
                            allRelatedQuery={'dmv_tlc_services'}
                          />
                        ) : null,
                    },
                    {
                      id: 'professional_services',
                      label: 'Professional Services',
                      content:
                        promotedProfessionaServices && promotedProfessionaServices.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedProfessionaServices}
                            showAll={'SectionPromotedProfessionaServices.showAll'}
                            allRelatedQuery={'professional_services'}
                          />
                        ) : null,
                    },
                  ]}
                />
              </div>
            </li> */}

            {/* <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedJobs" /></h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'nyc_base_work',
                      label: 'NYC Base Work',
                      content:
                        promotedNYCBaseWork && promotedNYCBaseWork.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedNYCBaseWork}
                            showAll={'SectionPromotedNYCBaseWork.showAll'}
                            allRelatedQuery={'nyc_base_work'}
                          />
                        ) : null,
                    },
                    {
                      id: 'other_transport',
                      label: 'Other Transport',
                      content:
                        promotedOtherTransport && promotedOtherTransport.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedOtherTransport}
                            showAll={'SectionPromotedOtherTransport.showAll'}
                            allRelatedQuery={'other_transport'}
                          />
                        ) : null,
                    },
                    {
                      id: 'automotive',
                      label: 'Automotive',
                      content:
                        promotedAutomotive && promotedAutomotive.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedAutomotive}
                            showAll={'SectionPromotedAutomotive.showAll'}
                            allRelatedQuery={'automotive'}
                          />
                        ) : null,
                    },
                  ]}
                />
              </div>
            </li> */}

            {/* <li className={css.section}>
              <div className={css.lpContentWrapper}>
                <h2 className={css.categoryHeader}><FormattedMessage id="SectionPromotedNycMaper" /></h2>
                <PlainTabs
                  menuListClass={css.promotedSectionTabMenu}
                  data={[
                    {
                      id: 'parking',
                      label: 'Parking',
                      content:
                        promotedParking && promotedParking.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedParking}
                            showAll={'SectionPromotedParking.showAll'}
                            allRelatedQuery={'parking'}
                          />
                        ) : null,
                    },
                    {
                      id: 'gas_stations',
                      label: 'Gas Stations',
                      content:
                        promotedGasStations && promotedGasStations.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedGasStations}
                            showAll={'SectionPromotedGasStations.showAll'}
                            allRelatedQuery={'gas_stations'}
                          />
                        ) : null,
                    },
                    {
                      id: 'electric_charging_station',
                      label: 'EV Charging',
                      content:
                        promotedElectricChargingStations && promotedElectricChargingStations.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedElectricChargingStations}
                            showAll={'SectionPromotedElectricChargingStations.showAll'}
                            allRelatedQuery={'electric_charging_station'}
                          />
                        ) : null,
                    },
                    {
                      id: 'fhv_rest_stops',
                      label: 'FHV Rest Stops',
                      content:
                        promotedFhvRestStops && promotedFhvRestStops.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedFhvRestStops}
                            showAll={'SectionPromotedFhvRestStops.showAll'}
                            allRelatedQuery={'fhv_rest_stops'}
                          />
                        ) : null,
                    },
                    {
                      id: 'public_restrooms',
                      label: 'Public Restrooms',
                      content:
                        promotedPublicRestrooms && promotedPublicRestrooms.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedPublicRestrooms}
                            showAll={'SectionPromotedPublicRestrooms.showAll'}
                            allRelatedQuery={'public_restrooms'}
                          />
                        ) : null,
                    },
                    {
                      id: 'food_cart',
                      label: 'Food Cart',
                      content:
                        promotedFoodCarts && promotedFoodCarts.length > 0 ? (
                          <SectionPromotedListings
                            intl={intl}
                            promotedListings={promotedFoodCarts}
                            showAll={'SectionPromotedFoodCart.showAll'}
                            allRelatedQuery={'food_cart'}
                          />
                        ) : null,
                    },
                  ]}
                />
              </div>
            </li> */}
          </ul>
          <div className={`${css.youtubeChannel} ${css.lpContentWrapper}`}>
            <SectionYoutubeChannel history={history} location={location} />
          </div>
          <div className={`${css.newsletter} ${css.lpContentWrapper}`} ref={howItWorksRef}>
            <SectionNewsletter history={history} location={location} />
          </div>
          {/* <div className={ `${css.healthcare} ${css.lpContentWrapper}` }>
            <SectionHealthcare history={history} location={location} />
          </div>
          <div className={ `${css.educaion} ${css.lpContentWrapper}` }>
            <SectionEducation history={history} location={location} />
          </div>
          <ul className={css.sections}  ref={howItWorksRef}>
            <li className={css.section}>
              <div className={`${css.sectionContent} ${css.sectionHowItWorks}` }>
                <SectionHowItWorks />
              </div>
            </li>
          </ul> */}
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object, shape, number } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from withViewport
  viewport: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    promotedListingRefs,
  } = state.LandingPage;

  const promotedListings = getMarketplaceEntities(state, promotedListingRefs);
  return {
    scrollingDisabled: isScrollingDisabled(state),
    promotedListings,
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withViewport,
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

LandingPage.loadData = loadData;

export default LandingPage;
