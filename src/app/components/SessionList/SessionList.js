import React from 'react';
import { Link } from 'react-router-dom';
import { SessionListItemStyled, SessionListStyled } from './SessionList.styled';
import PropTypes from 'prop-types';

const SessionList = ({ sessions = [] }) => (
  <SessionListStyled>
    {sessions.map(session => (
      <SessionListItemStyled key={session}>
        {session}
        <Link to={`/host/${session}`}>
          Open
        </Link>
      </SessionListItemStyled>
    ))}
  </SessionListStyled>
);

SessionList.propTypes = {
  sessions: PropTypes.array,
};

export default SessionList;
