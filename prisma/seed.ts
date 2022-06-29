import { PrismaClient } from '@prisma/client';
import postData from './dummy-data';

export type { Post } from '@prisma/client';

const prisma = new PrismaClient();

const load = async () => {
  console.log(`start seeding...`);
  for (const data of postData) {
    const post = await prisma.post.create({
      data: data,
    });
    console.log(`Created post with id ${post.id}`);
  }
  console.log(`Seeding finished`);
};

load()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
