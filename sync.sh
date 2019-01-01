aws s3 sync  \
  /Users/robcmills/src/vigtavl/  \
  s3://vigtavl.net  \
  --acl public-read \
  --exclude '*.DS_Store' \
  --exclude '*.log' \
  --exclude '*.sh' \
  --exclude '*.md' \
  --exclude '*.yml' \
  --exclude '*.gitignore' \
  --exclude '.git/*' \
  --exclude 'dockerfile' \
  --exclude 'stack/*' \
  --exclude '*node_modules*' \
  --exclude '*build*' \
  --exclude '*yarn.lock*'
 # --dryrun
