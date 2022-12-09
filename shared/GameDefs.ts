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
	LOYALIST: "贤者",
	MINIONS: "赛诺",
	FAIRY: "虚空",
	"": "",
};

export const GOOD = "教令院阵营" , BAD = "旅行者阵营";

export const CharacterIntro: Record<Character, string> = {
	MERLIN: `作为全知的【${ChineseNames.MERLIN}】，【${ChineseNames.MERLIN}】洞悉【${ChineseNames.MORGANA}】的目的。【${ChineseNames.MERLIN}】可以看到所有人的阵营。但【${ChineseNames.MORDRED}】是个例外，在散兵眼里，【${ChineseNames.MORDRED}】仍属于【${GOOD}】。`,
	PERCIVAL: `【${ChineseNames.PERCIVAL}】是造神计划的核心人物。【${ChineseNames.PERCIVAL}】可以看到场上有两个【神】。一个是【${ChineseNames.MORGANA}】，另一个则是【${ChineseNames.MERLIN}】。【${ChineseNames.PERCIVAL}】只知道谁是神，但不能肯定两个神分别是谁。`,
	ASSASSIN: `找到【${ChineseNames.MERLIN}】，然后战胜他阻止造神计划是【${ChineseNames.ASSASSIN}】的终极任务。出手机会只有一次，请务必谨慎！`,
	MORDRED: `在【${GOOD}】看来，【${ChineseNames.MORDRED}】仍然是他们的人，因此【${ChineseNames.MERLIN}】仍认为你属于【${GOOD}】。`,
	OBERON: `【${ChineseNames.OBERON}】的目标也是拯救神明。但身处化城郭的【${ChineseNames.OBERON}】并不知道其他人的阵营，其他人也不知道【${ChineseNames.OBERON}】的阵营，但全知的【${ChineseNames.MERLIN}】知道。`,
	MORGANA: `作为神，【${ChineseNames.MORGANA}】巧妙地混淆了【${ChineseNames.PERCIVAL}】的认识。【${ChineseNames.PERCIVAL}】会看到两个神，但无法得知谁是【${ChineseNames.MERLIN}】。`,
	LOYALIST: `参与造神计划的【${GOOD}】的【${ChineseNames.LOYALIST}】。不知道任何人的阵营，胜利目标是造神成功。`,
	MINIONS: `【${ChineseNames.MINIONS}】的胜利目标是阻止【${GOOD}】的造神计划，拯救神明。`,
	FAIRY: `在第2、3、4轮任务结束后，拥有【${ChineseNames.FAIRY}】的人可以直接读取一位玩家的身份，随后【${ChineseNames.FAIRY}】将交给被查验的玩家。`,
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