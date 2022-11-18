import { Character, GameStatus } from './GameDefs';
export type ID = string;// 玩家ID
export type index = number;//玩家编号，从1开始

export type round = number;
export type TeamVoteNumber = number;
export type Avatar =
	| "PlayerGirl"
	| "Ayaka"
	| "Albedo"
	| "Klee"
	| "Kazuha"
	| "Xiao"
	| "Zhongli"
	| "Venti"
	| "Ayato"
	| "Cyno"
	| "Diluc"
	| "Eula"
	| "Ganyu"
	| "Hutao"
	| "Itto"
	| "Keqing"
	| "Kokomi"
	| "Mona"
	| "Nilou"
	| "Qin"
	| "Qiqi"
	| "Shenhe"
	| "Shougun"
	| "Tartaglia"
	| "Tighnari"
	| "Yae"
	| "Yelan"
	| "Yoimiya"
	| "";

export const avatarNames = [
	"PlayerGirl",
	"Ayaka",
	"Albedo",
	"Kazuha",
	"Klee",
	"Xiao",
	"Zhongli",
	"Venti",
	"Ayato",
	"Cyno",
	"Diluc",
	"Eula",
	"Ganyu",
	"Hutao",
	"Itto",
	"Keqing",
	"Kokomi",
	"Mona",
	"Nilou",
	"Qin",
	"Qiqi",
	"Shenhe",
	"Shougun",
	"Tartaglia",
	"Tighnari",
	"Yae",
	"Yelan",
	"Yoimiya",
];

export interface RoomDef{
	roomNumber: string;//房间号码
	ownerID: index;//房主ID
	password?: string; //是否设置密码，存放哈希过的密码
	currentRound: round;//当前轮数 -> 游戏结束重置
	currentTeamVote: TeamVoteNumber;//当前组队投票轮数 -> 游戏结束重置
	prevTeamVote: TeamVoteNumber;//上一次组队投票成功的轮数 -> 游戏结束重置
	needingChatacters: Character[];//设置的角色
	remainingIndexes: index[];//空缺玩家号码
	isFinished: boolean;//是否已经结束 -> 游戏结束重置
	gameStatus: GameStatus[];//所有的游戏状态的栈，游戏结束重置
	playing: boolean;
}

export interface PublicPlayerDef {
	index: index; // 玩家编号 -> 游戏结束重置
	name: string; // 昵称
	isFairy: boolean; // 是否为湖中仙女 -> 游戏结束重置
	teamVoted: boolean[]; // 下标是轮数, value 是投了好票还是坏票
	questVoted: boolean[]; // 下标是轮数, value 是投了好票还是坏票
	avatar: Avatar;// 头像
	leave: boolean;
}

export interface PlayerDef extends PublicPlayerDef {
	character: Character; // 游戏角色 -> 游戏结束重置
	_id: ID; // string + 时间戳 的 token
}

export interface CharacterEvent {
	character: Character;
	events: {
		at: round;
		deed: string;
	}[];
}

export type GameEvent = {
	character: Character;
	at: round;
	deed: string;
};