<template>
  <div v-if="!props.data.messages.length > 0">
    <div class="flex justify-center items-center" style="height: 74vh">No hay mensajes...</div>
  </div>

  <div v-else class="chat-area-main">
    <div v-for="(item, index) in props.data.messages">
      <div class="chat-msg" :class="[{ owner: item.isOwner }]">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
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

const props = defineProps({
  data: Object,
});
</script>

<style scoped></style>
