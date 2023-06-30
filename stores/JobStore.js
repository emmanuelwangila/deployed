import  { defineStore } from 'pinia'

export const useJobStore = defineStore('jobStore', {
    state: () => ({
        jobs: [
            {id: 1, title: "Hello world", isFav:false},
            {id: 2, title: "Monday vibes", isFav: true},
            {id: 3, title: "Getters", isFav: true}
        ]
    })
})