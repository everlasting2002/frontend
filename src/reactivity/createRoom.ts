// import sha256 from "sha256";
import { reactive, ref } from "vue";

import { SetableCharacters } from "../../shared/GameDefs";
import router from "../router";
import { showDialog } from "./dialog";
import { needingCharacters,self, players, Room } from "./game";

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
  //const res = 1;
  //if(创建房间成功){
    Room.value.roomNumber = "114514";//之后得改成从后端获取房间号
    showDialog("创建成功, 进入等待房间");
    self.value.index=1;
    router.push({
      name: "waitRoom",
    });
    players.value = [
      {
        index: 1,
        name: nickname.value,
        isFairy: false,
        teamVoted: [],
        questVoted: [],
      },
    ];
  //}
}
