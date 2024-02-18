import React from "react";
import "../tabelStyles.css";
const TableRow = ({ item, handelOnchange, index, tableData }) => {
  const getRowSpan = (jobNo) => {
    const count = tableData.filter(
      (dataItem) => dataItem.jobNo === jobNo
    ).length;
    return count > 0 ? count : 1;
  };

  return (
    <tr >
      <td
        contenteditable="true"
        className="serial-number"
        rowSpan={getRowSpan(item.jobNo)}
        style={{
          display:
            index > 0 && tableData[index - 1].jobNo === item.jobNo
              ? "none"
              : "visible",
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
        }}
      >
        J00{item.jobNo}
      </td>
      <td contenteditable="true" className="image-cell">
        <img
          className="item-image"
          id="item-image-1"
          src={item.Image}
          alt="Item Image"
          style={{maxHeight: "100px", maxWidth: "130px",}}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handelOnchange(e, item, "Image", index)}
          style={{display:item?.Image ?"none": "visible"}}
        />
      </td>

      <td contenteditable="true" className="inputValue" style={{maxWidth:"180px"}}>
        <span>
          {/* <input
            type="text"
            value={item.itemName}
            onChange={(e) => handelOnchange(e, item, "itemName", index)}
          /> */}
           <textarea 
        value={item.itemName} 
        onChange={(e) => handelOnchange(e, item, "itemName", index)}
        rows={4} 
        cols={50} 
        style={{border:"none",fontSize:"20px"}}
      />
        </span>
      </td>
      <td contenteditable="true" className="inputValue">
        <span>
          Rs.
          <input
            type="text"
            value={item.price}
            onChange={(e) => handelOnchange(e, item, "price", index)}
          />
        </span>
      </td>
      <td contenteditable="true" className="inputValue">
        <input
          type="text"
          value={item.extraSize}
          onChange={(e) => handelOnchange(e, item, "extraSize", index)}
        />
      </td>
      <td contenteditable="true" className="inputValue">
        <span>
          Rs.
          <input
            type="text"
            value={item.veneerExtra}
            onChange={(e) => handelOnchange(e, item, "veneerExtra", index)}
          />
        </span>
      </td>
      <td contenteditable="true" className="inputValue">
        <input
          type="text"
          value={item.foldingBox}
          onChange={(e) => handelOnchange(e, item, "foldingBox", index)}
        />
      </td>
      <td contenteditable="true" className="inputValue">
        <input
          type="text"
          value={item.foldingSide}
          onChange={(e) => handelOnchange(e, item, "foldingSide", index)}
        />
      </td>
      <td contenteditable="true" className="inputValue">
        <span>
          Rs.
          <input
            type="text"
            value={item.actionTExtra}
            onChange={(e) => handelOnchange(e, item, "actionTExtra", index)}
          />
        </span>
      </td>
      <td contenteditable="true" className="inputValueQuantity">
        <input
          type="text"
          value={item.quantity}
          onChange={(e) => handelOnchange(e, item, "quantity", index)}
        />
      </td>
      <td contenteditable="true" className="inputValue">
      Rs.
        <input
          type="text"
          value={
            parseInt(item.price) +
            parseInt(item.veneerExtra) +
            parseInt(item.actionTExtra)
          }
        />
      </td>
      {/* </React.Fragment>
      ))} */}
    </tr>
  );
};
export default TableRow;
