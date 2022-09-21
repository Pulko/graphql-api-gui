import React from 'react';

import LaunchList from './LaunchList'

import { useLaunchListQuery } from 'generated/graphql'

interface LaunchListContainerProps {
  onFlightNumberSelect: (flightNumber: number | null | undefined) => void
}

const LaunchListContainer: React.FC<LaunchListContainerProps> = (props) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error || !data) {
    return (
      <div>Error occured!</div>
    )
  }

  return <LaunchList data={data} onFlightNumberSelect={props.onFlightNumberSelect} />
}

export default LaunchListContainer
