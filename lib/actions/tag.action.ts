'use server';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';
import prisma from '../prisma';
import { currentProfile } from '../utils/currentProfile';

export async function addNewTag(params: AddOrUpdateTagParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { name } = params;

    if (!name) throw new Error('Mising  tag name!');

    await prisma.tag.create({
      data: {
        name,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateTag(params: AddOrUpdateTagParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { name, id } = params;

    if (!name || !id) throw new Error('Mising  required fields!');

    prisma.tag.update({
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

export async function deleteTag(params: DeleteTagParams) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { id } = params;

    if (!id) throw new Error('Missing tag id!');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findAllTags() {
  try {
    return await prisma.tag.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: { blogs: true },
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function findMost4PopularTags() {
  try {
    return await prisma.tag.findMany({
      select: {
        id: true,
        name: true,
      },
      take: 4,
      orderBy: {
        blogs: {
          _count: 'desc',
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function findAllTagsWithSortAndPaginate(
  params: findAllTagsWithSortAndPaginateParams
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return redirect('/sign-in');
    }
    if (profile.role === Role.GUEST) throw new Error('Unauthorized!');

    const { sortBy, page = 1 } = params;

    switch (sortBy) {
      case '':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;
      default:
        break;
    }

    const [count, tags] = await Promise.all([
      prisma.tag.count(),
      prisma.tag.findMany({
        select: {
          id: true,
          name: true,
          _count: {
            select: { blogs: true },
          },
        },
        take: 5,
        skip: (page - 1) * 5,
      }),
    ]);

    return { tags, count };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
