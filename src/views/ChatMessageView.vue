<template>
  <div class="chat-area">
    <chat-area-header-component/>
    <chat-area-main-component/>
    <chat-area-footer-component/>
  </div>
</template>

<script setup>
import ChatAreaHeaderComponent from "@/components/ChatArea/ChatAreaHeaderComponent.vue";
import ChatAreaFooterComponent from "@/components/ChatArea/ChatAreaFooterComponent.vue";
import ChatAreaMainComponent from "@/components/ChatArea/ChatAreaMainComponent.vue";
</script>

<style scoped>
</style>