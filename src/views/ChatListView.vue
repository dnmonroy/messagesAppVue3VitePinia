<template>
  <div class="conversation-area">
    <div
      v-for="(item, index) in userMockup"
      class="msg"
      :class="[{ online: item.online }, { active: activeChat === item.id }]"
      @click="setActiveChat(item.id)"
    >
      <img class="msg-profile" :src="baseImage" alt="" v-if="!item.isGroup" />

      <div class="msg-detail" v-if="!item.isGroup">
        <div class="msg-username">{{ item.contactName }}</div>

        <div v-if="item.messages.length > 0"></div>

        <div class="msg-content">
          <dots-writing-animation-component v-if="item.writing" />
          <span
            class="msg-message"
            v-if="!item.writing && item.messages.length > 0"
            >{{ lastMessage(item).text }}</span
          >
          <span
            class="msg-date"
            v-if="!item.writing && item.messages.length > 0"
            >{{ lastMessage(item).dateSend }}</span
          >
          <span
            class="msg-date"
            v-if="!item.writing && !item.messages.length > 0"
            >No messages</span
          >
        </div>
      </div>

      <div class="msg-profile group" v-if="item.isGroup">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
          <path d="M22 8.5l-10 7-10-7" />
          <path d="M2 15.5l10-7 10 7M12 2v6.5" />
        </svg>
      </div>

      <div class="msg-detail" v-if="item.isGroup">
        <div class="msg-username">{{ item.groupName }}</div>
        <div class="msg-content">
          <span class="msg-message">Aysenur: I love CSS</span>
          <span class="msg-date">28m</span>
        </div>
      </div>
    </div>

      <a href="#add-contact" class="add"></a>

      <div class="modal" id="add-contact">
          <div class="modal-box">
              <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
              <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              <div class="modal-action">
                  <a href="#" class="btn">Yay!</a>
              </div>
          </div>
      </div>

    <div class="overlay"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import image from "@/assets/profile.png";
import DotsWritingAnimationComponent from "@/components/DotsWritingAnimationComponent.vue";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

//store
const store = useMainStore();
const { activeChat, userMockup, totalUser } = storeToRefs(store);
const { setActiveChat } = store;

//variables

//computed
const baseImage = computed(() => {
  return image;
});

//methods
const lastMessage = (item) => {
  return item.messages[item.messages.length - 1].messages[
    item.messages[item.messages.length - 1].messages.length - 1
  ];
};
</script>

<style scoped lang="scss"></style>
