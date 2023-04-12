<template>
  <div class="chat-area" v-if="activeChat">
    <chat-area-header-component
      v-if="activeChatData.isGroup"
      :data="activeChatData"
    />
    <chat-area-main-component :data="activeChatData" />
    <chat-area-footer-component :data="activeChatData"/>
  </div>
  <div v-else class="flex h-full w-full items-center justify-center">
    Seleccione un contacto para comenzar a escribir...
  </div>
</template>

<script setup>
import ChatAreaHeaderComponent from "@/components/ChatArea/ChatAreaHeaderComponent.vue";
import ChatAreaFooterComponent from "@/components/ChatArea/ChatAreaFooterComponent.vue";
import ChatAreaMainComponent from "@/components/ChatArea/ChatAreaMainComponent.vue";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

//store
const store = useMainStore();
const { activeChat, userMockup } = storeToRefs(store);

//computed
const activeChatData = computed(() => {
  return userMockup.value.filter((user) => user.id === activeChat.value)[0];
});
</script>

<style scoped></style>
