import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Entity = ({ entity }) => {
  return (
    <div className="entity d-flex justify-content-between">
      <img src={entity.artworkUrl100} className="img-fluid img-thumbnail" />
      <div className="">
        <p className="track-name">{entity.trackName}</p>
        <p className="artist-name">{entity.artistName}</p>
        <p className="link-description">
          Click{' '}
          <a href={entity.collectionViewUrl} target="_blank">
            here
          </a>{' '}
          to see the details
        </p>
      </div>
    </div>
  );
};

Entity.propTypes = {
  entity: PropTypes.object
};
