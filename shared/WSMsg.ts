import { SetableCharacters } from "./GameDefs";
import { index } from "./ModelDefs";

export type CreateRoomResponse = {
	result: "success"|"fail",
	roomNumber: string,
	ID: number,
	reason: string,
};

export type resultResponse = {
	result: "success"|"fail",
	reason: string,
};

export type JoinRoomResponse = {
	result: "success"|"fail",
	ID: number,
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

export type MessageReceive = {
	ID: index,
	message: string,
};

export type setLeaderReceive = {
	ID: index,
};

export type roleHintReceive = {
	HintList: [{
		ID: index,
		HintType: "GOOD"|"BAD"|"MERLIN_OR_MORGANA"|"ASSASSIN"|"MORDRED"|"MORGANA"|"MINIONS"|"",
	}],
};

export type selectTeamReceive = {
	team: index[],
}

export type voteTeamProgressReceive = {
	voted: index[],
}

export type voteTeamReceive = {
	voteResult: boolean,
	voteList: [{
		ID: index,
		vote: boolean,
	}],
}

export type missionResultProgressReceive = {
	decided: index[],
}

export type missionResultReceive = {
	missionSuccess: boolean,
	perform: number,
	screw: number
}

export type fairyInspectReceive = {
	ID: index,
}