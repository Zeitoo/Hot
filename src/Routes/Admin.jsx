import { useRef } from "react";
import axios from "axios";

function Admin() {
	const port = "http://10.134.36.233:3000/new_video"; // Replace with your actual port

	const formRef = useRef();

	function extractFormData(form) {
		const formData = new FormData(form);
		const data = {};
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}
		return data;
	}

	function hadleSubmit(event) {
		event.preventDefault();
		const data = extractFormData(formRef.current);
		console.log(JSON.stringify(data));

		axios
			.post(port, data)
			.then((res) => {
				console.log("Video uploaded successfully:", res.status);
			})

			.catch((error) => {
				console.error("An error occurred:", error);
			});
		//formRef.current.reset();
	}

	return (
		<>
			<section className="admin-section relative w-full max-w-3xl mx-auto p-5 md:p-10">
				<div>
					<form
						onSubmit={hadleSubmit}
						ref={formRef}
						action={"/"}
						method="post"
						encType="application/x-www-form-urlencoded">
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="titulo">
								Title:{" "}
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="titulo"
								id="titulo"
							/>
						</div>
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="name">
								Channel Name:{" "}
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="name"
								id="name"
							/>
						</div>
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="price">
								Price:{" "}
							</label>
							<input
								className="outline p-2 text-sm px-3 w-[100px] outline-gray-600 rounded-[5px]"
								type="number"
								name="price"
								id="price"
							/>
						</div>
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="description">
								Description:{" "}
							</label>
							<textarea
								className="resize-none outline outline-gray-600 rounded-[5px]"
								type="text"
								name="description"
								id="description"
							/>
						</div>
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="thumb">
								Thumbnail Link:{" "}
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="thumb"
								id="thumb"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="video">
								Video Link:{" "}
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="video"
								id="video"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="code">
								Codigo:
							</label>
							<input
								className="outline p-2 text-sm px-3 w-[100px] outline-gray-600 rounded-[5px]"
								type="number"
								name="code"
								id="code"
							/>
						</div>

						<div className="flex justify-center mt-6">
							<button
								className="bg-green-500 text-white"
								type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Admin;
