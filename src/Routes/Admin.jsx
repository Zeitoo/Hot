import { useRef } from "react";
import axios from "axios";

function Admin() {
	const address = "http://127.0.0.1:3000/new_video";

	const formRef = useRef();

	function sanitizeInput(value) {
		// Remove espaços em branco nas extremidades
		let sanitized = value.trim();

		// Remove tags HTML básicas e alguns caracteres perigosos
		sanitized = sanitized.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		sanitized = sanitized.replace(/["']/g, "");

		return sanitized;
	}

	function extractFormData(form) {
		const formData = new FormData(form);
		const data = {};

		for (const [key, value] of formData.entries()) {
			// Se for número, sanitiza como número
			if (key === "price" || key === "code") {
				data[key] = Number(value);
			} else {
				data[key] = sanitizeInput(value);
			}
		}

		return data;
	}

	function hadleSubmit(event) {
		event.preventDefault();
		const data = extractFormData(formRef.current);
		console.log(JSON.stringify(data));

		axios
			.post(address, data)
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
						onSubmit={handleSubmit}
						ref={formRef}
						action={"/"}
						method="post"
						encType="application/x-www-form-urlencoded">
						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="titulo">
								Title:
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="titulo"
								id="titulo"
								required
								maxLength={100}
								placeholder="Título do vídeo"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="name">
								Channel Name:
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="text"
								name="name"
								id="name"
								required
								maxLength={50}
								placeholder="Nome do canal"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="price">
								Price:
							</label>
							<input
								className="outline p-2 text-sm px-3 w-[100px] outline-gray-600 rounded-[5px]"
								type="number"
								name="price"
								id="price"
								required
								min={0}
								inputMode="decimal"
								placeholder="0.00"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="description">
								Description:
							</label>
							<textarea
								className="resize-none p-3 outline outline-gray-600 rounded-[5px]"
								name="description"
								id="description"
								required
								maxLength={500}
								rows={4}
								placeholder="Breve descrição do vídeo"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="thumb">
								Thumbnail Link:
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="url"
								name="thumb"
								id="thumb"
								required
								maxLength={2048}
								placeholder="https://..."
								pattern="https?://.+"
							/>
						</div>

						<div className="flex flex-col mt-4 gap-4">
							<label
								className="font-medium text-gray-900 text-sm"
								htmlFor="video">
								Video Link:
							</label>
							<input
								className="outline p-2 text-sm px-3 outline-gray-600 rounded-[5px]"
								type="url"
								name="video"
								id="video"
								required
								maxLength={2048}
								placeholder="https://..."
								pattern="https?://.+"
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
								required
								min={1}
								inputMode="numeric"
								placeholder="1234"
							/>
						</div>

						<div className="flex justify-center mt-6">
							<button
								className="bg-green-500 text-white"
								type="submit">
								Upload
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Admin;
