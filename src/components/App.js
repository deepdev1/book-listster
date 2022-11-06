import { useState, useEffect } from "react";
import ApiService from "../services/api-service";
import Content from "./Content";
import "../styles/styles.scss";


let apiService = ApiService.getInstance();

function App() {

    const heading = "Book Listster";

    const [bookList, setBookList] = useState([]);

    useEffect(()=>{
        getBooks();
    }, []);
    
    function getBooks() {
        apiService.getBookList().then(data => {
            setBookList(data.results);
            console.log("books list", bookList);
        });
    };



    return (
        <div className="main-container">
            <div className="header"> {heading}
            </div>

            <div className="content-container">
                <Content bookList={bookList} />
            </div>

        </div>
    )

}


export default App;