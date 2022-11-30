import { SetableCharacters } from "./GameDefs";
import { index } from "./ModelDefs";

export type CreateRoomResponse = {
	result: "success"|"fail",
	roomNumber: string,
	ID: number,
	reason: string,
};

export type JoinRoomResponse = {
	result: "success"|"fail",
	ID: number,
	reason: string,
};

export type LeaveRoomResponse = {
	result: "success"|"fail",
	reason: string,
};

export type StartGameResponse = {
	result: "success"|"fail",
	reason: string,
};

export type BeginGameResponse = {
	role: SetableCharacters,
	fairyID: index,
};

export type EndGameResponse = {
	win: boolean,
	reason: string,
	roleList: [],
};

export type MessageResponse = {
	result: "success"|"fail",
	reason: string,
};

export type MessageReceive = {
	ID: index,
	message: string,
};