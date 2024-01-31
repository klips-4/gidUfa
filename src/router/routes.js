import MainPage from '@/pages/MainPage.vue'
import Descriptions from '@/components/Descriptions.vue'
import ListContent from '@/components/ListContent.vue'
import History from "@/components/History.vue";

const routes = [
    {path: '/', component: MainPage},
    {path: '/history/', component: History},
    {path: '/descriptions/:page', component: Descriptions},
    {path: '/listcontent/:page', component: ListContent}
]

export default routes
