# Add React to a Website

## Step 1: Add a DOM Container to the HTML 

First, open the HTML page you want to edit. Add an empty <div> tag to mark the spot where you want to display something with React. For example:
- `<div id="root"></div>`

## Step 2: Add the Script Tags to the HTML

Next, add <script> tags to the HTML page:

- `<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>`
- `<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>`


## Add JSX to a Project

Adding JSX to a project doesn’t require complicated tools like a bundler or a development server. Essentially, adding JSX is a lot like adding a CSS preprocessor. The only requirement is to have Node.js installed on your computer.

Go to your project folder in the terminal, and paste these two commands:

- Step 1: Run `npm init -y`
- Step 2: Run `npm install babel-cli@6 babel-preset-react-app@3`


    Tip

    We’re using npm here only to install the JSX preprocessor; you won’t need it for anything else. Both React and the application code can stay as <script> tags with no changes.

Congratulations! You just added a production-ready JSX setup to your project.

## Run JSX Preprocessor

Create a folder called src and run this terminal command:

- `npx babel --watch ./src --out-dir ./build --presets react-app/prod`


## You can download and run this demo

Go to your project folder in the terminal, and paste these two commands:

- Step 1: Run `npm init` (to install node_modules)
- Step 2: Run `npm start` 
- Step 3: Run Live Server extension