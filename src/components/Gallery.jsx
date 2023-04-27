import React from "react";
import {useState, useEffect  } from "react";
import { getFetch } from "./Fetch/Fetch";
import Searchbar from "./Searchbar";
import { ImageGallery } from "./Gallery/ImageGallery/ImageGallery";
import { Loader } from "./Gallery/Loader/Loader";
import  Modal  from "./Gallery/Modal";
import { LoadMore } from "./Gallery/Button/Button";


export default function Gallery() {
  
  const [query, setQuery] = useState(null);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
      
  const isHits = hits.length > 0;
  const showError = errorStatus && !loading;
  const buttonVisible = isHits && page !== totalPages && !loading;
  

useEffect(() => {
    if (!query) {
      return
    }
    
setLoading(true);

const handleFetchHits = async () => {
      setLoading(true);
       try {
        const data = await getFetch(query, page);
          if (data.hits.length === 0) {
            setErrorStatus(true);
            setErrorInfo(`Sorry, there are no images matching ${query}. Please try again.`);
           }
          if (page === 1){ 
            setHits([]);
          }
            setHits((prevHits) => {
            return [...prevHits, ...data.hits]
       })
      }
      catch (error) {
          setErrorStatus(true);
          setErrorInfo('Something went wrong :( Please try again later!');
          }
      finally {
          setLoading(false);
        }
      }
      handleFetchHits();
  },[page, query])

const handleSubmit = newQuery => {
  if (newQuery !== query) {
      setHits([]);
      setQuery(newQuery);
      setPage(1);
      setTotalPages(12);
      setErrorStatus(false);
      setErrorInfo('');
  };
  };

const handleLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

const toggleModal = (url) => {
  setShowModal(!showModal);
  setCurrentLargeImageURL(url);
  }
  
return (
    <>
         <Searchbar onSubmit={handleSubmit} />
        {showError && errorInfo}
        {isHits && <ImageGallery hits={hits} onClick={toggleModal}/>}
        {loading && <Loader />}
        {buttonVisible && <LoadMore onClick={handleLoadMore} />}
        {currentLargeImageURL && (
          <Modal url={currentLargeImageURL} closeModal={toggleModal}/>
        )}
    </>
  )
}
