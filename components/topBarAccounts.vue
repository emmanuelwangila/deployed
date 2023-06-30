<template>
    <div>
        <!-- <TopNavNotification /> -->
    <div class="flex items-center gap-3">
        <!-- <Icon icon="carbon:search" width="20" height="20" />
        <Icon icon="carbon:search" width="20" height="20" /> -->
        <div class="flex justify-end items-end  gap-4">
            <div class="flex  p-2 w-full h-[60%]  border rounded-md border-blue-700 text-blue-700 px-5 hover:bg-blue-300">
                <NuxtLink to="/accounts/SignIn">SignIn</NuxtLink>
                </div> 
                <div class="flex  p-2 w-full h-[60%] border bg-blue-700 rounded-md border-blue-700 text-white px-4">
                 <NuxtLink to="/accounts/SignUp">SignUp</NuxtLink>
             </div>
             <!-- <div class="flex  p-2 w-full h-[60%]  rounded-md text-gray-700 px-4">
              <NuxtLink to="/"><Icon icon="mingcute:user-4-line" width="35" height="35" /></NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>