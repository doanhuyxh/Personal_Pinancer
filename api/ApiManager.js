import axios from "react-native-axios"

const ApiManager = axios.create({
    baseURL: "https://lebogang.adayroi.online/api",
    responseType: "json",
    withCredentials: true,
})

export default ApiManager;