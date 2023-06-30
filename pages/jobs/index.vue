<template>
    <div class="pt-[90px] bg-gray-100">
        <!-- <pre v-for="job in job"> {{ job.title }}</pre> -->

        <SearchJobs />

        <!-- Job search Toggle -->
        <Job v-if="readmore === true"/>

        <!-- jobs with filters and job posts -->

        <div class="flex lg:mx-20 rounded-xl pb-10 gap-5 readmore" :class="{ active: readmore }">
            <div class="w-[400px] bg-white rounded-xl hide">
                <div class="p-4 px-6">
                    <h1 class="text-2xl tracking-wide text-gray-600 hide">Filter</h1>

                    <div v-if="readmore === true" class="bg-black w-40 m-10">hi</div>

                    <!-- Date Posted -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[220px]">
                                Date Posted
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Last Week</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">This Week</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- Experience level -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[180px]">
                                Experience Level
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">+3 yrs</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">+2 yrs</span>
                        </p>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Entry Level Jobs</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Internship</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- company -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[220px]">
                                Company
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Cooperative Bank</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Kenya Revenue Auth</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">ECOWAS Institute</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Oracle Technologies</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- Job type -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[220px]">
                                Job Type
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Banking</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Accounting</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Customer Service</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Engineering</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- location -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[220px]">
                                Location
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">On Site</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Remote</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- category -->
                    <div class="my-3 text-gray-700">
                        <div class="flex flex-no-wrap rounded-xl">
                            <div class="text-lg font-semibold text-gray-700 mr-[220px]">
                                Category
                            </div>
                            <div class="mt-1">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>

                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Diploma</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">Degree</span>
                        </p>
                        <p class="mt-2">
                            <input type="checkbox" name="" id="" />
                            <span class="ml-4">High School</span>
                        </p>

                        <div class="flex flex-no-wrap rounded-xl mt-2 text-blue-500">
                            <div class="text-sm font-semibold text-blue-600">Show More</div>
                            <div class="mt-1 ml-2">
                                <Icon icon="ep:arrow-down" />
                            </div>
                        </div>
                    </div>

                    <!-- Education -->
                </div>
            </div>
            <div class="flex-auto w-64 bg-white">
                <h1 class="lg:px-[40px] pt-4 pb-2 text-xl font-semibold text-gray-700 ml-[20px]">
                    Search Results For 'Software Engineer'
                    <p class="text-blue-500 text-sm">50 Results</p>
                </h1>
                <div class="mb-10 flex flex-wrap overflow-x-auto scrollbar-hide lg:gap-5 lg:px-[20px]">


                    <div v-for="job in job">
                        <div
                            class="card h-[360px] ml-[20px] lg:w-[380px] w-[360px] rounded-b-2xl my-2 bg-white shadow pb-2">
                            <div class="h-40 w-full lg:w-full rounded-t-2xl" style="
                                background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600');
                                background-size: cover;
                                ">
                            </div>

                            <div class="pl-5 pr-5 pt-2 mb-4">
                                <h2 class="text-lg font-semibold-">{{ job.name }}</h2>
                                <p class="pb-3 text-gray-600">{{ job.location }}. 4h ago</p>
                                <div class="flex gap-2 mb-3 flex-no-wrap">
                                    <div class="icon">
                                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10 bg-gray-300 rounded-full"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC"
                                            alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                    <div class="company py-2 text-gray-500">
                                        {{ job.company }}
                                    </div>
                                </div>
                               <NuxtLink :to="`/jobs/${job.slug}`">
                                <div class="apply p-2 flex justify-center items-center w-full lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5"
                                    style="text-align: center">
                                    Apply Now
                                </div>
                               </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Job from "~/components/jobs/Job.vue";
import SearchJobs from '~/components/search/SearchJobs.vue'
export default defineComponent({
    data() {
        return {
            readmore: false,
            jobList: true,
        };
    },
    methods: {
        toggle() {
            this.readmore = !this.readmore;
            this.jobList = !this.readmore;
            console.log("jobList is ============", this.jobList);
            console.log("this is ============", this.readmore);
        },
    },
});
</script>

<script setup>
import { Icon } from "@iconify/vue";
import { cjobsPostings } from "/constants/index";
const job = cjobsPostings;
</script>
