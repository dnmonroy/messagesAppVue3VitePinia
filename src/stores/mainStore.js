import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserMockup, mainUserMockup } from "@/shared/mockups";
import axios from "axios";
import Message from "@/models/message";
import { useScrollToBottom } from "@/shared/utils";
const IS_DEVELOP = import.meta.env.VITE_DEVELOP;

export const useMainStore = defineStore("mainStore", () => {
  //state
  const userMockup =
    localStorage.getItem("useUserMockup") !== undefined &&
    localStorage.getItem("useUserMockup")
      ? ref(JSON.parse(localStorage.getItem("useUserMockup")))
      : ref(useUserMockup);
  const userMockupMain = ref(mainUserMockup);
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
      const HTTP_API_BASE =
        JSON.parse(IS_DEVELOP.toLowerCase()) === true
          ? `http://api.brainshop.ai/get?bid=174074&key=5OZ0b0cQwjbb7EkK&uid=[uid]&msg='${message.text}'`
          : `http://localhost:5173/api${message.text}`;

      axios
        .get(HTTP_API_BASE, {
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
        .finally(() => {
          getChatById(idChat).writing = false;
          updateAll("useUserMockup", userMockup.value);
        });
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
          ownerId : idChat,
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
        ownerId : idChat,
        messages: [message],
      });
    }
    setTimeout(() => {
      useScrollToBottom();
    }, 100);
  };

  const clearAll = () => {
    localStorage.clear();
  };

  const updateAll = (objectName, objectValue) => {
    localStorage.setItem(objectName, JSON.stringify(objectValue));
  };

  const getAll = (objectName) => {
    return JSON.parse(localStorage.getItem(objectName));
  };

  const addContact = (contactName, phoneNumber) => {
    const findRepeatedNumber = userMockup.value.find(user => user.phoneNumber === phoneNumber)
    if (findRepeatedNumber)
      return {message : 'There is already a user with the same phone number' , status : false}
    else {
      userMockup.value.unshift({
        id: userMockup.value.length + 1,
        contactName: contactName,
        avatarImg: "emptyAvatar.png",
        phoneNumber: phoneNumber,
        writing: false,
        messages: [],
        online: true,
      })
      return  {message : 'Contact added successfully', status : true}
    }

  }

  const addGroup = (groupName, members = []) => {

  }

  return {
    userMockup,
    userMockupMain,
    activeChat,
    totalUser,
    setActiveChat,
    processMessages,
    clearAll,
    addContact,
    getChatById
  };
});
