import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Navbar } from './components/Navbar';
import Image from 'next/image';

export default function Landing() {
	return (
		<div>
			<Navbar />
			<Image className=' w-full object-contain' src={"/5.jpg"} alt='livestock' fill />
		</div>
	);
}
