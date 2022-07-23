import axios from 'axios';
import envs from '../Config/env';;

export async function GetAuthenticationToken() {
    const { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE, API_AUTH } = envs;
    const url = `${API_AUTH}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=${GRANT_TYPE}`;
    const response = await axios.post(url);
    return response.data;
}