import { useState } from "react";
import configData from "../config/config.json";
import "../styles/styles.scss";

import Modal from 'react-modal';

function Content({bookList}) {

    const books = bookList;
    const imageUrl = configData.url["cover-images"];
    
    const [activeBook, setActiveBook] = useState();
    const [isModalOpen, setModalOpen] = useState(false);

    function onBookClick(book) {
        console.log(book);
        setActiveBook(book);
        openModal();
    }

    Modal.setAppElement('#root');
    function openModal() {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setModalOpen(false);
        document.body.style.overflow = "scroll";
    }


    const items = books?.map( book => {
        const bookCover = imageUrl + book?.book_details[0].primary_isbn13 + '.jpg';

        return (
            <div className="book" onClick={() => onBookClick(book)}>
                <img className="cover-image" src={bookCover} />
            </div>
        );
    });

    
    return (
        <div id="gallery" className="content">
            {items}

            <div className="gallery-modal">
                <Modal
                    isOpen={isModalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                     >
                    {activeBook?.book_details[0].title}
                </Modal>
            </div>

        </div>
    )



}


export default Content;