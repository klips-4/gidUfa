import {defineStore} from 'pinia'
import axios from "axios";


export const useDescriptionStore = defineStore('description-store', {
        state: () => ({
            descriptions: [],
            listcontent: [],

        }),
        actions: {
            async fetchDescriptionData(pageName) {
                await axios
                    .get(`./database/${pageName}.json`)
                    .then(response => (this.descriptions = response));

            },
            async fetchListContentData(pageName) {
                await axios
                    .get(`./database/${pageName}.json`)
                    .then(response => (this.listcontent = response));
            },
        },
        getters: {
            getInfoByIndex: (state) => {

                return (index) => state.descriptions.data[index]
            },
        }
    }
)

