One time activity
npm install gh-pages --save-dev



Everytime do this for future changest to deployed to GH pages

1. always be on main branch
2. commit changes to main branch
3. npm run build-storybook
4. npm run deploy-storybook  (it will commit static build to gh-pages branch)
5. Your chanes will become live on gh-pages branch after 2-3 mins


Note: add storybook-static folder to gitignore , No need to commit it to main branch
You can see you changes at https://sarthakworks.github.io/storybook-components
