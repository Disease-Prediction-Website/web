'use client';

import { useAuth } from '@clerk/nextjs';
import { Navbar } from './components/Navbar';
import { Activity, Book, History } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Landing() {
	const { isSignedIn } = useAuth();
	return (
		<div className=' flex flex-col items-start'>
			<Navbar />
			<div className='relative min-h-[350px]'>
				<img
					className=' w-full h-full object-cover min-h-[350px]'
					src={'/5.jpg'}
					alt='livestock'
				/>
				<div className=' w-full items-center justify-center flex h-full absolute top-0 left-0 bg-gradient-to-r from-pink-500/90  to-black/50'>
					<div className=' w-full self-center flex flex-col max-w-[500px] lg:max-w-[1000px] items-center justify-center space-y-4 md:space-y-8 p-4 md:p-8 text-center lg:text-left lg:items-start'>
						<p className=' text-2xl md:text-5xl lg:text-8xl font-bold text-[#eaf4f7]'>
							Want to find out about Animal Diseases?
						</p>
						<p className=' lg:text-xl md:text-base text-sm text-[#eaf4f7]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Illum repellendus natus architecto laudantium
							.
						</p>
						<Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
							<Button variant={'secondary'} size={'lg'} className=' text-white bg-red-500 rounded-md'>Get started</Button>
						</Link>
					</div>
				</div>
			</div>
			<SectionTwo />
		</div>
	);
}

const SectionTwo = () => {
	const services = [
		{
			title: 'Predict Disease',
			icon: Activity,
			details:
				'Easily predict animal disease with our AI powered platform by stating the symptoms.',
		},
		{
			title: 'View Prediction History',
			icon: History,
			details:
				'Easily view prediction history after predicting diseases, based on the symptoms provided.',
		},
		{
			title: 'Explore Animal Diseases',
			icon: Book,
			details:
				'Read on 100+ animal diseases available on our website; their symptoms, prevention and treatment.',
		},
	];
	return (
		<div className=' my-10  space-y-6 md:space-y-0 items-center justify-center flex-col md:flex-row p-4 md:py-14 lg:py-16 md:p-8 w-full flex md:items-start  md:space-x-8 lg:space-x-16 md:justify-center'>
			{services.map((service) => (
				<div className=' items-center text-center md:items-start md:text-left flex flex-col max-w-[220px] space-y-4 '>
					<service.icon
						className=' text-[#396379]'
						size={45}
					/>
					<p className=' text-[#396379] font-bold text-lg'>
						{service.title}
					</p>
					<p className=' text-[#a0b3c5] text-sm'>{service.details}</p>
				</div>
			))}
		</div>
	);
};

const sectionThree = () => {
	return <div>
		<p>This is how it works</p>
		<div>
			<div className=' w-4 h-4 rounded-full bg-[#ffb454] text-white'>1</div>
			<p className=' text-lg capitalize text-[#396379]'>do something</p>
			<p className=' text-sm  text-[#a0b3c5]'>roturitr rtkruyhtr rtu8rthur rtirturytrtijtrtrit ruiyojtyojjyt tyoiytpykjyt tyoityutypiyiuiy</p>
		</div>
	</div>
}

// bg for the 4th section #eaf4f7
// text cloor #396379
// subtitle text #a0b3c5
// the yellow color #ffb454
