export type Data = DataChild[];
export type DataChildVOTING_BLOCK_STATUS_LIST = {
    value: string;
    label: string;
}
export type DataChildVOTING_BLOCK_ID_LIST = {
    value: string;
    label: string;
}
export type DataChild = {
    PLACE: string;
    NAME: string;
    ROOM_ACTIVE: number;
    TITLE_EVENT: string;
    TITLE_NAME: string;
    TITLE_TIME: string;
    CHAT_BLOCK_ACTIVE: number;
    PLAYER_BLOCK_ACTIVE: number;
    PLAYER_BLOCK_CAP: string;
    PLAYER_BLOCK_LINK: string;
    VOTING_BLOCK_STATUS_LIST: DataChildVOTING_BLOCK_STATUS_LIST[];
    VOTING_BLOCK_STATUS: string;
    VOTING_BLOCK_ID_LIST: DataChildVOTING_BLOCK_ID_LIST[];
    VOTING_BLOCK_ID: number;
    [key: string]: any
}

export type DataChildWithoutArr = Omit<DataChild,  "VOTING_BLOCK_STATUS_LIST" | "VOTING_BLOCK_ID_LIST">