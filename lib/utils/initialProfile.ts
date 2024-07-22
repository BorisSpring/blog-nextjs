import { auth, currentUser } from '@clerk/nextjs/server';
import prisma from '../prisma';

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) return auth().redirectToSignIn();

  let profile = await prisma.user.findFirst({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) {
    profile = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.emailAddresses[0].emailAddress,
        enabled: true,
      },
    });
  }

  return profile;
};
