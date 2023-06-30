<template>
    <div class="lg:m-[50px] mb-[100px] mt-[60px]">
        <br><br>
        <div class="p-1 py-3 m-2 lg:p-4 lg:m-10  rounded-2xl text-lg md:grid md:grid-cols-1">
            <h2 class="text-3xl text-gray-500 font-bold">
                Profile Settings
            </h2>
        </div>
        <div class="p-1 py-3 m-2 lg:p-4 lg:mx-10 flex- bg-white w-auto rounded-2xl text-lg md:grid md:grid-cols-1">
      
            <div class="px-2 py-2">
              <DivSwitcher :tabs="tabs">
                <!-- profile tab -->
                <template #profile>
                  <div class="lg:border-4 rounded-lg lg:p-6">
                  <Profile />
                  <ProfileTable />                 
                </div>
                </template>
                <!-- Documents tab -->
                <template #documents>
                  <div class="lg:border-8 lg:border-gray-100 rounded-2xl lg:p-6">
                    <DynamicTable :data="data" :columns="columns" :is_sort="false" :is_checkbox="false" :is_pagination="false" />
                  </div>
                </template>
                <template #experience>
                  <div class="lg:border-8 lg:border-gray-100 rounded-2xl lg:p-6">
                    <DynamicTable :data="tn_exp" :columns="exp_columns" :is_sort="false" :is_checkbox="false"
                      :is_pagination="false" />
                  </div>
                </template>
                <template #education>
                  <div class="lg:border-8 lg:border-gray-100 rounded-2xl lg:p-6">
                    <DynamicTable :data="tn_ed" :columns="ed_columns" :is_sort="false" :is_checkbox="false"
                      :is_pagination="false" />
                  </div>
                </template>
                <template #goals>
                    <div class="lg:border-8 lg:border-gray-100 rounded-2xl lg:p-6">
                        <DynamicTable :data="career" :columns="career_columns" :is_sort="false" :is_checkbox="false"
                        :is_pagination="false" />
                        <div class="flex justify-between m-3 text-gray-600">
                          <div class="px-4 p-2 bg-blue-200 text-blue-600 rounded-xl"> + Add Career Career Goals</div>
                          <div class="flex hover:bg-blue-600 hover:text-white rounded-xl px-4 p-2">
                            <p class="p-1 mr-2"><Icon icon="mdi:edit-outline" /></p>
                            <p>Edit</p>
                          </div>
                        </div>
                    </div>
                  </template>
                  <template #skills>
                    <div class="lg:border-8 lg:border-gray-100 rounded-2xl lg:p-6">
                      <DynamicTable :data="skills" :columns="skill_columns" :is_sort="false" :is_checkbox="false"
                        :is_pagination="false" />

                        <div class="flex justify-between m-3 text-gray-600">
                          <div class="px-4 p-2 bg-blue-200 text-blue-600 rounded-xl"> + Add Skills</div>
                          <div class="flex hover:bg-blue-600 hover:text-white rounded-xl px-4 p-2">
                            <!-- <p class="p-1 mr-2"><Icon icon="mdi:edit-outline" /></p>
                            <p>Edit</p> -->
                          </div>
                        </div>
                    </div>
                  </template>
              </DivSwitcher>
            </div>
          </div>
    </div>
  </template>
  
  <script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import { applicants } from "/constants/index.js";
  import DivSwitcher from '/components/DivSwitcher'
  import Profile from '/components/profile/Profile'
  import DynamicTable from '/components/tables/DynamicTable'
  import { tndocuments } from '/constants/index.js';
  import { tn_exp } from '/constants/index.js';
  import { career } from '/constants/index.js';
  import { skills } from '/constants/index.js';
  import { tn_ed } from '/constants/index.js';
  
  const applicantss = ref(applicants);
  const route = useRoute();
  const router = useRouter();
  const prevItem = ref(null)
  const nextItem = ref(null)
  
  
  
  
  const tabs = [
    { key: 'profile', label: 'Profile' },
    { key: 'documents', label: 'Documents' },
    { key: 'experience', label: 'Experience' },
    { key: 'education', label: 'Education' },
    { key: 'goals', label: 'Career Goals' },
    { key: 'skills', label: 'Skills' }
  ]
  
  const columns = [
    { key: 'documentName', label: 'Document Name' },
    { key: 'documentLink', label: 'Document Link' },
    { key: 'score', label: 'Document Score' },
    { key: 'actions', label: 'Actions' }
  ];
  const exp_columns = [
    { key: 'companyName', label: 'Company Name' },
    { key: 'location', label: 'Location' },
    { key: 'experienceLength', label: 'Experience Length' },
    { key: 'score', label: 'Experience score' }
  ];
  const ed_columns = [
    { key: 'institutionName', label: 'Institution Name' },
    { key: 'achievement', label: 'Achievement' },
    { key: 'length', label: 'Length' },
    { key: 'score', label: 'Experience score' }
  ];

  const career_columns = [
    { key: 'careerGoal', label: 'Career Goal' },
    { key: 'length', label: 'Length' },
  ];

  const skill_columns = [
    { key: 'skills', label: 'Skills' },
    { key: 'length', label: '' },
  ];
  const data = tndocuments;
  
  </script>
  