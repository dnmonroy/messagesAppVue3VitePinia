import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserMockup } from "@/shared/mockups";
import axios from "axios";
import Message from "@/models/message";
import { useScrollToBottom } from "@/shared/utils";

export const useMainStore = defineStore("mainStore", () => {
  //state
  const userMockup = ref(useUserMockup);
  const activeChat = ref(null);

  //getters
  const totalUser = computed(() => {
    return userMockup.value.length;
  });

  //actions
  const setActiveChat = (id) => {
    activeChat.value = id;
  };

  const getChatById = (idChat) => {
    return userMockup.value.filter((chat) => chat.id === idChat)[0];
  };

  const processMessages = async (message, idChat) => {
    addMessageToList(message, idChat, true);
    //set the second person writing indicator
    getChatById(idChat).writing = true;
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5173/api${message.text}`, {
          headers: {
            Authorization: "Bearer ${accessToken}",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": true,
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "same-site",
          },
        })
        .then((response) => {
          const botMessage = new Message(
            response.data?.cnt,
            "20m",
            "",
            false,
            false,
            true
          );
          addMessageToList(botMessage, idChat, false);
          resolve(response);
        })
        .catch((error) => reject(error))
        .finally(() => (getChatById(idChat).writing = false));
    });
  };

  const addMessageToList = (message, idChat, isOwner) => {
    //last object message of chat
    const lastObjectMessage =
      getChatById(idChat).messages[getChatById(idChat).messages.length - 1];
    //if there aren't messages we create the first message
    if (!lastObjectMessage) {
      getChatById(idChat).messages = [
        {
          isOwner: isOwner,
          messages: [message],
        },
      ];
    }
    //if there are messages and belong to same group include the message inside
    else if (lastObjectMessage?.isOwner === isOwner) {
      lastObjectMessage.messages.push(message);
    }
    //is the message to add is not belong to the before message
    else {
      getChatById(idChat).messages.push({
        isOwner: isOwner,
        messages: [message],
      });
    }
    setTimeout(() => {
      useScrollToBottom();
    }, 100);
  };

  return {
    userMockup,
    activeChat,
    totalUser,
    setActiveChat,
    processMessages,
  };
});
