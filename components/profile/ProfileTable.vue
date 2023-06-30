<template>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border rounded-lg overflow-hidden dark:border-gray-300 m-5">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="divide-y divide-gray-300">
                <!-- row 1 -->
                <tr class="divide-x divide-gray-300">
                  <td
                    scope="col"
                    class="px-6 py-3 text-left lg:text-lg font-bold text-gray-700"
                  >
                    Full Name
                  </td>
                  <td
                    scope="col"
                    class="px-6 py-3 text-left lg:text-lg font-semibold text-gray-500"
                  >
                    Saminah Njugunah Manji
                  </td>
                  <td
                    scope="col"
                    class="px-6 py-3 text-left lg:text-lg font-bold text-gray-700"
                  >
                    Email
                  </td>
                  <td
                    scope="col"
                    class="px-6 py-3 text-left lg:text-lg font-semibold text-gray-500"
                  >
                    sam.njuguna@gmail.com
                  </td>
                  <td
                    scope="col"
                    class="px-6 py-3 text-xs font-semibold text-gray-500 uppercase"
                  ></td>
                </tr>
                <!-- row 2 -->
                <tr class="divide-x">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-bold text-gray-700"
                  >
                    Salutation
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-semibold text-gray-500"
                  >
                    Mr.
                  </td>
                  <td
                    class="px-6 py-4 font-bold whitespace-nowrap text-left lg:text-lg text-gray-700"
                  >
                    LinkedIn Profile
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-semibold"
                  >
                    <nuxt-link class="text-gray-500 hover:text-blue-700" to="#"
                      >linkedin.com/johnWick@...</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link
                      to="#"
                      class="flex items-center justify-center gap-1 py-3 whitespace-nowrap lg:text-lg font-semibold transition-colors duration-200 group"
                    >
                      <span class="py-2">
                        <Icon
                          icon="ic:outline-remove-red-eye"
                          class="text-gray-500 group-hover:text-blue-500"
                          width="24"
                          height="24"
                        />
                      </span>
                      <span class="text-gray-500 group-hover:text-blue-500">View</span>
                    </nuxt-link>
                  </td>
                </tr>
                <!-- row 3 -->
                <tr class="divide-x">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-bold text-gray-700"
                  >
                    Gender
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left font-semibold lg:text-lg text-gray-500"
                  >
                    Male
                  </td>
                  <td
                    class="px-6 py-4 font-bold whitespace-nowrap text-left lg:text-lg text-gray-700"
                  >
                    Curriculum Vitae
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-semibold"
                  >
                    <a class="text-gray-500 hover:text-blue-700" href="#"
                      >sam -v.pdf</a
                    >
                  </td>
                  <td>
                    <div
                      @click=""
                      class="cursor-pointer flex items-center justify-center gap-1 py-3 whitespace-nowrap lg:text-lg font-semibold transition-colors duration-200 text-blue-500 group"
                    >
                      <span class="py-2">
                        <Icon
                          icon="ic:outline-remove-red-eye"
                          class="text-gray-500 group-hover:text-blue-500"
                          width="24"
                          height="24"
                        />
                      </span>
                      <span class="text-gray-500  group-hover:text-blue-500">View</span>
                    </div>
                  </td>
                </tr>
                <!-- row 4 -->
                <tr class="divide-x">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left lg:text-lg font-bold text-gray-700"
                  >
                    Phone
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left font-semibold lg:text-lg text-gray-500"
                  >
                    +254 710009567
                  </td>
                  <td
                    class="px-6 font-bold py-4 whitespace-nowrap text-left lg:text-lg text-gray-700"
                  >
                   Industry
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-gray-500 text-left lg:text-lg font-semibold"
                  >
                    ICT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Icon } from "@iconify/vue";
  </script>
  