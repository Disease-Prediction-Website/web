import { Disease } from '@prisma/client';
import prismadb from './prismadb';

export type PredictionResult = {
	matchingDiseases: Disease[];
	mathingSymptom1: Disease[];
	mathingSymptom2: Disease[];
	symptom1: string;
	symptom2: string;
};

export const getSymptoms = async () => {
	const symptoms = await prismadb.symptoms.findMany();
	return symptoms;
};

// export const makePrediction: ({
// 	symptom1,
// 	symptom2,
// }: {
// 	symptom1: string;
// 	symptom2: string;
// 	}) => Promise<PredictionResult> = async ({ symptom1, symptom2 }) => {
// 	const result = await
	
// 	return 
// };

// // export const getDiseases
