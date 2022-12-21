import React from 'react';

const About = () => {

	return(
		<div name='about' className  = 'w-full h-screen bg-slate-900 text-[#ffffff]'>
			<div className = 'flex flex-col justify-center items-center w-full h-full'>
				<div className  = 'max-w-[1000px] w-full '>
					<div className = 'pb-8 pl-4'>
						<p className = 'text-4xl font-bold inline border-b-4 border-red-600'>
							About
						</p>
					</div>
					<div>
						
					</div>
					<div className = 'max-w-[1000px] w-full pl-4'>
						<div>
							<p>I am a veteran of the US Marine Corps where I served as a systems administrator 
							   as well as a network engineer for 6 years. I am also a recent graduate of University of 
							   California, Santa Cruz (UCSC) where I studied computer science.</p>
							<br/>
							<p>During my time in the Marine Corps, I learned how valuable 
							   working with a cooperative team could be. While most of my duties were in system 
							   administration and network engineering, I learned how to properly communicate and work with my fellow Marines as a team.</p>
							<br/>
							<p>I am currently employed as a network technician for Santa Rosa Junior College. My core responsibilities include:
							administering data and server backup infrastructure, implementing Single Sign-On (SSO) features with various third parties, maintaining
							uninterruptable power supply infrastructure. </p>

						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default About;