# Food or Foe?

How many food emoji can you correctly identify in 30 seconds?

Each correct answer is worth 1 point. A wrong answer decreases your score by 1 point.

At the end of a round, add your name and score to the leaderboard!

Happy guessing!

## Installation

```
git clone https://github.com/scrabill/food-or-foe-react.git
```

To get the API up and running:

```
cd food-or-foe-react/backend
rails db:migrate
rails db:seed
rails s
```

And the frontend:

```
cd food-or-foe-react/frontend
npm install
npm start
```

To play, open `http://localhost:3006` in a browser.

## API Endpoints

Food or Foe? has three models, each of which can be accessed at the following endpoints.

- http://localhost:3000/api/v1/users
- http://localhost:3000/api/v1/games
- http://localhost:3000/api/v1/emojis
- http://localhost:3000/api/v1/emojis/food

## Contributing

Is this game missing your favorite emoji?

To contribute, please make a pull request with at least the name of the emoji, it's character and if it is a food or not to the backend/db/seeds.rb file.

Here's how I would add 🍔 (hamburger)

```ruby
Emoji.create(slug: "hamburger", character: "🍔", is_food?: true)
```

If you encounter any bugs or glitches while playing, please open an issue so that I can look into finding a fix.

## Misc

This is the React & Redux version of the Food or Foe? game [the Javascript version can be found here](https://github.com/scrabill/food-or-foe).
