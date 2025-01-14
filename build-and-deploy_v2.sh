# CONFIRM
echo ""
echo "----------- [$(date +'%d-%m-%Y %H:%M:%S')] -----------"
echo "Are you sure to build now?"
echo "IMPORTANT!!!!! checking if 'bundle exec jekyll build' OR 'jekyll build' works..."
echo "Press any key to continue (ESC key to quit)..."
echo ""
read -r -n1 key
if [[ $key == $'\e' ]];
then
exit
fi
# remove old _site
rm -rf _site
# build new version
# bundle exec jekyll build
jekyll build

echo "Built successfully! Press any key to deploy (ESC key to quit)..."
echo ""
read -r -n1 key
if [[ $key == $'\e' ]];
then
exit
fi

### S3 ###########
# aws s3 cp ./_site s3://donghd.com --recursive --acl public-read
# aws s3 sync ./_site s3://donghd.com --acl public-read

##################
### github: 10 minutes timeout, 100 GB per month, 10 builds per hour
# Usage (~7m): build 5m12s, deploy 1m46s, report 2s
# checkout master and get lastest
git checkout master
git pull origin master
# remove old version
find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
# copy new version
mv _site/* .
# rm -rf _site
# commit new version
git add -fA
git commit --allow-empty -m "$(date +'%d%m%Y')"
git push origin master
# Deployed successfully
echo ""
echo "----------- [$(date +'%d-%m-%Y %H:%M:%S')] Deployed successfully! -----------"
# checkout develop branch
echo "Press any key to checkout [develop] branch"
read -r -n1 key
git checkout develop
echo "Press any key to quit..."
read -r -n1 key
exit