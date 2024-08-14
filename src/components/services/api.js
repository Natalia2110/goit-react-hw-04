import axios from "axios";

const requestImg = async (searchValue, page) => {
  const key = "YUAMiDrMwWnPFtt_LIE888GJKdUMBYG4pKF0WJvk1Bw";
  const url = `https://api.unsplash.com/search/photos/?page=${page}&per_page=12&client_id=${key}&query=${searchValue}`;

  const { data } = await axios.get(url);
  // console.log(url);
  return data;
};

export default requestImg;

// &per_page=12
