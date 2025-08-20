# 🎬 Movie Discovery App

A feature-rich React Native movie discovery application built with modern mobile development technologies. This app demonstrates proficiency in cross-platform mobile development, API integration, backend services, and contemporary UI/UX design principles.

## 🚀 Features

### Core Functionality
- **Movie Discovery**: Browse popular and trending movies with real-time data from The Movie Database (TMDB) API
- **Advanced Search**: Real-time movie search with debounced input and comprehensive filtering
- **Detailed Movie Information**: Complete movie details including ratings, budget, revenue, genres, and production companies
- **Trending Analytics**: Dynamic trending movies based on user search behavior and analytics
- **Cross-Platform Support**: Runs seamlessly on iOS, Android, and Web

### User Experience
- **Intuitive Navigation**: Bottom tab navigation with custom animated icons
- **Responsive Grid Layout**: Optimized movie card display with responsive design
- **Loading States**: Smooth loading indicators and error handling
- **Search Analytics**: Tracks search patterns to surface trending content

## 🛠️ Technical Stack

### Frontend
- **React Native 0.79.5** - Cross-platform mobile framework
- **Expo Router 5.1.4** - File-based routing with typed routes
- **TypeScript** - Type-safe development
- **NativeWind 4.1.23** - Tailwind CSS for React Native
- **React Native Reanimated** - Smooth animations and gestures

### Backend & Services
- **Appwrite** - Backend-as-a-Service for database and analytics
- **TMDB API** - Real-time movie data integration
- **Custom API Layer** - Abstracted API services with error handling

### Architecture & Patterns
- **Custom Hooks** - Reusable fetch logic with loading states
- **Component-Based Architecture** - Modular, reusable UI components
- **Type Safety** - Comprehensive TypeScript interfaces and type definitions
- **Environment Configuration** - Secure API key management

## 📱 App Structure

### Navigation & Screens
- **Home Tab**: Featured movies and trending content
- **Search Tab**: Real-time movie search with analytics tracking
- **Saved Tab**: Bookmark functionality (ready for implementation)
- **Profile Tab**: User profile section (ready for implementation)
- **Movie Details**: Comprehensive movie information page

### Key Components
- `MovieCard` - Reusable movie display component
- `SearchBar` - Debounced search input with real-time results
- `TrendingCard` - Featured movie carousel component
- Custom navigation with animated tab indicators

## 🔧 Technical Highlights

### Performance Optimizations
- **Debounced Search**: 1-second delay prevents excessive API calls
- **Lazy Loading**: Efficient data fetching with custom hooks
- **Image Optimization**: Optimized poster loading from TMDB CDN
- **Memory Management**: Proper component cleanup and state management

### Backend Integration
- **Search Analytics**: Tracks search terms and popular movies in Appwrite database
- **Trending Algorithm**: Dynamic trending content based on user search frequency
- **Error Handling**: Comprehensive error boundaries and user feedback

### Code Quality
- **ESLint Configuration**: Consistent code style and best practices
- **TypeScript Interfaces**: Type-safe data handling and API responses
- **Modular Architecture**: Separation of concerns with dedicated service layers
- **Environment Variables**: Secure configuration management

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- Expo CLI
- iOS Simulator / Android Emulator / Physical device

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file with your API keys
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on your preferred platform**
   - **iOS**: Press `i` or scan QR code with Camera app
   - **Android**: Press `a` or scan QR code with Expo Go app
   - **Web**: Press `w` to open in browser

## 📊 Project Metrics

- **Codebase**: ~15 TypeScript/TSX files
- **Components**: 3 reusable UI components
- **API Integration**: 2 external services (TMDB + Appwrite)
- **Platforms**: iOS, Android, Web support
- **Type Safety**: 100% TypeScript coverage

## 🎯 Development Approach

This project demonstrates:
- **Modern React Native Development** with latest Expo SDK
- **Professional Code Organization** with clear separation of concerns
- **Real-World API Integration** with proper error handling
- **Cross-Platform Compatibility** without platform-specific code
- **Performance-First Mindset** with optimized rendering and data fetching
- **Type-Safe Development** preventing runtime errors

## 🔮 Future Enhancements

- User authentication and personalized recommendations
- Offline support with local data caching
- Push notifications for new releases
- Social features and movie reviews
- Advanced filtering and sorting options
- Watchlist and rating functionality

---

**Built with** ❤️ **using React Native, TypeScript, and modern mobile development practices**
