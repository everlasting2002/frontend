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