import { useEffect, useState } from "react";
import homeIcon from "../assets/icons/home.png";
import maskIcon from "../assets/icons/mask.png";
import playIcon from "../assets/icons/play.png";
import searchIcon from "../assets/icons/search.png";
import settingsIcon from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";
import userIcon from "../assets/icons/user.png";

const Sidebar = ({ active, setActive }) => {
	const [showHomePage, toggleShowHomePage] = useState(false);

	useEffect(() => {
		if (active === 2) {
			toggleShowHomePage(prev => !prev);
		}
	}, [active]);

	const icons = [
		{ id: 1, icon: searchIcon, label: "Search" },
		{ id: 2, icon: homeIcon, label: "Home" },
		{ id: 3, icon: playIcon, label: "TV Shows" },
		{ id: 4, icon: settingsIcon, label: "Movies" },
		{ id: 5, icon: maskIcon, label: "Genres" },
		{ id: 6, icon: timeIcon, label: "Watch Later" },
	];

	const onExitOfMenu = event => {
		if (event.target.id === "out") {
			toggleShowHomePage(prev => !prev);
			setActive(1);
		}
	};

	return (
		<div
			onClick={onExitOfMenu}
			id="out"
			className={`h-screen py-4 absolute left-0 ${
				showHomePage
					? "w-full pl-[15px] pt-[72px] bg-gradient-to-r from-black via-black/80 to-transparent z-50"
					: "w-20 items-center flex flex-col top-[120px]"
			}`}
		>
			<div
				className={`${
					showHomePage
						? "ml-2 mb-3 font-medium  text-[20px] text-gray-500 flex items-center"
						: "hidden"
				}`}
			>
				<div className="p-2 bg-slate-300 rounded-full">
					<img
						src={userIcon}
						alt="user"
						className="w-7 h-7"
					/>
				</div>
				<p className="text-white ml-4">Jon Snow</p>
			</div>
			{icons.map(icon => (
				<div
					key={icon.id}
					className={`mb-2 p-3 ${
						showHomePage
							? "flex items-start w-fit px-4"
							: "flex items-center justify-center"
					}  rounded-full transition-colors cursor-pointer
					    ${
								active === icon.id
									? "bg-gray-400 text-white"
									: "text-gray-400 hover:bg-gray-700 hover:text-white"
							}`}
				>
					<img
						src={icon.icon}
						alt={icon.label}
						key={icon.id}
						onClick={() => setActive(icon.id)}
						className="object-cover w-5 h-5"
					/>
					<p
						className={`${showHomePage ? "block ml-7 font-medium" : "hidden"}`}
					>
						{icon.label}
					</p>
				</div>
			))}
			<div
				className={`${
					showHomePage
						? "block ml-3 font-medium uppercase text-[18px] text-gray-500 pt-[90px]"
						: "hidden"
				}`}
			>
				<p className="cursor-pointer">language</p>
				<p className="py-3 cursor-pointer">get help</p>
				<p
					className="cursor-pointer"
					onClick={() => {
						toggleShowHomePage(prev => !prev);
					}}
				>
					exit
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
