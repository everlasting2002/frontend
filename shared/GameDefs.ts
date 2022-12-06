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
	MERLIN: "七叶寂照秘密主",
	PERCIVAL: "博士",
	ASSASSIN: "旅行者",
	MORDRED: "艾尔海森",
	OBERON: "提纳里",
	MORGANA: "小吉祥草王",
	LOYALIST: "教令院",
	MINIONS: "赛诺",
	FAIRY: "虚空",
	"": "",
};

const GOOD = "教令院阵营" , BAD = "旅行者一行人";

export const CharacterIntro: Record<Character, string> = {
	MERLIN: `你可以看到所有${BAD}。`,
	PERCIVAL: `你可以看到【${ChineseNames.MERLIN}】和【${ChineseNames.MORGANA}】，但是不知道两个玩家的具体身份。`,
	ASSASSIN: `你随时可以进行刺杀。如果成功刺杀了【${ChineseNames.MERLIN}】，那么${BAD}获得胜利，否则${GOOD}获得胜利。`,
	MORDRED: `【${ChineseNames.MERLIN}】看不到你。`,
	OBERON: `你无法看到其他${BAD}，其他${BAD}也看不到你。`,
	MORGANA: `你需要假扮成【${ChineseNames.MERLIN}】，迷惑【${ChineseNames.PERCIVAL}】。`,
	LOYALIST: `${GOOD}`,
	MINIONS: `${BAD}`,
	FAIRY: `在第2、3、4轮任务结束后，【${ChineseNames.FAIRY}】可以把一位玩家的身份悄悄告诉你，随后【${ChineseNames.FAIRY}】被查验的玩家拥有。`,
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