import configData from '../config/config.json';

export default class ApiService {
    static instance = null;
    static getInstance() {
        if(ApiService.instance == null) {
            ApiService.instance = new ApiService();
        }
        return this.instance;
    }


    
    async getBookList(category="hardcover-nonfiction") {
        const booksApi = configData["url"]["nyt-books-api"] + "&list=" + category;
        const response = await fetch(booksApi);
        return response.json();
    }


}