import React from 'react'

export default ({ title, releaseDate, overview }) => {
  return (
    <div className="movie-detail-info">
      <p className="text title">{title}</p>
      {title && (
        <>
          <hr style={{ width: '100%' }} />
          <p className="text released">Released:</p>
        </>
      )}
      <p className="text date">{releaseDate}</p>
      <p className="text description-text overview">{overview}</p>
    </div>
  )
}
