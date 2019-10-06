import { stringify } from "query-string";
import React from 'react';

const query_constants = {
    client_id: 'b711a8f79fce454f9b2352b78f7b07e9',
    redirect_uri: 'http://localhost:3000/data', 
}

const ButtonView: React.FC = () => {
    const scopes = ['user-top-read', 'user-read-recently-played', 'user-read-private', 'playlist-read-private', 'playlist-read-collaborative'];

    const query = {
        scope: scopes.join(' '),
        redirect_uri: query_constants.redirect_uri,
        client_id: query_constants.client_id,
        response_type: 'token',
    }

    const uri = `https://accounts.spotify.com/authorize?${stringify(query)}`


// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
    return (
        <a href={uri}>Login Spotify</a>
    );
};

export default ButtonView;
