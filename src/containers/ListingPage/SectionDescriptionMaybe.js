import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const youtubeLink = (link) => {
  if (link && link.constructor.name === 'String'){
    const pattern = /^.*(?:(?:youtu\.be\/|youtu.*v\/|youtu.*embed\/)|youtu.*(?:\?v=|\&v=))([^#\&\?\)]*).*/;
    const matches = link.match(pattern)
    return matches
  }
  else{
    return null
  }
};

const youtubeIframe = (ytl) => {
  const src = "//www.youtube.com/embed/" + ytl
  return <iframe className={css.youtubeIframe} src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
};

const convertYoutubeLinksToIframes = (description) => {
  let all_links = []
  const links = description && description.constructor.name === 'String' ?
                  description.match(/https?:\/\/\S+/) : null;
  const youtubeLinks = links ? links.map(l => youtubeLink(l)) : null
  youtubeLinks && youtubeLinks.map(ytl => {
    if(ytl && ytl[1] && ytl.input){
      all_links = all_links.concat(ytl[1])
      description = description.replace(ytl.input, "")
    }
  });
  return [description, all_links]
};


const SectionDescriptionMaybe = props => {
  const { description } = props;
  const parsedDescriptionLinks = convertYoutubeLinksToIframes(description)
  return description ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.descriptionTitle" />
      </h2>
      <p className={css.description}>
        {richText(parsedDescriptionLinks[0], {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
        <br/><br/>
        {
          parsedDescriptionLinks[1].map(l => youtubeIframe(l))
        }
      </p>
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
