import { computed, ref } from "vue";

export const dialogType = ref(0);
export const toShowContents = ref<{ content: string,type: number,Func: Function }[]>([]);
export const content = computed(() =>
  toShowContents.value.length ? toShowContents.value[0] : null
);

/**
 * 展示一个出现 showTime 秒数(默认5s) 的弹窗
 * @param toShowContent 显示的文字(支持 html)
 * @param showTime 显示的秒数
 */
export function showDialog(
  toShowContent: string,
  showType?: number,
  Func?: Function,
) {
  toShowContents.value.push({
    content: toShowContent,
    type: showType || 1,
    Func: Func || function(){},
  });
}
