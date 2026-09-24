# 🎨 Color Scheme Generator

A simple and responsive Color Scheme Generator built with HTML, CSS, and JavaScript.  
Choose a base color, select a color scheme mode, and generate a 5-color palette using the Color API.

## 🚀 Features

- 🎨 Choose a custom base color
- 🎯 Select different color scheme modes
- 🌈 Generate a 5-color palette
- 🔢 Display the HEX value of each color
- 🖼️ Display the color preview returned by the API
- ⚡ Uses the Color API to generate color schemes
- 📱 Responsive layout

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- The Color API

## 📚 What I Practiced

This project helped me practice:

- DOM manipulation
- Event listeners
- `event.target`
- `fetch()`
- Working with APIs
- JSON data
- Promises and `.then()`
- `map()`
- Objects and arrays
- Template literals
- `dataset`
- Dynamic HTML rendering

## 🔄 How It Works

1. Select a color using the color picker.
2. Choose a color scheme mode.
3. Click **Get Color Scheme**.
4. JavaScript sends a request to the Color API.
5. The API returns a color scheme as JSON.
6. The required color information is extracted from the response.
7. JavaScript dynamically renders the colors and their HEX values on the page.

## 🎨 Available Color Modes

The project supports:

- Monochrome
- Monochrome Dark
- Monochrome Light
- Analogic
- Complement
- Analogic Complement
- Triad
- Quad

## 📁 Project Structure

```text
Color-Scheme-Generator/
│
├── index.html
├── index.css
├── index.js
└── README.md