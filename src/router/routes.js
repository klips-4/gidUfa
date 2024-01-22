import MainPage from '@/pages/MainPage.vue'
import Descriptions from '@/components/Descriptions.vue'
import ListContent from "@/components/ListContent.vue";
import NewDescriptions from "@/components/NewDescriptions.vue";

const routes = [
    {path: '/', component: MainPage},
    {path: '/descriptions/:page', component: Descriptions},
    {path: '/new_descriptions/:page', component: NewDescriptions},
    {path: '/listcontent/:page', component: ListContent}
]

export default routes
