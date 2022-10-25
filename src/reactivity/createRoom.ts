import sha256 from "sha256";
import { reactive, ref } from "vue";

import { SetableCharacters } from "../../shared/GameDefs";
import router from "../router";
import { showDialog } from "./dialog";
import { needingCharacters, players } from "./game";

/**
 * 游戏人数配置(reactive)
 */
export const characters = reactive<Record<SetableCharacters, number> >({
  MERLIN: 1,
	PERCIVAL: 1,
	ASSASSIN: 1,
	MORDRED: 0,
	OBERON: 0,
	MORGANA: 1,
	LOYALIST: 1,
	MINIONS: 0,
});

/* 玩家信息 */
export const nickname = ref<string>("");
export const password = ref<string>("");

export async function create() {
  if (!nickname.value) return showDialog("请填写昵称");

  /* 设置人数配置 */
  let characterNames: SetableCharacters[] = [];
  Object.keys(characters).map((_name) => {
    const name = _name as SetableCharacters;
    characterNames = characterNames.concat(
      new Array(characters[name]).fill(name)
    );
  });
  needingCharacters.value = characterNames;
}
