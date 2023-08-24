// re-use-online.d.ts

declare module "re-use-online" {
  import { DependencyList } from "react";

  type UseOnlineStatus = () => boolean;

  interface UseOnlineStatusOptions {
    dependencies?: DependencyList;
  }

  export const useOnlineStatus: UseOnlineStatusOptions;
  export default useOnlineStatus;
}
