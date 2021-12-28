ARG NODE_VERSION=16.13-alpine3.12
ARG WORKDIR=/opt/app

# Install dependencies only when needed
FROM node:${NODE_VERSION} as dependencies
WORKDIR ${WORKDIR}
COPY package.json yarn.lock .
RUN yarn install --production --frozen-lockfile
# copy production node_modules aside (lower image size)
RUN cp -R node_modules prod_node_modules
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:${NODE_VERSION} as builder
WORKDIR ${WORKDIR}
COPY . .
COPY --from=dependencies ${WORKDIR}/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:${NODE_VERSION} as runner
WORKDIR ${WORKDIR}
COPY --from=builder ${WORKDIR}/next.config.js .
COPY --from=builder ${WORKDIR}/next-i18next.config.js .

COPY --from=builder ${WORKDIR}/public ./public
COPY --from=builder ${WORKDIR}/.next ./.next
COPY --from=dependencies ${WORKDIR}/prod_node_modules ./node_modules
COPY --from=builder ${WORKDIR}/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
