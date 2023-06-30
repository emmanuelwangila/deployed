<template>
    <div
      class="flex w-full mt-10 pt-5  bg-gray-100 lg:flex-nowrap items-center justify-center h-full"
    >
      <!--begin::Aside-->
      <div
        class="lg:w-1/3 lg:p-10 lg:m-10 flex items-center justify-center p-5 lg:h-screen"
      >
        <div class="flex flex-col items-center justify-center">
          <!--begin::Title-->
          <div>
          <nuxt-img src="https://www.kaziquest.com/assets/hire.svg" class="w-full h-full" ></nuxt-img>
        </div>
            
          
         
        </div>
      </div>
      <!--end::Aside-->
      <!--begin::Body-->
      <div
        class="bg-white p-3 m-2 max-h-10 w-full lg:w-2/3  lg:h-screen flex items-center justify-center"
      >
        <!--begin::Content-->
        <div class="w-full mt-1  md:p-10">
          <!--begin::Form-->
          <form v-on:submit.prevent="submitForm" class="m-0.5 h-screen bg-white shadow-lg mx-auto max-w-lg border  border-gray-100 rounded-lg p-2 md:p-8 lg:p-2">
            <div class="text-xl text-center font-bold text-[#000000] mt-2 mb-2">Sign Up</div>
  
            <p class="text-center pb-4">
              <span class="text-gray-700">Already have an account?</span>
              <NuxtLink to="/accounts/SignIn" class="text-blue-500">
                Sign In here
              </NuxtLink>
            </p>
            <div class="cursor-pointer">
                            <p
                                class="flex items-center justify-center gap-2 font-medium text-blue-800  bg-blue-100 px-3  py-1 lg:py-4 rounded-lg">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                        <path fill="#FFC107"
                                            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                        <path fill="#FF3D00"
                                            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                                        <path fill="#4CAF50"
                                            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                        <path fill="#1976D2"
                                            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                                    </svg>
                                </span>
                                Sign up with Google
                            </p>
                        </div>
                        <div class="text-center flex items-center justify-evenly my-4">
                            <p class="border-b-2 border-gray-300 w-1/2"></p>
                            <p class="text-xl font-medium text-gray-400  m-2">OR</p>
                            <p class="border-b-2 border-gray-300 w-1/2"></p>
                        </div>
            
                        <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5">
                            <div class="flex flex-wrap pb-2 w-full lg:w-1/2">
                                <label class="w-full font-bold text-gray-700 ">First Name</label>
                                <input required v-model="fname"
                                   :required="firstname" class="  w-full p-2 form-control is-dirty peer form-control-lg rounded bg-gray-200" type="text"
                                    placeholder="" name="first-name" autocomplete="off" />
                                        <!-- <p class="required:visible text-pink-500 text-sm" >first name is required</p> -->
                    
                                    

                                <!-- <p v-if="!checkInput(fname) && submitted" class="text-red-600">first name required</p> -->
                            </div>
                            <div class="flex flex-wrap pb-2 w-full lg:w-1/2">
                                <label class="w-full font-bold text-gray-700  ">Last Name</label>
                                <input required v-model="lname"
                                    class="w-full p-2 rounded form-control form-control-lg bg-gray-200" type="text"
                                    placeholder="" name="last-name" autocomplete="off" />
                                <!-- <p v-if="!checkInput(lname) && submitted" class="text-red-600">last name required</p> -->
                            </div>
                        </div>
            <div class="input-box relative mb-6 items-between">
              <label class="block text-gray-700 font-bold mb-2" for="email"
                > Email</label
              >
              <input
                class="shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder=""
                v-model="email"
              />
             
            </div>
            <div class="input-box relative mb-6 items-between">
              <label class="block text-gray-700 font-bold mb-2" for="password"
                >Phone Number</label
              >
              <input
                class="shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder=""
                v-model="phone_number"
              />
             
            </div>

            <div class="input-box relative mb-6 items-between">
              <label class="block text-gray-700 font-bold mb-2" for="password"
                >Password</label
              >
              <input
                class="shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder=""
                v-model="password"
              />
             
            </div>

            <div class="input-box relative mb-6 items-between">
              <label class="block text-gray-700 font-bold mb-2" for="password"
                >Confirm  Password</label
              >
              <input
                class="shadow appearance-none border bg-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder=""
                v-model="password"
              />
             
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
              
            </div>
          </form>
          <!--end::Form-->
          <!--end::Content-->
          <!--begin:: -->
  
          <div class="flex items-center justify-center p-2 mt-4">
            <NuxtLink
              href="https://kaziquest.com"
              class="text-gray-400 font-bold hover:text-blue-500 hover:underline px-2"
              >Upload a Cv
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
  