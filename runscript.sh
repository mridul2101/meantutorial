git status
git add -A
git commit -m "git update"
git remote add origin https://github.com/mridul2101/meantutorial.git
git push -u origin master
heroku config:set NODE_ENV=production
git push heroku
heroku ps:scale web=1
heroku open
