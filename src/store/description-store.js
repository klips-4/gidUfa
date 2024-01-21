import {defineStore} from 'pinia'
import axios from "axios";


export const useDescriptionStore = defineStore('description-store',
    {
        state: () => ({
            descriptions: [],
            listcontent: []
        }),
        actions: {
            fetchDescriptionData(pageName) {
                axios
                    .get(`./public/database/${pageName}.json`)
                    .then(response => (this.descriptions = response));
            },
            fetchListContentData(pageName) {
                axios
                    .get(`./public/database/${pageName}.json`)
                    .then(response => (this.listcontent = response));
                    console.log(response)
            },
        }
    }
)