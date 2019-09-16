import axios from "axios";
import { parse } from "query-string";
import React, { useEffect, useState } from 'react';
import Artist from "./Artist";

const config = {
    headers: {
        Authorization: ''
    }
}
const DataView: React.FC = () => {
    const {access_token} = parse(window.location.hash);

    config.headers.Authorization = `Bearer ${access_token}`;

    const [artists, setArtists] = useState([]);
    useEffect(() => {
        try {
            const load = async () => {
                // todo next, spotify response typings
                const {data: { items }}: any = await axios.get('https://api.spotify.com/v1/me/top/artists', config);
                setArtists(items);
            }
            load();
        } catch (e) {
            console.error(e);
        }
    }, [access_token]);
    return (
       <div>{artists && artists.map((a, i) => <Artist key={i} artist={a}/>)}</div>
    );
};

export default DataView;
