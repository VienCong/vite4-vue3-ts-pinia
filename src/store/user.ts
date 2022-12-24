import { defineStore } from 'pinia';
interface UserStoreProps {
  name: string;
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    updateName(name: UserStoreProps['name']) {
      this.name = name;
    },
  },
});
