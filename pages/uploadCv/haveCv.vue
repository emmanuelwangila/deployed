<template>
     <div class="flex justify-center p-2  w-screen h-full  mt-10 mb-5 bg-blue-100">
        <div class="flex w-screen h-full flex-col items-center mt-20 mb-5  p-3 bg-blue-100">
                <h1 class="text-blue-700  font-bold text-4xl">
                    Upload And Build My CV
                </h1>
                <span class="justify-center flex-col m-3 p-2 ">
                    <p class="items-center text-gray-700 font-bold ">
                    Create a quality Cv in three steps or upload your current resume.<br/>
                    Use the Cv to apply for jobs in our platform or upload it
                </p>

                </span>
                <div class="flex flex-row gap-4 ">
                    <button class="w-full p-1.5 text-sm flex text-white bg-blue-500 h-full border font-bold rounded-md  border-blue-300">
                         Help Me Build My CV
                    </button>
                    <button class="w-full h-full rounded-md text-blue-700 font-extrabold p-3 border border-blue-300 ">
                         <NuxtLink to="/UploadCv/haveCv">I Have a CV</NuxtLink> 
                    </button>

                </div>
                <div class="w-screen m-8 p-6 flex justify-center items-center  h-full bg-blue-500 text-white">
                  <div class="flex flex-col">
                    <h1 class="items-center font-bold text-2xl mt-2 ml-6 mr-4"> I Have A CV</h1>
                    <p class="">Quickly Upload and start using your CV</p>
                  </div>   
            </div>
            <div class="w-full  ">
                <div class="flex flex-col bg-white drop-shadow-md rounded-md w-full h-[60%]">
                <h1 class="m-2 p-2 text-black font-bold">Upload a Document</h1>
                <span class="m-1 p-2 text-gray-700 font-bold">Upload your CV here*</span>
                <div class="flex border-2 border-dashed border-gray-700 lg:w-[50%] h-40 sm:w-fit rounded-md m-2 p-8 ">
                    <form class="flex items-center space-x-6">        
                        <label class="block">
                            
                            <input type="file" class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-white file:text-blue-700
                            
                            
                            "/>
                        </label>
                        </form>
                        <span class="justify-center sm:text-xs text-gray-700 font-bold mt-7 ml-6 mr-5">Drag and drop or browse your files</span>
                </div>
            </div>

            <div class="w-full flex h-30 bg-white drop-shadow-md rounded-md m-2 p-5">
                <h1 class="text-black  font-bold p-2 ">Email and Password</h1>
                <div class="flex  w-full m-3">
                    <!-- <label>Email*</label> -->
                <input type="text" placeholder="Email" class="w-full bg-gray-200 m-5 p-3 rounded-md ">

                    <!-- <label>Password*</label> -->
                    <input type="password" placeholder="Password" class="w-full bg-gray-200 m-5 p-3 rounded-md ">


                </div>

                
                        
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

</script>

<style scoped>

</style>