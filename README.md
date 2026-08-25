# 🎬 Netflix Clone

A Netflix-inspired web application built with **React JSX** and **Vite**.
This project recreates the main visual structure of Netflix while practicing reusable React components, responsive design, CSS styling, and component-based development.

##  Technologies Used

* React.js
* JSX
* Vite
* CSS / CSS Modules
* React Icons
* JavaScript
* ESLint

##  Features

* Netflix-inspired user interface
* Responsive design
* Reusable React components
* Hero/Banner section
* Movie display rows
* Movie cards
* Image slideshow
* Navigation header
* Netflix-style footer
* Social media icons
* Component-based folder structure

## 📁 Project Structure

```text
NETFLIX/
│
├── public/
├── Resources/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── Banner/
│   │   ├── DisplayRow/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── MovieCard/
│   │   └── SlideShow/
│   │
│   ├── Data/
│   ├── Utility/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🧩 Main Components

### Header

Contains the main navigation and Netflix-style header elements.

### Banner

Displays the main featured content/hero section.

### DisplayRow

Displays groups of movies or shows in horizontal rows.

### MovieCard

Reusable component for displaying individual movie/show information.

### SlideShow

Handles the slideshow/carousel section of the application.

### Footer

Contains footer navigation links and social media icons.

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd NETFLIX
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL provided by Vite in your browser.

## 🔐 Environment Variables

Create a `.env` file in the project root and uses your own TMDB API key.

Example:

```env
VITE_API_KEY=your_api_key
```


## 🛠️ Build for Production

To create a production build:

```bash
npm run build
```

The production files will be generated inside the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

##  Purpose of the Project

This project was created to practice:

* React JSX
* Functional components
* Component reusability
* Props
* JavaScript
* CSS styling
* CSS Modules
* Responsive web design
* Project organization
* Working with external APIs
* Building a real-world UI from scratch

## 📸 Preview

```markdown
![Home Page Screenshot](https://raw.githubusercontent.com/Lexaze/netflix-clone/main/src/assets/image/NetFlix_Screenshot.png)
```

## ⚠️ Disclaimer

This project is a **personal educational project** inspired by the Netflix user interface.

It is not affiliated with, sponsored by, or endorsed by Netflix.

## Author

**Zelalem Mengistu**

Built with using React and Vite.
