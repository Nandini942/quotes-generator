const quotes = [
    {
        quote:
        '“The purpose of our lives is to be happy.” ',
        author: " Dalai Lama"
    },
    {
        quote:
            '"Programmers are constantly making things more complicated than they need to be because future. Program for Today."',
        author: "David Heinemeier Hansson"
    },
    {
        quote:
        '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”',
        author: "Thomas A. Edison"
    },
    {
        quote: '“Never let the fear of striking out keep you from playing the game.”',
        author: "Babe Ruth"
    },
    {
        quote:
        '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”',
        author: " Steve Jobs"
    },
    {
        quote:
        '“Money and success don’t change people; they merely amplify what is already there.”',
        author: " Will Smith"
    },
    {
        quote:
        '“Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.”',
        author: " Celine Dion"
    },
    {
        quote:
            '"Programming is key concept who want to understand and must have interested of ourself."',
        author: " Code Express"
    }
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});
