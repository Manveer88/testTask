import React from "react";
import "../2tabelStyles.css";
const TableRow = ({ item, handelOnchange, index, tableData }) => {
  const getRowSpan = (jobNo) => {
    const count = tableData.filter(
      (dataItem) => dataItem.jobNo === jobNo
    ).length;
    return count > 0 ? count : 1;
  };

  return (
    <tr>
      <td
        contenteditable="true"
        className="serial-number"
        rowSpan={getRowSpan(item.jobNo)}
        style={{
          display:
            index > 0 && tableData[index - 1].jobNo === item.jobNo
              ? "none"
              : "visible",
          width: "10px",
        }}
      >
        {item.serial}
      </td>
      <td
        contenteditable="true"
        className="job-row job-number"
        id="1"
        rowSpan={getRowSpan(item.jobNo)}
        style={{
          display:
            index > 0 && tableData[index - 1].jobNo === item.jobNo
              ? "none"
              : "visible",
          maxWidth: "62px",
          width: "62px",
        }}
      >
        J00{item.jobNo}
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ maxWidth: "250px", width: "268px" }}
      >
        <input
          type="text"
          value={item.itemName}
          onChange={(e) => handelOnchange(e, item, "itemName", index)}
          style={{ width: "350px" }}
        />
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item.pcs}
          onChange={(e) => handelOnchange(e, item, "pcs", index)}
          style={{ width: "35px" }}
        />
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[1]}
          onChange={(e) => handelOnchange(e, item, 1, index)}
          style={{ width: "35px" }}
        />
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[2]}
          onChange={(e) => handelOnchange(e, item, 2, index)}
          style={{ width: "35px" }}
        />
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[3]}
          onChange={(e) => handelOnchange(e, item, 3, index)}
          style={{ width: "35px" }}
        />
      </td>
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[4]}
          onChange={(e) => handelOnchange(e, item, 4, index)}
          style={{ width: "35px" }}
        />
      </td>{" "}
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[5]}
          onChange={(e) => handelOnchange(e, item, 5, index)}
          style={{ width: "35px" }}
        />
      </td>{" "}
      <td
        // contenteditable="true"
        className="inputValue"
        style={{ width: "20px" }}
      >
        <input
          type="text"
          value={item[6]}
          onChange={(e) => handelOnchange(e, item, 6, index)}
          style={{ width: "35px" }}
        />
      </td>
    </tr>
  );
};
export default TableRow;
