import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function Player({ src }) {
	src = src || "https://www.w3schools.com/html/mov_bbb.mp4";

    

	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	};

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		setIsMuted(video.muted);
	};

	const toggleFullScreen = () => {
		const video = videoRef.current;
		if (!video) return;
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			video.requestFullscreen();
		}
	};

	videoRef.current?.addEventListener("ended", () => {
		setIsPlaying(false);
	});

	return (
		<div className="relative w-full max-w-3xl mx-auto p-5 md:p-0">
			<video
				ref={videoRef}
				className="w-full rounded-2xl shadow-lg"
				src={src}
				controls={false}
				loop={true}
			/>
			<div className="absolute bottom-0 left-0 right-0 flex justify-between items-center m-5 md:m-0 px-4 py-2 bg-black/10 rounded-b-2xl backdrop-blur-[3px]">
				<button
					onClick={togglePlay}
					className="text-white focus:outline-none/border-none">
					{isPlaying ? <Pause size={18} /> : <Play size={18} />}
				</button>
				<button
					onClick={toggleMute}
					className="text-white focus:outline-none/border-none">
					{isMuted ? <VolumeX size={10} /> : <Volume2 size={18} />}
				</button>
				<button
					onClick={toggleFullScreen}
					className="text-white focus:outline-none/border-none">
					<Maximize2 size={18} />
				</button>
			</div>
		</div>
	);
}
