import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

  //ftech data from tmdb api and update the store
useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      maincontainer
         videobackground
         videotitle
      secondaryContainer
        -movielist*n
        -cards*n
       */}
    </div>
  )
}

export default Browse
