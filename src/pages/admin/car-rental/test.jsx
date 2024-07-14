import { useState, useEffect } from "react";
import "../../../app/globals.css"


const AdminPanel = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const response = await fetch('http://localhost:5000/faqs');
            const data = await response.json();
            setFaqs(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddFaq = async () => {
        if (question && answer) {
            try {
                const response = await fetch('http://localhost:5000/faqs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question, answer }),
                });
                const newFaq = await response.json();
                setFaqs([...faqs, newFaq]);
                setQuestion("");
                setAnswer("");
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleUpdateFaq = async (id, updatedFaq) => {
        try {
            const response = await fetch(`http://localhost:5000/faqs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFaq),
            });
            const updatedData = await response.json();
            setFaqs(faqs.map(faq => faq._id === id ? updatedData : faq));
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteFaq = async (id) => {
        try {
            await fetch(`http://localhost:5000/faqs/${id}`, {
                method: 'DELETE',
            });
            setFaqs(faqs.filter(faq => faq._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-semibold mb-5">Admin Panel - Add FAQ</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                        Question
                    </label>
                    <input
                        id="question"
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="answer">
                        Answer
                    </label>
                    <textarea
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleAddFaq}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Add FAQ
                    </button>
                </div>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">FAQ List</h2>
                {faqs.length === 0 ? (
                    <p className="text-gray-700">No FAQs added yet.</p>
                ) : (
                    <ul>
                        {faqs.map((faq, index) => (
                            <li key={index} className="mb-2">
                                <p className="font-bold">{faq.question}</p>
                                <p>{faq.answer}</p>
                                <button onClick={() => handleUpdateFaq(faq._id, { question: faq.question, answer: 'Updated Answer' })} className="text-blue-500">Edit</button>
                                <button onClick={() => handleDeleteFaq(faq._id)} className="text-red-500 ml-4">Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
