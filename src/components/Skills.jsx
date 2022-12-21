import React from 'react';
import C from '../assets/c.png';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import SQL from '../assets/sql.png';
import Python from '../assets/python.png';
import excel from '../assets/excel.png';
import GCP from '../assets/gcp.png';
import VS from '../assets/vs.png';
import ReactImg from '../assets/reactImg.png';
import Github from '../assets/github.png';

const Skills = () => {

	return(
			<div name = 'skills' className  = 'w-full h-screen bg-gradient-to-t from-slate-800 to-slate-900 text-[#ffffff]'>
				<div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
					<div>
						<p className = 'text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
						<p className = 'py-4'>I am proficient with the following technologies</p>
					</div>
					<div className = 'w-full grid grid-cols-3 sm:grid-cols-3 gap-3 text-center -py-8'>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {HTML} alt = "HTML icon"></img>
							<p className = 'my-4'>HTML</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {CSS} alt = "HTML icon"></img>
							<p className = 'my-4'>CSS</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {Javascript} alt = "HTML icon"></img>
							<p className = 'my-4'>Javascript</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {Python} alt = "HTML icon"></img>
							<p className = 'my-4'>Python</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {ReactImg} alt = "HTML icon"></img>
							<p className = 'my-4'>React</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {SQL} alt = "HTML icon"></img>
							<p className = 'my-4'>SQL</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {C} alt = "HTML icon"></img>
							<p className = 'my-4'>C</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {Github} alt = "HTML icon"></img>
							<p className = 'my-4'>Github</p>
						</div>
						<div className = 'shadow-md shadow-[#040b25] hover:scale-110 duration-300'>
							<img className = 'w-20 mx-auto' src = {VS} alt = "HTML icon"></img>
							<p className = 'my-4'>Visual Studio</p>
						</div>
					</div>
				</div>
			</div>
		  )



}

export default Skills;