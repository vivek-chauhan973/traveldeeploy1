import Layout from "@/components/admin/Layout";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube, faEdit, faFloppyDisk, faTrash, faXmark, } from "@fortawesome/free-solid-svg-icons";

export default function WebsiteSchema() {
    const [isName, setName] = useState({
        schemaName: "",
        schemaCode: ""
    });

    const [errors, setErrors] = useState({
        schemaName: false,
        schemaCode: false
    });

    const [editId, setEditId] = useState(null); // Track the ID of the schema being edited

    const isHandleSchemaName = (e) => {
        const { name, value } = e.target;
        setName((prev) => {
            return { ...prev, [name]: value };
        });
        setErrors((prev) => ({ ...prev, [name]: false })); // Clear error on change
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { schemaName: false, schemaCode: false };

        if (!isName.schemaName) {
            newErrors.schemaName = true;
            valid = false;
        }
        if (!isName.schemaCode) {
            newErrors.schemaCode = true;
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const HandleSchemaSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const method = editId ? 'PUT' : 'POST';
            const url = editId ? '/api/website-schema/update-schema' : '/api/website-schema/export';
            const body = editId ? { id: editId, ...isName } : isName;

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(editId ? 'Schema updated:' : 'Schema added:', data);
                setEditId(null); // Reset editId after successful update
                setName({ schemaName: "", schemaCode: "" }); // Reset form fields
                await fetchSchemaData(); // Fetch the updated schema data after submission
            } else {
                console.error(editId ? 'Failed to update Schema' : 'Failed to add Schema');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    const [schemaData, setSchemaData] = useState([]);

    const fetchSchemaData = async () => {
        try {
            const websiteSchemaList = await fetch('/api/website-schema/get-schema');
            const schemaData = await websiteSchemaList.json();
            setSchemaData(schemaData.websiteSchema);
            // console.log(schemaData);
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        fetchSchemaData();
    }, []);

    const schemaDelete = async (schema_id) => {
        try {
            const userConfirmed = confirm('Are you sure?');

            if (!userConfirmed) {
                return;
            }
            const response = await fetch(`/api/website-schema/delete-schema`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ schema_id })
            });

            if (response.ok) {
                // console.log('Schema deleted');
                await fetchSchemaData(); // Fetch the updated schema data after deletion
            } else {
                console.error('Failed to delete schema');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const schemaEdit = (schema) => {
        // console.log("Editing schema:", schema);
        setName({
            schemaName: schema.schemaName,
            schemaCode: schema.schemaCode
        });
        setEditId(schema._id); // Set editId to the ID of the schema being edited
        setErrors({ schemaName: false, schemaCode: false }); // Clear errors on edit
    };

    return (
   
            <Layout>
                <div className="flex items-center gap-5 text-primary xl:mt-5 mb-7 ">
                    <FontAwesomeIcon icon={faCube} className="text-2xl" />
                    <p className="md:text-[28px] text-lg text-black">Website Schema Define</p>
                    <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className=" text-teal-700 text-xl"
                    />
                </div>
                <div className="block md:flex gap-5 ">
                    <div className="w-full md:w-2/4">
                        <form onSubmit={HandleSchemaSubmit} className="flex flex-col gap-5 mb-10 md:mb-0 ">
                            <div className="flex flex-col">
                                <label htmlFor="inputName" className="text-para font-normal">Schema Name</label>
                                <input
                                    onChange={isHandleSchemaName}
                                    value={isName.schemaName}
                                    name="schemaName"
                                    className={`border grow h-10 rounded-md outline-none px-2 ${errors.schemaName ? 'border-red-500' : ''}`}
                                    type="text"
                                    id="inputName"
                                />
                                {errors.schemaName && <p className="text-red-500 text-sm">This field is required</p>}
                            </div>
                            <div>
                                <label htmlFor="w3review" className="text-para font-normal">Enter Your Schema Codes</label>
                                <textarea
                                    onChange={isHandleSchemaName}
                                    value={isName.schemaCode}
                                    name="schemaCode"
                                    className={`p-2 border rounded-md outline-none grow w-full ${errors.schemaCode ? 'border-red-500' : ''}`}
                                    rows={12}
                                />
                                {errors.schemaCode && <p className="text-red-500 text-sm">This field is required</p>}
                            </div>
                            <button className="bg-navyblack py-2 text-white rounded-md">{editId ? 'Update Schema' : 'Export Schema'}</button>
                        </form>
                    </div>
                    <div className="rounded-md grow border p-3 mt-5 bg-white w-full md:w-2/4 min-h-90">
                        <div className="border-b py-2">
                            <p className="font-semibold">Schema List ({schemaData.length})</p>
                        </div>
                        <div>
                            {schemaData.map((item, index) => (
                                <div key={item._id} className="flex justify-between p-2 even:bg-slate-100 mt-1">
                                    <p>{item.schemaName}</p>
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            onClick={() => schemaEdit(item)}
                                            className="font1 mt-1 hover:text-primary cursor-pointer"
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            onClick={() => schemaDelete(item._id)}
                                            className="font1 mt-1 hover:text-primary cursor-pointer"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
       
    );
}
