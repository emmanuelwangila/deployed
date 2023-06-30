<template>
    <div class="lg:flex m-10 mt-20">
      <!-- left section -->
      <div class="bg-transparent w-1/3 hidden h-auto my-auto lg:block">
        <!-- Sidebar content(start) -->
        <div class="sticky top-0">
          <!-- p-info div(start) -->
          <div class="flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center mt-5">
              <span v-if="one" class="bg-blue-200 py-4 px-6 rounded m-2 cursor-pointer font-bold text-blue-500"
                :class="step1 ? 'bg-blue-500 text-white' : 'text-gray-700'">
                1</span>
              <span v-if="!one" class="bg-blue-500 py-4 px-6 rounded m-2 font-bold">
                <Icon icon="mdi:tick" color="white" width="24" height="24" />
              </span>
              <div class="text-lg p-4 mx-2 font-bold" :class="{ 'text-blue-500': step1 }"> Basic
                Information
              </div>
            </div>
          </div>
          <!-- p-info div (end) -->
          <div class="border-r-2 w-1/2 border-gray-400 h-14"></div>
          <!-- education div (start) -->
          <div class="flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center mt-5">
              <span v-if="two" class="bg-blue-200 py-4 px-6 rounded m-2 cursor-pointer font-bold text-blue-500"
                :class="step2 ? 'bg-blue-500 text-white' : 'text-gray-700'">
                2</span>
              <span v-if="!two" class="bg-blue-500 py-4 px-6 rounded m-2 font-bold">
                <Icon icon="mdi:tick" color="white" width="24" height="24" />
              </span>
              <div class="text-lg p-4 mx-2 font-bold" :class="{ 'text-blue-500': step2 }">Job Specific Questions
              </div>
            </div>
          </div>
          <!-- education div (end)  -->
          <div class="border-r-2 w-1/2 border-gray-400 h-14"></div>
          <!-- additional docs div(start) -->
          <div class="flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center mt-5">
              <span v-if="three" class="bg-blue-200 py-4 px-6 rounded m-2 cursor-pointer font-bold text-blue-500"
                :class="step3 ? 'bg-blue-500 text-white' : 'text-gray-700'">
                3</span>
              <span v-if="!three" class="bg-blue-500 py-4 px-6 rounded m-2 font-bold">
                <Icon icon="mdi:tick" color="white" width="24" height="24" />
              </span>
              <div class="text-lg p-4 mx-2 font-bold" :class="{ 'text-blue-500': step2 }">Additional Documents
              </div>
            </div>
          </div>
          <!-- additional docs div(end) -->
          <div class="border-r-2 w-1/2 border-gray-400 h-14"></div>
          <!-- advertise div(start) -->
          <div class="flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center mt-5">
              <span v-if="four" class="bg-blue-200 py-4 px-6 rounded m-2 cursor-pointer font-bold text-blue-500"
                :class="step4 ? 'bg-blue-500 text-white' : 'text-gray-700'">
                4</span>
              <span v-if="!four" class="bg-blue-500 py-4 px-6 rounded m-2 font-bold">
                <Icon icon="mdi:tick" color="white" width="24" height="24" />
              </span>
              <div class="text-lg p-4 mx-2 font-bold" :class="{ 'text-blue-500': step3 }">Advertise Job
              </div>
            </div>
          </div>
          <!-- advertise div (end) -->
        </div>
        <!-- Sidebar content(end) -->
      </div>
      <!-- left section(end) -->
  
      <!-- right section(start) -->
      <div class="bg-white rounded-lg lg:mx-auto lg:w-2/3 flex overflow-y-hidden md:sticky top-0 scrollbar-none py-4 mb-2 ">
        <div class="md:container md:mx-auto w-[100%]">
          <div class="px-6">
            <!-- basic information section(start) -->
            <div v-if="step1" class="">
              <div class="">
                <!-- <pre>{{ jobDataEdit }}</pre> -->
                <!-- basic info(start) -->
                <div class="flex items-center justify-start">
                  <div class="pb-5">
                    <div class="text-xl font-bold text-gray-700 lg:mb-5 pt-5 lg:pt-0">
                      Basic Information
                    </div>
                    <h1 class="text-gray-500 text-lg text-bold">
                      Basic information about the position
                    </h1>
                  </div>
                </div>
                <!-- basic info(end) -->
                <!-- job title(start) -->
                <div class="pb-5">
                  <label class="block text-gray-700 text font-bold mb-2" for="email">
                    Job Title
                  </label>
                  <input v-model="jobData.title"
                    class="bg-gray-100 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Job Title" />
                </div>
                <!-- job title(end) -->
                <!-- job desc(start) -->
                <div class="pb-5">
                  <label class="block text-gray-700 text font-bold mb-2" for="password">
                    Job Description
                  </label>
                  <textarea v-model="jobData.description"
                    class="bg-gray-100 rounded-md w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" rows="4" type="password" placeholder=" Job Description" />
                </div>
                <!-- job desc(end) -->
                <div class="flex flex-wrap md:flex-nowrap items-center lg:justify-start gap-5 pb-8">
                  <!-- employment type (start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-black-700">Employment Type</label>
                    <div class="">
                      <select class="text-left w-full py-3 px-3 bg-gray-100 text-gray-600 focus:outline-none rounded-md"
                        @change="selectedOption = $event.target.value" v-model="jobData.employment_type">
                        <option value="" selected disabled>
                          Employment type
                        </option>
                        <option v-for="option in employmentTypes" :value="option.value">
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- employment type (end) -->
                  <!-- years of experience (start)-->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text">Required Years of Experience</label>
                    <input type="number" id="base-input" placeholder="0" v-model="jobData.experience"
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                  </div>
                  <!-- years of experience (end)-->
                </div>
  
                <div class="flex flex-wrap md:flex-nowrap items-center lg:justify-start gap-5 pb-8">
                  <!-- job level(start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-gray-700">Job Level</label>
                    <div class="">
                      <select class="text-left w-full py-3 px-3 bg-gray-100 text-gray-600 focus:outline-none rounded-md"
                        v-model="jobData.job_level" @change="selectedOption = $event.target.value">
                        <option value="" selected disabled>
                          Select job level
                        </option>
                        <option v-for="option in jobLevels" :value="option.value">
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- job level (end) -->
                  <!-- level of education (start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text ">Required Level of Education</label>
                    <div class="relative w-auto mb-2 md:mb-0">
                      <select class="text-left w-full py-3 px-3 bg-gray-100 text-gray-600 focus:outline-none rounded-md"
                        v-model="jobData.education_level" @change="selectedOption = $event.target.value">
                        <option value="" selected disabled>
                          Select Education Level
                        </option>
                        <option v-for="option in educationLevels" :value="option.value">
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- level of education (end) -->
                </div>
  
                <div class="flex flex-wrap md:flex-nowrap
                       items-center justify-start gap-5 pb-8">
  
                  <div class="salaries md:w-1/2 flex flex-wrap md:flex-nowrap gap-3 items-center">
                    <!-- Currency Picker Component -->
                    <div class="lg:mt-6">
                      <CurrencyPicker />
                    </div>
                    <!-- min salary(stat) -->
                    <div class="w-full md:w-1/2">
                      <label class="font-medium text ">Min Gross salary p.m</label>
                      <input type="number" id="base-input" placeholder="0" v-model="jobData.min_salary"
                        class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <!-- min salary(end) -->
                    <!-- max salary(start) -->
                    <div class="w-full md:w-1/2">
                      <label class="font-medium text ">Max Gross Salary p.m</label>
                      <input type="number" id="base-input" placeholder="0" v-model="jobData.max_salary"
                        class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <!-- max salary(end) -->
                  </div>
                  <!-- industry category (start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-black-700 ">Industry Category</label>
                    <div class="relative overflow-hidden">
                      <select class="text-left py-3 px-3 bg-gray-100 text-gray-600 focus:outline-none rounded-md w-full"
                        v-model="jobData.category" @change="selectedOption = $event.target.value">
                        <option value="" selected disabled>
                          Select Industry Category
                        </option>
                        <option class="" v-for="option in industries_category" :value="option.value">
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- industry category(end) -->
                </div>
  
                <div class="flex flex-wrap md:flex-nowrap items-center lg:justify-start gap-5 pb-8">
                  <!-- job country (start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-black-700 ">Job Country</label>
                    <div class="relative overflow-hidden">
                      <select class="text-left py-3 px-3 bg-gray-100 text-gray-600 focus:outline-none rounded-md w-full"
                        v-model="jobData.country" @change="selectedOption = $event.target.value">
                        <option value="" selected disabled>
                          Select Country
                        </option>
                        <option class="" v-for="option in countries" :value="kenya">
                          {{ option.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- job country(end) -->
                  <!-- job city(start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-black-700 ">Job City/Town</label>
                    <input type="text" placeholder="job job_location" v-model="jobData.job_location"
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:outline-none w-full p-2.5" />
                  </div>
                  <!-- job_location(end) -->
                </div>
  
                <div class="flex flex-wrap md:flex-nowrap items-center lg:justify-start gap-5 pb-8">
                  <!-- date posted (start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text text-black-700 ">Date Posted(DD/MM/YYY)</label>
                    <input type="date" placeholder="Date Posted"
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <!-- <input type="date" placeholder="Date Posted"
                      v-model="jobData.datePosted"
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" /> -->
                  </div>
                  <!-- date posted (end) -->
                  <!-- valid through(start) -->
                  <div class="w-full md:w-1/2">
                    <label class="font-medium text "></label>
                    Valid Through
                    <input type="date" placeholder="Valid through"
  
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="jobData.valid_through" />
  
                    <!-- <input type="date" placeholder="Valid through"
                      v-model="jobData.valid_through"
                      class="bg-gray-100 border-gray-300 text-gray-900 text rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" /> -->
                  </div>
                  <!-- valid through(end) -->
                </div>
  
                <div v-if="errors.length" class="mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl">
                  <p v-for="error in errors" :key="error">
                    {{ error }}
                  </p>
                </div>
  
  
                <div class="w-full flex justify-end">
                  <div @click="isStep2"
                    class="flex-end border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-blue-600 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline cursor-pointer">
                    Continue
                  </div>
                </div>
              </div>
            </div>
            <!-- basic information section(end) -->
            <!-- questions section(start) -->
            <div v-if="step2" class="w-[63vw] lg:mx-auto md:w-[100%] text-sm min-h-[80vh]">
              <!-- <Questions @variableEmitted="updateQuestions"></Questions> -->
              <Questions :job_questions="questions"></Questions>
              <!-- TODO remove questions outputs below -->
              <p>for testing purposes(to be removed)</p>
              <p>Job Quiz: {{ questions }}</p>
  
              <div
                class="text-sm md:text-base lg:text-lg flex items-center justify-between lg:justify-end gap-2  mb-8 mt-4 lg:mt-5 lg:w-full">
                <button @click="isStep1"
                  class="flex items-center px-6 hover:text-white m-2 p-4 h-12 border-2 border-blue-500 rounded-md hover:bg-blue-500 bg-white text-blue-500">
                  Back
                </button>
                <button @click="isStep3"
                  class="hover:text-white m-2 p-4 h-12 border-2 border-blue-600 rounded-md hover:bg-blue-500 flex items-center bg-white text-blue-400 border-radius-blue">
                  Continue
                </button>
              </div>
            </div>
            <!-- questions section(end) -->
            <!-- additional docs section (start) -->
            <div v-if="step3" class="w-[63vw] md:w-[100%] text-sm">
              <div class="py-1 md:py-4">
                <div class="md:px-4 font-semibold text-gray-700 lg:text-xl">Additional Documents</div>
                <p class="p-1 md:p-4 text-gray-400 text-sm md:text-xl">
                  If you need further documents eg. certifications, licenses,
                  certificates etc.<br />
                  Allowed file-types: pdf. Max file-size:2MB
                </p>
              </div>
              <div class="flex-row justify-between bg-white border-4 border-gray-100 rounded-md">
                <div class="m-2 p-1 md:p-4">
                  <!-- document add form(start) -->
                  <form @submit.prevent="addDocument" class="w-full">
                    <div class="flex items-center gap-3">
                      <input v-model="document" type="text"
                        class="border-b-2 border-blue-500 focus:outline-none md:w-3/4 text-xs md:text-base lg:text-lg py-1"
                        id="Question 3" :placeholder="`Enter document ${documents.length + 1}`" />
                      <div class="flex items-center justify-center lg:justify-start">
                        <button type="submit"
                          class="hover:bg-blue-600 bg-blue-100 lg:text-lg rounded-md text-blue-400 p-2 flex items-center justify-center hover:text-white cursor-pointer">
                          + Add Document
                        </button>
                      </div>
                    </div>
                  </form>
                  <!--  TODO remove the output -->
                  <p class="text-xs mt-4">for testing purposes(to be removed)</p>
                  <p>Documents: {{ documents }}</p>
                  <!-- document add form(end) -->
                  <p v-if="documents.length < 1" class="text-sm text-gray-400">No documents added</p>
                  <p v-if="documents.length > 0" class="text-sm text-gray-400">click on a document to edit name</p>
                  <div v-for="(doc, index) in documents" :key="index"
                    class="flex items-center bg-blue-50 px-4 w-full md:w-3/4 mt-2 rounded">
                    <input class="w-full focus:border-b focus:border-blue-500 outline-none bg-blue-50" type="search"
                      v-model="doc.name" />
  
                    <div @click="deleteDocument(index)" class="flex justify-end gap-2 m-2">
                      <Icon icon="mingcute:delete-2-line" class="cursor-pointer hover:text-red-500 text-lg" />
                    </div>
                  </div>
  
  
                </div>
              </div>
              <!-- <div class="flex items-center justify-center lg:justify-start">
                <div @click="AddDocument"
                  class="hover:bg-blue-600 h-12 bg-blue-100 lg:text-lg rounded-md text-blue-400 my-4 p-4 flex items-center justify-center hover:text-white w-48">
                  + Add Document
                </div>
              </div> -->
              <div class="flex justify-between lg:justify-end w-full gap-2 m-8">
                <button @click="isStep2"
                  class="rounded-md md:text-lg flex-end m-2 text-sm p-2 md:p-4 h-12 border-2 border-blue-600 hover:bg-blue-500 text-blue-400 border-radius-blue flex items-center justify-center hover:text-white">
                  Back
                </button>
                <button @click="isStep4"
                  class="text-sm md:text-lg rounded-md flex-end w-28 m-2 p-4 h-12 border-2 border-blue-600 hover:bg-blue-500  text-blue-400 border-radius-blue flex items-center justify-center hover:text-white">
                  continue
                </button>
              </div>
            </div>
            <!-- additional docs section (start) -->
            <!-- advertise job section (start) -->
            <div v-if="step4" class="w-[63vw] lg:mx-auto md:w-[100%]  ">
              <div class="md:p-5">
                <div class="flex items-center justify-between md:justify-evenly text-lg">
                  <div class="text-sm md:text-base font-bold">Advertise your job</div>
                  <div
                    class="flex items-center gap-2 bg-blue-100 text-blue-500 font-bold cursor-pointer rounded-lg py-1 px-2 hover:bg-blue-200 hover:shadow-md">
                    <span class="text-sm md:text-base">
                      Preview
                    </span>
                    <Icon icon="fluent-mdl2:open-in-new-tab" />
                  </div>
                </div>
                <!-- TODO ICONS MEDIA -->
                <div class="flex items-center justify-center gap-6 h-[20vh] w-full">
                  <Icon icon="devicon:facebook" width="30" height="30" class="cursor-pointer hover:shadow-lg" />
                  <Icon icon="skill-icons:instagram" width="30" height="30" class="cursor-pointer hover:shadow-lg" />
                  <Icon icon="logos:whatsapp-icon" width="30" height="30" class="cursor-pointer hover:shadow-lg" />
                  <Icon icon="skill-icons:twitter" width="30" height="30" class="cursor-pointer hover:shadow-lg" />
                  <Icon icon="devicon:linkedin" width="30" height="30" class="cursor-pointer hover:shadow-lg" />
                </div>
                <div class="text-lg text-center md:text-left font-bold">Standard Advertising(Free)</div>
                <div class="w-full border text-center p-3 rounded-md text-gray-500 font-semibold">
                  Once approved your job will appear on google jobs within 24 hours.
                </div>
              </div>
              <div
                class="text-sm md:text-base lg:text-lg flex items-center justify-between lg:justify-end gap-2  mb-8 mt-4 lg:mt-5 lg:w-full">
                <button @click="isStep3"
                  class="flex items-center px-6 hover:text-white m-2 p-4 h-12 border-2 border-blue-500 rounded-md hover:bg-blue-500 bg-white text-blue-500">
                  Back
                </button>
                <div>
                  <button @click="createJob"
                    class="hover:text-white m-2 p-4 h-12 border-2 border-blue-600 rounded-md hover:bg-blue-500 flex items-center bg-white text-blue-400 border-radius-blue">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <!-- advertise job section (end) -->
          </div>
        </div>
      </div>
    </div>
    <!-- right section(end) -->
  </template>
  <script setup>
  import { Icon } from "@iconify/vue";
  import { employmentTypes, educationLevels, industries_category, jobLevels } from "/constants/index.js";
  import { countries } from '/constants/countries.js';
//   import CurrencyPicker from '~/components/CurrencyPicker.vue';
//   import Questions from '~/components/CreateJob/Questions.vue';
//   import { reactive, computed, onMounted, ref } from 'vue';
//   // import { useStore } from 'vuex';
//   import { useAlertStore } from "~/stores/alert";
//   import { useJobsStore } from "~/stores/jobs";
//   import { useAuthStore } from "~/stores/auth";
  
//   const jobsStore = useJobsStore();
//   const alertStore = useAlertStore();
//   const authstore = useAuthStore();
//   const toDate = new Date().toJSON().slice(0, 10);
  
//   const user = computed(() => {
//     return authstore.user;
//   });
  
//   const loading = computed(() => {
//     return jobsStore.newJob.loading;
//   });
  
//   const newJob = computed({
//     get() {
//       return jobsStore.newJob;
//     },
//     set(newValue) {
//       jobsStore.setNewJob(newValue);
//     }
//   });
  
  const formatDateRange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  };
  
  const selectedOption = ref("");
  const document = ref("");
  const documents = ref([]);
  
  const questions = ref([]);
  
  // function updateQuestions(quiz) {
  //   questions.value = quiz;
  // }
  
  // const validThroughFormatted = formatDateRange(new Date());
  
  
  
  
  const jobData = {
    "title": "",
    "description": "",
    "employment_type": "",
    "experience": 3,
    "job_level": "",
    "education_level": "",
    "min_salary": 0,
    "max_salary": 0,
    "category": "",
    "country": "KE",
    "job_location": "",
    "date_posted": "",
    "valid_through": "",
    "questions": [],
    "documents": [],
    "advertiseJob": {
      "preview": "",
      "facebook": "",
      "instagram": "",
      "whatsapp": "",
      "twitter": "",
      "linkedIn": ""
    }
  }
  
  
  let errors = ref([])
  
  
  const AdvertiseJob = ref({
    advertiseJob: {
      preview: "",
      facebook: "",
      instagram: "",
      whatsapp: "",
      twitter: "",
      linkedIn: ""
    }
  });
  
  const addDocument = () => {
    documents.value.push({ name: String(document.value) });
    document.value = "";
  };
  
  const deleteDocument = (index) => {
    documents.value.splice(index, 1);
    console.log("Delete Document");
  };
  
  const createJob = async () => {
    jobData.questions = questions.value;
    jobData.documents = documents.value;
    console.log('start create job request...', jobData);
    console.log('questions', questions.value);
    console.log('documents', documents.value);
    jobsStore.addJob(jobData);
  };
  
  const one = ref(true);
  const two = ref(true);
  const three = ref(true);
  const four = ref(true);
  
  const step1 = ref(true);
  const isStep1 = () => {
  
      step1.value = true;
      step2.value = false;
      step3.value = false;
      step4.value = false;
  };
  const step2 = ref(false);
  const isStep2 = () => {
    console.log("Maving to step 2")
    errors.value = []
  
    if (jobData.title == '') { errors.value.push('The title is missing') }
    if (jobData.description == '') { errors.value.push('The description field is missing') }
    if (jobData.employment_type == '') { errors.value.push('You must select an employement type') }
    if (jobData.experience == '') { errors.value.push('You must select years of experience') }
    if (jobData.job_level == '') { errors.value.push('You must select the job level') }
    if (jobData.education_level == '') { errors.value.push('You must select the education level') }
    if (jobData.category == '') { errors.value.push('The category field is missing') }
    if (jobData.job_location == '') { errors.value.push('The job location filed is missing') }
    if (jobData.country == '') { errors.value.push('You must select a country') }
    const today = new Date();
    const validThrough = new Date(jobData.valid_through);
  
    if (validThrough < today) {
      errors.value.push('The valid through date must be in the future');
    }
  
    if(errors.value.length == 0){
      one.value = false;
      step1.value = false;
      step2.value = true;
      step3.value = false;
      step4.value = false;
      console.log(jobData);
    }
  
  
  };
  const step3 = ref(false);
  const isStep3 = () => {
    two.value = false;
    step1.value = false;
    step2.value = false;
    step3.value = true;
    step4.value = false;
  };
  const step4 = ref(false);
  const isStep4 = () => {
    three.value = false;
    step1.value = false;
    step2.value = false;
    step3.value = false;
    step4.value = true;
  };
  
  onMounted(() => {
    jobData.country = user.value.country;
    jobData.date_posted = toDate;
  });
  </script>
  
  