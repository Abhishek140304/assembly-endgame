import Header from "./components/Header"
import { languages } from "./utilities/languages"
import { getFarewellText, getRandomWord } from "./utilities/utils"
import { useState } from "react"
import { clsx } from 'clsx'
import Confetti from 'react-confetti'

export default function App(){

    const [currWord, setCurrWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const wrongGuessCount = guessedLetters.filter(letter => !currWord.includes(letter)).length
    const isGameWon = currWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessIncorrect = lastGuessedLetter && !currWord.includes(lastGuessedLetter)

    const gameStatusClass = clsx({
        game_status: true,
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function addGuessedLetter(letter){
        setGuessedLetters(prev =>
            prev.includes(letter) ? prev : [...prev, letter]
        )
    }

    const languageElements = languages.map((lang, index) => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }

        const islost = index < wrongGuessCount

        const className = clsx({
            chip: true,
            lost: islost
        })

        return (
            <span style={styles} key={lang.name} className={className}>{lang.name}</span>
        )
    })

    const letterElements = currWord.split('').map((letter, index) => {
        const reveal = guessedLetters.includes(letter) || isGameOver

        const className = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )

        return (
            <span className={className} key={index}>{reveal ? letter.toUpperCase() : ""}</span>
        )
    })

    const keyElements = alphabet.split('').map((letter) => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currWord.includes(letter)
        const isWrong = isGuessed && !currWord.includes(letter)

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button 
                className={className}
                onClick={() => addGuessedLetter(letter)} 
                key={letter}
                disabled={isGameOver}
            >{letter.toUpperCase()}</button>
        )
    })

    function renderGameStatus(){
        if(!isGameOver && isLastGuessIncorrect){
            return (
                <p className="farewell-msg">{getFarewellText(languages[wrongGuessCount-1].name)}</p>
            )
        }

        else if(isGameLost){
            return (
                <>
                    <h2>Game Over!</h2>
                    <p>You Lose! Better start learning assembly😁</p>
                </>
            )
        }

        else if(isGameWon){
            return (
                <>
                    <h2>You Win!</h2>
                    <p>Well Done!🎉</p>
                </>
            )
        }
    }

    function resetGame(){
        setCurrWord(getRandomWord())
        setGuessedLetters([])
    }

    return (
        <>
            {isGameWon && <Confetti />}
            <Header />
            <main>
                <section className={gameStatusClass}>
                    {renderGameStatus()}
                </section>

                <section className="language-chips">
                    {languageElements}
                </section>

                <section className="word">
                    {letterElements}
                </section>

                <section className="keyboard">
                    {keyElements}
                </section>

                {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
            </main>
        </>
    )
}