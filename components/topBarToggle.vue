<template>
    <div class="relative" ref="dropdownRef">
        <button @click="toggleDropdown">
            <div class="p-2 border border-gray-100 text-gray-700 rounded-lg cursor-pointer">
                <Icon icon="ri:menu-2-line" width="25" height="25" />
            </div>
        </button>
        <div v-if="isOpen" class="absolute   mt-2 w-[250px] lg:w-[400px] bg-white  divide-gray-100 rounded-md shadow-lg" style="opacity: 1;">

           <div>
            <!-- Notifiation Nav -->
            <a href="/">
                <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 text-gray-600 hover:rounded-xl hover:bg-blue-400 hover:text-white ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"/></svg>
                    </span>
                    <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                        <label class="w-full font-medium lg:text-lg  text-md "> Home</label>
                    </div>               
                </div>
            </a>
           <a href="/jobs">
                <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl p-2 lg:p-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16ZM40 56h52.69l16 16H40Zm176 144H40V88h176Z"/></svg>
                    </div>
                    <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                        <label class="w-full font-medium lg:text-lg  text-md ">jobs</label>
                    </div>               
                </div>
            </a>
            <a href="/uploadCV">
                <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"/><path stroke-linejoin="round" d="M12 15V2m0 0l3 3.5M12 2L9 5.5"/></g></svg>
                    </div>
                    <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                        <label class="w-full font-medium lg:text-lg  text-md ">Upload / Build CV</label>
                    </div>               
                </div>
            </a>
            <a href="/PostAJob">
                <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600 hover:rounded-xl">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M5 5V3.5A1.5 1.5 0 0 1 6.5 2h3A1.5 1.5 0 0 1 11 3.5V5h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1Zm1-1.5V5h4V3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm-3 6V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5c-.418.314-.937.5-1.5.5H9v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V10H4.5A2.489 2.489 0 0 1 3 9.5ZM7 9v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V9h2.5A1.5 1.5 0 0 0 13 7.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v.5A1.5 1.5 0 0 0 4.5 9H7Z"/></svg>
                    </div>
                    <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                        <label class="w-full font-medium lg:text-lg text-md ">Post a Job</label>
                    </div>               
                </div>
             </a>
            <a href="/logout">
                <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4 hover:bg-blue-400 hover:text-white text-gray-600  hover:rounded-xl">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M16 2h-1c-2.829 0-4.242 0-5.121.879C9 3.758 9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121C20.242 2 18.828 2 16 2Z" opacity=".5"/><path fill-rule="evenodd" d="M15.75 12a.75.75 0 0 0-.75-.75H4.027l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68H15a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd"/></g></svg>
                    </div>
                    <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                        <label class="w-full font-medium lg:text-lg text-md ">Log Out</label>
                    </div>               
                </div>
            </a>

           

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
  