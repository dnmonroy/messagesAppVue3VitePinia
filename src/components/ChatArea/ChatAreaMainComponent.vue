<template>
  <div v-if="!props.data.messages.length > 0">
    <div class="flex justify-center items-center" style="height: 74vh">
      No hay mensajes...
    </div>
  </div>

  <div v-else class="chat-area-main pt-2">
    <div
      id="wrapperScrollTop"
      class="absolute flex bottom-24 opacity-60 items-center justify-center text-xs"
    >
      <button
        @click="useScrollToTop()"
        id="myBtn"
        class="text-xs rounded"
        style="z-index: 99999; opacity: 0.6; pointer-events: auto"
        title="Go to top"
      >
        Top
      </button>
    </div>

    <div v-for="(item, index) in props.data.messages" :key="index">
      <div class="chat-msg" :class="[{ owner: item.isOwner }]">
        <div class="chat-msg-profile">
          <img
            v-if="!item.isOwner"
            class="chat-msg-img"
            :src="'/avatar/' + getAvatarByOwnerId(item.ownerId)"
            alt=""
          />
          <img
            v-else
            class="chat-msg-img"
            :src="'/avatar/' + userMockupMain.avatarImg"
            alt=""
          />
          <div class="chat-msg-date">Message seen 1.22pm</div>
        </div>

        <div class="chat-msg-content">
          <div class="chat-msg-text" v-for="messageData in item.messages">
            <template v-if="messageData.img">
              <img :src="messageData.img" alt="test" />
            </template>

            <div :class="[{ 'mt-3': messageData.img }]">
              {{ messageData.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import {
  useScrollToBottom,
  useScrollToTop,
  useShowAndHideScrollTopButton,
} from "@/shared/utils";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  data: Object,
});

//variable
const store = useMainStore();
const { activeChat, userMockupMain } = storeToRefs(store);
const { getChatById } = store;

//watch
watch(activeChat, () => {
  setTimeout(() => {
    useScrollToBottom(false);
    useShowAndHideScrollTopButton();
  }, 200);
});

//methods
const getAvatarByOwnerId = (id) => {
  return getChatById(id).avatarImg;
};

//hooks
onMounted(() => {
  useScrollToBottom(false);
  useShowAndHideScrollTopButton();
});
</script>

<style scoped>
#myBtn {
  display: none; /* Hidden by default */
  /*outline: none; !* Remove outline *!*/
  background-color: var(--button-color);
  /*!* Set a background color *!*/
  color: white; /* Text color */
  /*cursor: pointer; !* Add a mouse pointer on hover *!*/
  padding: 5px 20px 5px 20px; /* Some padding */
  /*border-radius: 10px; !* Rounded corners *!*/
}

#myBtn:hover {
  opacity: 1 !important;
}

#wrapperScrollTop {
  width: calc(100% - 700px);
}

@media (max-width: 1120px) {
  #wrapperScrollTop {
    width: calc(100% - 344px);
  }
}

@media (max-width: 780px) {
  #wrapperScrollTop {
    width: 100%;
  }
}
</style>
