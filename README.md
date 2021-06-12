# dashboard

## Build Setup

sudo apt install npm
npx create-nuxt-app <app-name>
cd <app-name>
npm install chart.js
npm install axios

- in folder plugins create file chart.js with content 'import "chart.js"'
- in folder plugins create file axios.js and configure file 

import axios from 'axios'
const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/elnataoliveira/chart-crypto/main/api/doge.json'
});
export default api;

- in file nuxtconfig.js in section plugins add row '{ src: "@/plugins/chart", ssr: false }'
- in file nuxtconfig.js in section - in file nuxtconfig.js in section

npm run dev

- url: https://purple-water-07e5feb10.azurestaticapps.net/

references: 

- https://www.youtube.com/watch?v=1W35ITPUp6Y
- https://www.youtube.com/watch?v=kmsM_hHrDHE
- https://www.youtube.com/watch?v=S0Zznlv1qnI
- https://www.youtube.com/watch?v=cUSfL6MBmlY
