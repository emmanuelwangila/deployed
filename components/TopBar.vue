<template>
  <Head>
    <Title>KaziQuest-Jobseeker</Title>
  </Head>
  <div class="flex justify-between fixed bg-white items-center p-2 lg:px-20 border-b border-gray-300 w-full">
   
    <div class="hamburger Hide">
      <TopBarToggle />
    </div>


    <div>
      <nuxt-link to="/">
        <div class="flex justify-center items-center gap-3   ">
          <nuxt-img class="w-32" :src="'/logo-primary.png'" alt="kaziquest" style="object-fit: cover; position: center" />
        </div>
      </nuxt-link>
    </div>

    <div class="flex hide justify-between font-bold text-gray-600">
      <ul class="flex m-2 p-2 gap-6">
           <li class="flex hover:text-blue-600 " ><nuxt-link to="/">Home</nuxt-link></li>
           <li class="flex gap-3  hover:text-blue-600"><nuxt-link to="/jobs">Jobs</nuxt-link></li>
          <li class="flex gap-3  hover:text-blue-600"><nuxt-link to="/uploadCv">Upload/Build Cv</nuxt-link>  </li>
           <li class="flex gap-3  hover:text-blue-600"><nuxt-link to="/PostAJob">Post a Job</nuxt-link>  </li>
       </ul>
   </div>

   <div class="flex gap-3">
      <NotificationDropdown/>
      <AccountsDropdown/>
      <!-- <TopBarAccounts/> -->
   </div>
   


    

  </div>
</template>
  
<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
  