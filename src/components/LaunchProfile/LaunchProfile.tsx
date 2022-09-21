import React from 'react'

import { LaunchProfileQuery } from 'generated/graphql'

import './styles.css'

interface LaunchProfileProps {
  data: LaunchProfileQuery
}

const LaunchProfile: React.FC<LaunchProfileProps> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  const launch = data.launch
  return (
    <div className="LaunchProfile">
      <div className="LaunchProfile__status">
        <span>Flight {launch.flight_number}: </span>

        {launch.launch_success ? (
          <span className="LaunchProfile__success">Success</span>
        ) : (
          <span className="LaunchProfile__failed">Failed</span>
        )}
      </div>

      <h1 className="LaunchProfile__title">
        {launch.mission_name}
        {launch.rocket &&
          `(${launch.rocket.rocket_name} | ${launch.rocket.rocket_type})"`}
      </h1>

      <p className="LaunchProfile__description">{launch.details}</p>

      {!!launch.links && !!launch.links.flickr_images && (
        <div className="LaunchProfile__image-list">
          {launch.links.flickr_images.map((image, i) =>
            image ? (
              <img
                src={image}
                className="LaunchProfile__image"
                key={image}
                alt={`${launch?.mission_name} ${i}`}
              />
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

export default LaunchProfile
