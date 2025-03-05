import { useState } from "react";
import axios from "axios";

const BulkImportBooks = () => {
	const [jsonData, setJsonData] = useState("");
	const [csvFile, setCsvFile] = useState(null);

	const handleJsonImport = async () => {
		try {
			const parsedData = JSON.parse(jsonData);
			const response = await axios.post("http://localhost:5000/api/books/bulk-import", parsedData, {
				headers: { Authorization: `Bearer YOUR_ADMIN_TOKEN` },
			});
			alert(response.data.message);
		} catch (error) {
			alert("Error importing JSON data: " + error.response?.data?.message || error.message);
		}
	};

	const handleCsvImport = async () => {
		if (!csvFile) {
			alert("Please select a CSV file.");
			return;
		}

		const formData = new FormData();
		formData.append("file", csvFile);

		try {
			const response = await axios.post("http://localhost:5000/api/books/upload-csv", formData, {
				headers: { Authorization: `Bearer YOUR_ADMIN_TOKEN` },
			});
			alert(response.data.message);
		} catch (error) {
			alert("Error importing CSV: " + error.response?.data?.message || error.message);
		}
	};

	return (
		<div>
			<h2>Bulk Import Books</h2>

			{/* JSON Import */}
			<h3>Paste JSON Data</h3>
			<textarea
				rows="10"
				cols="50"
				value={jsonData}
				onChange={(e) => setJsonData(e.target.value)}
				placeholder='[{"title": "Book Title", "author": "Author Name", "category": "Category"}]'></textarea>
			<br />
			<button onClick={handleJsonImport}>Import JSON</button>

			{/* CSV Upload */}
			<h3>Upload CSV File</h3>
			<input type="file" accept=".csv" onChange={(e) => setCsvFile(e.target.files[0])} />
			<br />
			<button onClick={handleCsvImport}>Import CSV</button>
		</div>
	);
};

export default BulkImportBooks;
