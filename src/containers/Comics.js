import axios from "axios";
import { useEffect, useState } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/comics?skip=100"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement... </p>
  ) : (
    <div>
      {data.results.map((comic, index) => {
        return (
          <div class="comic">
            <div class="picture">
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt=""
              />
            </div>
            <div class="title">{comic.title}</div>
            <div class="description">{comic.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
