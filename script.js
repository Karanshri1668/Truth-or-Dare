
        // Player management
        const players = [];
        const playerNameInput = document.getElementById('player-name');
        const addPlayerBtn = document.getElementById('add-player');
        const playerList = document.getElementById('player-list');
        const startGameBtn = document.getElementById('start-game');
        
        // Screens
        const homeScreen = document.getElementById('home-screen');
        const choiceScreen = document.getElementById('choice-screen');
        const gameScreen = document.getElementById('game-screen');
        
        // Game elements
        const truthBtn = document.getElementById('truth-btn');
        const dareBtn = document.getElementById('dare-btn');
        const selectedPlayerElement = document.getElementById('selected-player');
        const questionTextElement = document.getElementById('question-text');
        const gameTypeElement = document.getElementById('game-type');
        const nextBtn = document.getElementById('next-btn');
        const newGameBtn = document.getElementById('new-game-btn');
        
        // Game state
        let currentPlayerIndex = 0;
        let gameType = 'truth';
        
        // Truth questions (100 questions)
        const truthQuestions = [
            "What's the most embarrassing thing you've ever done to get someone's attention?",
            "Have you ever pretended to be sick to get out of something? What was it?",
            "What's the weirdest dream you've ever had?",
            "If you could swap lives with anyone for a day, who would it be and why?",
            "What's the biggest lie you've ever told without getting caught?",
            "What's your most irrational fear?",
            "What's the most childish thing you still do?",
            "Have you ever had a crush on a teacher? Tell us about it.",
            "What's the most trouble you've ever been in at school?",
            "What's the silliest thing you've ever cried over?",
            "What's your guilty pleasure TV show or movie?",
            "If you had to delete all but 3 apps from your phone, which would you keep?",
            "What's the most embarrassing song on your playlist?",
            "What's the strangest thing you've ever eaten?",
            "Have you ever cheated on a test?",
            "What's the most embarrassing nickname you've ever had?",
            "What's something you've done that you hope your parents never find out about?",
            "If you had to wear one outfit for the rest of your life, what would it be?",
            "What's the worst date you've ever been on?",
            "What's the most embarrassing thing your parents have caught you doing?",
            "What's the weirdest habit you have?",
            "What's the most embarrassing thing you've posted on social media?",
            "Have you ever pretended to like a gift? What was it?",
            "What's the most ridiculous thing you've ever bought?",
            "If you could be any fictional character, who would you be?",
            "What's your most embarrassing childhood memory?",
            "What's the worst present you've ever received?",
            "Have you ever been caught talking to yourself? What were you saying?",
            "What's the strangest rumor you've heard about yourself?",
            "What's the most embarrassing thing you've done while drunk?",
            "What's your biggest pet peeve?",
            "If you had to eat one food for the rest of your life, what would it be?",
            "What's the most embarrassing thing you've Googled?",
            "Have you ever had a paranormal experience?",
            "What's the weirdest thing you find attractive in a person?",
            "What's the most embarrassing text you've sent to the wrong person?",
            "If you could have any superpower, what would it be and why?",
            "What's the most childish argument you've ever had?",
            "What's the most embarrassing thing you've done for love?",
            "Have you ever stolen something? What was it?",
            "What's the most embarrassing thing you've done in front of a crowd?",
            "What's your biggest insecurity?",
            "If you could only listen to one song for the rest of your life, what would it be?",
            "What's the most embarrassing fashion trend you've followed?",
            "Have you ever been caught in a lie? What was it?",
            "What's the weirdest thing you've done when you were alone?",
            "What's the most embarrassing thing you've done to fit in?",
            "If you could be famous for one thing, what would it be?",
            "What's the most embarrassing thing you've done to get out of a situation?",
            "What's the most embarrassing thing you've said to a crush?",
            "Have you ever had a celebrity crush? Who was it?",
            "What's the most embarrassing thing you've done at a party?",
            "If you could swap places with anyone in this room, who would it be and why?",
            "What's the most embarrassing thing you've done for attention?",
            "What's the weirdest food combination you enjoy?",
            "Have you ever been caught doing something you shouldn't have?",
            "What's the most embarrassing thing you've done in a public restroom?",
            "If you had to describe yourself using three words, what would they be?",
            "What's the most embarrassing thing you've done on social media?",
            "What's the weirdest dream you've had about someone in this room?",
            "Have you ever pretended to know someone you didn't?",
            "What's the most embarrassing thing you've done while trying to be cool?",
            "If you could change one thing about your appearance, what would it be?",
            "What's the most embarrassing thing you've done at work or school?",
            "What's the weirdest thing you've ever collected?",
            "Have you ever been caught checking someone out?",
            "What's the most embarrassing thing you've done in a gym?",
            "If you could live in any TV show, which one would it be?",
            "What's the most embarrassing thing you've done to avoid someone?",
            "What's the weirdest compliment you've ever received?",
            "Have you ever had a crush on a friend's sibling?",
            "What's the most embarrassing thing you've done in a library?",
            "If you could master any skill instantly, what would it be?",
            "What's the most embarrassing thing you've done at a family gathering?",
            "What's the weirdest thing you've ever done for money?",
            "Have you ever been caught singing or dancing when you thought you were alone?",
            "What's the most embarrassing thing you've done in a movie theater?",
            "If you could have dinner with any historical figure, who would it be?",
            "What's the most embarrassing thing you've done on a date?",
            "What's the weirdest place you've ever fallen asleep?",
            "Have you ever had a crush on a cartoon character?",
            "What's the most embarrassing thing you've done at a concert?",
            "If you could be any animal for a day, what would you be?",
            "What's the most embarrassing thing you've done in an elevator?",
            "What's the weirdest fear you have?",
            "Have you ever been caught talking in your sleep? What did you say?",
            "What's the most embarrassing thing you've done in a swimming pool?",
            "If you could time travel, where would you go?",
            "What's the most embarrassing thing you've done at a restaurant?",
            "What's the weirdest thing you've ever worn?",
            "Have you ever had a crush on a video game character?",
            "What's the most embarrassing thing you've done on public transportation?",
            "If you could only save one possession from a fire, what would it be?",
            "What's the most embarrassing thing you've done at a sleepover?",
            "What's the weirdest thing you've ever done to pass time?",
            "Have you ever been caught making a funny face in a photo?",
            "What's the most embarrassing thing you've done in a classroom?",
            "If you could be invisible for a day, what would you do?",
            "What's the most embarrassing thing you've done at a wedding?",
            "What's the weirdest thing you've ever believed as a child?",
            "Have you ever had a crush on a teacher?",
            "What's the most embarrassing thing you've done at a job interview?"
        ];
        
        // Dare questions (100 questions)
        const dareQuestions = [
            "Do your best impression of a celebrity until someone guesses who you are.",
            "Let the group choose a song and perform an interpretive dance to it.",
            "Speak in an accent for the next three rounds.",
            "Let someone style your hair in a ridiculous way and keep it like that for the next two rounds.",
            "Act like a chicken until your next turn.",
            "Do 20 pushups right now.",
            "Let the person to your right draw on your face with a pen.",
            "Sing the chorus of your favorite song as loudly as you can.",
            "Go outside and yell 'I believe in fairies!' as loud as you can.",
            "Do your best impression of a baby throwing a tantrum.",
            "Let everyone in the group give you a new hairstyle.",
            "Attempt to do a handstand against the wall for 10 seconds.",
            "Do an impression of someone in the group until they guess who you are.",
            "Let the group choose an outfit for you to wear for the next hour.",
            "Try to lick your elbow.",
            "Do 10 squats while singing 'Twinkle Twinkle Little Star'.",
            "Let someone tickle you for 30 seconds without laughing.",
            "Speak in rhymes for the next 10 minutes.",
            "Do your best impression of a famous movie scene.",
            "Attempt to breakdance for 30 seconds.",
            "Let the person to your left post a status on your social media.",
            "Do an impression of your favorite cartoon character.",
            "Try to juggle three random objects for 30 seconds.",
            "Let someone feed you a food of their choice while blindfolded.",
            "Do your best runway walk across the room.",
            "Attempt to do the worm dance move.",
            "Let the group choose a new name for you that you must respond to for the next hour.",
            "Do an impression of a weather reporter giving a forecast.",
            "Try to touch your nose with your tongue.",
            "Let someone give you a makeover using whatever they have on hand.",
            "Do your best impression of a famous singer performing.",
            "Attempt to recite the alphabet backwards in under 30 seconds.",
            "Let the person across from you give you a massage for one minute.",
            "Do an impression of a animal of the group's choice.",
            "Try to balance a book on your head while walking across the room.",
            "Let someone style your hair with whatever they can find.",
            "Do your best impression of a robot.",
            "Attempt to do 15 jumping jacks without stopping.",
            "Let the group choose an embarrassing photo to post on your social media.",
            "Do an impression of a famous politician.",
            "Try to say the tongue twister 'She sells seashells by the seashore' five times fast.",
            "Let someone draw a mustache on your face with a pen.",
            "Do your best impression of a superhero.",
            "Attempt to do a cartwheel.",
            "Let the person to your right choose what you drink for your next turn.",
            "Do an impression of a teacher you had in school.",
            "Try to spin around 10 times and then walk in a straight line.",
            "Let the group choose an embarrassing ringtone for your phone.",
            "Do your best impression of a baby learning to walk.",
            "Attempt to do the moonwalk.",
            "Let someone style your eyebrows with whatever they have.",
            "Do an impression of a famous athlete.",
            "Try to hop on one foot while patting your head and rubbing your stomach.",
            "Let the person to your left put ice down your shirt.",
            "Do your best impression of a fashion model.",
            "Attempt to do 10 sit-ups in 30 seconds.",
            "Let the group choose an embarrassing profile picture for your social media.",
            "Do an impression of a famous TV character.",
            "Try to say 'I am a cute little bunny' without showing your teeth.",
            "Let someone put a blindfold on you and identify three objects by touch.",
            "Do your best impression of a rock star.",
            "Attempt to do the floss dance for 30 seconds.",
            "Let the person across from you give you a new nickname that you have to use.",
            "Do an impression of a famous comedian.",
            "Try to do 10 star jumps in a row.",
            "Let someone style your outfit using items from around the room.",
            "Do your best impression of a news anchor.",
            "Attempt to do a handstand against the wall for 15 seconds.",
            "Let the group choose an embarrassing message to send to your crush.",
            "Do an impression of a famous actor/actress.",
            "Try to recite a nursery rhyme while standing on one leg.",
            "Let someone put makeup on you while you're blindfolded.",
            "Do your best impression of a dinosaur.",
            "Attempt to do the macarena dance.",
            "Let the person to your right choose what you eat for your next snack.",
            "Do an impression of a famous singer.",
            "Try to do 15 pushups in 30 seconds.",
            "Let someone give you a 'makeunder' (mess up your appearance).",
            "Do your best impression of a robot falling in love.",
            "Attempt to do a somersault.",
            "Let the group choose an embarrassing voicemail message for your phone.",
            "Do an impression of a famous historical figure.",
            "Try to balance a spoon on your nose for 30 seconds.",
            "Let someone style your hair with food items.",
            "Do your best impression of a movie villain.",
            "Attempt to do the running man dance for 30 seconds.",
            "Let the person to your left choose an embarrassing filter for your next social media post.",
            "Do an impression of a famous TV host.",
            "Try to do 20 jumping jacks without stopping.",
            "Let someone draw on your arm with a pen.",
            "Do your best impression of a celebrity chef.",
            "Attempt to do a headstand against the wall.",
            "Let the group choose an embarrassing song for you to perform.",
            "Do an impression of a famous scientist.",
            "Try to say 'Toy boat' five times fast.",
            "Let someone put a temporary tattoo on your face.",
            "Do your best impression of a sports commentator.",
            "Attempt to do the cha cha slide dance.",
            "Let the person across from you style your outfit for the next hour.",
            "Do an impression of a famous artist.",
            "Try to do 25 sit-ups in one minute.",
            "Let someone give you a new hairstyle using only office supplies.",
            "Do your best impression of a weather reporter during a hurricane.",
            "Attempt to do the electric slide dance.",
            "Let the group choose an embarrassing status for you to post on social media."
        ];
        
        // Add player function
        addPlayerBtn.addEventListener('click', () => {
            const playerName = playerNameInput.value.trim();
            if (playerName && !players.includes(playerName)) {
                players.push(playerName);
                updatePlayerList();
                playerNameInput.value = '';
                playerNameInput.focus();
                
                // Enable start button if we have at least 2 players
                if (players.length >= 2) {
                    startGameBtn.disabled = false;
                }
            }
        });
        
        // Allow adding players with Enter key
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addPlayerBtn.click();
            }
        });
        
        // Update player list display
        function updatePlayerList() {
            if (players.length === 0) {
                playerList.innerHTML = '<p>No players added yet. Add at least 2 players to start the game.</p>';
                return;
            }
            
            playerList.innerHTML = '';
            players.forEach((player, index) => {
                const playerItem = document.createElement('div');
                playerItem.className = 'player-item';
                playerItem.innerHTML = `
                    ${player}
                    <button class="remove-player" data-index="${index}">×</button>
                `;
                playerList.appendChild(playerItem);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-player').forEach(button => {
                button.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    players.splice(index, 1);
                    updatePlayerList();
                    
                    // Disable start button if we have less than 2 players
                    if (players.length < 2) {
                        startGameBtn.disabled = true;
                    }
                });
            });
        }
        
        // Start game
        startGameBtn.addEventListener('click', () => {
            homeScreen.classList.remove('active');
            choiceScreen.classList.add('active');
        });
        
        // Truth or Dare selection
        truthBtn.addEventListener('click', () => {
            gameType = 'truth';
            startRound();
        });
        
        dareBtn.addEventListener('click', () => {
            gameType = 'dare';
            startRound();
        });
        
        // Start a new round
        function startRound() {
            choiceScreen.classList.remove('active');
            gameScreen.classList.add('active');
            
            // Select random player
            const randomPlayerIndex = Math.floor(Math.random() * players.length);
            const selectedPlayer = players[randomPlayerIndex];
            
            // Select random question based on game type
            let randomQuestion;
            if (gameType === 'truth') {
                randomQuestion = truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
                gameTypeElement.textContent = 'Truth';
            } else {
                randomQuestion = dareQuestions[Math.floor(Math.random() * dareQuestions.length)];
                gameTypeElement.textContent = 'Dare';
            }
            
            // Update display
            selectedPlayerElement.textContent = selectedPlayer;
            questionTextElement.textContent = randomQuestion;
        }
        
        // Next button
        nextBtn.addEventListener('click', () => {
            gameScreen.classList.remove('active');
            choiceScreen.classList.add('active');
        });
        
        // New game button
        newGameBtn.addEventListener('click', () => {
            gameScreen.classList.remove('active');
            homeScreen.classList.add('active');
        });
    