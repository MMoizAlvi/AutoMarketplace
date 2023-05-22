import React,{useState} from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { IconPlay, Modal } from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import css from './SectionYoutubeChannel.module.css';
import youtubeIcon from '../../assets/youtube.png';

const SectionYoutubeChannel = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const onManageDisableScrolling = (componentId, scrollingDisabled = true) => {
  };
  return (
    <div className={classes}>
      <div className={css.youtubeWrapper}>
        <div className={css.youtubeContent}>
          <div>
            <div className={css.youtubeHeader}>
              <div className={css.icon}><img src={youtubeIcon} alt="youtube icon" /></div>
                <h1><FormattedMessage id="SectionYoutubeAutomarketplace"/>
                  <a href="https://www.youtube.com/channel/UCBLspAbS3IQu-w9QaEaVyQg"></a>
                  <span className={css.youtube}><FormattedMessage id="SectionYoutube"/></span>
                </h1>
            </div>
            <p>
              YouTube channel focused on general automotive content & the NYC for-hire transportation industry
            </p>
          </div>
          <div className={css.videoConatiner}>  
            <div className={css.videoContent}>
              <span onClick={handleOpen} className={css.iconPlay}><IconPlay /></span>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={() => {
                setOpen(false);
              }}
              onManageDisableScrolling={onManageDisableScrolling}
            >
              <div style={{ margin: '1rem' }}>
                <h1><FormattedMessage id="SectionYoutubeAutomarketplace"/>
                  <a href="https://www.youtube.com/channel/UCBLspAbS3IQu-w9QaEaVyQg"></a>
                  <FormattedMessage id="SectionYoutube"/>
                </h1>
                <iframe
                  className={css.video}
                  src="https://www.youtube.com/embed/videoseries?controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;autoplay=0&amp;loop=1&amp;list=PLxq1pNllAJszxbQ4V4rMeFqsmlvGl_X4N"
                  title="YouTube video player"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionYoutubeChannel.defaultProps = { rootClassName: null, className: null };

SectionYoutubeChannel.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionYoutubeChannel;
