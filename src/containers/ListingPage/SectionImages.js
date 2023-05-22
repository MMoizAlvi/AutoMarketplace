
import React,{useCallback,useRef} from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { ResponsiveImage, Modal, ImageCarousel } from '../../components';
import ActionBarMaybe from './ActionBarMaybe';
import PropTypes from 'prop-types';
import { ScrollArrow , HorizontalScroll } from '../../components';

import css from './ListingPage.module.css';



const SectionImages = props => {
  const {
    title,
    listing,
    isOwnListing,
    editParams,
    handleViewPhotosClick,
    imageCarouselOpen,
    onImageCarouselClose,
    onManageDisableScrolling,
  } = props;

  const hasImages = listing.images && listing.images.length > 0;
  const hasthreeImages = listing.images && listing.images.length >= 3;
  const threeImages = hasImages ? listing.images.slice(0,3) : null;
  const firstImage = hasImages ? listing.images[0] : null;
  
  

  // Action bar is wrapped with a div that prevents the click events
  // to the parent that would otherwise open the image carousel
  const actionBar = listing.id ? (
    <div onClick={e => e.stopPropagation()}>
      <ActionBarMaybe isOwnListing={isOwnListing} listing={listing} editParams={editParams} />
    </div>
  ) : null;

  const viewPhotosButton = hasImages ? (
    <button className={css.viewPhotos} onClick={handleViewPhotosClick}>
      <FormattedMessage
        id="ListingPage.viewImagesButton"
        values={{ count: listing.images.length }}
      />
    </button>
  ) : null;
  return (
    <div className={css.sectionImages}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper}>
          {actionBar}
          {hasthreeImages ?  
            <div className={css.scrollContainer}>
              <HorizontalScroll> 
                {listing && hasImages && threeImages.map( img => (
                      <ResponsiveImage
                        rootClassName={css.rootForImage}
                        alt={title}
                        image={img}
                        variants={[
                          'landscape-crop',
                          'landscape-crop2x',
                          'landscape-crop4x',
                          'landscape-crop6x',
                        ]}
                    /> 
                ))}
              </HorizontalScroll>
            </div> : 
              <ResponsiveImage
              rootClassName={css.rootForImage}
              alt={title}
              image={firstImage}
              variants={[
                'landscape-crop',
                'landscape-crop2x',
                'landscape-crop4x',
                'landscape-crop6x',
              ]}
            />
          }
          {viewPhotosButton}
        </div>
       </div>
      <Modal
        id="ListingPage.imageCarousel"
        scrollLayerClassName={css.carouselModalScrollLayer}
        containerClassName={css.carouselModalContainer}
        lightCloseButton
        isOpen={imageCarouselOpen}
        onClose={onImageCarouselClose}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <ImageCarousel images={listing.images} />
      </Modal>
    </div>
  );
};


export default SectionImages;
