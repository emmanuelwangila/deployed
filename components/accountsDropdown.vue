<template>
    <div class="relative" ref="dropdownRef">
        <button @click="toggleDropdown">
            <div class="p-2 border border-gray-200 rounded-lg cursor-pointer">
                <Icon icon="line-md:account" color="#0d6efd" width="30" height="30" />
            </div>
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 w-[150px] lg:w-[250px] bg-white divide-y divide-gray-100 rounded-md shadow-lg" style="opacity: 1;">

           <div>
            <!-- Notifiation Nav -->
            <NuxtLink to="/">
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 text-gray-600 hover:rounded-xl hover:bg-blue-400 hover:text-white ">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg  text-md ">Dashboard</label>
                </div>               
            </div>
           </NuxtLink>
           <NuxtLink to="/profile">
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl p-2 lg:p-4">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg  text-md ">Profile</label>
                </div>               
            </div>
           </NuxtLink>

            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg  text-md ">Messages</label>
                </div>               
            </div>
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg text-md ">Settings</label>
                </div>               
            </div>
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600  hover:rounded-xl">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg text-md ">Log Out</label>
                </div>               
            </div>

           

           </div>
        </div>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    data() {
        return {
            isOpen: false,
        };
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        closeDropdown() {
            this.isOpen = false;
        },
        handleOutsideClick(event) {
            if (!this.$refs.dropdownRef.contains(event.target)) {
                this.isOpen = false;
            }
        },
    },
};
</script>
  
<style></style>
  