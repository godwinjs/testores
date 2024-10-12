
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";

export const errNotify = (arr: string[]) => {

  let color: string[],
  [fromMsg, errMsg, type] = arr;

  switch (type) {
    case "warning":
      color = ['yellow', 'slate-200']
      break;
      case "error":
        color = ['red', 'slate-200']
        break;
      case "success":
        color = ['green', 'slate-200']
        break;
  
    default:
      color = ['rose', 'slate-200']
      break;
  }
  
  toast.custom(
    (t) => (
      <Transition
        appear
        show={t.visible}
        className={`p-4 max-w-md w-full bg-${color[0]}-400 text-center dark:bg-${color[0]}-200 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/5 dark:ring-${color[0]}/10 text--900 dark:text-${color[1]}`}
        enter="transition-all duration-300"
        enterFrom="opacity-0 translate-x-20"
        enterTo="opacity-100 translate-x-0"
        leave="transition-all duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-20"
      >
        <p className={`block text-base font-semibold leading-none`}>
          {fromMsg}
        </p>
        <div className={`border-t border-${color[0]}-200 dark:border-${color[0]}-700 my-4`} />
        {errMsg}
      </Transition>
    ))
}