# Rick and Morty Characters Explorer

A modern React application that allows users to explore Rick and Morty characters, filter them by status, and manage their favorites. This project demonstrates state management using both Context API and Zustand store.

## 🚀 Features

- **Character Grid Display**: Browse all characters from the Rick and Morty API with a responsive card layout
- **Filter by Status**: Filter characters by their status (Alive, Dead, Unknown, or All)
- **Favorites System**: Add/remove characters to/from your favorites list
- **Favorites Sidebar**: Quick access to all your favorite characters
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth interactions

## 🛠️ Technologies Used

- **React 19.2.0**: Latest version of React for building the user interface
- **Vite 7.2.2**: Fast build tool and dev server
- **Zustand 5.0.8**: Lightweight state management library
- **Context API**: React's built-in state management for global state
- **Rick and Morty API**: External API for fetching character data
- **ESLint**: Code linting for maintaining code quality

## 📦 Project Structure

```
react5-V3/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx      # Individual character card component
│   │   ├── CharacterGrid.jsx      # Grid layout for characters
│   │   ├── FavoritesSidebar.jsx   # Sidebar showing favorite characters
│   │   ├── FilterBar.jsx          # Filter controls for characters
│   │   └── Header.jsx             # Application header
│   ├── context/
│   │   └── CharactersContext.jsx  # Context API provider for characters
│   ├── store/
│   │   └── useCharactersStore.js  # Zustand store (movies implementation)
│   ├── styles/
│   │   └── styles.css             # Global styles
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # App-specific styles
│   ├── index.css                  # Global CSS
│   └── main.jsx                   # Application entry point
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── eslint.config.js              # ESLint configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react5-V3
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) If using the movies store, create a `.env` file:
```bash
VITE_TMDB_API_KEY=your_api_key_here
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🧩 Key Components

### CharacterCard
Displays individual character information including:
- Character image
- Name
- Status
- Species
- Like/Unlike button

### CharacterGrid
Renders a grid of character cards with filtering applied.

### FilterBar
Provides buttons to filter characters by status:
- All
- Alive
- Dead
- Unknown

### FavoritesSidebar
Shows a list of all characters marked as favorites by the user.

## 📊 State Management

The project implements two state management approaches:

### Context API (`CharactersContext.jsx`)
- Manages character data from Rick and Morty API
- Handles liked characters
- Provides filtering functionality
- Exposes `useCharacters` hook for components

### Zustand Store (`useCharactersStore.js`)
- Alternative implementation for movies (TMDB API)
- Demonstrates Zustand's simplicity and performance
- Manages favorites, genres, and search functionality

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Reference

This project uses the [Rick and Morty API](https://rickandmortyapi.com/):
- Endpoint: `https://rickandmortyapi.com/api/character`
- No authentication required
- Returns character data including name, status, species, and images

## 🎨 Styling

The application uses custom CSS with:
- Responsive grid layout
- Modern card designs
- Smooth transitions and hover effects
- Mobile-first approach

## 📝 Future Enhancements

- [ ] Pagination for loading more characters
- [ ] Search functionality
- [ ] Character detail view
- [ ] Persistent favorites (localStorage)
- [ ] Loading states and error handling
- [ ] Unit and integration tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the character data
- [React](https://react.dev/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Zustand](https://github.com/pmndrs/zustand) for simple state management
