#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
echo 'kuberlogic.com' > CNAME

git config --global user.email "ntelepenin@cloudlinux.com"
git config --global user.name "ntelepenin"

git init
git add -A
git commit -m 'deploy [skip ci]'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kuberlogic/kuberlogic.com.git master:gh-pages

cd -