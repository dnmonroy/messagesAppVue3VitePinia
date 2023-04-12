<template>
  <div class="chat-area-header">
    <div class="chat-area-title">{{ props.data.groupName }}</div>
    <div class="chat-area-group">
      <img
        class="chat-area-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
        alt=""
      />
      <img
        class="chat-area-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
        alt=""
      />
      <img
        class="chat-area-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
        alt=""
      />
      <span>
        +{{
          props.data.members > 3 ? props.data.members - 3 : props.data.members
        }}
      </span>
    </div>
  </div>
</template>

<script setup>
//props
const props = defineProps({
  data: Object,
});
</script>

<style scoped></style>
