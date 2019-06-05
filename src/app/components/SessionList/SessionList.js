import React from 'react';
import { Link } from 'react-router-dom';
import { SessionListItemStyled, SessionListStyled } from './SessionList.styled';

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

export default SessionList;
