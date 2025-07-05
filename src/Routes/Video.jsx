import video from "../assets/Video/video.mp4";
import Player from "../Player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Video() {
	const placeholder = {
		post_id: 1,
		titulo: "",
		channel_name: "",
		descricao: "",
		url_video: "",
		thumbnail_url: "",
		preco: "",
		criado_em: "",
	};

	const { id } = useParams();

	const [videoDat, setVideoDat] = useState(placeholder);

	useEffect(() => {
		fetch("http://127.0.0.1:3000")
			.then((response) => response.json())
			.then((data) => {
				setVideoDat(data[id]);
			})
			.then(() => {
				console.log("Data fetched successfully:", videoDat);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	console.dir(videoDat);

	return (
		<div className="mt-0 md:mt-5 mb-10">
			<Player src={video} />

			<div className="relative w-full mt-0 md:mt-5 max-w-3xl mx-auto p-5 md:p-0">
				<div>
					<p className="title font-medium">{videoDat.titulo}</p>
					<p>
						{videoDat.descricao}
						<span className="text-green-900">
							{videoDat.storage}
						</span>{" "}
						collection Price:{" "}
						<span className="text-red-800">$ {videoDat.preco}</span>
					</p>
				</div>
				<div className="flex items-center justify-center mt-5">
					<button className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>

						<p>Buy Now</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Video;
//Teen Incest Lizzy and brother | Real Incest (Snapgod)-
