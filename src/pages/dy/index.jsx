import { HomeIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import "../../app/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

const DynamicTable = () => {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [editingColumn, setEditingColumn] = useState(null);
    const [newColumnName, setNewColumnName] = useState('');

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
        if (newColumn && !columns.includes(newColumn)) {
            const updatedColumns = [...columns, newColumn];
            setColumns(updatedColumns);

            // Add the new column to existing rows
            setRows(rows.map(row => ({ ...row, [newColumn]: '' })));

            // Add a default row if no rows exist
            if (rows.length === 0) {
                const newRow = { id: Date.now() };
                updatedColumns.forEach(col => newRow[col] = '');
                setRows([newRow]);
            }
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
        setSubmittedData(rows);
        setSubmitted(true);
    };

    const handleEdit = () => {
        setRows(submittedData);
        setSubmitted(false);
    };

    const startEditingColumn = (colName) => {
        setEditingColumn(colName);
        setNewColumnName(colName);
    };

    const handleColumnNameChange = (e) => {
        setNewColumnName(e.target.value);
    };

    const saveColumnName = (oldColumnName) => {
        if (newColumnName && !columns.includes(newColumnName)) {
            setColumns(columns.map(col => col === oldColumnName ? newColumnName : col));
            setRows(rows.map(row => {
                const { [oldColumnName]: oldValue, ...rest } = row;
                return { ...rest, [newColumnName]: oldValue };
            }));
        }
        setEditingColumn(null);
    };

    return (
        <div>
            <div className='flex items-center justify-center mb-4'>
                <p className='text-red-500'>Hello</p>
                <div>
                    <HomeIcon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            {/* Editable table */}
            <div className='border container-wrapper rounded-md p-2'>
                <div className='h-14 relative'>
                    <div className='flex gap-5 right-10 top-3 absolute'>
                        <button
                            onClick={handleAddRow}
                            className={`bg-black text-white rounded-full px-3 py-2 text-xs ${columns.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={columns.length === 0}
                        >
                            Add Row
                        </button>
                        <button onClick={handleAddColumn} className="text-white rounded-full px-3 py-2 text-xs bg-green-500">Add Column</button>
                    </div>
                </div>
                {!submitted && (
                    <div>
                        <table className="min-w-full divide-y divide-gray-200 mb-4 border">
                            <thead>
                                <tr>
                                    {columns.map(col => (
                                        <th key={col} className="font-semibold text-para tracking-wider">
                                            {editingColumn === col ? (
                                                <div className="flex items-center justify-center">
                                                    <input
                                                        type="text"
                                                        value={newColumnName}
                                                        onChange={handleColumnNameChange}
                                                        className="border rounded-md px-2"
                                                    />
                                                    <button onClick={() => saveColumnName(col)} className="ml-2 bg-navyblack text-white px-2 rounded">Save</button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    {col}
                                                    <div onClick={() => startEditingColumn(col)} className='ml-2 px-2 flex items-center py-1 rounded cursor-pointer'>
                                                        <FontAwesomeIcon icon={faPenToSquare} className='font' />
                                                    </div>
                                                    <div onClick={() => handleRemoveColumn(col)} className="ml-2 flex items-center cursor-pointer text-cyan-500 hover:text-red-700">
                                                        <FontAwesomeIcon icon={faXmark} className='font' />
                                                    </div>
                                                </div>
                                            )}
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
                                                    className='border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                                />
                                            </td>
                                        ))}
                                        {(rows.length > 0 && columns.length > 0) && (
                                            <td className="px-6 py-4 flex gap-5 whitespace-nowrap">
                                                <button onClick={() => handleRemoveRow(row.id)} className="text-white rounded-full px-4 py-2 text-sm bg-red-500">Remove</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br />
                        <button onClick={handleSubmit} className="text-white rounded-full w-full px-4 py-2 text-sm bg-green-500">Submit All Data</button>
                    </div>
                )}
            </div>
            {/* Display submitted data in a table format */}
            {submitted && (
                <div className='container-wrapper'>
                    <div className="mt-8">
                        <div className=' flex items-center gap-2'>
                            <h2 className="text-xl font-bold ">Submitted Data</h2>

                            <div onClick={handleEdit} className=" px-3 bg-red-500 text-white rounded-full">

                                <FontAwesomeIcon icon={faPenToSquare} className='font' /> Edit Data
                            </div>
                        </div>
                        <table className="min-w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                            <thead className="bg-black text-white">
                                <tr>
                                    {columns.map((col, index) => (
                                        <th key={index} className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className=" border">
                                {submittedData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((col, colIndex) => (
                                            <td key={colIndex} className="border-y-2 border-x-2 overflow-hidden  border-gray-300 px-3 py-1 whitespace-nowrap">
                                                {row[col]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            )}
        </div>
    );
};

export default DynamicTable;
