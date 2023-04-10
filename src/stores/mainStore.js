import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useUserMockup} from "@/shared/mockups";

export const useMainStore = defineStore("mainStore", () => {
    //state
    const userMockup = ref(useUserMockup)
    const activeChat = ref(null)

    //getters
    const totalUser = computed(()=> {
        return userMockup.value.length
    })

    //actions
    const setActiveChat = (id) => {
        activeChat.value = id
    }

    return {
        userMockup,
        activeChat,
        totalUser,
        setActiveChat
    }
})