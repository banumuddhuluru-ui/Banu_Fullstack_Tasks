# Module 4 - Task 3: Login Form Using State

## Objective

Create a React login form using state to manage username and password.

## Description

This React application demonstrates how to use the `useState()` hook to manage form input values and display a login message based on the entered details.

## Technologies Used

- React.js
- JavaScript
- JSX
- CSS

## Features

- Username input field.
- Password input field.
- Login button.
- State management using `useState()`.
- Displays "Login Successful" when both fields are entered.
- Displays "Please enter username and password" when either field is empty.

## React Concept Used

### State

The username and password are stored using React state.

```jsx
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
