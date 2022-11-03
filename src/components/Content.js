import configData from "../config/config.json";
import "../styles/styles.scss";


function Content({bookList}) {

    const books = bookList;
    const imageUrl = configData.url["cover-images"];
    
    const items = books?.map( book => {
        const bookCover = imageUrl + book?.book_details[0].primary_isbn13 + '.jpg';

        return (
            <div className="book">
                <img className="cover-image" src={bookCover} />
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