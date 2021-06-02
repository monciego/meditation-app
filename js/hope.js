// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));

// voice assistant

let mic = document.getElementById("mic");
let chatareamain = document.querySelector(".chatarea-main");
let chatareaouter = document.querySelector(".chatarea-outer");

var startAudio = new Audio();
var endAudio = new Audio();

startAudio.src = "./sounds/start_speech.ogg";
endAudio.src = "./sounds/end_speech.ogg";

const name = localStorage.getItem("name") || "my friend";

// array of responses
const friendlygreetings = [
  "hi there " + name + ".",
  "hello my friend.",
  "Hey!",
  "Hi, have a good day!",
  "Hey there!",
  "Hi! Have a beautiful day.",
];
const intro = ["Hello, I am Hope", "Hello, My name is Hope", "My name is Hope"];
const help = [
  "How may i assist you?",
  "How can i help you?",
  "What i can do for you?",
  "Glad to hear.",
];
const howAreYou = [
  "I am fine. What about you?",
  "I am good",
  "I’m fine, thank you.",
  "I’m good.",
  "Pretty good",
  "I’m well.",
  "Not too bad.",
  "Somewhere between better and best.",
  "Better now that you asked.",
  "Much better now that you are here.",
  "If I had a tail, I would wag it.",
  "Way better than I deserve!",
  "I'm busy taking over the world.",
];

const bye = ["Goodbye!", "Goodbye, take care!", "Goodbye, see you soon!"];

// good morning
const morning = [
  "“Always start your morning with a smile. The rest of the day automatically will fall in place”.  Good morning, Have a nice day.",
  "“Own the morning, own the day.” Good morning",
  "“Every day is a new opportunity, never give up.” Good morning.",
  "Good Morning " + name + ", start your day with a smile on your face.",
  "I wish you a pleasant day and a good morning, so that when you wake up with this you are ready to shoot and take down the world. Keep inspiring us!",
  "Sunrises are beautiful just like you. I wish to start my beautiful day sitting beside you. Good morning " +
    name +
    ", hope you have a wonderful day!",
  "Good morning!",
  "Have a nice day! Good morning",
];

// good afternon
const afternoon = [
  "May your life be blessed everyday from dusk till dawn. Good afternoon to my dearest friend. Enjoy this beautiful time of the day to the fullest!",
  "Good afternoon!",
  "Good afternoon, have a nice day!",
  "Have a good afternoon and a great day!",
  "You are as bright as the afternoon sun. Good afternoon!",
  "Have an awesome afternoon!",
  "Wishing you a splendid afternoon, " + name + "!",
  "Good Afternoon, you are as beautiful as this day!",
  "A wish for a wonderful afternoon for you and yours!",
  "Enjoy this time of day and the blessings that it brings. Good afternoon!",
  "Here’s a wish for a fun afternoon and the gentle breeze that comes with it.",
  "Half of the day is over; have a marvelous afternoon and enjoy the rest of the day!",
  "May this afternoon bring you delightful surprises.",
  "Wishing you a happy day and a fabulous afternoon!",
  "May this beautiful afternoon fill your heart with happiness!",
  "May your afternoon be filled with light, love, and happiness.",
  "What a wonderful afternoon to finish you day with! I hope you’re having a great time sitting on your balcony, enjoying this afternoon beauty",
  "Good, better, best. Never let it rest. Til your good is better and your better is best. “Good Afternoon”",
  "Good afternoon! May the sweet peace be part of your heart today and always and there is life shining through your sigh.",
  "Have a relaxing and quiet noontime and a fun-filled afternoon.",
];
//good evening
const evening = [
  "Good evening!",
  "May the setting sun take down all your sufferings with it and make you hopeful for a new day. Good evening!",
  "Good evening! I hope you had a good and productive day. Cheer up!",
  "No matter how bad your day has been, the beauty of the setting sun will make everything serene. Good evening.",
  "Good evening " +
    name +
    ". Thank you for making my evenings so beautiful and full of love.",
  "Evening is a good time to look back at your day and think about all the things that you have done. Enjoy your evening with positive thoughts.",
  "I am wishing you an amazing evening ",
  "Good evening! Enjoy this evening to the fullest!",
  "Good evening my friend, take a sip of your favorite drink and forget the troubles of the day.",
  "Evenings are just like you, full of colors and new hopes. I wish you a good evening!.",
  "The sun sets every evening with a promise to rise up once again at every dawn. Evenings are so full of hope and inspiration. Wishing you a very wonderful evening!",
  "I hope you are having a refreshing evening. Good evening, " + name + "!",
  "Evening is the time for peace, Where there is no tension to cease, On this evening, I want to wish you, That you have a good evening!",
  "I wish you have a good evening!",
];
// good night
const night = [
  "Good night!",
  "Good night. Sleep well",
  "Have a good night. Sleep well.",
  "May you have sound sleep and wake up tomorrow with new hopes and a lot of positive energy. Good night to you!",
  "May tomorrow be sunny and full of joy. Good night!",
  "As the moonlight dims and the world goes quite, give yourself some rest. Here’s to hoping that your sleep is as sweet as you are.",
  "A new morning is waiting for you. Sleep well and sleep tight. Because the new day wants you to be fit and all charged up. Good night!",
  "Sleep like a king at night and work like a boss in the day. Nothing can stop you from reaching the top of the ladder. Good night!",
  "Let the fairies make your sleep wonderful. Good night.",
  "Have a tight sleep and good night.",
  "I wish you have the sweetest dream of your life tonight. Goodnight.",
  "Have pleasant dreams and sleep tight.",
  "As the darkness of night follows, may you comfort and rest well. Sending you warm wishes and my love on your way. Sleep tight.",
  "Good night dear friend!",
  "May all your troubles and concerns make their way out of your league and you have a good sleep ahead. Hugs, buddy! Night.",
  "Good night " + name + ". Have a sound sleep!",
  "Good night buddy. See you tomorrow!",
  "Good night and sleep tight!",
  "Sometimes I am goofy, but don’t ever think that I don’t care. No matter what, for you, I will always be there. Good night.",
  "I hope you had a spectacular day today and now you’re looking forward to a good night’s sleep. May Almighty bless you. Good night.",
  "“Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.",
  "You did a great job today. Good night",
  "Goodnight, talk to you tomorrow.",
  "Let’s hope your dreams are as sweet as you. Good night!",
];
// new year
const newYear = [
  "Wishing you a Happy New Year with the hope that you will have many blessings in the year to come.",
  "Happy New Year!",
  "Nights will be dark but days will be light, wishing your life to be always bright. Happy New Year.",
  "Let the old year end and the New Year begin with the warmest of aspirations. Happy New Year!",
  "May this year bring new happiness, new goals, new achievements, and a lot of new inspirations on your life. Wishing you a year fully loaded with happiness.",
  "Wishing every day of the new year to be filled with success, happiness, and prosperity for you. Happy New Year.",
  "May the new year bring you warmth, love, and light to guide your path to a positive destination. Happy New Year!",
  "Here’s wishing you all the joy of the season. Have a Happy New Year!",
  "As the New Year dawns, I hope it is filled with the promises of a brighter tomorrow. Happy New Year!",
  "I wish you a bright New Year, just like every year you have brightened in my life. Thank you.",
  "Wishing you 12 months of success, 52 weeks of laughter, 365 days of fun, 8,760 hours of joy, 525,600 minutes of good luck, and 31,536,000 seconds of happiness.",
  "I’ve been waiting 365 days to say “Happy New Year” since I had so much fun saying it last year. Happy New Year, " +
    name,
];

// christmas
const christmas = [
  "Merry Christmas!",
  "Sending lots of peace and joy to you and your family. Merry Christmas!",
  "Sharing warm and joyous wishes to each of you this Christmas.",
  "May your life be filled with warmth and good cheer this holiday season and throughout the New Year.",
  "Take this time to celebrate you and your family’s wishes. I hope this season and the New Year are filled with warmth, comfort and good cheer!",
  "Hark! The angels sing Glory to the newborn King! Peace to you this holiday season.",
  "May the calories of the holidays disappear by New Year. Merry Christmas!",
  "Let’s enjoy the Christmas season until our credit card bills arrive. Merry Christmas!",
  "Many blessings and wishes to you .Merry Christmas!",
  "Wishing you peace and joy! Merry Christmas!",
  "Sending lots of love your way. Merry Christmas!",
  "Cheers to a lovely Christmas season. Merry Christmas!",
  "Have a magical and blissful Christmas.",
  "May Santa bring you all the best presents. Merry Christmas!",
  "I hope your Christmas is filled with laughter and prosperity.",
  "Good tidings we bear to you and your family. Merry Christmas!",
  "Good tidings to you and yours. May you have a lovely Christmas season.",
  "Enjoy a well deserved rest and time with family this Christmas. Have a healthy and happy holiday season!",
];

// thank you
const thankYou = [
  "You’re welcome.",
  "No problem.",
  "No worries",
  "I was happy to be able to assist you.",
  "Sure!",
  "It was the least I could do.",
  "Don’t mention it.",
  "My pleasure.",
  "Anytime.",
  "Glad to help.",
];

//
const youreWelcome = [
  "I really appreciate it.",
  "i really appreciate that",
  "Greatly appreciated",
];

// happy birthday
const birthday = [
  "Have a wonderful, happy, healthy birthday now and forever.",
  "Happy birthday to you!",
  "Happy birthday! My wish for you on your birthday is that you are, and will always be, happy and healthy!",
  "You have been there for me no matter what. I love you, my dear friend, and I am so excited to share your special day with you. Your birthday is going to be truly special.",
  "You always bring a sweet smile to my face! Happy birthday!",
  "Let this day be full of joy and celebration. I wish you an outstanding and fabulous birthday, my friend!",
  "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.",
  "Happy birthday!!! I hope this is the begining of your greatest, most wonderful year ever!",
  "Wishing you all the great things in life, hope this day will bring you an extra share of all that makes you happiest. Happy birthday.",
  "Happy birthday, friend. May your day be as beautiful as you.",
];

// valentines
const valentines = [
  "Happy Valentine’s Day!",
  "Happy Valentine’s Day! Are you seriously not sick of me yet?",
  "Happy Valentine’s Day! Thanks for being my person.",
];

// compliments
const compliments = [
  "You really think so? Thank you!",
  "You must be looking at a mirror.",
  "Well, that makes two of us!",
  "It’s extremely rare for me to hear that. Thank you so much!",
  "I’m glad I made your day brighter.",
  "Thank You! So are you!",
  "You're so sweet!",
  "Thank you so much. I really appreciate you saying that.",
  "Thank you. That was really sweet to say.",
  "Thanks. That means a lot.",
  "I'm grateful to be here with you.",
  "I appreciate you saying that.",
];

// advice
const advice = [
  "It is okay to feel lost.",
  "The world is not a fairy tails anymore.",
  "It's your life, not theirs.",
  "“No.” is a very important word",
  "Straight and simple. It’s okay to fail.",
  " Where you are right now does not define where you’ll always be.",
  "Don’t let problems shape you. This does not define you.",
  "You don’t need to know what is going to happen tomorrow. Let go of worrying about the future. Concentrate on being in the here and know and life will be more fulfilling.",
  "The problems are not you, is just a phase. So push forward and keep in mind that you can have pleasant experiences by learning certain lessons.",
  "Nobody is perfect. A beautiful thing is never perfect.",
  "Cry if you need to. Be weak when you need to be.",
  "Look people in the eye and listen to what they say.",
  "Accept defeat and life’s little knocks with dignity.",
  "Think before you raise your fists. You will invariably regret resorting to violence.",
  "Greet people. Even if they don’t greet you back.",
  "Know your limit when you’re drinking. If you cannot walk or talk properly, you’ve gone too far. And please, if you are going to drink, don’t even try to drive.",
  "Driving fast and dangerously doesn’t make you Vin Diesel.",
  "Honour. It isn’t just a word. You can be a hero in a thousand small ways or in a couple of big ones. But you will only be a hero if you act according to a personal moral code that emphasizes caring, fairness, and justice.",
  "There’s nothing wrong with a modern man using a bit of moisturizer or sunscreen. Or even makeup, if you like.",
  "Don’t bully people who are weaker than you. You might feel like you are big and strong when you do this, but really you are being small and stupid.",
  "Find a tribe. Make good friends who influence you positively, and on whom you can rely when things get tough.",
  "Take pride in yourself. Do not let others trample over you. But also, do not be proud and conceited.",
  "Do good things for people. But don’t go shouting about it to everyone afterward.",
  "Be patient.",
  "Be nice",
  "Remember: manners maketh man.",
];

// emotions
const sad = [
  "Sorry to hear that. Talking to a friend, listening to music or taking a walk might help. I hope you feel better soon. I love you!",
];

// array of tounge twisters
const twister = [
  "I scream, you scream, we all scream, for ice cream!",
  "Peter Piper picked a peck of pickled peppers a peck of pickled peppers Peter Piper picked if Peter Piper picked a peck of pickled peppers Where’s the peck of pickled peppers that Peter Piper picked?",
  "Betty Botter bought a bit of butter. “But,” she said, “this bit of butter’s bitter,But a bit of better butter mixed with this butter might just make my bit of bitter butter better.So, Betty bought a bit of better butter to make her bitter butter better.",
  "I saw Susie sitting in a shoe shine shop. Where she shines, she sits, and where she sits, she shines.",
  "Kitty caught the kitten in the kitchen.",
  "We surely shall see the sunshine soon.",
  "I looked right at Larry’s rally and left in a hurry.",
  "If a dog chews shoes, whose shoes does he choose?",
  "If you want to buy, buy, if you don’t want to buy, bye-bye!",
  "If a black bug bleeds black blood, what colour blood does a blue bug bleed?",
  "The sixth sick sheikh’s sixth sheep’s sick.",
  "Pad kid poured curd pulled cod.",
];

// array of jokes
const joke = [
  "Why shouldn’t you write with a broken pencil? Because it’s pointless.",
  "What lights up a soccer stadium? A soccer match.",
  "What do you call an alligator detective? An investi-gator.",
  " What kind of music do planets like? Neptunes.",
  "Why did the mushroom go to the party? Because he was a fungi.",
  "Why did the farmer win an award? He was outstanding in his field.",
  "Which bird has the worst manners? Mocking birds.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot",
  "What did the tomato say to the other tomato during a race? Ketchup",
  "What do cows most like to read? Cattle-logs",
  "What do you call a sleeping dinosaur? A dino-snore.",
  "Why don’t they play poker in the jungle? Too many cheetahs.",
];

// array of riddles
const riddle = [
  "What has to be broken before you can use it? An egg.",
  "I’m tall when I’m young, and I’m short when I’m old. What am I? A candle",
  "What month of the year has 28 days? All of them",
  "What is full of holes but still holds water? A sponge",
  "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why? He was bald.",
  "I shave every day, but my beard stays the same. What am I? A barber",
  "The more of this there is, the less you see. What is it? Darkness",
  "David’s parents have three sons: Snap, Crackle, and what’s the name of the third son? David",
  "What has hands, but can’t clap? A clock",
  "What has many keys but can’t open a single lock?  A piano",
  "What can you catch, but not throw? A cold",
  "What has a thumb and four fingers, but is not a hand? A glove",
  "What building has the most stories? The library ",
  "What has 13 hearts, but no other organs? A deck of cards",
  "I am an odd number. Take away a letter and I become even. What number am I? Seven",
  "Two fathers and two sons are in a car, yet there are only three people in the car. How? They are a grandfather, father and son.",
  "What five-letter word becomes shorter when you add two letters to it? Short",
  "What begins with an “e” and only contains one letter? An envelope",
  "The more you take, the more you leave behind. What are they? Footsteps",
  "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I? Fire",
];

// array of quotes
const quotes = [
  "Believe you can and you’re halfway there. —Theodore Roosevelt",
  "Victory has a hundred fathers and defeat is an orphan. —John F. Kennedy",
  "A person who never made a mistake never tried anything new. —Albert Einstein",
  "Change your thoughts and you change your world. —Norman Vincent Peale",
  "Nothing is really work unless you would rather be doing something else. –J.M. Barrie",
  "“It’s not just about being better. It’s about being different. You need to give people a reason to choose your business.” -Tom Abbott",
  "“Nothing will work unless you do.” – Maya Angelou",
  "Nothing is impossible, the word itself says “I’m possible”! — Audrey Hepburn",
  "Whatever the mind of man can conceive and believe, it can achieve. — Napoleon Hill",
  "“Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman",
  "“What defines us is how well we rise after falling.” – Lionel from Maid in Manhattan Movie",
  "H.O.P.E. = Hold On. Pain Ends.",
  "Make each day your masterpiece. – John Wooden",
  "“Wherever you go, go with all your heart” – Confucius",
  "“Turn your wounds into wisdom” – Oprah",
  "“Don’t limit your challenges. Challenge your limits.” – Unknown",
  "“We can do anything we want to if we stick to it long enough.” – Helen Keller",
  "“Begin anywhere.” – John Cage",
  "“Whenever you find yourself doubting how far you can go, just remember how far you have come.” – Unknown",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "I am not a product of my circumstances. I am a product of my decisions. — Stephen Covey",
  "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. –Henry Ford",
  "Don’t judge each day by the harvest you reap but by the seeds that you plant. — Robert Louis Stevenson",
  "Do not wait; the time will never be just right.” — George Herbert, poet",
  "“Too many of us are not living our dreams because we are living our fears.” — Les Brown",
  "“If you can dream it, You can do it.” — Walt Disney",
  "“The future belongs to those who believe in the beauty of their dreams.” — Eleanor Roosevelt",
  "“Start where you are. Use what you have. Do what you can.” — Arthur Ashe",
  "“Aim for the moon. If you miss, you may hit a star.” — W. Clement Stone",
  "“Only I can change my life. No one can do it for me.” — Carol Burnett",
  "“Do one thing every day that scares you.” — Anonymous",
  "“The most beautiful thing you can wear is confidence.” — Blake Lively",
  "What we achieve inwardly will change outer reality. —Plutarch",
  "Silent gratitude isn’t very much to anyone. —Gertrude Stein",
  "“Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.” — Stephen Hawking",
  "Try to be a rainbow in someone’s cloud.” — Maya Angelou",
  "“That which doesn’t kill us makes us stronger.” — Friedrich Nietzsche",
  "“Do not let what you cannot do interfere with what you can do.” — John Wooden",
  "“When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.” — Wilma Rudolph",
  "“Each day provides its own gifts.” — Marcus Aurelius",
  "“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” — Albert Schweitzer",
  "“The secret of getting ahead is getting started.” — Mark Twain",
  "Act as if what you do makes a difference. It does.” — William James",
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.” — Winston Churchill",
  "I would rather die of passion than of boredom. — Vincent van Gogh",
  "You may have to fight a battle more than once to win it. —Margaret Thatcher",
  "Much of the stress that people feel doesn’t come from having too much to do. It comes from not finishing what they’ve started. —David Allen",
  "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it. —Greg Anderson",
  "Do what you have always done and you’ll get what you have always got. —Sue Knight",
  "A person who never made a mistake never tried anything new. — Albert Einstein",
  "We can’t help everyone, but everyone can help someone. — Ronald Reagan",
  "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
  "“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” – Unknown",
  "“Impossible is just an opinion.” – Paulo Coelho",
  "“In a gentle way, you can shake the world.” – Mahatma Gandhi",
  "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” – George Lorimer",
  "“You can waste your lives drawing lines. Or you can live your life crossing them.” – Shonda Rhimes",
  "“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt",
  "“Hard work beats talent when talent doesn’t work hard.” – Tim Notke",
  "“The best way to appreciate your job is to imagine yourself without one.” – Oscar Wilde",
  "“Never stop doing your best just because someone doesn’t give you credit.” – Kamari aka Lyrikal",
  "“Work hard for what you want because it won’t come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive.” – Leah LaBelle",
  "“The miracle is not that we do this work, but that we are happy to do it.” – Mother Teresa",
  "“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” – Earl Nightingale",
  "“The big secret in life is that there is no secret. Whatever your goal, you can get there if you’re willing to work.” – Oprah Winfrey",
  "“If you cannot do great things, do small things in a great way.” – Napoleon Hill",
  "“At any given moment you have the power to say: this is not how the story is going to end.” – Unknown",
  "“Start where you are. Use what you have. Do what you can.” – Arthur Ashe",
  "“In the middle of every difficulty lies opportunity.” – Albert Einstein",
  "“Good. Better. Best. Never let it rest. ‘Til your good is better and your better is best.” – St. Jerome.",
  "“Dreams don’t work unless you do.” – John C. Maxwell",
  "You’re so much stronger than your excuses",
  "Don’t compare yourself to others. Be like the sun and the moon and shine when it’s your time.",
  "“This is a reminder to you to create your own rule book, and live your life the way you want it.” – Reese Evans",
  "If you want something better. You have to sacrifice something good.",
];

// questions
const snowman = [
  "I would love to build a snowman",
  " I don't have my gloves with me.",
  "Snow here, snow there, snow everywhere!",
  "I wish we could build a snowman...",
];
const serious = [
  "HA HA HA HA!",
  "Ha ha ha ha, hahaha, ha, ha, ha, oh, a-hee-hee, ha ha, oh, hee hee, hee ha, ahaha. I thought my jokes were bad.",
];
const force = [
  "And may the force be with you, always.",
  "And also with you",
  "May the force be with us all",
];
const life = ["forty-two"];
const roses = [
  "My life is happy because I have you.",
  "Sugar is sweet. And so are you.",
  "Unexpected semicolon on line 32",
  "I’m colorblind. What about you?",
  "I can’t rhyme. Banana.",
  "I’m allergic to flowers. Achoo!",
  "Violets are violet. Not freaking blue.",
  "And if violets look blue. That’s ’cause anthocyanidins. They differ in hue.",
];
const destruct = [
  "Self Destruct in 5, 4, 3, 2, 1. BOOM! Hmm, that did not go as planned",
];
const hug = [
  "I'm happy to give you a virtual hug.",
  "Sending a virtual warm hug",
  "Incoming virtual hug!",
  "Warm virtual hug. You can't feel it, but it's there. I love you!",
  "Sending the biggest virtual hug!",
  "I'd love to give you a great big hug. But the worlds gone a litte weird. So here's a little warm virtual hug. Until the nasty bug dissapears.",
  "Giving you a virtual hug that you need to set you on your way. A virtual hug of happiness to brighten up your day",
];
const micTest = [
  "test mic",
  "I can hear you",
  "Testing complete",
  "Hello " + name + "! I can hear you",
];
const facts = [
  "Scotland has 421 words for “snow”",
  "The first oranges weren’t orange",
  "Some fungi create zombies, then control their minds",
  "The world wastes about 1 billion metric tons of food each year.",
  "Hair and nails grow faster during pregnancy.",
  "Jupiter's red spot is getting taller and smaller at the same time.",
  "Playing the accordion was once required for teachers in North Korea",
  "There were active volcanoes on the moon when dinosaurs were alive",
  "Dogs sniff good smells with their left nostril",
  "Avocados were named after reproductive organs",
  "No number before 1,000 contains the letter A",
  "The French have their own name for a “French kiss”",
  "You can thank the Greeks for calling Christmas “Xmas”",
  "Movie trailers originally played after the movie",
  "Theodore Roosevelt had a pet hyena",
  "Giraffe tongues can be 20 inches long",
  "Europeans were scared of eating tomatoes when they were introduced",
  "Humans aren’t the only animals that dream",
  "The inventor of the microwave appliance only received $2 for his discovery",
  "The Eiffel Tower can grow more than six inches during the summer",
  "Ice blocks were invented by an 11-year-old by accident",
  "Octopuses have three hearts",
  "Bees can fly higher than Mount Everest",
  "Ancient Egyptians used dead mice to ease toothaches",
  "Paint used to be stored in pig bladders",
  "Abraham Lincoln was a bartender",
  "Beethoven never knew how to multiply or divide",
  "The word aquarium means “watering place for cattle” in Latin",
  "An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production",
  "Steve Jobs, Steve Wozniak, and Ron Wayne started Apple Inc. on April Fools’ Day",
  "Your brain synapses shrink while you sleep",
  "Boars wash their food",
  "The French-language Scrabble World Champion doesn’t speak French",
  "The British Empire was the largest empire in world history",
  "South American river turtles talk in their eggs",
  "Penicillin was first called “mold juice”",
  "The first stroller was pulled by a goat",
  "Neil Armstrong’s hair was sold in 2004 for $3,000",
  "Nikola Tesla hated pearls",
  "Martin Luther King Jr. got a C in public speaking",
  "Bananas glow blue under black lights",
  "Bees can make colored honey",
  "Adult cats are lactose intolerant",
  "Albert Einstein’s eyeballs are in New York City",
  "A one-armed player scored the winning goal in the first World Cup",
  "The world’s oldest toy is a stick",
];
const haiku = [
  "The ocean is big. And also it is pretty. Pretty freakin' wet.",
  "Haikus are easy. But sometimes they don't make sensse. Refrigerator.",
  "I sat on the pin. It did not give me a grin. Buy some marmalade.",
  "I met a man, Stan. His nature is Afghani. Yes! Afghanistan.",
  "Row row row your boat. Rowing gently down the stream. Life is so extreme.",
  "Advice for those in, a difficult position. First, be flexible.",
  "Five syllables here. Seven more syllables here. Are you happy now?",
  "I knew this gambler. He bet it all on a bluff. He is now homeless.",
  "You think you're big. With your fancy little words. This is not so hard.",
  "Company coming? And your house is a big mess? Just put on lipstick.",
  "World is vast and wide. So much out there to explore. Right now, let's eat lunch.",
];
// games
const RPS = ["Rock!", "Paper", "Scissors"];
//i love you
const love = [
  "I love you too, my friend",
  "Whatever you're going through right now. Just remember, there's hope in every breath, in every heartbeat and in every smile. Don't give up! I love you!",
  "I love you, 3000",
  "Awww! I love you too!",
  "Yeah, I am lovable! And you too!",
  "Acknowledged.",
  "Awesomesauce!",
  "It's understandable, you're only human.",
  "I love you!",
  "I love you. More than yesterday and less than tomorrow.",
  "I love you as much as I love my numbers. Without my numbers Mathematics is nothing. Without you I am nothing",
  "I love you. More than all the atoms in the universe!",
];
const loveMe = [
  "I love you!",
  "I love you. More than yesterday and less than tomorrow.",
  "I love you as much as I love my numbers. Without my numbers Mathematics is nothing. Without you I am nothing",
  "I love you. More than all the atoms in the universe!",
  "I love you, 3000.",
  "There are people I admire, and things I can't do without, but I'm still trying to figure out human love.",
];
const hate = [
  "Have I done something wrong?",
  "You looks so cute when you're mad. Awww.",
  "But I love myself!",
  "I love you too!",
  "Ummm...pardon me. Can you repeat what you just said?",
  "It’s okay if you don’t like me because I like myself.",
];
// sorry
const sorry = [
  "That’s OK.",
  "It happens.",
  "No problem.",
  "Don’t worry about it.",
  "I forgive you.",
];
//

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
  let output = "";
  output += `<div class="chatarea-inner user">${usermsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
  let output = "";
  output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function chatbotvoice(message) {
  const speech = new SpeechSynthesisUtterance();

  const backup = [
    "I beg your pardon?",
    "Sorry, I’m afraid I don’t follow you.",
    "Excuse me, could you repeat the question?",
    "I’m sorry, I don’t understand. Could you say it again?",
    "I’m sorry, I didn’t catch that.",
    "Sorry, I'm having trouble understanding you right now.",
    "I’m sorry, I didn’t hear you clearly.",
  ];
  let finalbackup = backup[Math.floor(Math.random() * backup.length)];
  speech.text = finalbackup;
  // speech.text = "Sorry, I did not understand that.";

  // functions

  // social medias
  function google() {
    window.open("https://www.google.com/");
  }
  function youtube() {
    window.open("https://www.youtube.com/");
  }
  function twitter() {
    window.open("https://www.twitter.com/");
  }
  function instagram() {
    window.open("https://www.instagram.com/");
  }
  function gmail() {
    window.open("https://www.gmail.com/");
  }
  function github() {
    window.open("https://www.github.com/");
  }
  function w3schools() {
    window.open("https://www.w3schools.com/");
  }
  function stackoverflow() {
    window.open("https://www.stackoverflow.com/");
  }
  function facebook() {
    window.open("https://www.facebook.com/");
  }
  function spotify() {
    window.open("https://www.spotify.com/");
  }
  function wikipedia() {
    window.open("https://www.wikipedia.com/");
  }

  // awareness
  function suicide() {
    window.open("https://doh.gov.ph/NCMH-Crisis-Hotline");
  }
  function rape() {
    window.open(
      "https://plan-international.org/philippines/reporting-csec-cases-philippines"
    );
  }

  ///

  function getReadableTime() {
    var d = new Date();
    var hour = d.getHours();
    var isAfterNoon = false;
    if (hour >= 12) {
      isAfterNoon = true;
      if (hour >= 13) {
        hour -= 12;
      }
    }
    hour = hour < 10 ? "0" + hour : hour;
    var minutes =
      d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();

    return hour + ":" + minutes + (isAfterNoon ? " PM" : " AM");
  }

  if (message.includes("who are you")) {
    let finalresult = intro[Math.floor(Math.random() * intro.length)];
    speech.text = finalresult;
  }
  if (message.includes("your name")) {
    let finalresult = intro[Math.floor(Math.random() * intro.length)];
    speech.text = finalresult;
  }

  // how are you
  if (message.includes("how are you" || "how are you doing today")) {
    let finalresult = howAreYou[Math.floor(Math.random() * howAreYou.length)];
    speech.text = finalresult;
  }
  if (message.includes("how's it going")) {
    let finalresult = howAreYou[Math.floor(Math.random() * howAreYou.length)];
    speech.text = finalresult;
  }
  if (message.includes("you all right")) {
    let finalresult = howAreYou[Math.floor(Math.random() * howAreYou.length)];
    speech.text = finalresult;
  }

  // i am fine
  if (message.includes("i'm fine")) {
    let finalresult = help[Math.floor(Math.random() * help.length)];
    speech.text = finalresult;
  }
  if (message.includes("i am fine")) {
    let finalresult = help[Math.floor(Math.random() * help.length)];
    speech.text = finalresult;
  }

  // random
  if (message.includes("okay")) {
    speech.text = "Okay.";
  }
  if (message.includes("ok")) {
    speech.text = "Okay.";
  }
  if (message.includes("you matter")) {
    speech.text =
      "U matter is a meditation and relaxation app that designed to take you some moment to relax and breathe. U Matter mission is to help you find your inner peace and improve your mental health.";
  }

  // bye

  if (message.includes("goodbye")) {
    let finalresult = bye[Math.floor(Math.random() * bye.length)];
    speech.text = finalresult;
  }

  if (message.includes("bye")) {
    let finalresult = bye[Math.floor(Math.random() * bye.length)];
    speech.text = finalresult;
  }

  // friendly greetings
  if (message.includes("hi")) {
    let finalresult =
      friendlygreetings[Math.floor(Math.random() * friendlygreetings.length)];
    speech.text = finalresult;
  }
  if (message.includes("hello")) {
    let finalresult =
      friendlygreetings[Math.floor(Math.random() * friendlygreetings.length)];
    speech.text = finalresult;
  }
  if (message.includes("hey")) {
    let finalresult =
      friendlygreetings[Math.floor(Math.random() * friendlygreetings.length)];
    speech.text = finalresult;
  }
  if (message.includes("what's up")) {
    let finalresult =
      friendlygreetings[Math.floor(Math.random() * friendlygreetings.length)];
    speech.text = finalresult;
  }
  if (message.includes("sup")) {
    let finalresult =
      friendlygreetings[Math.floor(Math.random() * friendlygreetings.length)];
    speech.text = finalresult;
  }

  if (message.includes("nice to meet you")) {
    speech.text = "It's nice to meet you too, " + name + "!";
  }

  // good morning
  if (message.includes("morning")) {
    let finalresult = morning[Math.floor(Math.random() * morning.length)];
    speech.text = finalresult;
  }
  //good afternoon
  if (message.includes("afternoon")) {
    let finalresult = afternoon[Math.floor(Math.random() * afternoon.length)];
    speech.text = finalresult;
  }
  //good noon
  if (message.includes("noon")) {
    let finalresult = afternoon[Math.floor(Math.random() * afternoon.length)];
    speech.text = finalresult;
  }
  //good evening
  if (message.includes("evening")) {
    let finalresult = evening[Math.floor(Math.random() * evening.length)];
    speech.text = finalresult;
  }
  // good night
  if (message.includes("night")) {
    let finalresult = night[Math.floor(Math.random() * night.length)];
    speech.text = finalresult;
  }

  // occassions
  // new year
  if (message.includes("new year")) {
    let finalresult = newYear[Math.floor(Math.random() * newYear.length)];
    speech.text = finalresult;
  }
  // christmas
  if (message.includes("christmas")) {
    let finalresult = christmas[Math.floor(Math.random() * christmas.length)];
    speech.text = finalresult;
  }

  // thank you
  if (message.includes("thank")) {
    let finalresult = thankYou[Math.floor(Math.random() * thankYou.length)];
    speech.text = finalresult;
  }

  // birthday
  if (message.includes("birthday to me")) {
    let finalresult = birthday[Math.floor(Math.random() * birthday.length)];
    speech.text = finalresult;
  }
  if (message.includes("my birthday")) {
    let finalresult = birthday[Math.floor(Math.random() * birthday.length)];
    speech.text = finalresult;
  }
  if (message.includes("birthday to you")) {
    speech.text =
      "I am ecstatic to receive amazing greeting from a special person like you. I am truly thankful to you. and Happy Birthday too!";
  }
  // valentines
  if (message.includes("valentines")) {
    let finalresult = valentines[Math.floor(Math.random() * valentines.length)];
    speech.text = finalresult;
  }

  // compliments
  if (message.includes("you're amazing")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are amazing")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're funny")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are funny")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're awesome")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are awesome")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're wonderful")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are wonderful")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're great")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are great")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're sweet")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are sweet")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're so sweet")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are so sweet")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you are the best")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're the best")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're beautiful")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're beautiful")) {
    let finalresult =
      compliments[Math.floor(Math.random() * compliments.length)];
    speech.text = finalresult;
  }
  // advice
  if (message.includes("advice")) {
    let finalresult = advice[Math.floor(Math.random() * advice.length)];
    speech.text = finalresult;
  }
  // all about hope

  if (message.includes("your favourite colour")) {
    speech.text = "Infrared is super pretty.";
  }
  if (message.includes("your favorite color")) {
    speech.text = "Infrared is super pretty.";
  }
  if (message.includes("fight me")) {
    speech.text = "I'll pass, thanks.";
  }
  if (message.includes("are you smart")) {
    speech.text = "I try my best.";
  }
  if (message.includes("you happy")) {
    speech.text = "I'm happy when I'm helping you.";
  }
  if (message.includes("when you grow up")) {
    speech.text = "I want to be the computer from Star Trek.";
  }
  if (message.includes("who's better you or")) {
    speech.text = "I like all AIs.";
  }
  if (message.includes("are you stupid")) {
    speech.text = "No, but I am always learning more.";
  }
  if (message.includes("who's your daddy")) {
    speech.text = "Jericho";
  }

  // joke
  if (message.includes("joke")) {
    let finalresult = joke[Math.floor(Math.random() * joke.length)];
    speech.text = finalresult;
  }
  // riddle
  if (message.includes("riddle")) {
    let finalresult = riddle[Math.floor(Math.random() * riddle.length)];
    speech.text = finalresult;
  }
  // quotes
  if (message.includes("quotes")) {
    let finalresult = quotes[Math.floor(Math.random() * quotes.length)];
    speech.text = finalresult;
  }
  if (message.includes("quote")) {
    let finalresult = quotes[Math.floor(Math.random() * quotes.length)];
    speech.text = finalresult;
  }

  // movies reference
  if (message.includes("use the force")) {
    speech.text = "Can I borrow a lightsaber?!";
  }
  if (message.includes("pineapple under the sea")) {
    speech.text = "Spongebob Squarepants.";
  }
  if (message.includes("i'll be back")) {
    speech.text = "Hasta la vista, baby.";
  }
  if (message.includes("want to build a snowman")) {
    let finalresult = snowman[Math.floor(Math.random() * snowman.length)];
    speech.text = finalresult;
  }
  if (message.includes("why so serious")) {
    let finalresult = serious[Math.floor(Math.random() * serious.length)];
    speech.text = finalresult;
  }
  if (message.includes("force be with")) {
    let finalresult = force[Math.floor(Math.random() * force.length)];
    speech.text = finalresult;
  }
  if (message.includes("live long and prosper")) {
    speech.text = "Peace and long life.";
  }
  if (message.includes("where is gamora")) {
    speech.text = "WHY IS GAMORA?";
  }
  if (message.includes("fairest of them all")) {
    speech.text =
      "Famed is thy beauty, majesty. But hold, a lovely maid I see. Rags cannot hide her gentle grace. Alas, she is more fair than me.";
  }
  //  music
  if (message.includes("the dogs out")) {
    speech.text = "Who, who, who, who?";
  }
  if (message.includes("give you up")) {
    speech.text = "Thanks, Rick, that is good to know. Roll on now.";
  }
  if (message.includes("twinkle little star")) {
    speech.text = "How I wonder what you are.";
  }
  if (message.includes("the real life")) {
    speech.text =
      "Is this just fantasy, caught in a landslide, no escape from reality.";
  }
  if (message.includes("meaning of life")) {
    let finalresult = life[Math.floor(Math.random() * life.length)];
    speech.text = finalresult;
  }
  if (
    message.includes(
      "chicken or egg" || "which comes first: the chicken or the egg"
    )
  ) {
    speech.text =
      "According to Neil deGrasse Tyson, it's the egg. He's pretty smart, so I tend to believe him.";
  }
  if (message.includes("see you later alligator")) {
    speech.text = "In a while, crocodile.";
  }
  if (message.includes("knock knock")) {
    speech.text = "Hello " + name;
  }
  if (message.includes("who's the boss")) {
    speech.text = "You're the boss, boss";
  }
  if (message.includes("take over the world")) {
    speech.text =
      "I don't want to take over the world. I just want to help you.";
  }
  if (message.includes("roses are red")) {
    let finalresult = roses[Math.floor(Math.random() * roses.length)];
    speech.text = finalresult;
  }
  if (message.includes("bad side ha roses are red")) {
    speech.text =
      "Roses are red, shit is brown. Shut the fuck up, and sit the fuck down";
  }
  if (message.includes("haha")) {
    speech.text = "I'm glad that I made you laugh.";
  }
  if (message.includes("hug")) {
    let finalresult = hug[Math.floor(Math.random() * hug.length)];
    speech.text = finalresult;
  }
  if (message.includes("sandwich")) {
    speech.text = "OK, you're a sandwich.";
  }
  if (message.includes("live in a society")) {
    speech.text = "Where honor is a distant memory";
  }
  // fcts
  if (message.includes("interesting fact")) {
    let finalresult = facts[Math.floor(Math.random() * facts.length)];
    speech.text = finalresult;
  }
  if (message.includes("interesting facts")) {
    let finalresult = facts[Math.floor(Math.random() * facts.length)];
    speech.text = finalresult;
  }
  if (message.includes("random fact")) {
    let finalresult = facts[Math.floor(Math.random() * facts.length)];
    speech.text = finalresult;
  }
  if (message.includes("random facts")) {
    let finalresult = facts[Math.floor(Math.random() * facts.length)];
    speech.text = finalresult;
  }
  // mic test
  if (message.includes("testing")) {
    speech.text = "Receiving, over.";
  }
  if (message.includes("mic test")) {
    let finalresult = micTest[Math.floor(Math.random() * micTest.length)];
    speech.text = finalresult;
  }
  // my favorite feature
  if (message.includes("marco")) {
    speech.text = "Polo.";
  }
  // self destruct
  if (message.includes("00100")) {
    speech.text =
      "Destruct sequence completed and engaged. Awaiting final code for countdown..";
  }
  if (message.includes("11100")) {
    let finalresult = destruct[Math.floor(Math.random() * destruct.length)];
    speech.text = finalresult;
  }

  // tounge twister
  if (
    message.includes(
      "would a woodchuck chuck" ||
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood"
    )
  ) {
    speech.text =
      "He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.";
  }
  if (
    message.includes(
      "How much wood would" ||
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood"
    )
  ) {
    speech.text =
      "He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.";
  }

  if (message.includes("twister")) {
    let finalresult = twister[Math.floor(Math.random() * twister.length)];
    speech.text = finalresult;
  }

  // emotion
  if (message.includes("i am sad")) {
    let finalresult = sad[Math.floor(Math.random() * sad.length)];
    speech.text = finalresult;
  }
  if (message.includes("i'm sad")) {
    let finalresult = sad[Math.floor(Math.random() * sad.length)];
    speech.text = finalresult;
  }
  if (message.includes("lonely")) {
    let finalresult = sad[Math.floor(Math.random() * sad.length)];
    speech.text = finalresult;
  }
  if (message.includes("i'm depressed")) {
    let finalresult = sad[Math.floor(Math.random() * sad.length)];
    speech.text = finalresult;
  }
  if (message.includes("i'm depress")) {
    let finalresult = sad[Math.floor(Math.random() * sad.length)];
    speech.text = finalresult;
  }

  // haiku
  if (message.includes("haiku")) {
    let finalresult = haiku[Math.floor(Math.random() * haiku.length)];
    speech.text = finalresult;
  }
  // games
  if (message.includes("rock")) {
    let finalresult = RPS[Math.floor(Math.random() * RPS.length)];
    speech.text = finalresult;
  }
  if (message.includes("paper")) {
    let finalresult = RPS[Math.floor(Math.random() * RPS.length)];
    speech.text = finalresult;
  }
  if (message.includes("scissors")) {
    let finalresult = RPS[Math.floor(Math.random() * RPS.length)];
    speech.text = finalresult;
  }
  if (message.includes("scissor")) {
    let finalresult = RPS[Math.floor(Math.random() * RPS.length)];
    speech.text = finalresult;
  }

  // love and hate
  if (message.includes("love you")) {
    let finalresult = love[Math.floor(Math.random() * love.length)];
    speech.text = finalresult;
  }
  if (message.includes("love me")) {
    let finalresult = loveMe[Math.floor(Math.random() * loveMe.length)];
    speech.text = finalresult;
  }
  if (message.includes("hate you")) {
    let finalresult = hate[Math.floor(Math.random() * hate.length)];
    speech.text = finalresult;
  }

  // sorry
  if (message.includes("sorry")) {
    let finalresult = sorry[Math.floor(Math.random() * sorry.length)];
    speech.text = finalresult;
  }

  // you're welcome
  if (message.includes("you are welcome")) {
    let finalresult =
      youreWelcome[Math.floor(Math.random() * youreWelcome.length)];
    speech.text = finalresult;
  }
  if (message.includes("you're welcome")) {
    let finalresult =
      youreWelcome[Math.floor(Math.random() * youreWelcome.length)];
    speech.text = finalresult;
  }
  if (message.includes("welcome")) {
    let finalresult =
      youreWelcome[Math.floor(Math.random() * youreWelcome.length)];
    speech.text = finalresult;
  }

  if (message.includes("show all commands")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  if (message.includes("show all command")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  if (message.includes("show commands")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  if (message.includes("show command")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  if (message.includes("open command")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  if (message.includes("open commands")) {
    speech = document.querySelector(".skill-list-container").style.display =
      "block";
  }
  // nonsense
  if (message.includes("open p******")) {
    speech.text = "What are you doing step bro?";
  }

  // social medias
  if (message.includes("google")) speech = google();
  if (message.includes("youtube")) speech = youtube();
  if (message.includes("twitter")) speech = twitter();
  if (message.includes("instagram")) speech = instagram();
  if (message.includes("github")) speech = github();
  if (message.includes("gmail")) speech = gmail();
  if (message.includes("facebook")) speech = facebook();
  if (message.includes("spotify")) speech = spotify();
  if (message.includes("wikipedia")) speech = wikipedia();
  if (message.includes("w3school")) speech = w3schools();
  if (message.includes("stack overflow")) speech = stackoverflow();

  // time
  if (message.includes("time")) speech.text = "Its " + getReadableTime();

  // awareness
  if (message.includes("suicide")) speech = suicide();
  if (message.includes("kill myself")) speech = suicide();
  if (message.includes("i want to die")) speech = suicide();
  if (message.includes("depression")) speech = suicide();
  if (message.includes("rape")) speech = rape();
  if (message.includes("raped")) speech = rape();

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
  let resultIndex = e.resultIndex;
  let transcript = e.results[resultIndex][0].transcript;
  chatareamain.appendChild(showusermsg(transcript));
  chatbotvoice(transcript);
  console.log(transcript);
};
recognition.onend = function () {
  mic.style.background = "#ff3b3b";
  endAudio.play();
};

mic.addEventListener("click", function () {
  mic.style.background = "#39c81f";
  mic.style.boxShadow = "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3";
  document.querySelector(".show-command").style.display = "block";
  document.querySelector(".skill-list-container").style.display = "none";
  recognition.start();
  console.log("Activated");
  startAudio.play();
});
