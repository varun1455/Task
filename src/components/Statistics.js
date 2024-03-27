import React, { useEffect, useState } from "react";
import StatisticsData from "./Statistics2";

function Statics() {
  const [fetchData1, setFetchData1] = useState([]);
  const [fetchData2, setFetchData2] = useState([]);
  const [fetchData3, setFetchData3] = useState([]);

  useEffect(() => {
    const fetchALlUrls = [
      "http://localhost:8000/display/saleAmount/month",
      "http://localhost:8000/display/solditems/month",
      "http://localhost:8000/display/unsolditems/month",
    ];

    const fetchalldata = async () => {
      const responses = await Promise.all(
        fetchALlUrls.map((url) => fetch(url), {
          method: "GET",
          headers: {
            accept: "application/json",
          },
          mode: "cors",
        })
      );

      const parseddata = await Promise.all(
        responses.map((response) => response.json())
      );

      setFetchData1(parseddata[0]);
      setFetchData2(parseddata[1]);
      setFetchData3(parseddata[2]);
    };

    fetchalldata();
  }, []);

  const options = [
    { key: "January", value: 1 },
    { key: "Februray", value: 2 },
    { key: "March", value: 3 },
    { key: "April", value: 4 },
    { key: "May", value: 5 },
    { key: "June", value: 6 },
    { key: "July", value: 7 },
    { key: "August", value: 8 },
    { key: "September", value: 9 },
    { key: "October", value: 10 },
    { key: "November", value: 11 },
    { key: "December", value: 12 },
  ];

  const [selectedMonth, setSelectedMonth] = useState(3);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedMonth(e.target.value);
  };

  return (
    <>
      <div className="newselect">
        <select  value={selectedMonth} onChange={handleChange} defaultValue={3}>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              Statistics: {option.key}
            </option>
          ))}
        </select>
      </div>

      <StatisticsData
        x={fetchData1}
        y={fetchData2}
        z={fetchData3}
        m={selectedMonth}
      />
    </>
  );
}

export default Statics;
