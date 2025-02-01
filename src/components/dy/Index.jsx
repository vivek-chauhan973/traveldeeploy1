import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPenToSquare,faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";

const DynamicTable = ({
  setTableData,
  tableData,
  tableColumn,
  setTableColumn,
  setTableDot,
  itinerary,
}) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [editingColumn, setEditingColumn] = useState(null);
  const [newColumnName, setNewColumnName] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleAddRow = () => {
    const newRow = { id: Date.now() };
    columns.forEach((col) => (newRow[col] = ""));
    setRows([...rows, newRow]);
  };

  useEffect(() => {
    setSubmittedData(tableData || []);
    setRows(tableData || []);
    setColumns(tableColumn || []);
    if (columns.length !== 0) {
      setSubmitted(true);
    }
  }, [tableData]);

  const handleRemoveRow = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleAddColumn = () => {
    const newColumn = prompt("Enter column name:");
    if (newColumn && !columns.includes(newColumn)) {
      const updatedColumns = [...columns, newColumn];
      setColumns(updatedColumns);

      setRows(rows.map((row) => ({ ...row, [newColumn]: "" })));

      if (rows.length === 0) {
        const newRow = { id: Date.now() };
        updatedColumns.forEach((col) => (newRow[col] = ""));
        setRows([newRow]);
      }
    }
  };

  const handleRemoveColumn = (colName) => {
    if (window.confirm("Are you sure you want to delete this column?")) {
      setColumns(columns.filter((col) => col !== colName));
      setRows(
        rows.map((row) => {
          const { [colName]: removed, ...rest } = row;
          return rest;
        })
      );
    }
  };

  const handleChange = (id, colName, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [colName]: value } : row))
    );
  };

  const handleSubmit = () => {
    setSubmittedData(rows);
    setSubmitted(true);
    setTableColumn(columns);
    setTableData(rows);
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
      setColumns(
        columns.map((col) => (col === oldColumnName ? newColumnName : col))
      );
      setRows(
        rows.map((row) => {
          const { [oldColumnName]: oldValue, ...rest } = row;
          return { ...rest, [newColumnName]: oldValue };
        })
      );
    }
    setEditingColumn(null);
  };

  const HandleToogle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-2">
      <button
        onClick={HandleToogle}
        className={`bg-${toggle ? "green-600" : "red-500"} hover:bg-${
          toggle ? "green-700" : "red-700"
        } text-white py-2 px-4 rounded-full`}
      >
        {toggle ? "Hide" : "Show"}
      </button>

      {toggle && (
        <div className="bg-white p-4 mt-2 rounded-md">
          <div className="grid grid-cols-1 mb-4 gap-5">
            <div className="border p-2 rounded">
              {!submitted && (
                <div className="border rounded-md p-2 mb-2">
                  <div className="h-10 flex gap-5 md:justify-end justify-center items-center">
                    <button
                      onClick={handleAddRow}
                      className={`bg-black text-white rounded-full px-3 py-2 text-xs ${
                        columns.length === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={columns.length === 0}
                    >
                      Add Row
                    </button>
                    <button
                      onClick={handleAddColumn}
                      className="text-white rounded-full px-3 py-2 text-xs bg-green-500"
                    >
                      Add Column
                    </button>
                  </div>
                </div>
              )}

              {!submitted && (
                <div className="overflow-x-scroll">
                  <table className="min-w-full divide-y divide-gray-200 border text-sm md:text-base">
                    <thead>
                      <tr>
                        {columns.map((col) => (
                          <th
                            key={col}
                            className="font-semibold text-para tracking-wider border-l"
                          >
                            {editingColumn === col ? (
                              <div className="flex items-center justify-center px-2 mb-2">
                                <input
                                  type="text"
                                  value={newColumnName}
                                  onChange={handleColumnNameChange}
                                  className="border rounded-md px-2 py-1"
                                />
                                <FontAwesomeIcon
                                    icon={faFloppyDisk}
                                    onClick={() => saveColumnName(col)}
                                    className="ml-2 text-xl hover:text-primary cursor-pointer"
                                  />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-5 px-2">
                                {col}
                                <div className="px-2 flex justify-center items-center gap-3 py-1 rounded ">
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    onClick={() => startEditingColumn(col)}
                                    className="hover:text-primary cursor-pointer"
                                  />
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    onClick={() => handleRemoveColumn(col)}
                                    className="cursor-pointer text-cyan-500 hover:text-primary text-lg"
                                  />
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
                          {columns.map((col) => (
                            <td
                              key={col}
                              className="px-2 py-4 whitespace-nowrap"
                            >
                              <input
                                type="text"
                                value={row[col]}
                                onChange={(e) =>
                                  handleChange(row.id, col, e.target.value)
                                }
                                className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                              />
                            </td>
                          ))}
                          {rows.length > 0 && columns.length > 0 && (
                            <td className="py-4 whitespace-nowrap text-center">
                              <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => handleRemoveRow(row.id)}
                                className="cursor-pointer hover:text-primary text-lg"
                              />
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                  <button
                    onClick={handleSubmit}
                    className="text-white mb-2 rounded-full  w-full px-4 py-2 text-sm bg-green-500"
                  >
                    Submit All Data
                  </button>
                </div>
              )}

              {submitted && (
                <div className="">
                  <div className="m-2">
                    <div className="flex justify-between items-center gap-2">
                      <h2 className="md:text-md text-para font-semibold">
                        Submitted Data
                      </h2>
                      <div onClick={handleEdit} className="cursor-pointer">
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="font"
                        />
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full mt-3 border-collapse border border-gray-300 text-center text-sm md:text-base">
                        <thead className="bg-black text-white">
                          <tr>
                            {columns.map((col, index) => (
                              <th
                                key={index}
                                className="border border-gray-300 font-semibold px-3 py-1 text-xs uppercase tracking-wider"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="border">
                          {submittedData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {columns.map((col, colIndex) => (
                                <td
                                  key={colIndex}
                                  className="border-y-2 border-x-2 border-gray-300 px-3 py-1 whitespace-nowrap"
                                >
                                  {row[col]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
