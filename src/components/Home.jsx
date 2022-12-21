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
				<p className = 'text-[#eeeeee] text-2xl py-4 max-w-[700px]'>As an aspiring full-stack developer, I have a passion for creating dynamic web pages and learning new programming languages.
				   Currently I am working on improving my knowledge of Javascript using the React framework.
				   This webpage was written using React and tailwinds.css. Feel free to have a look around!
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