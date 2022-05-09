import {useEffect, useState} from 'react';
import axios from 'axios';

// TODO use flaticon API, but for now use react-icons aja dulu.

const Icon = () => {
    const baseURL = "https://api.flaticon.com/v3";
    const [icon, setIcon] = useState(null);

    const TEMPORAL_FLATICON_API_KEY = axios.post(`${baseURL}/app/authentication`);
    console.log(TEMPORAL_FLATICON_API_KEY);

    const setIconAs = async () => {
        const result = await axios.get(`${baseURL}/item/icon/flower?apiKey=${TEMPORAL_FLATICON_API_KEY}`);
        setIcon(result);
    }
    
    useEffect(() => {setIconAs();}, []);

    if (icon === null) {
        return <div>Loading...</div>
    } 
    return (
        <img className = "icon" src = {icon.data.images}/>
    )
}

export default Icon;