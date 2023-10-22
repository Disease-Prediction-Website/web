'use client';

import { useProModal } from '@/hooks/useProModal';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { useState } from 'react';
import { Loader } from './Loader';
import { SelectForm } from './ModalSelect';
import { Disease, Symptoms } from '@prisma/client';
import { PredictionResult } from '@/lib/apiCalls';

export const ProModal = ({ symptoms }: { symptoms: Symptoms[] }) => {
	const proModal = useProModal();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<null | PredictionResult>(null);

	if (loading) {
		return (
			<Dialog
				open={proModal.isOpen}
				onOpenChange={proModal.close}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
							<div className=' flex items-center gap-x-2 font-bold py-1'>
								Result is Loading
							</div>
						</DialogTitle>
						<DialogDescription className='text-center py-5  space-y-2 text-zinc-900 font-medium'>
							<Loader />
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
	}
	if (data) {
		return (
			<Dialog
				open={proModal.isOpen}
				onOpenChange={() => {
					setData(null);
					proModal.close();
				}}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
							<div className=' flex items-center gap-x-2 font-bold py-1'>
								Prediction Result
							</div>
						</DialogTitle>
						<DialogDescription className='text-center py-5  space-y-2 text-zinc-900 font-medium'>
							{data.matchingDiseases.length > 0 ? (
								<p>
									The disease predicted are{' '}
									{data.matchingDiseases.map((disease) => (
										<span>{disease.diseaseName}</span>
									))}
								</p>
							) : (
								<p>no matching disease</p>
							)}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Dialog
			open={proModal.isOpen}
			onOpenChange={proModal.close}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
						<div className=' flex items-center gap-x-2 font-bold py-1'>
							Predict Animal Diseases
						</div>
					</DialogTitle>
					<DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
						<SelectForm
							symptoms={symptoms}
							setData={setData}
							setLoading={setLoading}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
