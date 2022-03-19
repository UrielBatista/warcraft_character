import { api } from "./api";

// GET RANKED 2X2
export async function GetRanked2x2(props: any) {
    const response = await api.get(`/character/${props.kingdom}/${props.profile}/pvp-bracket/2v2?namespace=profile-us&locale=en_US&access_token=${props.access_token}`);
    return response.data;
}
// GET RANKED 3X3
export async function GetRanked3x3(props: any) {
    const response = await api.get(`/character/${props.kingdom}/${props.profile}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=${props.access_token}`);
    return response.data;
}