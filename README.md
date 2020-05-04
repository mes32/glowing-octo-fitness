# glowing-octo-fitness
Fitness tracker

## Download and Run
```bash
# 1. Clone this repository
git clone https://github.com/mes32/glowing-octo-fitness.git

# 2. Setup local database
createdb glowing_octo_fitness
psql -E -f database_schema.sql -d glowing_octo_fitness
psql -E -f database_mockup.sql -d glowing_octo_fitness

# 3. Start the server
npm run server

# 4. Start the client
npm run client
```

## Deploying to Heroku
```bash
# 1. Initialize as Heroku project
heroku create <project-name>

# 2. Setup PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev
heroku pg:push glowing_octo_fitness DATABASE_URL

# 3. Push to Heroku
git push heroku master
```