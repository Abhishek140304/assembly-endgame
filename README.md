# 🎮 Assembly: Endgame

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black" />
</p>

<p align="center">
A fun and interactive word guessing game inspired by <b>Hangman</b>, where every wrong guess causes a programming language to be eliminated. Save the programming ecosystem before only Assembly remains!
</p>

---

# 🌐 Live Demo

🔗 **Play Here:** `assembly-endgame-word-guessing.vercel.app`


---

# 📖 Project Overview

**Assembly: Endgame** is a browser-based word guessing game built using **React** and **Vite**. The player has to guess a hidden word by selecting letters from an on-screen keyboard.

Each incorrect guess eliminates one programming language from the stack:

`HTML → CSS → JavaScript → React → TypeScript → Node.js → Python → Ruby → Assembly`

The objective is to guess the word before all languages are lost.

---

# ✨ Features

## 🎯 Interactive Word Guessing Gameplay
- Random word generation for every new game.
- Hidden letters are progressively revealed.
- Real-time game state updates.
- Immediate visual feedback after every guess.

---

## ⌨️ Virtual Keyboard
- Clickable on-screen keyboard.
- Already selected letters cannot be chosen again.
- Correct letters are highlighted.
- Wrong letters are displayed differently.

---

## 🧠 Dynamic Game Logic
- Tracks:
  - Correct guesses
  - Incorrect guesses
  - Remaining attempts
  - Win and lose conditions

---

## 💀 Programming Language Elimination System
Each wrong answer eliminates one language from the stack.

This creates a unique theme where the player tries to save the entire programming ecosystem from collapsing into Assembly.

---

## 😄 Dynamic Farewell Messages
Whenever a language is eliminated, the game displays humorous farewell messages, making gameplay more engaging.

---

## 🎉 Winning Celebration
- Confetti animation appears when the player wins.
- Displays a success message and allows the user to start a new game.

---

## ❌ Losing Scenario
- Reveals all hidden letters.
- Highlights missed letters.
- Displays a game-over message.

---

## 🔄 New Game Support
- Start a completely new game instantly.
- Generates another random word.
- Resets all states and progress.

---

## 📱 Fully Responsive UI
The application works smoothly on:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

---

# 🏗️ Tech Stack

## Frontend
- ⚛️ React 19
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🎨 CSS3

## Libraries Used

| Library | Purpose |
|----------|----------|
| React | Component-based UI |
| clsx | Conditional class handling |
| react-confetti | Winning animation |
| confetti | Confetti rendering |


---

# ⚙️ Installation and Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek140304/assembly-endgame.git
cd assembly-endgame
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start Development Server

```bash
npm run dev
```

Application will start on:

```text
http://localhost:5173
```

---

# 🎮 Game Flow

```text
Generate Random Word
          ↓
User Selects Letter
          ↓
Check Correct/Wrong Guess
          ↓
Update Game State
          ↓
Win or Lose
          ↓
Start New Game
```

---


# 🔮 Future Enhancements

- 🌍 Multiple difficulty levels
- 🏆 Scoreboard and high scores
- ⏱️ Timer mode
- 🎵 Sound effects
- 🌙 Dark mode
- 👥 Multiplayer support
- 📊 Statistics dashboard
- 🎯 Hint system
