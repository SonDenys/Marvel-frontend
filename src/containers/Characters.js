import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharactersId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/${id}&skip=100`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <img src={data.thumbnail.path + "." + data.thumbnail.extension} alt="" />
    </div>
  );
};

export default CharactersId;
