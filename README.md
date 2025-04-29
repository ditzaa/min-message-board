# 💬 Mini Message Board
I built this project to apply the fundamentals of Node.js, Express, and EJS templating as introduced in The Odin Project curriculum. The goal is to create a simple yet functional message board where users can view messages, submit new ones, and see message details—all rendered server-side using EJS.

## Project Requirements
This project follows the specifications from The Odin Project curriculum. You can find the full requirements [here](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

The application provides the following functionalities:
- Three routes: a homepage (`/`) that lists messages, a form page (`/new`) to submit new ones and a message's details page (`/details`) to see aditional info about messages.
- A persistent in-memory array that stores messages with text, author, and timestamp.
- Server-side rendering using EJS.
- Basic Express routing and form handling using `express.urlencoded()` middleware.

## Clone the repository
```
git clone https://github.com/ditzaa/mini-message-board.git
cd mini-message-board
```

## Run the app
```
npm init
npm install express ejs
node --watch app.js
```
After that you can acces the application at `` https://localhost:3000 `` .
Make sure you have the lastest Node.js version installed on your machine.

## Contribute
If you’d like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push the branch (git push origin feature-branch).
5. Open a pull request.

Feedback and contributions are always welcome!
