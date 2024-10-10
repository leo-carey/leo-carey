import { createApp } from 'vue'
import './assets/style.css'

import tooltipDirective from './directives/tooltip'
import App from './App.vue'

const app = createApp(App)

app.directive('tooltip', tooltipDirective)
app.mount('#app')
