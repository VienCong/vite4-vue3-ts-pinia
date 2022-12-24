<template>
  <div>{{ userStore.name }}</div>
  <button @click="changeName">改变名字</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const changeName = () => {
  userStore.updateName('李四');
};
</script>
