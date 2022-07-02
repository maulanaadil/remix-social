import { z } from 'zod';

export const CreatePost = z.object({
  title: z.string(),
  body: z.string().min(1),
});

export const CreateUser = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});
