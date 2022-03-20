import { api } from "./api";
import envs from '../Config/env';;

export async function GetAttributesDetailsCharacter(kingdom: string, profile: string, access_token: string) {
    const { NAMESPACE, LOCAL } = envs;
    const characterUrl = `/character/${kingdom}/${profile}/statistics?namespace=${NAMESPACE}&locale=${LOCAL}&access_token=${access_token}`
    const response = await api.get(characterUrl);
    return response.data;
}

export async function GetClassCharacterSpec(kingdom: string, profile: string, access_token: string) {
    const { NAMESPACE, LOCAL } = envs;
    const classCharacterSpec = `/character/${kingdom}/${profile}/appearance?namespace=${NAMESPACE}&locale=${LOCAL}&access_token=${access_token}`
    const response = await api.get(classCharacterSpec);
    return response.data;
}

export async function GetCharacterMedia(kingdom: string, profile: string, access_token: string) {
    const { NAMESPACE, LOCAL, REGION } = envs;
    const characterMediaUrl = `/character/${kingdom}/${profile}/character-media?namespace=${NAMESPACE}&locale=${LOCAL}&%3Aregion=${REGION}&access_token=${access_token}`
    const response = await api.get(characterMediaUrl);
    return response.data;
}
