import image1 from "../assets/image-1.jpg";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Explorar() {
	const [move, setMove] = useState(false);
	const [dados, setDados] = useState([]);
	const [path, setPath] = useState("/video/");

	const clickBtnHandler = () => {
		setMove((move) => !move);
	};

	useEffect(() => {
		fetch("http://127.0.0.1:3000")
			.then((response) => response.json())
			.then((data) => {
				let tempdata = [];
				for (let i of Object.keys(data)) {
					tempdata.push(data[i]);
				}
				setDados(tempdata);
				console.log("Data fetched successfully:", tempdata);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	if (move) {
		return (
			<Navigate
				to={path}
				replace={true}
			/>
		);
	}

	return (
		<div className="flex flex-col items-center border border-gray-200 justify-center">
			<div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 p-10 px-6 md:px-19">
				{dados.map((item, key) => (
					<div
						onClick={() => {
							setPath("/video/" + item.post_id);
							clickBtnHandler();
						}}
						key={Math.floor(Math.random() * 100) + key}
						className="w-full bg-gray-50 border border-gray-200 aspect-auto overflow-hidden rounded-xl video-card ">
						<div className="image overflow-hidden">
							<img
								src={image1}
								alt="Video thumbnail"
							/>
						</div>
						<div>
							<div className="flex items-baseline gap-4 p-4">
								<div className="creator-profile rounded-md bg-gray-500 flex justify-center items-center aspect-square w-9 font-medium text-white">
									{item.channel_name[0]}
								</div>

								<div>
									<div className="text-gray-800">
										<div className="flex items-center gap-2">
											<p className="font-medium">
												{item.titulo}
											</p>
										</div>
										<div className="flex gap-4 text-sm">
											<p>{item.channel_name}</p>
											<p>
												{Math.floor(
													Math.random() * 10
												) +
													1 +
													" "}
												days ago
											</p>
										</div>
										<div className="flex items-center gap-4">
											<div className="flex items-center justify-center gap-2 likes">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="size-4">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
													/>
												</svg>

												<p>
													{Math.floor(
														Math.random() * 10000
													) + 4021}
												</p>
											</div>
											<div className="flex items-center justify-center gap-2 views">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="size-4">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
													/>
												</svg>

												<p>
													{Math.floor(
														Math.random() * 10000
													) + 4021}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Explorar;
