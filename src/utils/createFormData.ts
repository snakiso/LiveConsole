import {DataChild} from "../services/types.ts";

export const createFormData = (data: DataChild) => {
    const booleanToNum = (boolean: boolean) => {
        if (boolean) {
            return '1'
        } else {
            return '0'
        }
    }
    const formData = new FormData();
    formData.append('place', data.PLACE)
    formData.append('ROOM_ACTIVE', booleanToNum(!!data.ROOM_ACTIVE))
    formData.append('TITLE_EVENT', data.TITLE_EVENT)
    formData.append('TITLE_NAME', data.TITLE_NAME)
    formData.append('TITLE_TIME', data.TITLE_TIME)
    formData.append('CHAT_BLOCK_ACTIVE', booleanToNum(!!data.CHAT_BLOCK_ACTIVE))
    formData.append('PLAYER_BLOCK_ACTIVE', booleanToNum(!!data.PLAYER_BLOCK_ACTIVE))
    formData.append('PLAYER_BLOCK_CAP', data.PLAYER_BLOCK_CAP)
    formData.append('PLAYER_BLOCK_LINK', data.PLAYER_BLOCK_LINK)
    formData.append('VOTING_BLOCK_STATUS', data.VOTING_BLOCK_STATUS)
    formData.append('VOTING_BLOCK_ID', booleanToNum(!!data.VOTING_BLOCK_ID))
    return formData;
}