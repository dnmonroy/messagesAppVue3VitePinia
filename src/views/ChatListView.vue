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

    <label for="my-modal-3" @click="resetVariables" class="add"></label>

    <input
      type="checkbox"
      v-model="test"
      id="my-modal-3"
      class="modal-toggle"
    />
    <div class="modal">
      <div class="modal-box relative" style="width: 440px">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg mb-5">New contact</h3>
        <div class="form-control">
          <label class="input-group mb-2">
            <span>Contact name</span>
            <input
              type="text"
              v-model="newContact.contactName"
              placeholder="Juanito"
              class="input input-bordered"
            />
          </label>
          <label class="input-group">
            <span>Phone number</span>
            <input
              type="number"
              v-model="newContact.phoneNumber"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        <p class="py-4">Add new contacts to start chatting</p>

        <div
          class="alert alert-success shadow-lg"
          :class="alertObject.class"
          v-if="alertObject.show"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ alertObject.message }}</span>
          </div>
        </div>

        <div class="modal-action" @click="handleAddContact">
          <a href="#" class="btn">Add</a>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import image from "@/assets/profile.png";
import DotsWritingAnimationComponent from "@/components/DotsWritingAnimationComponent.vue";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

//store
const store = useMainStore();
const { activeChat, userMockup, totalUser } = storeToRefs(store);
const { setActiveChat, addContact } = store;

//variables
const newContact = ref({
  contactName: "",
  phoneNumber: "",
});

const alertObject = ref({
  class: "alert-success",
  show: false,
  message: "",
});

const test = ref(false);

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

const handleAddContact = () => {
  if (newContact.value.contactName && newContact.value.phoneNumber) {
    const response = addContact(
      newContact.value.contactName,
      newContact.value.phoneNumber
    );
    alertObject.value.show = true;
    alertObject.value.message = response.message;
    if (response.status) alertObject.value.class = "alert-success";
    else alertObject.value.class = "alert-error";

    setTimeout(() => {
      alertObject.value.show = true;
    });
  }
};

const resetVariables = () => {
  alertObject.value = {
    class: "alert-success",
    show: false,
    message: "",
  };
};
</script>

<style scoped lang="scss"></style>
