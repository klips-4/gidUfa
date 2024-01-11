import MainPage from '@/pages/MainPage.vue'
import Descriptions from '@/components/Descriptions.vue'

const routes = [
    {path: '/', component: MainPage},
    {path: '/descriptions/:page', component: Descriptions}
]

export default routes
