import React, { useState } from 'react';

const SmartTable = () => {
  const [rows, setRows] = useState(3); // Default number of rows
  const [cols, setCols] = useState(3); // Default number of columns
  const [tableData, setTableData] = useState(Array.from({ length: rows }, () => Array.from({ length: cols }, () => '')));

  const handleRowsChange = (e) => {
    const newRow = parseInt(e.target.value);
    setRows(newRow);
    setTableData(Array.from({ length: newRow }, () => Array.from({ length: cols }, () => '')));
  };

  const handleColsChange = (e) => {
    const newCol = parseInt(e.target.value);
    setCols(newCol);
    setTableData(Array.from({ length: rows }, () => Array.from({ length: newCol }, () => '')));
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = e.target.value;
    setTableData(newData);
  };

  return (
    <div>
      <label>
        Rows:
        <input type="number" value={rows} onChange={handleRowsChange} />
      </label>
      <label>
        Columns:
        <input type="number" value={cols} onChange={handleColsChange} />
      </label>
      <table className='border border-collapse'>
        <tbody className='border'>
          {tableData.map((row, rowIndex) => (
            <tr className='border' key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td className='border' key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    className='border'
                    onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmartTable;
