import { Button } from '@/components/ui/button';
import { getDiseases } from '@/lib/apiCalls';
import Link from 'next/link';

export default async function page() {
	const diseases = await getDiseases(1);
	return (
    <div className=' p-4 flex flex-col space-y-3 '>
      <p>Top Diseases from the database</p>
			{diseases.map((disease) => (
				<Link href={`/disease/${disease.id}`}>
					<div className=' w-full p-4 shadow-lg border-2 border-secondary rounded-md'>
						<p>{disease.diseaseName}</p>
						<p>{disease.information}</p>
						<div className=' flex flex-wrap gap-2 my-2'>
							{' '}
							{disease?.symptoms.map((symptom) => (
								<Button
									variant={'secondary'}
									className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
								>
									{symptom}
								</Button>
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
