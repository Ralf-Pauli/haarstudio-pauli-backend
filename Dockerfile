FROM node:18 as base
COPY . /app
WORKDIR /app
RUN npm i

FROM base as build
RUN npm i
RUN npm run build

FROM base
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
EXPOSE 1337
CMD [ "npm", "start" ]
