<template>
    <div>
        
        
        <div class="flex justify-between lg:mx-20 mx-5  p-2 bg-white rounded-lg shadow-xl mb-4 ">
            <div class=" text-gray-600 ">
                <select class="lg:pt-0 focus:outline-0 h-full lg:w-[300px] w-[80px] bg-white text-lg" required>
                    <option value="" class="text-center"> <span class="hide">Select Job</span> Skills</option>
                    <option value="open" class="text-center">Management</option>
                    <option value="hold" class="text-center">Software and IT</option>
                    <option value="closed" class="text-center">
                        Accounting and Finance
                    </option>
                    <option value="cancelled" class="text-center">Cancelled</option>
                    <option value="future-opportunity" class="text-center">
                        Future opportunity
                    </option>
                </select>
                <input class="text-xl border-l border-gray-800 w-[160px] lg:ml-4 p-2 outline-0 lg:w-[1100px]" type="text" placeholder="Search Jobs">
            </div>
            
            <div>
                <div  class="flex flex-no-wrap bg-blue-600 text-white rounded-xl px-4 py-2  w-16 lg:w-[200px] hover:bg-blue-200 hover:text-blue-600">
                    <div class="pt-1 lg:pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
                    </div>
                    <NuxtLink :to="`/jobs`">
                        <div  class="ml-2 text-xl py-2 font-semibold">
                           <span class="hide">Search</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>