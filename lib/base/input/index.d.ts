/**
 * @description input  api type
 * @author 阿怪
 * @date 2022/4/6 10:50 PM
 * @version v1.0.0
 *
 * @name w-input
 * @docDescription Input component with wash-painting-ui style.
 *              水墨组件的输入组件。
 * @docUrl https://wash-painting.com/input
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import type { IComponentOption } from "../../dependents/_types";

export declare type InputProps = {
  /**
   * @description input type. 输入框类型
   * @type string
   * @default text
   * @enum text|textarea
   */
  type: string,
  /**
   * @description input placeholder. 提示语
   * @type string
   * @default ''
   */
  placeholder: string,
  /**
   * @description input value. 输入框绑定值
   * @type string|number
   * @default ''
   */
  modelValue: string | number
}

export declare type OptionType = IComponentOption<InputProps>
