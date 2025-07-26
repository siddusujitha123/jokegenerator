const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

let generate = async () => {
    const url = "https://official-joke-api.appspot.com/jokes/programming/random";
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        const setup = data[0].setup
        const punchLine = data[0].punchline

        text1.textContent = setup
        text2.textContent = punchLine
    }
}