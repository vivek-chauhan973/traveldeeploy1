import "../app/globals.css";

import React, { useState } from 'react';

const DynamicTable = () => {

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
        console.log(tableData);
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
                <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
                <h2>Submitted Data:</h2>
            </div>
        </>
    );
};

export default DynamicTable;
