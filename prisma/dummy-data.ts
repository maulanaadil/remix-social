import type { Prisma } from '@prisma/client';

const postData: Prisma.PostCreateInput[] = [
  {
    id: '1',
    title: 'First Post',
    body: 'Its really great!🥰',
    author: {
      create: {
        id: '1',
        name: 'Natasya',
        email: 'natasya@gmail.com',
        hashedPassword: 'password',
      },
    },
  },
  {
    id: '2',
    title: 'Second Post',
    body: 'Its really amazing!😁',
    author: {
      create: {
        id: '2',
        name: 'Eca',
        email: 'eca@gmail.com',
        hashedPassword: 'password',
      },
    },
  },
  {
    id: '3',
    title: 'Third Post',
    body: 'Its really absolutely great!😜',
    author: {
      create: {
        id: '3',
        name: 'Vasya',
        email: 'vasya@gmail.com',
        hashedPassword: 'password',
      },
    },
  },
  {
    id: '4',
    title: 'Fourth Post',
    body: 'Im really exited 😉!',
    author: {
      create: {
        id: '4',
        name: 'Sabad',
        email: 'sabad@gmail.com',
        hashedPassword: 'password',
      },
    },
  },
  {
    id: '5',
    title: 'Fifth Post',
    body: 'Really amazed 😸!',
    author: {
      create: {
        id: '5',
        name: 'Jennie',
        email: 'jennie@gmail.com',
        hashedPassword: 'password',
      },
    },
  },
];

export default postData;
