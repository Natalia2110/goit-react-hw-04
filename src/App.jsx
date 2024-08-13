import { useState, useEffect } from "react";
// import axios from "axios";
import css from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import toast, { Toaster } from "react-hot-toast";
import requestImg from "./components/services/api.js";

function App() {
  // const per_page = 12;
  const [searchValue, setSearchValue] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const notify = () =>
    toast.error("Введіть текст для пошуку зображень", {
      duration: 2000,
    });

  const handleSearch = (value) => {
    setImages([]);
    setPage(1);
    setSearchValue(value);
  };

  const handleClickLoadMoreBtn = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    console.log(nextPage);
  };

  const showLoadMoreButton = (allPages) => {
    if (allPages !== page) {
      console.log(`all pages: ${allPages}`);
      return setShowBtn(true);
    }
    return setShowBtn(false);
  };

  useEffect(() => {
    if (searchValue === null) {
      return;
    } else {
      const fetchImgBySearchValue = async () => {
        try {
          setError(null);
          setIsLoading(true);
          // setPage(1);
          // setImages([]);

          const data = await requestImg(searchValue, page);
          if (data.results.length === 0) {
            setImages([]);
            setError("Error");
          } else {
            // console.log(results);
            const addNewPageImg = [...images, ...data.results];
            setImages(addNewPageImg);
            // setImages(data.results);
            showLoadMoreButton(data.total_pages);
            console.log(data.total_pages);
          }
        } catch (err) {
          console.log(err.message);
          setImages([]);
          setError(err.message);
        } finally {
          setIsLoading(false);
          // setImages([]);
        }
      };
      fetchImgBySearchValue();
    }
  }, [searchValue, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} onClick={notify} />
      {searchValue === "" && <Toaster />}

      {Array.isArray(images) && images.length !== 0 && (
        <ImageGallery images={images} />
      )}

      {error !== null && <ErrorMessage onError={searchValue} />}

      {isLoading && <Loader />}
      {showBtn && images.length > 0 && (
        <LoadMoreBtn onClickBtn={handleClickLoadMoreBtn} />
      )}
    </div>
  );
}

export default App;
