<template>
    <div class="flex justify-center  lg:w-screen md:w-24 sm:min-w-fit bg-blue-100 h-full p-2 mt-10">
        <div class="flex lg:w-screen md:w-24 sm:w-min-w-fit  h-full flex-col items-center mt-20 mb-5  p-3 bg-blue-100">
                <h1 class="text-blue-700  font-bold text-4xl">
                    Upload And Build My Cv
                </h1>
                <span class="justify-center flex-col m-3 p-2 ">
                    <p class="items-center text-gray-700 font-bold ">
                    Create a quality Cv in three steps or upload your current resume.<br/>
                    Use the Cv to apply for jobs in our platform or upload it
                </p>

                </span>
                <div class="flex  gap-4 ">
                    <button class="w-full h-full bg-blue-500 text-s font-bold text-center  rounded-md border text-white  border-blue-200">
                         <NuxtLink to="/uploadCv"> Help Me Build My Cv</NuxtLink>
                    </button>
                    <button class="w-full h-full  text-s m-1 p-2 rounded-md border text-blue-500 border-blue-500">
                         <NuxtLink to="/UploadCv/haveCv">I have a Cv</NuxtLink> 
                    </button>

                </div>
                <div class="w-screen m-8 p-6 flex justify-center items-center  h-full bg-blue-500 text-white">
                  <div class="flex flex-col">
                    <h1 class="items-center font-bold text-2xl mt-2 "> Help Me Build My Cv</h1>
                    <p class="justify-center">Enter Details to Start Bulding Your Cv</p>
                  </div>

                
            </div>
            <div class="flex flex-col  bg-gray-100 lg:w-screen h-[60%] sm:w-fit ">
                

                <div class=" lg:w-full  md:w-24 sm:w-min-fit justify-start items-start drop-shadow-lg bg-white rounded-md mt-2 mb-2 mr-3 p-4">
                    <h1 class="flex text-gray-700 font-bold">Personal Details</h1>
                    <div class="flex  gap-2 m-2 p-4">
                        <div class="flex " >
                            <label class="text-sm text-black    font-bold">Name</label>
                            <input type="text" placeholder="Name" class="m-5   font-bold text-gray-500 bg-gray-200 rounded-md p-2" >

                            <label class=" text-sm text-black font-bold">Username</label>
                            <input type="text" placeholder="Email Addres" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold ">Phone Number</label>
                            <input type="tel" placeholder="Phone Number" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold">Date of Birth</label>
                            <input type="date" placeholder="Name" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >


                        </div>
                        
                    </div>

                </div>
                <div class=" w-full  drop-shadow-lg bg-white rounded-md mr-3 p-4">
                    <h1 class="flex text-gray-700 font-bold">Education</h1>
                    <div class="flex  gap-3 m-2 p-4">
                        <div class="flex justify-start relative" >
                            <label class="text-black font-bold  text-sm relative ">Year*</label>
                            <input type="text" placeholder="Year" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class=" text-sm font-bold text-black ">Institution</label>
                            <input type="text" placeholder="Institution" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black">Education Type</label>
                            <input type="tel" placeholder="select Education Type" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black">Award</label>
                            <input type="text" placeholder="Select Type Award" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >


                        </div>
                        
                    </div>

                </div>
                <div class=" w-full  drop-shadow-lg bg-white rounded-md  mt-2 mb-2  mr-3 p-4">
                    <h1 class="flex text-gray-700 font-bold">Work History</h1>
                    <div class="flex  gap-3 m-2 p-4">
                        <div class="flex justify-start relative" >
                            <label class="text-black font-bold">Oranization/Institution</label>
                            <input type="text" placeholder="Organization/Institution" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-black text-sm font-bold  ">Year</label>
                            <input type="text" placeholder="Year" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-black text-sm font-bold">Role</label>
                            <input type="tel" placeholder="Role" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black">Achievement</label>
                            <input type="text" placeholder="Select Achievement" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >
                            

                        </div>
                        
                        
                    </div>
                    <span class="cursor-pointer flex gap-2  m-2 p-2 text-blue-700"> <Icon icon="ion:add" color="blue" class="w-30"/> Add Work History</span>


                </div>
            <div class=" w-full  drop-shadow-lg bg-white rounded-md mt-2 mb-2  mr-3 p-4">
                    <h1 class="flex text-gray-700 font-bold">Skills</h1>
                    <div class="flex  gap-3 m-2 p-4">
                        <div class="flex justify-start relative" >
                            <label class="text-black font-bold text-sm">Skill</label>
                            <input type="text" placeholder="Skill" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black  ">Experience</label>
                            <input type="text" placeholder="Experience" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black">Year</label>
                            <input type="tel" placeholder="Year" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >

                            <label class="text-sm font-bold text-black">Certificate</label>
                            <input type="text" placeholder="Certificate" class="m-5 font-bold text-gray-500 bg-gray-200 rounded-md p-3" >


                        </div>
                        
                    </div>
                    <span class="cursor-pointer flex gap-2  m-2 p-2 text-blue-700"> <Icon icon="ion:add" color="blue" class="w-30"/> Add Skill</span>
                   

                </div>

                <div class="flex items-center justify-center">
                <button type="button" class="flex  w-40 justify-center items-center p-3 m-2 bg-blue-400 rounded-md  text-white ">
                                Submit
                        </button>

            </div>

                
                
                
        </div>
        
                        

            
    </div>
    </div>
        

    
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'

</script>

<style scoped>

</style>