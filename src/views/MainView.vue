<template>
  <div class="app">
    <header-component />
    <div class="wrapper">
      <chat-list-view />
      <chat-message-view />
      <chat-detail-view />
    </div>
  </div>
</template>

<script setup>
import ChatListView from "@/views/ChatListView.vue";
import ChatMessageView from "@/views/ChatMessageView.vue";
import ChatDetailView from "@/views/ChatDetailView.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped lang="scss"></style>
