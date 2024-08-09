import "../app/globals.css";



import React, { useState } from 'react';

const DynamicTable = () => {
    //     const [tableData, setTableData] = useState([
    //         // { id: 1, name: 'John Doe', age: 30 },
    //         // { id: 2, name: 'Jane Smith', age: 25 },
    //         // { id: 3, name: 'Mike Johnson', age: 35 }
    //     ]);
    // //  for row
    //     const addRow = () => {
    //         const newRow = {
    //             id: tableData.length + 1,
    //             name: 'New Person',
    //             age: Math.floor(Math.random() * 50) + 18 // Random age between 18 and 67
    //         };
    //         setTableData([...tableData, newRow]);
    //     };

    //     // for column

    //     const [numCols, setNumCols] = useState(3); 
    //     const addCol = () => {
    //         setNumCols(numCols + 1);
    //     }
    const [rowCount, setRowCount] = useState(1); // Initial row count
    const [colCount, setColCount] = useState(1); // Initial column count
    const [tableData, setTableData] = useState(Array.from({ length: rowCount }, () => Array(colCount).fill('')));


    const addRow = () => {
        setRowCount(rowCount + 1);
    };

    const addCol = () => {
        setColCount(colCount + 1);
    };

    const handleInputChange = (e, rowIndex, colIndex) => {
        const newData = [...tableData];
        newData[rowIndex][colIndex] = e.target.value;
        setTableData(newData);
    };

    const handleSubmit = () => {
        // Print or use tableData as needed
       
        // Example: Displaying data in an alert
      
    };

    return (
        <>

            <div className="container-wrapper">
                <h2 className="text-center font-semibold justify-center text-xl">Dynamic Table</h2>
                <div className="flex gap-2">
                    <button onClick={addRow} className="bg-slate-500 p-2 text-white rounded-lg">Add Row</button>
                    <button onClick={addCol} className="bg-slate-500 p-2 text-white rounded-lg">Add column</button>

                </div>
                {/* <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th> */}
                {/* Render additional headers based on numCols */}
                {/* {[...Array(numCols - 3)].map((_, index) => (
                            <th key={`extra-header-${index + 1}`}>Extra Column {index + 1}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}


                {/* trial version of css o the table */}
                {/* <table className="min-w-full bg-white border-collapse border border-gray-300">
                    <thead> */}
                {/* <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Age</th> */}
                {/* Render additional headers based on numCols */}
                {/* {[...Array(numCols - 3)].map((_, index) => (
                            <th key={`extra-header-${index + 1}`} className="border border-gray-300 px-4 py-2">
                                Extra Column {index + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.age}</td> */}
                {/* Render additional cells based on numCols */}
                {/* {[...Array(numCols - 3)].map((_, index) => (
                                <td key={`extra-cell-${index + 1}`} className="border border-gray-300 px-4 py-2">
                                    {row[`extra${index + 1}`]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>

                    </tr>
                </tbody>
            </table> */}

                <table className="border-collapse border border-gray-700">
                    <tbody>
                        {[...Array(rowCount)].map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {[...Array(colCount)].map((_, colIndex) => (
                                    <td key={colIndex}>
                                        <input type="text" className="p-2 border border-gray-300" 
                                          value={tableData[rowIndex][colIndex]}
                                          onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"  onClick={handleSubmit}>Submit</button>
                <h2>Submitted Data:</h2>
                {/* <pre>{tableData}</pre> */}
            </div>
        </>
    );
};




export default DynamicTable;
