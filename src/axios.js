import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/reactsoloproject/us-central1/api" //The API URL for the cloud function set up in firebase
})

export default instance;