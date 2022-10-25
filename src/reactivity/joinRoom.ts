import sha256 from "sha256";
import { ref } from "vue";

import router from "../router";
import { showDialog } from "./dialog";
import { needingCharacters } from "./game";

export const password = ref("");
export const roomNumber = ref("");
export const nickname = ref("");

export async function join() {
  if (!roomNumber.value) return showDialog("请填写房间号");
  if (!nickname.value) return showDialog("请填写昵称");
}