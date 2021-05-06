import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-reactsoloproject.cloudfunctions.net/api" //The API URL for the cloud function set up in firebase
    //http://localhost:5001/reactsoloproject/us-central1/api
})

export default instance;