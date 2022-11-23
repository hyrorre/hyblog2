#!/bin/bash
cd `dirname $0`

npm run generate
rsync -acv --delete .output/public/ lolipop:~/web/www/
curl -X GET "https://www.google.com/ping?sitemap=https://hyrorre.com/sitemap.xml"
