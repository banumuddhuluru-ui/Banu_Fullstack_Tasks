# Module 4 - Task 2: Student Marks Using Props and State

## Objective

Create a React application that demonstrates the use of props and state.

## Description

This application receives the student's name and subject using props. It uses React state to store the student's marks and provides buttons to increase and decrease the marks.

## Technologies Used

- React.js
- JavaScript
- JSX
- CSS

## Features

- Displays student name using props.
- Displays subject using props.
- Initial marks are set to 50.
- Increase Marks button.
- Decrease Marks button.
- Marks are updated dynamically using state.

## React Concepts Used

### Props

The student's name and subject are passed from `App.js` to the `StudentMarks` component.

```jsx
<StudentMarks
  name="Rahul"
  subject="Java"
/>
