export type SetableCharacters =
	| "MERLIN"
	| "PERCIVAL"
	| "ASSASSIN"
	| "MORDRED"
	| "OBERON"
	| "MORGANA"
	| "LOYALIST"
	| "MINIONS";

export type Character =
	| SetableCharacters
	| "FAIRY"
	| "";

export const ChineseNames: Record<Character, string> = {
	MERLIN: "梅林",
	PERCIVAL: "派西维尔",
	ASSASSIN: "刺客",
	MORDRED: "莫德雷德",
	OBERON: "奥伯伦",
	MORGANA: "莫甘娜",
	LOYALIST: "亚瑟的忠臣",
	MINIONS: "莫德雷德的爪牙",
	FAIRY: "湖中仙女",
	"": "",
};

export const CharacterIntro: Record<Character, string> = {
	MERLIN: "你可以看到所有邪恶阵营的玩家。",
	PERCIVAL: "你可以看到"+ChineseNames.MERLIN+"和"+ChineseNames.MORGANA+"，但是不知道两个玩家的具体身份。",
	ASSASSIN: "你随时可以进行刺杀，或是任务成功三次后进行刺杀，进行刺杀后游戏立即结束。如果成功刺杀了"+ChineseNames.MERLIN+"，那么邪恶阵营获得胜利，否则正义阵营获得胜利。",
	MORDRED: ChineseNames.MERLIN+"看不到你。",
	OBERON: "你无法看到其他邪恶阵营的玩家，其他邪恶阵营的玩家也看不到你。",
	MORGANA: "你需要假扮成"+ChineseNames.MERLIN+"，迷惑"+ChineseNames.PERCIVAL+"。",
	LOYALIST: "正义阵营平民",
	MINIONS: "邪恶阵营平民",
	FAIRY: "在第2、3、4轮任务结束后，你可以查验一位玩家的身份，随后被查验的玩家成为"+ChineseNames.FAIRY+"。",
	"": "",
};

export enum GameStatus {
	DAY_DISCUSS = "自由发言",
	TEAM_VOTE = "组队方案投票时间",
	QUEST_VOTE = "任务进行中",
	FAIRY_CHECK = "查验身份中",
}

export const TIMEOUT: Record<GameStatus,number> = {
	[GameStatus.DAY_DISCUSS]: 600,
	[GameStatus.QUEST_VOTE]: 20,
	[GameStatus.TEAM_VOTE]: 20,
	[GameStatus.FAIRY_CHECK]: 60,
};