import React from "react";
import { useEffect, useState } from "react";
import "../styles/style1.css";
function StatisticsData({ x, y, z, m }) {
  const [filterData1, setFilterData1] = useState([]);
  const [filterData2, setFilterData2] = useState([]);
  const [filterData3, setFilterData3] = useState([]);

  useEffect(() => {
    const newData1 = x.filter((d) => {
      if (m == 3) {
        return d._id == m;
      } else {
        return d._id == m;
      }
    });
    const newData2 = y.filter((d) => {
      if (m == 3) {
        return d._id == m;
      } else {
        return d._id == m;
      }
    });
    const newData3 = z.filter((d) => {
      if (m == 3) {
        return d._id == m;
      } else {  
        return d._id == m;
      }
    });

    setFilterData1(newData1);
    setFilterData2(newData2);
    setFilterData3(newData3);
  }, [x, m]);
  return (
    <>
      <div className="stats">
        {filterData1.map((item) => (
          <div key={item}>
            <p className="p1">
              Total Sale Amount: <span className="span1">{item.totalSaleAmount}</span>
            </p>
          </div>
        ))}

        {filterData2.map((item) => (
          <div key={item}>
            <p className="p2">
              Total Sold Items: <span className="span2">{item.totalSoldItems}</span>
            </p>
          </div>
        ))}

        {filterData3.map((item) => (
          <div key={item}>
            <p className="p3">
              Total UnSold Items: <span className="span3">{item.totalUnSoldItems}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StatisticsData;
