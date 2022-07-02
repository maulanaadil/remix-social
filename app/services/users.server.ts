import { hashPassword } from './auth-utils.server';
import { db } from './db.server';

export type { User } from '@prisma/client';

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
    select: {
      email: true,
      createdAt: true,
      id: true,
      name: true,
      role: true,
      updatedAt: true,
    },
  });
};

export const checkUserExists = async (email: string) => {
  return (await db.user.count({ where: { email } })) > 0;
};
