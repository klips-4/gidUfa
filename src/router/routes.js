import MainPage from '@/pages/MainPage.vue'
import Descriptions from '@/components/Descriptions.vue'
import ListContent from '@/components/ListContent.vue'
import History from "@/components/History.vue";
import AboutSite from "@/components/AboutSite.vue";


const routes =[
    {path: '/', component: MainPage},
    {path: '/history/', component: History},
    {path: '/descriptions/:page', component: Descriptions, props: true},
    {path: '/listcontent/:page', component: ListContent, props: true},
    {path: '/aboutsite/', component: AboutSite}]

export default routes
