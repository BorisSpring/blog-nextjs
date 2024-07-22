import { auth } from '@clerk/nextjs/server';
import prisma from '../prisma';

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) return null;

  return await prisma?.user.findFirst({ where: { clerkId: userId } });
};
