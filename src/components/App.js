import { useState } from "react";
import Select from "react-select";
import ApiService from "../services/api-service";
import Content from "./Content";
import configData from '../config/config.json';
import "../styles/styles.scss";


let apiService = ApiService.getInstance();

function App() {

    const heading = "Book Listster";
    
    const [category, setCategory] = useState(configData.select_options[0]);

    const [bookList, setBookList] = useState([]);

    const onSelectionChange = (selectedOption) => {
        apiService.getBookList(selectedOption.value).then(data => {
            setBookList(data.results);
            console.log("books list", bookList);
        });
        // setCategory(selectedOption);
    };

    return (
        <div className="main-container">
            <div className="header"> {heading} 
                <Select className="filter" options={configData.select_options} onChange={onSelectionChange} />
            </div>

            <div className="content-container">
                <Content bookList={bookList} />
            </div>

        </div>
    )

}


export default App;