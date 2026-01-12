import React from 'react';
import { addMoviesStyle } from '../../styles/addmovies.js';

export const LatestTrailer = ({
  latestTrailerSchema,
  handleLatestTrailerChange ,
  
}) => {
  return (
    <div className={addMoviesStyle.latestTrailer.container}>
      <div className={addMoviesStyle.latestTrailer.header}>
        <h4 className={addMoviesStyle.latestTrailer.title}>Latest Trailer</h4>
      </div>

      <div className={addMoviesStyle.latestTrailer.formGrid}>
        <div>
          <label className={addMoviesStyle.latestTrailer.label}>Title *</label>
          <input
            type="text"
            name="title"
            value={latestTrailerSchema.title}
            onChange={(e) => handleLatestTrailerChange(e)}
            className={addMoviesStyle.latestTrailer.input}
            placeholder="Enter trailer title"
          />
        </div>

        <div>
          <label className={addMoviesStyle.latestTrailer.label}>Year *</label>
          <input
            type="number"
            name="year"
            value={latestTrailerSchema.year}
            onChange={(e) => handleLatestTrailerChange(e)}
            className={addMoviesStyle.latestTrailer.input}
            placeholder="Enter year"
          />
        </div>

        <div className={addMoviesStyle.latestTrailer.fullWidth}>
          <label className={addMoviesStyle.latestTrailer.label}>
            Description *
          </label>
          <textarea
            name="description"
            value={latestTrailerSchema.description}
            onChange={(e) => handleLatestTrailerChange(e)}
            className={addMoviesStyle.latestTrailer.textarea}
            placeholder="Enter trailer description"
            rows="3"
          />
        </div>

        <div>
          <label className={addMoviesStyle.latestTrailer.label}>
            Thumbnail URL *
          </label>
          <input
            type="text"
            name="thumbnai"
            value={latestTrailerSchema.thumbnai}
            onChange={(e) => handleLatestTrailerChange(e)}
            className={addMoviesStyle.latestTrailer.input}
            placeholder="https://example.com/thumbnail.jpg"
          />
        </div>

        <div>
          <label className={addMoviesStyle.latestTrailer.label}>
            Video URL *
          </label>
          <input
            type="text"
            name="videoUrl"
            value={latestTrailerSchema.videoUrl}
            onChange={(e) => handleLatestTrailerChange(e)}
            className={addMoviesStyle.latestTrailer.input}
            placeholder="https://youtube.com/watch?v=..."
          />
        </div>
      </div>
    </div>
  );
};
