import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {

	return (
		<div name = 'home' className = 'bg-gradient-to-t from-slate-900 to-rose-800 w-full h-screen'>


			{/* Container*/}
			<div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className = 'text-[#e06666] text-2xl'>Hello, my name is</p>
				<h1 className = 'text-4xl sm: text-7xl font-bold text-[#ffffff]'>David Grim</h1>
				<h2 className = 'text-4xl sm: text-6xl font-bold text-[#eeeeee] py-4'>Welcome to my webpage!</h2>
				<p className = 'text-[#eeeeee] text-2xl py-4 max-w-[700px]'>I am a multifaceted IT professional, with a strong passion for
					programming. The lower the level, the better! Don't let that fool you however, as I wrote this webpage using React...
					Feel free to have a look around!
				</p>
				<div>
					<button className = 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cc0000]'>
					View Work <span className = 'group-hover:rotate-90 duration-200'><HiArrowNarrowRight className = 'ml-1'/></span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home;