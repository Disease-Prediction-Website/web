import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Landing() {
	return (
		<div>
			landing page{' '}
			<div>
				{' '}
				<Link href={'/sign-in'}>
					<Button variant={"premium"}>Login</Button>
				</Link>
				<Link href={'/sign-up'}>
					<Button variant={"premium"}>Register</Button>
				</Link>
			</div>
		</div>
	);
}
