const testimonials = [
    {
        name: "-- Albert Einstein",
        ImageSrc: "images/albertEinstein.png",
        quote: "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    },
    {
        name: "-- Apj Abdul Kalam",
        ImageSrc: "images/apj.png",
        quote: "“To succeed in your mission, you must have single-minded devotion to your goal.”",
    },
    {
        name: "-- Christopher Nolan",
        ImageSrc: "images/christopherNolan.png",
        quote: "“You mustn’t be afraid to dream a little bigger, darling.”",
    },
    {
        name: "-- Confucius",
        ImageSrc: "images/concicus.png",
        quote: "“Life is really simple, but we insist on making it complicated.”",
    },
    {
        name: "-- Mahatma Gandhi",
        ImageSrc: "images/ghandi.png",
        quote: "“Be the change that you wish to see in the world.”",
    },
    {
        name: "-- John Lennon",
        ImageSrc: "images/johnLenon.png",
        quote: "“Being honest may not get you a lot of friends, but it’ll always get you the right ones.”",
    },
    {
        name: "-- Steve Jobs",
        ImageSrc: "images/steveJobs.png",
        quote: "“You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.”",
    }
];

const img = document.getElementById('images');
const text = document.getElementById('quotes');
const nameTag = document.getElementById('names');
let i = 0;
let timer;

updateWiseWords();

document.addEventListener(`keydown`,(event) => {
    if(event.key === "ArrowRight"){
        i = (i + 1) % testimonials.length;
        updateWiseWords();
    }
    else if (event.key === "ArrowLeft") {
        i = (i - 1 + testimonials.length) % testimonials.length;
        updateWiseWords();
    }
});

function updateWiseWords(){
    clearTimeout(timer);

    img.classList.remove(`show`)
    text.classList.remove(`show`)
    nameTag.classList.remove(`show`)

    setTimeout(() => {
    const { name: authorName, ImageSrc, quote } = testimonials[i];
    img.src = ImageSrc;
    text.innerHTML = quote;
    nameTag.innerHTML = authorName;

    img.classList.add('show');
    text.classList.add('show');
    nameTag.classList.add('show');

    i = (i + 1) % testimonials.length;

    timer = setTimeout(updateWiseWords, 10000);
}, 1000);
}