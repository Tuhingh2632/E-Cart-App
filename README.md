# E-Cart App

Welcome to E-Cart, a React Native application designed to provide a seamless shopping experience right on your mobile device. This README file provides an overview of the app's features, architecture, and how to get started with the codebase.

## Features

- Screens Structure
  Welcome Screen: A simple introduction to the app with a welcoming message and logo.
  Home Screen: Divided into 5 sections including avatar and bell icons, greetings, search bar, categories, and products.
  Product Details Screen: Displays comprehensive product information such as title, price, discount, stock, description, and brand.
- API Integration
  Utilized the 'https://dummyjson.com' API to fetch and display data within the app.
- Navigation
  Implemented basic navigation features allowing seamless movement between screens.
- UI Components
  Utilized essential UI components like FlatList, TouchableOpacity, and TextInput to enhance user interaction.
- Code Quality
  Followed modular programming principles with a simple folder structure and reusable functional components to maintain code simplicity and readability.
- Creativity
  Added multiple transitions and styles to enhance the app's aesthetics and user-friendliness.
- Search Functionality
  Implemented search functionality using debouncing concepts to allow users to search for products efficiently.

## API Reference

#### Get all products

```http
https://dummyjson.com/products
```

#### Search products

```http
https://dummyjson.com/products/search?q=${query}
```

#### Get all categories

```http
https://api.escuelajs.co/api/v1/categories
```

## Installation

Install my-project with npm

```bash
  git clone https://github.com/Tuhingh2632/E-Cart-App.git
  npm install
  cd My-App
  npx expo start
```

## Documentation

### App Images

- Welcome Screen:

![alt text](<assets/App Images/WhatsApp Image 2024-05-02 at 15.31.15_a51eaf7e.jpg>)

- Home Screen:

![alt text](<assets/App Images/WhatsApp Image 2024-05-02 at 15.31.15_b06ea973.jpg>)

- Product Details Screen:

![alt text](<assets/App Images/WhatsApp Image 2024-05-02 at 15.31.15_6bfa50c9.jpg>)
