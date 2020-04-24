import React, { FC } from 'react';

export const Loader: FC = () => (
  <div className="d-flex justify-content-center my-5">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
