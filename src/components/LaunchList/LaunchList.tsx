import React from "react"

import { LaunchListQuery } from "generated/graphql"

import './styles.css';

interface LaunchListProps {
  data: LaunchListQuery
  onFlightNumberSelect: (flightNumber: number | null | undefined) => void
}

const LaunchList: React.FC<LaunchListProps> = ({ data, onFlightNumberSelect }) => {
  return (
    <div className="LaunchList">
    <h3>Launches</h3>
    <ol className="LaunchList__list">
      {!!data.launches &&
        data.launches.map(
          (launch, index) =>
            !!launch && (
              <li key={index} className="LaunchList__item" onClick={() => onFlightNumberSelect(launch?.flight_number)}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
  )
}

export default LaunchList
