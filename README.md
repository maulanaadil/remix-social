# Welcome to Remix Social!

- [Remix Docs](https://remix.run/docs)

## Requirements

- Prisma
- PlanetScale Account
- Yarn
- Mysql

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
yarn install
```

Afterwards, start the Remix development server like so:

```sh
yarn run dev
```

After install packages add `DATABASE_URL` of your `planet scale` on _`.env`_:

```env
DATABASE_URL=<your_URL>
```

Run planet scale

```
planetscale connect remix-social main --port 3309
```

Run prisma to generate and migrate the database

```
prisma generate
prisma migrate:db
```

Afterwards, run prisma studio to check the data

```
prisma studio
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!
