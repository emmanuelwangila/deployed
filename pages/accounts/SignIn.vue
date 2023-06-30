<template>
    <div
      class="flex m-2 sm:flex-wrap lg:mt-10  lg:w-full  bg-gray-100 lg:flex-nowrap items-center justify-center h-screen"
    >
      <!--begin::Aside-->
      <div
        class="lg:w-1/3 lg:p-10 sm:flex-wrap   lg:m-10 flex items-center justify-center p-5 lg:h-screen"
      >
        <div class="flex sm:flex-wrap flex-col items-center justify-center">
          <!--begin::Title-->
            
          <div>
          <nuxt-img src="https://www.kaziquest.com/assets/hire.svg" class="w-full h-full" ></nuxt-img>
        </div>
          
          
        </div>
      </div>
      <!--end::Aside-->
      <!--begin::Body-->
      <div
        class=" w-full lg:w-2/3 p-3  mt-10 lg:h-screen bg-gray-100 sm:flex-wrap  flex  justify-center"
      >
        <!--begin::Content-->
        <div class="w-full md:p-10">
          <!--begin::Form-->
          <form v-on:submit.prevent="submitForm" class="bg-white shadow-lg mx-auto max-w-lg border  border-gray-100 rounded-lg p-4 md:p-8 lg:p-8">
            <div class="text-xl text-center font-bold text-[#000000] mt-5 mb-5">Sign In</div>
  
            <p class="text-center pb-4">
              <span class="text-gray-700">Do you have an account? </span>
              <NuxtLink to="/accounts/SignUp" class="text-blue-500">
                Sign Up
              </NuxtLink>
            </p>
            
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="email"
                >Email</label
              >
              <input
                class="peer invalid:border-pink-500 shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder=""
                v-model="email"
              />
              <p
                class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
              >
                Please provide a valid email address.
              </p>
            </div>
            <div class="input-box relative mb-6 items-between">
              <label class="block text-gray-700 font-bold mb-2" for="password"
                >Password</label
              >
              <input
                class="shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                :type="passwordFieldType"
                placeholder=""
                v-model="password"
              />
              <span
                class="absolute right-3 bottom-3 cursor-pointer"
                @click="togglePasswordVisibility"
              >
                <Icon
                  :icon="
                    passwordFieldType === 'password'
                      ? 'ooui:eye-closed'
                      : 'mingcute:eye-line'
                  "
                  color="gray"
                />
              </span>
            </div>
  
            <div
              class="mb-4 text-sm font-normal text-blue-500"
              v-if="password.length > 3"
            >
              Enter valid password, Use 8 or more characters
            </div>
  
            <NuxtLink
              class="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 mb-3"
              to="/accounts/forgotpassword"
            >
              Forgot Password?
            </NuxtLink>
            <div class="flex flex-col gap-3">
              <button
                class="w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                
              >
                Continue
              </button>
              <button
                class="w-full h-full border  border-gray-200  bg-white text-blue-500 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"

              >
                For employer
              </button>
            </div>
          </form>
          <!--end::Form-->
          <!--end::Content-->
          <!--begin:: -->
  
          <div class="flex items-center justify-center p-2 mt-4">
            <NuxtLink
              href="https://kaziquest.com"
              class="text-gray-400 font-bold hover:text-blue-500 hover:underline px-2"
              >Post A Job
            </NuxtLink>
            <NuxtLink
              href="https://kaziquest.com/about-us"
              class="text-gray-400 font-bold hover:text-blue-500 hover:underline px-2"
              >Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
      <!--end::Body-->
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { Icon } from "@iconify/vue";
//   import { useAuthStore } from "@/stores/auth";
//   import { useAlertStore } from "@/stores/alert";
  
  
  
//   // const authStore = useAuthStore();
//   const alert = useAlertStore();
  
  // const alert = alertStore.type;
//   const logingin = useAuthStore();
//   // const loggedin = loging.loggedIn;
//   // console.log(loggingIn);
  
  const email = ref("");
  const password = ref("");
  const passwordFieldType = ref("password");
  
//   function submitForm() {
//     const authStore = useAuthStore();
//     console.log("submitting...");
//     authStore
//       .login({ email: email.value, password: password.value })
//       // .then((res) => {
//       //   // Handle success case here
//       //   console.log(res);
//       // })
//       // .catch((error) => {
//       //   alert.error(error);
//       // });
//   }
  
  function togglePasswordVisibility() {
    passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
  }
  </script>
  