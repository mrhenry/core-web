set -e

go build && \
./browserstack-proxy & \
sleep 10 && \
cd ../../../packages/pages/ && \
npm run browserstack-runner
