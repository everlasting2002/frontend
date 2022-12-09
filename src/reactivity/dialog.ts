import { computed, ref } from "vue";

export const dialogType = ref(0);
export const toShowContents = ref<{ content: string,type: number,Func: Function }[]>([]);
export const content = computed(() =>
  toShowContents.value.length ? toShowContents.value[0] : null
);

/**
 * 展示一个弹窗
 * @param toShowContent 显示的文字(支持 html)
 * @param showType 弹窗的类型，1确认，2确认/取消
 * @param Func 类型为2时，点击确认执行的函数
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
