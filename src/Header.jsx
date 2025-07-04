import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="flex items-center border border-gray-50 justify-between p-8">
			<div>
				<NavLink
					to="/"
					className="text-2xl font-bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-5">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>
				</NavLink>
			</div>

			<nav className="flex items-center text-[10px] md:text-sm gap-4 text-white">
				<ul className="flex gap-2 md:gap-4">	
					<li>
						<button className="bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-4 py-2">
							Categories
						</button>
					</li>
					<li>
						<button className="bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-4 py-2">
							Trending
						</button>
					</li>
					<li>
						<button className="bg-gray-50 border-gray-200 border text-gray-800 rounded-full px-4 py-2">
							New Releases
						</button>
					</li>

				</ul>
			</nav>
		</header>
	);
}

export default Header;
