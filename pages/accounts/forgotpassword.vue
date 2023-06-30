<template>
    <!-- A side KaziQuest Page  -->
    <div class="flex flex-wrap bg-gray-100 lg:flex-nowrap items-center justify-center h-screen">
      <div  class="lg:w-[50%] lg:p-10 lg:m-10  flex flex-col items-center justify-center p-5 lg:h-screen ">
        <div>
          <nuxt-img src="https://www.kaziquest.com/assets/hire.svg" class="w-full h-full" ></nuxt-img>
        </div>
      </div>
      <!-- Begin Side Forgot Password -->
  
      <div class="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <div class="max-w-md w-full sm:px-4 px-6 py-6 bg-white shadow-md rounded-md" v-if="!newpwdiv">
        <div class="flex items-center justify-center">
          <nuxt-img src="logo-primary.png" width="150" />
        </div>
        <h2 class="text-lg font-semibold text-blue-500 mb-6 text-center px-2 pt-4">Forgot Password</h2>
        <form class="space-y-4" @submit.prevent="verify">
          <p v-if="is_sent" class="text-green-500 font-bold text-center">Sent! Kindly check your email inbox</p>
          <p v-if="send_error" class="text-red-500 text-center">Failed! Kindly check your email and try again</p>
          <div>
            <label for="email" class="block font-medium text-gray-700">Enter email address</label>
            <div class="mt-1">
              <input type="email" v-model="email" name="email" id="email" autocomplete="email" required placeholder="enter email address"
                class="peer invalid:border-pink-500 block w-full bg-gray-100 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2">
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email address.
                      </p>
            </div>
          </div>
          <div>
            <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span v-if="!resendBtn">Send Password Reset Link</span>
              <span v-else>Resend Reset Link</span>
            </button>
           <div class="text-center">
            <nuxt-link to="/accounts/SignIn" class="text-blue-500 hover:underline text-sm">
              Back to Sign In
            </nuxt-link>
           </div>
          </div>
        </form>
      </div>
    </div>
  
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const newpwdiv = ref(false);
  const resendBtn = ref(false);
  const is_sent = ref(false);
  const send_error = ref(false);
  
  const verify = async () => {
    console.log('verify');
    try {
      // Send the activation code to the Django API to verify it
      const API_URL = useRuntimeConfig().public.apiBase;
      const res = await $fetch(`${API_URL}/password-reset-request/`, {
        method: 'POST', 
        body: JSON.stringify({ email: email.value }) 
      });
      console.log('request sent', res);
      // TODO If the activation was successful, show the password reset component
      if(res.success){
        is_sent.value = true;
        send_error.value = false;
      }
      else{
        send_error.value = true;
        is_sent.value = false;
      }
      resendBtn.value = true;
    } catch (error) {
      // If the activation failed, show an error message
      console.log(error);
    }
  };
  </script>
  
  <script>
  
 
  </script>
  