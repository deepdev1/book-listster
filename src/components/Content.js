import { useEffect, useState } from "react";
import ApiService from "../services/api-service";
import configData from "../config/config.json";
import "../styles/styles.scss";


let apiService = ApiService.getInstance();

function Content({bookList}) {

    const books = bookList;
    // console.log("selected category", bookCategory);

    // const [bookList, setBookList] = useState();

    const [isError, setError] = useState(false);
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

        
        const node = document.contains(document.querySelector(".missing-img"));
        console.log("node", node);

        if(document.contains(document.querySelector(".missing-img"))) {
            const sections = document.querySelectorAll(".missing-img");
            console.log("sections", sections);
            sections.forEach(section => section.remove());
        }

        const bookCover = imageUrl + book?.book_details[0].primary_isbn13 + '.jpg';

        const missingImgDiv = document.createElement("div");
        missingImgDiv.classList.add("missing-img");
        missingImgDiv.innerHTML = book?.book_details[0].title;

        return (
            <div className="book">
                <img className="cover-image" src={bookCover} 
                    onError={ (e) => {
                        e.target.replaceWith(missingImgDiv);
                        e.target.onError=null;
                    }}/>
            </div>
        );
    });



    return (
        <div className="content">
            {items}
        </div>
    )



}


export default Content;