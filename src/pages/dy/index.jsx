import React, { useState } from 'react';

const DynamicTable = () => {
    const [columns, setColumns] = useState(['Name', 'Age']);
    const [rows, setRows] = useState([{ id: Date.now(), Name: '', Age: '' }]);
    const [submitted, setSubmitted] = useState(false);

    const handleAddRow = () => {
        const newRow = { id: Date.now() };
        columns.forEach(col => newRow[col] = '');
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (id) => {
        if (window.confirm('Are you sure you want to delete this row?')) {
            setRows(rows.filter(row => row.id !== id));
        }
    };

    const handleAddColumn = () => {
        const newColumn = prompt('Enter column name:');
        if (newColumn) {
            setColumns([...columns, newColumn]);
            setRows(rows.map(row => ({ ...row, [newColumn]: '' })));
        }
    };

    const handleRemoveColumn = (colName) => {
        if (window.confirm('Are you sure you want to delete this column?')) {
            setColumns(columns.filter(col => col !== colName));
            setRows(rows.map(row => {
                const { [colName]: removed, ...rest } = row;
                return rest;
            }));
        }
    };

    const handleChange = (id, colName, value) => {
        setRows(rows.map(row => row.id === id ? { ...row, [colName]: value } : row));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {col}
                                <button onClick={() => handleRemoveColumn(col)} className="ml-2 text-red-500">X</button>
                            </th>
                        ))}
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {rows.map((row) => (
                        <tr key={row.id}>
                            {columns.map(col => (
                                <td key={col} className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        value={row[col]}
                                        onChange={(e) => handleChange(row.id, col, e.target.value)}
                                        className="px-2 py-1 border rounded"
                                    />
                                </td>
                            ))}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleRemoveRow(row.id)} className="px-4 py-2 text-white bg-red-500 rounded">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddRow} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded">Add Row</button>
            <button onClick={handleAddColumn} className="mt-4 ml-4 px-4 py-2 text-white bg-green-500 rounded">Add Column</button>
            <button onClick={handleSubmit} className="mt-4 ml-4 px-4 py-2 text-white bg-green-500 rounded">SUBMIT ALL DATA</button>

            {submitted && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
                    {rows.map((row, rowIndex) => (
                        <div key={row.id} className="mb-4">
                            {columns.map((col, colIndex) => (
                                <p key={`${rowIndex}-${colIndex}`} className="mb-2">
                                    <strong>{col}:</strong> {row[col]}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DynamicTable;
