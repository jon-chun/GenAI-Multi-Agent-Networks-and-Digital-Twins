import random

def get_random_word():
    words = ["python", "hangman", "challenge", "programming", "development"]
    return random.choice(words)

def display_progress(word, guessed_letters):
    display = ''.join([letter if letter in guessed_letters else '_' for letter in word])
    return display

def hangman():
    word = get_random_word()
    guessed_letters = set()
    attempts_left = 6
    guessed_word = "_" * len(word)

    print("Welcome to Hangman!")
    print(f"The word has {len(word)} letters: {guessed_word}")

    while attempts_left > 0 and guessed_word != word:
        guess = input("Guess a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You have already guessed that letter. Try again.")
            continue

        guessed_letters.add(guess)

        if guess in word:
            print(f"Good guess! '{guess}' is in the word.")
        else:
            attempts_left -= 1
            print(f"Sorry, '{guess}' is not in the word. Attempts left: {attempts_left}")

        guessed_word = display_progress(word, guessed_letters)
        print(f"Word: {guessed_word}")
        print(f"Guessed letters: {', '.join(sorted(guessed_letters))}")

    if guessed_word == word:
        print(f"Congratulations! You guessed the word: {word}")
    else:
        print(f"Game over! The word was: {word}")

if __name__ == "__main__":
    hangman()