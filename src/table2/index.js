import { useEffect, useRef, useState } from "react";
import "./2tabelStyles.css";
import TableRow from "./tableRow";
import html2pdf from "html2pdf.js";
const Tabel2 = () => {
  const tableRef = useRef(null);
  const [jobNumber, setJobNumber] = useState("");
  const [total, setTotal] = useState(0);
  const [tableData, setTableData] = useState([
    {
      serial: 1,
      id: Math.random(),
      jobNo: "1",
      itemName:"A",
      pcs: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
  ]);
  
  console.log(tableData,"tableDatssa");


useEffect(()=>{

  const tottal =tableData.map((item)=>parseInt(item.pcs))
  const sum = tottal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(tottal,"tottal",sum);
  setTotal(sum)
localStorage.setItem('myArray', JSON.stringify(tableData));

},[tableData])




  const addNewRow = () => {
    const lastItem = tableData.length - 1;
    setTableData((e) => [
      ...e,
      {
        ...e[lastItem],
        id: Math.random(),
        serial: e[lastItem].serial + 1,
        jobNo: parseInt(e[lastItem].jobNo) + 1,
      },
    ]);
  };
  const addItemsIntoRow = () => {
    const getRow = tableData.filter((obj) => obj.jobNo === jobNumber);

    const data = [...tableData, { ...getRow[0], id: Math.random() }];
    const sortedData = data.sort((a, b) => {
      const jobNoA = extractNumericPart(a.jobNo);
      const jobNoB = extractNumericPart(b.jobNo);

      return jobNoA - jobNoB;
    });

    setTableData(sortedData);
  };
  const extractNumericPart = (jobNo) => parseInt(jobNo.replace("J00", ""));

  // Sort the data array based on the jobNo

  const handelOnchange = (e, item, itemName, index) => {



    const data = [...tableData];


    if(itemName === "Image" ){
      const file = e.target.files[0];
      // Check if a file is selected
      if (file) {
        // Use FileReader to read file as a data URL
        const reader = new FileReader();
        reader.onload = () => {
          data[index][itemName] = reader.result;
          setTableData(data);
          // setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }else{

      data[index][itemName] = e.target.value;
      setTableData(data);
    }
           




  };
  
  const generatePDF = () => {
    const content = tableRef.current;
    // document.getElementById('download-pdf').addEventListener('click', () => {
      // const content = document.getElementById('table-virid');
    //   const options = {
    //     margin: [20, 10], // 
    //   filename: 'rggrsse.pdf',
    //   image: { type: 'pdf', quality: 0.98 },
    //   html2canvas: { scale: 0 },
    //   jsPDF: { unit: 'mm', format: 'a1', orientation: 'landscape' } // Set the desired orientation
    // };

    // html2pdf(element).from(element).set(options).outputPdf();
    // });




    // Ensure the table content is available
    if (!content) {
      console.error("Table content not found.");
      return;
    }
  
    // const pdfOptions = {
    //   margin: 10,
    //   filename: "tableData.pdf",
    //   image: { type: "jpeg", quality: 0.98 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    // };
    const pdfOptions = {
      margin: [20, 20, 20], // Adjust margins as needed
      filename: "tableData.pdf",
      image: { type: "jpeg", quality: .98 },
      html2canvas: { scale: 1 }, // Adjust scale as needed
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    
    html2pdf(content).from(content).set(pdfOptions).outputPdf();
  

    //   .from(content)
    //   .set(pdfOptions)
    //   .outputPdf((pdf) => {
    //     try {
    //       const blob = new Blob([pdf], { type: "application/pdf" });
    //       const link = document.createElement("a");
    //       link.href = URL.createObjectURL(blob);
    //       link.download = "tableData.pdf";
    //       link.click();
    //     } catch (error) {
    //       console.error("Error generating PDF:", error);
    //     }
    //   });
  };
  const handelDownloadExcle=()=>{
    
    const refniedData =
    tableData.map((obj) => {
  const d = {
    "S.no": obj?.serial,
    "Job no": obj?.jobNo,
    "Item name":obj?.itemName,
    "price": obj?.price,
    "Extra size": obj?.extraSize,
    "Veneer extra":obj.veneerExtra,
    "Floding box": obj.foldingBox,
    "Floding size":obj?.foldingSide,
   "Action t.extra": obj?.actionTExtra,
    "Q": obj?.quantity,
    
  };
  return d;
}) ?? [];

convertArrayOfJsonToCsv(refniedData, "Virdi Furniture");
  }
  function Export2Word(filename = "test") {
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";

    var html = preHtml + document.getElementById("table-virid").innerHTML + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();

    document.body.removeChild(downloadLink);
}
  return (
    <div ref={tableRef} id="table-virid" className="main" style={{width:"80%"}}>
      <div  className="header" >
        <h2 contentEditable="true">VIRDI WOOD CRAFTS</h2>
        &nbsp;&nbsp;&nbsp;
        <h4 contentEditable="true">1-March-2023</h4>
      </div>
      <div className="packingList">Packing List</div>

      <table id="VirdiTable" width="100%">
        <thead>
          <tr>
            <th>S.no</th>
            <th>JOB NO</th>
            <th>ITEM NAME</th>
            <th>PCS</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {tableData.map((item, index) => (
            <TableRow
              key={item.serial}
              item={item}
              handelOnchange={handelOnchange}
              index={index}
              tableData={tableData}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">TOTAL</td>
            <td id="table-total" >
              {total}
            </td>
            <td  colSpan="6" >
              
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => addNewRow()}>Add New Row</button>

      <label for="job-number">Job Number:</label>
      <input
        type="text"
        id="job-number"
        placeholder="Enter Job Number"
        value={jobNumber}
        onChange={(e) => setJobNumber(e.target.value)}
      />

      <button onClick={() => addItemsIntoRow()}>Add Item Row into Job</button>
      <button onClick={() => handelDownloadExcle()}>Excle</button>

      <button id="download-pdf" onClick={() => generatePDF()}>
        Download PDF
      </button>
      <button id="download-pdf" onClick={Export2Word}>
      Export2Word
      </button>
      
    </div>
  );
};

export default Tabel2;


export const convertArrayOfJsonToCsv = (data, fileName) => {
  // Create an array to store the CSV data
  if (data.length === 0) return;
  const csvData = [];

  // Extract the column headers from the first JSON object
  const headers = Object.keys(data[0]);
  csvData.push(headers.join(","));

  // Iterate through the JSON objects and convert them to CSV format
  data.forEach((obj) => {
    const values = headers.map((key) => {
      // Ensure that the value is properly escaped and enclosed in double quotes
      const value = obj[key] !== undefined ? `"${obj[key]}"` : "";
      return value;
    });

    csvData.push(values.join(","));
  });

  // Combine the rows into a single CSV string
  const csvString = csvData.join("\n");

  // Create a Blob object from the CSV string
  const blob = new Blob([csvString], { type: "text/csv" });

  // Create a temporary anchor element for downloading
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${fileName}.csv`;

  // Trigger a click event on the anchor element to start the download
  a.click();
};
