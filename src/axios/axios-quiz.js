import axios from 'axios'


export default axios.create({
    baseURL: "https://quizr-6fc49.firebaseio.com/"
})