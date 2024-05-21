"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
function LearnDataFetching() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetching() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetching();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h1>
            <br />
            {item.title}
          </h1>
          <hr className="text-black" />
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default LearnDataFetching;
