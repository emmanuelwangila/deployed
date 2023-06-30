<template>
    <div class="text-lg">
      <div class="ml-5 flex flex-no-wrap overflow-x-auto scrollbar-hide flex-1 gap-4 mb-4">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-sm md:text-base"
          :class="activeTab === index ? 'text-blue-500 border-b-4 cursor-pointer border-blue-500 font-bold' : 'font-bold text-gray-600 py-2 px-4 rounded cursor-pointer hover:text-blue-600'"
          @click="activeTab = index"
          style="transition: all 0.3s ease-in-out;"
        >
          {{ tab.label }}
        </div>
      </div>
  
      <div>
        <slot :name="tabs[activeTab].key"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  