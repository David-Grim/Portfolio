import React from 'react';
import WorkImg from '../assets/workImg.png';

const Experience = () => {

	return(
			<div name = 'experience' className  = 'w-full md:h-screen bg-gradient-to-t from-slate-700 to-slate-800 text-[#ffffff]'>
				<div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
					<div className = 'pb-8'>
						<p className = 'text-4xl font-bold inline border-b-4 border-red-600'>Experience</p>
						<p className = 'py-6'>Here is some of my recent work</p>
					</div>
					<div className = 'grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
						<div style = {{backgroundImage: `url(${WorkImg})`}} className = 'shadow-lg shadow-[#040b25] group container rounded-md flex justify-center items-center mx-auto content-div'>


						{/*Hover effects*/}
							<div className = 'opacity-0 group-hover:opacity-100'>
								<span className = 'text-2xl font-bold text-white tracking-wider'>
									NoFilter
								</span>
								<div className = 'pt-8 text-center'>
									<a href="https://github.com/David-Grim/CSE183-project">
										<button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
									</a>
									<a href="https://drive.google.com/file/d/14kF18WLpcU1GK-Jm6KwJ2rjBh0iigIO7/view?usp=sharing">
										<button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
									</a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		  );



}

export default Experience;