import React, { useState, useEffect } from "react";
import "../styles/style1.css";

function Transactions2({ c, v }) {
  const [filteredData, setFilteredData] = useState([]);
  // console.log(v);

  useEffect(() => {
    const newData = c.filter((d) => {
      if (v ==3) {
        return d._id.month == v;
      } else {
        return d._id.month == v;
      }
    });

    setFilteredData(newData);
  }, [c, v]);

  return (
    <>
      {filteredData.map((d) => {
        const { id, title, price, description, category, image, sold } = d._id;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{sold ? "Yes" : "No"}</td>
            <td>
              <img src={image} width={150} height={130} />
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default Transactions2;
