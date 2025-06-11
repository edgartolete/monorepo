FROM node:20-bookworm as base

RUN export NODE_OPTIONS=--max_old_space_size=8192

RUN mkdir -p /app

COPY package.json package-lock.json tsconfig.json /app/

ENV RESEND_API_KEY=re_J1wf7oZE_6ctgQypBEHXLrdSqRDQjhX5J

ENV PROVIDER_EMAIL=info@tolete.dev

ENV RECIPIENT_EMAIL=edgartolete@outlook.com

WORKDIR /app

RUN npm install

FROM base as build

COPY . .

RUN npm run build

FROM base

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

EXPOSE 3000

CMD ["npm", "run", "start"]
