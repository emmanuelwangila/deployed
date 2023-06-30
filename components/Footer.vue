<template>
    <div class="flex justify-normal  w-full h-[40%]  lg:px-8  " style="background-color: #071a39;">
        <div class="flex flex-col">
             <NuxtLink href="/">
             <nuxt-img
             class="w-32 m-2 p-2 "
             :src="'/logo-primary.png'"
             alt="kaziquest"
             style="object-fit: cover; position: center"
                 />  
                 </NuxtLink>
            <div class="flex flex-col  p-2 m-2 gap-2">
                    <p class="flex text-white  ">
                        KaziQuest moves you from the tediious excel sheet data<br/>
                        management to a more centralized and automated process
                    </p>
                    <p class=" text-gray-500">Customer Support:<span class="text-blue-700">+{254}758 174 705</span>
                    </p>
                    <p class="m text-gray-500">Sales and Marketing:<span class="text-blue-700">+{254}758 174 705</span>
                    </p>
                        <div class="flex flex-row gap-3">
                            <Icon icon="ic:round-facebook" color="white" class="w-20 h-10" />
                                <Icon icon="basil:twitter-outline" color="white" class="w-20 h-10" />
                                <Icon icon="ri:linkedin-fill" color="white" class="w-20 h-10"/>
                        </div>
                    

                     <div class="flex  w-full h-full justify-between   text-gray-500 border-gray-200">
                            <div class="m-2 p-2 w-full">Copyright@2023  All Rights Reserved by<span class="text-white">KaziQuest</span></div>
                            <div class="m-2 p-2 w-full">Privacy Policy/ Terms of Service</div>
                    </div>
            </div>
        </div>
        <div class="flex flex-row  m-2 p-2  ">
            <ul class="flex flex-col gap-2 m-2 p-2">
                <li class="text-blue-700 font-bold">Job Seekers</li>
                <li class="text-white">Find All Jobs</li>
                <li class="text-white">Upload Resume</li>
                <li class="text-white">Career Advice</li>
            </ul>
        </div>
        <div class="flex flex-row  m-2 p-2  ">
            <ul class="flex flex-col gap-2 m-2 p-2">
                <li class="text-blue-700 font-bold">Recruiting Software</li>
                <li class="text-white">Applicant Tracking System</li>
                <li class="text-white">Collaborative Hiring</li>
                <li class="text-white">Candidate Assesment</li>
            </ul>
        </div>
        <div class="flex flex-row  m-2 p-2  ">
            <ul class="flex flex-col gap-2 m-2 p-2">
                <li class="text-blue-700 font-bold">Employers</li>
                <li class="text-white">Post Jobs</li>
                <li class="text-white">Recruiting Solutions</li>
                <li class="text-white">Resume Search</li>
            </ul>
        </div>

        <!-- <div class="flex border text-gray-500 border-gray-200">
            <p>Copyright@2023  All Rights Reserved by<span class="text-white">KaziQuest</span> </p>
            <p>Privacy Policy/ Terms of Service</p>
        </div> -->

        
    </div>
   

    
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'


</script>

<style scoped>

</style>