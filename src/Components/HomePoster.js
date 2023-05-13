import React from 'react'

const HomePoster = ({posterImg}) => {
  return (
    <div className='homepagePoster'>
        <img src={posterImg} alt='Poster' />
    </div>
  )
}

export default HomePoster