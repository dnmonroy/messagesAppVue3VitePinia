<template>
  <div class="header">
    <div class="logo">
      <svg
        viewBox="0 0 513 513"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z"
        />
        <path
          d="M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z"
          fill="#fff"
        />
      </svg>
    </div>
    <button class="btn btn-sm btn-showChatList">as</button>
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="user-settings">
      <div class="dark-light">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>

      <div class="dropdown dropdown-end"
           :class="[{'dropdown-open' : dropdownOpenFlag}]">
        <img
          tabindex="0"
          class="account-profile user-profile"
          :src="baseImage"
          alt=""
        />
        <div
          tabindex="0"
          class="dropdown-content card card-compact w-64 p-2 shadow-2xl bg-primary text-primary-content"
        >
          <div class="card-body">
            <h3 class="card-title">Hello {{ userMockupMain.contactName }}</h3>
            <p>
              In the future you will find account configuration options here.
            </p>
            <div class="w-full">
              <button
                v-if="!clearingFlag"
                class="btn text-white w-full"
                @click="handleClearAll"
              >
                Close
              </button>
              <progress v-else class="progress w-56"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import image from "@/assets/profile.png";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";
import {useRouter} from "vue-router";

//variables
const store = useMainStore();
const { userMockupMain } = storeToRefs(store);
const { clearAll } = store;
const clearingFlag = ref(false);
const dropdownOpenFlag = ref(false);
const router = useRouter()

//computed
const baseImage = computed(() => {
    return image;
});


//methods
const handleClearAll = () => {
  clearingFlag.value = true;
  dropdownOpenFlag.value = true
  setTimeout(() => {
    clearAll();
    clearingFlag.value = false;
    setTimeout(()=>{
        dropdownOpenFlag.value = false
        //refresh page
        router.go(0)
    },400)
  }, 2000);
};

//hooks
onMounted(() => {
  const toggleButton = document.querySelector(".dark-light");
  const colors = document.querySelectorAll(".color");

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      colors.forEach((c) => c.classList.remove("selected"));
      const theme = color.getAttribute("data-color");
      document.body.setAttribute("data-theme", theme);
      color.classList.add("selected");
    });
  });

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
</script>

<style scoped></style>
