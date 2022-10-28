import ApiService from "../services/api-service";


let apiService = ApiService.getInstance();

export default function App() {

    apiService.getBookList()
        .then(data=>console.log(data["results"]))

}