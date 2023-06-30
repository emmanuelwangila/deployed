<template>
    <div class="overflow-x-auto scrollbar py-2">
        <table class="table-auto max-w-full">
            <thead>
                <tr>
                    <th v-if="is_checkbox">
                        <input type="checkbox" @click="selectAll" />
                    </th>
                    <th v-for="column in columns" :key="column.key" @click="sortByColumn(column.key)">
                        <div class="flex items-center">
                            <span>{{ column.label }}</span>
                            <div v-if="is_sort" class="flex items-center ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24">
                                    <path fill="#616161" d="M9 3L5 7h3v7h2V7h3m3 10v-7h-2v7h-3l4 4l4-4h-3Z" />
                                </svg>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in paginatedData" :key="row.id">
                    <td v-if="is_checkbox" class="">
                        <input type="checkbox" v-model="selected" :value="row.id" @click="selectItem(row)" />
                    </td>
                    <td class="font-semibold"  v-for="column in columns" :key="column.key">
                        <!-- rating cell -->
                        <span class="flex" v-if="column.key === 'score'" v-html="renderDocumentScore(row[column.key])"></span>
                        <!-- <span class="flex" v-else-if="column.key === 'applicants'">{{ row[column.key] }}</span> -->
                        <span class="flex" v-else-if="column.key === 'rating'"
                            v-html="renderDocumentScore(row[column.key])">
                        </span>
                        <!-- status cells -->
                        <span class="flex items-center justify-center gap-1"
                            v-else-if="row[column.key] === 'New Applicant'">
                            <div class="bg-gray-200 rounded-full text-sm text-center text-blue-500 px-2">New Applicant</div>
                        </span>
                        <span class="flex items-center justify-center gap-1"
                            v-else-if="row[column.key] === 'Active'">
                            <div class="bg-gray-200 rounded-full text-sm text-green-500 lg:px-4 p-2"> Active</div>
                        </span>
                        <span class="flex items-center justify-center gap-1"
                            v-else-if="row[column.key] === 'Expired'">
                            <div class="bg-red-200 rounded-full text-sm text-red-500 lg:px-4 p-2"> Expired</div>
                        </span>
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'active'">
                            <div class="bg-gray-200 rounded-full text-green-500 px-2">active</div>
                        </span>
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'unsubscribe'">
                            <div class="text-red-500 px-2">New Applicant</div>
                        </span>
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'subscribed'">
                            <div class="bg-gray-200 rounded-full text-blue-500 px-2">subscribed</div>
                        </span>
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'open'">
                            <div class="bg-gray-200 rounded-full text-blue-500 px-4">open</div>
                        </span>
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'filled'">
                            <div class="bg-gray-200 rounded-full text-blue-500 px-4">filled</div>
                        </span>
                        <!-- action cells -->
                        <span class=""
                            v-else-if="row[column.key] === 'invoiceDownload'">
                            <NuxtLink :to="`/talent-network/${row.id}`" class="group flex items-center justify-center gap-1">
                                <Icon icon="mdi-light:cloud-download" class="text-gray-700 font-bold group-hover:text-blue-700" />
                                <span class="group-hover:text-blue-700">Download</span>
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-center gap-1 group" v-else-if="row[column.key] === 'View'">
                            <Icon icon="ic:outline-remove-red-eye" class="text-gray-500 group-hover:text-blue-700" />
                            <NuxtLink :to="`/talent-network/${row.id}`" class="text-gray-500 group-hover:text-blue-700">
                                View
                            </NuxtLink>
                        </span>
                        <!-- jp-applicant-view(start) -->
                        <span class="flex items-center justify-center gap-1 group" v-else-if="row[column.key] === 'jp-applicant-view'">
                            <Icon icon="ic:outline-remove-red-eye" class="text-gray-500 group-hover:text-blue-700" />
                            <NuxtLink :to="`/applicants/${row.id}`" class="text-gray-500 group-hover:text-blue-700">
                                View
                            </NuxtLink>
                        </span>
                        <!-- jp-applicant-view(start) -->
                        <span class="flex items-center justify-center gap-1" v-else-if="row[column.key] === 'cp-actions'">
                            <Icon icon="ic:outline-remove-red-eye" color="#616161" />
                            <NuxtLink :to="`/career-page/${row.id}`">
                                View
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-center gap-1"
                            v-else-if="row[column.key] === 'application-doc'">
                            <Icon icon="ic:outline-remove-red-eye" color="#616161" />
                            <span class="text-blue-600 mx-2">
                                View
                            </span>
                        </span>
                        <span class=" group" v-else-if="row[column.key] === 'tn-view'">
                            <NuxtLink :to="`/talent-network/${row.id}`" class="flex items-center justify-center gap-1">
                                <Icon icon="ic:outline-remove-red-eye" class="text-gray-700 group-hover:text-blue-500" />
                               <span class="text-gray-700 group-hover:text-blue-500">View</span>
                            </NuxtLink>
                        </span>
                        <span class="flex items-center cursor-pointer justify-center gap-1 hover:text-red-500" v-else-if="row[column.key] === 'subscription-actions'">
                                unsubscribe
                        </span>
                        <span class="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3 justify-evenly mx-3"
                            v-else-if="row[column.key] === 'st-actions'">
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="heroicons:pencil" :class="`hover:text-blue-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Edit
                                </span>
                                </span>
                            </NuxtLink>
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage"
                                    :class="`hover:text-red-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Delete
                                </span>
                                </span>
                            </NuxtLink>
                        </span>
                        <span class="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3 justify-evenly mx-3"
                            v-else-if="row[column.key] === 'roles-actions'">
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="heroicons:pencil" :class="`hover:text-blue-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Edit
                                </span>
                                </span>
                            </NuxtLink>
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage"
                                    :class="`hover:text-red-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Delete
                                </span>
                                </span>
                            </NuxtLink>
                        </span>
                        <span class="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3 justify-evenly mx-3"
                            v-else-if="row[column.key] === 'permission-actions'">
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="heroicons:pencil" :class="`hover:text-blue-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Edit
                                </span>
                                </span>
                            </NuxtLink>
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <span class="lg:flex lg:gap-2">
                                    <Icon icon="streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage"
                                    :class="`hover:text-red-700`" width="24" height="24" />
                                <span class="hidden md:block">
                                    Delete
                                </span>
                                </span>
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-evenly mx-3"
                            v-else-if="row[column.key] === 'roles-permissions'">
                            <Icon icon="heroicons:pencil" :class="`hover:text-blue-700`" width="24" height="24" /> Edit
                            <NuxtLink :to="`/talent-network/${row.id}`">
                            </NuxtLink>
                            <Icon icon="streamline:interface-delete-bin-2-remove-delete-empty-bin-trash-garbage"
                                :class="`hover:text-red-700`" width="24" height="24" /> Delete
                            <NuxtLink :to="`/talent-network/${row.id}`">
                            </NuxtLink>
                        </span>
                        <span class="" v-else-if="row[column.key] === 'view-cjp'">
                            <NuxtLink :to="`/career-page/${row.id}`">
                                <div class="flex items-center justify-center md:gap-3 md:mx-3 group">
                                    <span>
                                        <Icon icon="ic:outline-remove-red-eye" class="group-hover:text-blue-700" width="24"
                                            height="24" />
                                    </span>
                                    <span class="group-hover:text-blue-700">
                                        View
                                    </span>
                                </div>
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-evenly mx-3" v-else-if="row[column.key] === 'view-jp'">
                            <NuxtLink :to="`/job-postings/${row.id}`">
                                <Icon icon="ic:outline-remove-red-eye" class="hover:text-blue-700"  />
                            </NuxtLink>
                            <NuxtLink :to="`/job-postings/${row.id}`">
                                <Icon icon="heroicons:pencil" class="hover:text-blue-700" />
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-evenly mx-3"
                            v-else-if="row[column.key] === 'applicant-actions'">
                            <NuxtLink :to="`/applicants/${row.id}`">
                                <Icon icon="ic:outline-remove-red-eye" :class="`hover:text-blue-700`" width="24"
                                    height="24" />
                            </NuxtLink>
                            <NuxtLink :to="applicants">
                                <Icon icon="tabler:mail" color="#616161" width="24" height="24" />
                            </NuxtLink>
                        </span>
                        <span class="flex items-center justify-between mx-3" v-else-if="row[column.key] === 'dash-actions'">
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <Icon icon="heroicons:pencil" color="#616161" width="24" height="24" />
                            </NuxtLink>
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <Icon icon="tabler:mail" color="#616161" width="24" height="24" />
                            </NuxtLink>
                            <NuxtLink :to="`/talent-network/${row.id}`">
                                <Icon icon="ci:folder-upload" color="#616161" width="24" height="24" />
                            </NuxtLink>
                        </span>
                        
                        <div v-else>{{ row[column.key] }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- pagination -->
    <div class="font-semibold text-gray-500 lg:text-lg my-4" v-if="is_pagination">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-2">
            <!-- showing rows stats -->
            <div class="text-center md:text-left col mx-auto py-3 w-full">
                <span class="">Showing {{ startIndex }} to {{ endIndex }}
                    of {{ filteredData.length }} entries</span>
            </div>
            <!-- prev next controls -->
            <div class="flex items-center justify-center pb-3 md:pb-0 md:py-2">
                <!-- prev  button -->
                <div class="flex justify-end sm:col-span-2 md:col-span-1 xl:col-span-1">
                    <button :disabled="currentPage === 1" class="flex text-blue-600 mr-2" @click="currentPage--">
                        <div class="flex items-center">
                            <span class="">
                                <Icon icon="ic:baseline-less-than" color="#0d6efd" />
                            </span>
                            <span class="md:px-2 text-base">Prev</span>
                        </div>
                    </button>
                </div>

                <!-- Page number buttons -->
                <div class="flex justify-center sm:col-span-2 md:col-span-1 xl:col-span-3 text-base">
                    <button v-for="pageNumber in totalPages" :key="pageNumber" :disabled="currentPage === pageNumber"
                        @click="currentPage = pageNumber" :class="currentPage === pageNumber ?
                                'mr-2 bg-blue-600 w-7 h-7 mx-auto rounded-lg text-white' : 'mr-2 bg-gray-200 w-7 h-7 mx-auto rounded-lg'
                            ">
                        {{ pageNumber }}
                    </button>
                </div>
                <!-- next button -->
                <div class="flex justify-start sm:col-span-2 md:col-span-1 xl:col-span-1">
                    <button :disabled="currentPage === totalPages" class="flex text-blue-600 ml-2" @click="currentPage++">
                        <div class="flex items-center">
                            <span class="md:px-2 pr-2 text-base">Next</span>
                            <span class="">
                                <Icon icon="ic:baseline-less-than" color="#0d6efd" :rotate="2" />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <!-- //per page -->
            <div class="w-full md:text-left flex items-center justify-center md:justify-start lg:justify-end ">
                <div class="">
                    <label for="perPage" class="mr-2 ">Per page:</label>
                    <select id="perPage" v-model="perPage"
                        class="rounded-xl bg-white border-2 border-gray-400 px-2 py-1 text-base">
                        <option v-for="option in perPageOptions" :value="option" class="text-base">
                            {{ option }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
import { Icon } from '@iconify/vue'

export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        is_sort: {
            type: Boolean,
            required: true
        },
        is_checkbox: {
            type: Boolean,
            required: true
        },
        is_pagination: {
            type: Boolean
        },
        searchTerm: ''

    },
    data() {
        return {
            sortKey: '',
            sortOrders: {},
            currentPage: 1,
            perPage: 5,
            perPageOptions: [5, 10, 20, 50],
            selected: []
        }
    },
    components: {
        Icon,

    },
    computed: {
        filteredData() {
            let filteredData = this.data
            console.log(filteredData)
            if (this.searchTerm) {
                filteredData = filteredData.filter(row => {
                    return this.columns.some(column => {
                        return String(row[column.key])
                            .toLowerCase()
                            .includes(this.searchTerm.toLowerCase())
                    })
                })
            }

            return filteredData
        },
        sortedData() {
            return this.filteredData.slice().sort((a, b) => {
                const key = this.sortKey
                if (!key) return 0

                if (a[key] > b[key]) {
                    return this.sortOrders[key]
                }
                if (a[key] < b[key]) {
                    return -this.sortOrders[key]
                }
                return 0
            })
        },
        // Calculate the start index of the current page
        startIndex() {
            return (this.currentPage - 1) * this.perPage + 1
        },

        // Calculate the end index of the current page
        endIndex() {
            return Math.min(this.currentPage * this.perPage, this.filteredData.length)
        },

        // Calculate the total number of pages
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage)
        },

        // Extract the rows for the current page
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage
            const end = start + this.perPage
            if (this.is_sort === true) {
                return this.sortedData.slice(start, end)
            } else {
                return this.filteredData.slice(start, end)
            }
        }
    },
    methods: {
        sortByColumn(key) {
            //setting the sortKey and sortOrders values which the computed properties are dependent on
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key]
                ? this.sortOrders[key] * -1
                : 1
        },
        selectAll() {
            if (this.is_checkbox) {
                if (this.selected.length === this.paginatedData.length) {
                    this.selected = []
                } else {
                    this.selected = this.paginatedData.map(row => row.id)
                }
            }
        },
        renderDocumentScore(score) {
            let scoreComponent = ''
            for (let i = 1; i <= Math.floor(score); i++) {
                scoreComponent += `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="gold" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/>
                </svg></span>`
            }
            if (score % 1 !== 0) {
                scoreComponent += `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="grey" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/>
                <path fill="gold" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z" style="clip-path: inset(0px 10px 0px 0px);"/>
                </svg></span>`
            }
            const remainder = 5 - score;
            for (let i = 1; i <= Math.floor(remainder); i++) {
                scoreComponent += `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="gray" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/>
                    </svg></span>`
            }
            return scoreComponent
        },
        selectItem(row) {
            const index = this.selected.indexOf(row.id)
            if (index > -1) {
                this.selected.splice(index, 1)
                console.log('unselected', row.job)
            } else {
                this.selected.push(row.id)
                console.log('added', row.job)
            }
        }
    }
}
</script>


<style scoped>
table {
    border-collapse: separate;
    border-spacing: 0;
    /* width: auto; */
    /* min-width: 350px; */
    width: 100%;
}

table tr th {
    /* background: #eee; */
    border-top: 1px solid #ccc;
    text-align: left;
}

table tr th,
table tr td {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
}

table tr th:first-child,
table tr td:first-child {
    border-left: 1px solid #ccc;
}

table tr td {
    color: #616161;
}

/* top-left border-radius */
table tr:first-child th:first-child {
    border-top-left-radius: 10px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
    border-top-right-radius: 10px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

/* media queries */
@media only screen and (max-width: 767px) {

    table tr th,
    table tr td {
        padding: 0.3rem;
        font-size: 0.9rem;
    }

    table tr th {
        white-space: normal;
    }
}

@media only screen and (max-width: 479px) {

    table tr th,
    table tr td {
        padding: 0.2rem;
        font-size: 0.8rem;
    }
}
</style>