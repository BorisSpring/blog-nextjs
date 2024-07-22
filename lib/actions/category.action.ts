'use server';
import { redirect } from 'next/navigation';
import prisma from '../prisma';
import { currentProfile } from '../utils/currentProfile';
import { Role } from '@prisma/client';

export async function getAllCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createCategory(params: createCategoryOrUpdateParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { name } = params;

    if (!name) throw new Error('Missing category name!');

    return await prisma.category.create({
      data: {
        name,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateCategory(params: createCategoryOrUpdateParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { name, id } = params;

    if (!id) throw new Error('Missing category id!');
    if (!name) throw new Error('Missing category name!');

    return await prisma.category.updateMany({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteCategory(params: DeleteCategoryParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { id } = params;

    if (!id) throw new Error('Missing category id!');

    return await prisma.category.deleteMany({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findCategoryWithSortAndPaginate(
  params: findCategoryWithSortAndPaginateParams
) {
  try {
    const { page = 1, sortBy } = params;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
