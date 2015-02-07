git status
git add -A
git commit -m "git update"
heroku config:set NODE_ENV=production
git push heroku
heroku ps:scale web=1
heroku open
