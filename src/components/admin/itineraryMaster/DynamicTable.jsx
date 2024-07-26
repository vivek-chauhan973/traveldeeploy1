import React, { useState, useRef } from 'react';

const DynamicTable = () => {
    const [numRows, setNumRows] = useState(3);
    const [numColumns, setNumColumns] = useState(4);
    const [columnNames, setColumnNames] = useState(Array.from({ length: 4 }, (_, i) => `Column ${i + 1}`));
    const [tableData, setTableData] = useState([]);
    const tableRef = useRef(null);
    const [tableShow, setTableShow] = useState(false);
    const [tableEditable, setTableEditable] = useState(false);
    const [validInput, setValidInput] = useState(false);

    const handleGenerateTable = () => {
        const rows = parseInt(numRows);
        const columns = parseInt(numColumns);

        if (!isNaN(rows) && !isNaN(columns) && rows >= 2 && columns >= 2) {
            const newTableData = tableData.map(row => {
                // Preserve existing data while adding new rows
                const newRow = [...row];
                newRow.length = columns;
                return newRow.fill('', row.length); // Fill new columns with empty strings
            });

            newTableData.length = rows; // Adjust the number of rows
            newTableData.fill(Array(columns).fill(''), tableData.length); // Fill new rows with empty columns

            setTableData(newTableData);
            setTableEditable(true);
        } else {
            alert('Please enter valid numbers for rows (minimum 2) and columns (minimum 2).');
        }
    };

    const handleCellEdit = (rowIndex, columnIndex, value) => {
        const newData = tableData.map((row, i) => {
            if (i === rowIndex) {
                return row.map((cell, j) => (j === columnIndex ? value : cell));
            }
            return row;
        });
        setTableData(newData);
    };

    const handleColumnNameEdit = (index, value) => {
        const newColumnNames = [...columnNames];
        newColumnNames[index] = value;
        setColumnNames(newColumnNames);
    };

    const handleNumColumnsChange = (e) => {
        const value = parseInt(e.target.value);
        if (value <= 5) {
            setNumColumns(value);
            setColumnNames(Array.from({ length: value }, (_, i) => `Column ${i + 1}`));
            setValidInput(numRows >= 2 && value >= 2); // Check validity of input
        } else {
            alert('Maximum number of columns allowed is 5.');
        }
    };

    const handleNumRowsChange = (e) => {
        const value = parseInt(e.target.value);
        setNumRows(value);
        setValidInput(value >= 2 && numColumns >= 2); // Check validity of input
    };

    const fillTableWithSampleData = () => {
        const sampleData = Array.from({ length: numRows }, () =>
            Array.from({ length: numColumns }, () => 'Sample Data')
        );
        setTableData(sampleData);
        setTableEditable(true);
    };

    const getTableHtml = () => {
        return tableRef.current.innerHTML;
    };

    const renderHtml = () => {
        // console.log(getTableHtml());
        setTableShow(true);
    };

    const handleEditTable = () => {
        setTableEditable(true);
    };

    return (
        <>
            <div className="flex flex-wrap justify-center">
                <input
                    type="number"
                    value={numRows}
                    onChange={handleNumRowsChange}
                    className="m-2 p-2 border rounded"
                />
                <input
                    type="number"
                    value={numColumns}
                    onChange={handleNumColumnsChange}
                    className="m-2 p-2 border rounded"
                />
                <button onClick={handleGenerateTable} disabled={!validInput} className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add</button>
                <button onClick={fillTableWithSampleData} className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Fill with Sample Data</button>
                <button onClick={renderHtml} className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Get HTML</button>
                <button onClick={handleEditTable} disabled={!tableShow} className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Edit Table</button>
            </div>

            <div className="overflow-x-auto">
                <table ref={tableRef} className="table-auto">
                    <thead>
                        <tr>
                            {columnNames.map((columnName, index) => (
                                <th key={index} className="px-4 py-2">
                                    <input
                                        type="text"
                                        value={columnName}
                                        onChange={(e) => handleColumnNameEdit(index, e.target.value)}
                                        className="w-full text-center"
                                        disabled={!tableEditable} // Disable input when table is not editable
                                    />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, columnIndex) => (
                                    <td key={columnIndex} className="border px-4 py-2">
                                        <input
                                            type="text"
                                            value={cell}
                                            onChange={(e) => handleCellEdit(rowIndex, columnIndex, e.target.value)}
                                            className="w-full text-center"
                                            disabled={!tableEditable} // Disable input when table is not editable
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {tableShow && (
                <div className="overflow-x-auto bg-red-200">
                    <p>render html code</p>
                    <table dangerouslySetInnerHTML={{ __html: getTableHtml() }} className="table-auto"></table>
                </div>
            )}
        </>
    );
};

export default DynamicTable;
