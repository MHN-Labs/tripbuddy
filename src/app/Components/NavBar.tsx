import React from 'react';

export function NavBar() {
	return (
		<nav className="flex flex-row h-20 shadow-lg px-8 justify-between items-center bg-white fixed w-full top-0 left-0 z-50">
			<div className=" flex h-full w-40 items-center justify-center content-center align-middle">
				<h1 className=" text-green-600 text-2xl font-bold align-middle  ">Trip Buddy</h1>
			</div>
			<div className="flex flex-row gap-4">
				<div className="flex justify-center items-center p-4 bg-green-500 rounded-full w-40">
					<p className="text-white font-bold">Login</p>
				</div>
				<div className="flex justify-center items-center p-4 bg-white rounded-full w-40 border-2 border-green-500">
					<p className=" text-green-500 font-bold">Signup</p>
				</div>
			</div>
		</nav>
	);
}
