import { useEffect, useState } from "react";
import ApiService from "../services/api-service";
import configData from "../config/config.json";
import "../styles/styles.scss";


let apiService = ApiService.getInstance();

function Content({bookList}) {

    const books = bookList;
    // console.log("selected category", bookCategory);

    // const [bookList, setBookList] = useState();

    // useEffect(() => {
    //     getBookList();
    // }, []);

    // function getBookList() {
    //     apiService.getBookList(bookCategory).then(data => {
    //         setBookList(data.results);
    //         console.log("books list", data.results);
    //     });
    // }


    const imageUrl = configData.url["cover-images"];
    
    const items = books?.map( book => {
        return (
            <div className="book">
                <img className="cover-image" src={imageUrl + book?.book_details[0].primary_isbn13 + '.jpg'} />
            </div>
        )
    });


    return (
        <div className="content">
            {items}
        </div>
    )



}


export default Content;