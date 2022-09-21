import React from 'react'
import { useLaunchProfileQuery } from "generated/graphql"

import LaunchProfile from "./LaunchProfile"

interface LaunchProfileContainerProps {
  flightNumber: string
}

const LaunchProfileContainer: React.FC<LaunchProfileContainerProps> = (props) => {
  const { data, error, loading } = useLaunchProfileQuery({ variables: { id: props.flightNumber }, skip: !props.flightNumber })

  if (loading) {
    return <div>Loading..</div>
  }

  if (error) {
    return <div>Error occured!</div>
  }

  if (!data) {
    return <div>Select a flight from a panel</div>
  }

  return <LaunchProfile data={data} />
}

export default LaunchProfileContainer
