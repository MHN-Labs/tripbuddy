import Image from 'next/image';
import { FaGooglePlusG, FaFacebook } from 'react-icons/fa';
import { NavBar } from './Components/NavBar';

export default function Home() {
	return (
		<div>
			<NavBar />
			<main className="">
				<div className="hero bg-slate-600 w-full">
					<Image src={require('../../public/travellers_in_paris.jpg')} alt="" className=" w-full h-screen" />
				</div>
				<div className="absolute top-60 bg-white p-6 shadow-lg ml-16 rounded-lg h-auto w-96">
					<div className="flex flex-col items-center w-full">
						<h1 className="text-2xl font-bold">Join & Invite.</h1>
						<h1 className="text-2xl font-bold">Go on a trip together!</h1>
						<p className="mt-2 text-center">
							TripBuddy connects thousands of solo travelers across the world.
						</p>

						<div className="flex flex-col gap-3 mt-8 items-center w-full">
							<div className=" flex flex-row  gap-3 justify-center items-center h-10 bg-red-900 rounded-full shadow-md w-full">
								<FaGooglePlusG size={30} color="#fff" />
								<p className="text-white">Connect with Google</p>
							</div>

							<div className=" flex flex-row gap-3 justify-center w-full items-center h-10 bg-blue-600 rounded-full shadow-md">
								<FaFacebook size={24} color="#fff" />
								<p className="text-white">Connect with Facebook</p>
							</div>

							<div>
								<p>Or</p>
							</div>

							<div className="flex flex-row justify-between w-full">
								<div className="flex justify-center items-center p-4 bg-green-500 rounded-full w-40">
									<p className="text-white font-bold">Register</p>
								</div>

								<div className="flex justify-center items-center p-4 bg-white rounded-full w-40 border-2 border-green-500">
									<p className="text-green-500 font-bold">Login</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
