import React from 'react';

const Contact = () => {

	return(
		<div name = 'contact' className = 'w-full h-screen bg-gradient-to-t from-rose-600 to-slate-700 flex justify-center items-center p-4'>
			<form method = "POST" action = "https://getform.io/f/038a38be-4ae8-49f9-becc-60ad947834e8" className = 'flex flex-col max-w-[800px] w-full'>
    			<div className = 'pb-8'>
    				<p className = 'text-4xl font-bold inline border-b-4 border-red-600 text-[#ffffff]'> Contact Information</p>
    				<p className = 'text-[#ffffff] py-4'> Use the form below to contact me via email, or I can be reached at davidgrim12345@gmail.com</p>
    			</div>
    			<input className = 'bg-[#cccccc] p-2' type = "text" placeholder = "Name" name = "Name"></input>
    			<input className = 'bg-[#cccccc] my-4 p-2' type = "text" placeholder = "Email" name = "Email"></input>
    			<textarea className = 'bg-[#cccccc] p-2' name = "message" rows = "10" placeholder = "Message"></textarea>
    			<button className = 'text-[#ffffff] border-2 hover:bg-zinc-800 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
			</form>
		</div>
		);



}

export default Contact;