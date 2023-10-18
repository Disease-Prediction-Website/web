import { Facebook, Mail, PhoneCall, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className=' items-center justify-center text-center w-full md:items-start md:justify-start md:text-left md:space-x-6 md:space-y-0 md:flex-row p-4 flex flex-col space-y-8'>
			<div className=' flex flex-col space-y-3 max-w-[350px]'>
				<div className=' flex space-x-4 items-center justify-center md:justify-start '>
					<img
						className='w-8'
						src='/logo.png'
						alt='logo'
					/>
					<p className='text-lg font-semibold text-[#396379]'>
						Disease AI
					</p>
				</div>
				<p className=' text-[#a0b3c5]'>
					40, Funnab Estate, Abeokuta, Ogun State.
				</p>
				<div className=' flex space-x-3 text-[#396379] justify-center md:justify-start '>
					<Link href={'/'}>
						<Facebook
							className=' hover:text-[#a0b3c5]'
							size={30}
						/>
					</Link>
					<Link href={'/'}>
						<Twitter
							className=' hover:text-[#a0b3c5]'
							size={30}
						/>
					</Link>
					<Link href={'/'}>
						<Mail
							className=' hover:text-[#a0b3c5]'
							size={30}
						/>
					</Link>
					<Link href={''}>
						<PhoneCall
							className=' hover:text-[#a0b3c5]'
							size={30}
						/>
					</Link>
				</div>
			</div>
			<div className=' flex flex-col space-y-3 max-w-[350px]'>
				<p className='text-lg font-semibold text-[#396379]'>ABOUT US</p>
				<p className=' text-[#a0b3c5]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Qui, ea optio rem et aliquid repudiandae commodi soluta quas
					sunt tempore? Provident vero inventore vel similique quidem
					amet neque aliquid exercitationem.
				</p>
				<p className=' font-semibold text-[#396379]'>&copy; 2023 All rights reserved.</p>
			</div>
		</div>
	);
};
