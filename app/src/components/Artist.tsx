import React from 'react';

const Artist: React.FC<{artist: object}> = ({ artist }) => {
    console.log(artist);
    return (
        <div>{artist.name}</div>
    )
}

export default Artist;