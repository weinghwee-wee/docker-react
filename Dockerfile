# build phase
# install dependencies and build application
FROM node:16-alpine as builder

WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# the build artifact will be available a t usr/app/build

# run phase
FROM nginx
# copy something over from other phase
# other that the build directory, all other files from the builder phase are dumped
COPY --from=builder /usr/app/build /usr/share/nginx/html


 