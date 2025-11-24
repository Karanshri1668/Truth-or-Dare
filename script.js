
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
        
       // Truth questions
        const truthQuestions = [
             "Who is the person you flirt with the most?",
    "Have you ever caught feelings for someone unexpectedly?",
    "What's the biggest regret of your dating/crush life?",
    "Who was your last romantic daydream about?",
    "One thing you want to tell your crush but never will.",
    "Have you ever pretended to not care, but actually cared too much?",
    "What's the most embarrassing thing you've done for attention?",
    "Name a person you miss but won't admit.",
    "What's your most toxic trait?",
    "Who would you date in this group if you had to choose?",
    "Have you ever cried over someone who didn't know?",
    "What's the wildest lie you've told to avoid a situation?",
    "Have you ever liked two people at the same time?",
    "What's something you judge others for, but you do it too?",
    "Who was your worst crush choice ever?",
    "What's the most jealous you have ever felt?",
    "One thing you stalk on social media secretly.",
    "Have you ever had a fake crush just for fun?",
    "Who do you think thinks about you secretly?",
    "What is your biggest insecurity?",
    "What is one thing you wish people noticed about you?",
    "Who's the most attractive person among your contacts?",
    "What's a friendship mistake you'll never repeat?",
    "Ever caught someone checking you out?",
    "Who is your most unexpected crush?",
    "What's something you want but are scared to ask for?",
    "Have you ever led someone on?",
    "Which message of yours do you regret sending?",
    "Who do you stalk on social media the most?",
    "What's the most embarrassing chat you've ever had?",
    "Have you ever lied to save someone's feelings?",
    "What's the most confusing romantic signal you ever got?",
    "Who makes you nervous for no reason?",
    "What's the worst thing you've done out of jealousy?",
    "Who was your last 'late-night overthinking' about?",
    "What's the cringiest thing you've said to a crush?",
    "What's something you hide about your personality?",
    "Ever caught feelings for someone you shouldn't?",
    "What's the worst heartbreak you've had?",
    "Have you ever ghosted someone? Why?",
    "Who do you think secretly likes you?",
    "What's your most dramatic moment of 2024–25?",
    "What's your most risky DM ever sent?",
    "One thing you regret not saying.",
    "Who would you call first if you were emotional?",
    "What type of person are you dangerously attracted to?",
    "What's the dumbest thing you've done for love?",
    "Who is the person you wish you never met?",
    "What is something you want to confess right now?",
    "Have you ever had a crush on someone in this room/group?"
        ];
        
        // Dare questions
        const dareQuestions = [
            "Message your crush: 'Hey, random question… do you miss me?'",
    "Send the last emoji you used to the 3rd person in your chat list.",
    "Read your last sent message in a dramatic voice.",
    "Let someone pick any photo from your gallery to show the group.",
    "Send a voice note saying 'I need to tell you something…' then go offline.",
    "Share one screenshot from your search history (your choice).",
    "Call someone and say 'I'm sorry for everything' without context.",
    "Put a flirty caption on your story for 5 minutes.",
    "Let someone else write your next message and send it.",
    "Show your Instagram explore page.",
    "Text your crush: 'Do you still feel the same?'",
    "Let someone choose a reel from your saved section.",
    "Say the most flirty line you know.",
    "Read out your last four selfies and explain each one.",
    "Let the group decide a contact you will call right now.",
    "Put your phone on the table and let someone scroll for 10 seconds.",
    "Send 'You up?' to a random person from your contacts.",
    "Pretend you're on a romantic call for 30 seconds.",
    "Share one unposted picture from your gallery.",
    "Let someone rewrite your bio for 2 minutes.",
    "Open your WhatsApp and read the last status you viewed.",
    "Speak like you're flirting for the next 1 minute.",
    "Show your last 3 call logs.",
    "Send the laughing emoji to someone serious.",
    "Try to wink properly on camera (or in real life).",
    "Let someone choose a filter and post a story for 1 minute.",
    "Reveal your most used emoji and explain why.",
    "Make a fake dramatic confession to someone.",
    "Let someone check your Insta saved posts.",
    "Call someone and say 'I think I like you…' then disconnect.",
    "Post 'Feeling chaotic' on your story for 3 minutes.",
    "Show your last YouTube/Google search.",
    "Text someone 'I dreamt about you.'",
    "Say one raw honest compliment to the person on your right.",
    "Let someone else pick a name from your contact list. You must compliment them.",
    "Send a random sticker to your crush.",
    "Read your last DM out loud.",
    "Let someone ask you any question without refusal.",
    "Post a random selfie without checking. Delete after 2 mins.",
    "Call someone and ask 'What do you really think of me?'",
    "Send 'We need to talk' to any friend.",
    "Put your phone brightness on max and show your lockscreen notifications.",
    "Try to make the group laugh in 10 seconds.",
    "Do a dramatic Bollywood dialogue.",
    "Share the most embarrassing pic in your hidden folder (if any).",
    "Let someone else choose your next emoji reaction.",
    "Talk in your cutest voice for one minute.",
    "Show your pinned chats.",
    "Say one unpopular opinion about someone in the group (harmless).",
    "Let the group give you a new nickname for the day.",
     "Text your crush: 'Be honest… did you ever like me even a little?'",
    "Call someone & say: 'I need to tell you something important.' Pause 5 seconds '…I forgot.' and cut the call 💀",
    "Post this on your WhatsApp/Instagram story for 3 minutes: 'If I text you suddenly… don't be surprised 😭❤‍🔥'",
    "Send a voice note to your best friend saying: 'I think I'm in love… guess who.' (Then don't reply for 10 minutes.)",
    "DM your crush: 'Why do you look so good today??? Like stop.'",
    "Send 'We need to talk. NOW.' to ANYONE. Then go offline for 5 minutes 💀",
    "Call your crush and say: 'Quick—yes or no?' (Whatever they say, reply 'Okay thanks' and cut 🤣)",
    "Change your bio to: 'Taken (by surprise 😂)' for 15 minutes.",
    "Text a friend: 'I have a screenshot of you.' Then don't explain 😭",
    "Send to a random contact: 'WHY WOULD YOU SAY THAT???' Then vanish. 😭🔥",
    "Send a 😳 emoji to someone you should not send it to.",
    "Call someone and whisper: 'Don't tell anyone I called.' Then hang up 😭",
    "Send your crush: 'Rate me as a human: 1–10. No feelings hurt.'",
    "Video call a friend and show only your forehead.",
    "Post a 1-minute story saying: 'My DMs are open. Surprise me.'"
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

    
