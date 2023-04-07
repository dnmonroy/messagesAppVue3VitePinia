<template>
  <div class="chat-area-footer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video">
      <path d="M23 7l-7 5 7 5V7z"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
      <path
          d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
    </svg>
    <input @keypress.enter="sendMessage()" v-model="textMessage" type="text" placeholder="Type something here..."/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up">
      <path
          d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
    </svg>
  </div>
</template>

<script setup>
import Message from "@/models/message";
import {ref} from "vue";
import axios from 'axios'

let textMessage = ref('')
let messagesList = ref([])

const URL_CHAT = 'http://api.brainshop.ai/get?bid=174074&key=5OZ0b0cQwjbb7EkK&uid=[uid]&msg=Yes'

const sendMessage = () => {
  const message = new Message(
      textMessage, true,
      '', '', false, false, false)
  messagesList.value.push(message)
  processMessages()
  textMessage.value = ''
}

const processMessages = () => {
  axios.get(`http://localhost:5173/api${textMessage.value}`, {
    headers: {
      'Authorization': 'Bearer ${accessToken}',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': "GET",
      'Access-Control-Allow-Credentials': true,
      'Sec-Fetch-Mode': "no-cors",
      'Sec-Fetch-Site': "same-site"
    }
  }).then(res => {
    alert(res.data?.cnt)
  })
}

</script>

<style scoped>

</style>