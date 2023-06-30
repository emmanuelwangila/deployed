<template>
    <div class="md:mx-5 flex flex-wrap justify-center md:justify-between bg-gray-100 rounded-xl  p-6  pt-2">
        <div class="">
          <div class="lg:mt-8 flex md:flex-wrap flex-col sm:flex-col lg:flex-row gap-1 lg:gap-6">
            <div class="flex justify-center items-center mt-2 lg:block">
              <nuxt-img class="h-32 w-32 lg:h-48 lg:w-48 bg-gray-300 rounded-full border-2 border-blue-500"
                src="https://images.pexels.com/photos/4173168/pexels-photo-4173168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile pic" style="object-fit: cover;  position: top;" />
            </div>
            <div class="ml-4 text-center lg:text-left">
              <div class="flex justify-center lg:justify-start items-center lg:gap-4 mb-3 mt-2 ">
                <h2 class="lg:text-2xl font-semibold text-gray-600 tracking-normal lg:tracking-wide">
                  Samina Njuguna Manji
                </h2>
              </div>
              <p class="leading-loose font-medium tracking-wide lg:text-lg text-gray-700 mb-3">
                Email: sam.njuguna@gmail.com
              </p>
              <p class="leading-loose font-medium tracking-wide text-gray-700 lg:text-lg mb-3">
                Phone: +254 700009 567
              </p>
              <p class="leading-loose font-medium tracking-wide text-gray-700 lg:text-lg mb-3">
                Location: Nairobi, KE
              </p>
              <p
                class="my-2 w-28 md:py-2 mx-auto text-sm text-blue-600 flex justify-center lg:justify-start items-center lg:w-full">
                <span class="bg-gray-200 lg:px-6 px-6  p-1 rounded-full">
                  open to work
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 lg:pr-10 cursor-pointer">
          <div class="py-2 px-4 rounded-xl   group hover:bg-blue-600 hover:text-white text-gray-500 flex justify-between gap-2 items-center">
            
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M13.44 2.56a1.914 1.914 0 0 0-2.707 0L3.338 9.956a1.65 1.65 0 0 0-.398.644l-.914 2.743a.5.5 0 0 0 .632.633l2.743-.915c.243-.08.463-.217.644-.398l7.395-7.394a1.914 1.914 0 0 0 0-2.707Zm-2 .708a.914.914 0 1 1 1.293 1.293L12 5.294l-1.293-1.293l.734-.733ZM10 4.708l1.292 1.293l-5.954 5.954a.648.648 0 0 1-.253.157l-1.794.598l.598-1.794a.649.649 0 0 1 .156-.254L10 4.709Z"/></svg>
            </span>
            <span class="ml-2 ">
                Edit Profile
              </span>
          </div>
        </div>
      </div>
  
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>