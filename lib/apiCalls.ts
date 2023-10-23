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

export const getDisease = async (id: string) => {
	const disease = await prismadb.disease.findUnique({ where: { id } });
	return disease;
};
