document.addEventListener('DOMContentLoaded', () => {

    // ======================= THE STORY DATA =======================
    // In a real app, this would come from a server/API
    const storyData = {
        title: "The Different Love",
        chapters: [
            {
                title: "Chapter 1: The Architecture of a Ghost",
                content: `
                    <p>Priyanshi grew up in a house where the sunlight always seemed to find the windows, spilling liquid gold onto the wooden floors. Her world was a gentle, protected melody. It was the scent of rain on hot summer pavement, the quiet strength in her father's calloused hands, and the comforting rhythm of her mother's humming in the kitchen. She was a collector of small, overlooked wonders: the hidden universe in a drop of water, the stories she imagined in the faces of strangers on the bus, the way dust danced like tiny galaxies in the sunbeams. She believed the world was a promise, and her heart was wide open, ready to receive it.</p>
                <p>As she stepped into her teenage years, this belief blossomed into an eager excitement. The world, once a gentle storybook, was now a thrilling novel full of potential. Her first real taste of this was Rohan. He wasn't just a crush; he was a confirmation of everything she hoped was true. He had a way of listening that made her feel like she was the only person in the room. In the noise of crowded school hallways, he was her moment of quiet.</p>
                <p>One evening, under the colored lights of the school fair, a sense of vulnerability and trust washed over her. She gave him a piece of herself she had never given anyone before—a fragile, secret dream she held for her future, whispered with a shy, trembling hope. It was a confession of her deepest, softest self. He held that secret in his hands, and in that moment, she felt truly seen.</p>
                <p>The next day, that beautiful, fragile secret was turned into a joke.</p>
                <p>She heard it before she saw it. A burst of laughter from a group of his friends, her whispered words twisted into a punchline. Rohan was in the center, a smug smile on his face as he performed her dream for them. The world didn't crash. It simply went silent. The air grew thin. The friendly faces of her classmates became a gallery of mocking strangers. The promise the world had made to her was not just broken; it was shattered and ground into dust under his heel. That was the day she learned that the most precious things, when given to the wrong person, become weapons.</p>
                <p>She told no one. The shame and the hurt became a silent, heavy companion. She walked home and didn't cry, but something inside her quietly turned to stone. Over the next few years, she became a master architect, building a magnificent castle of glass around her heart. It was a flawless, invisible fortress. People could see in—they saw a girl who was polite, who smiled at the right times, who gave thoughtful advice—but they could never feel the chill radiating from the walls.</p>
                <p>She became a ghost at the feast of life, present in form but absent in spirit. Trust was a language she had forgotten how to speak. She watched other couples, their public displays of affection, their loud declarations of love, and saw only a performance. She saw the same hollowness she saw in Rohan’s eyes—love as a tool for validation, not a state of being.</p>
                <p>Her philosophy was now a shield. She believed true love wasn't a declaration shouted from the rooftops, but a silent, unwavering understanding. It was an authentic connection that needed no audience, no applause. It was real, and raw, and so incredibly rare. And because the world had shown her only the counterfeit version, she remained alone, the solitary, watchful queen of her glass castle. She wasn't sad, not anymore. Sadness was a feeling, and she had carefully locked her feelings away. She was simply empty, guarding a space that she no longer believed anyone could ever truly fill.</p>
                `
            },
            {
                title: "Chapter 2",
                content: `
                    <p>Chapter 2 coming soon...</p>
                `
            }
        ]
    };

    // ======================= ELEMENT SELECTORS =======================
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-item');
    const storyCard = document.getElementById('story-card');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const storyTitleEl = document.getElementById('story-title');
    const chapterNavEl = document.getElementById('chapter-nav');
    const chapterContentEl = document.getElementById('chapter-content');

    // ======================= NAVIGATION LOGIC =======================
    function navigateTo(pageId) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        // Show the target page
        document.getElementById(pageId).classList.add('active');

        // Update active state for nav items
        navItems.forEach(item => {
            if (item.dataset.target === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPageId = item.dataset.target;
            navigateTo(targetPageId);
        });
    });

    // ======================= STORY READER LOGIC =======================
    function loadChapter(chapterIndex) {
        const chapter = storyData.chapters[chapterIndex];
        chapterContentEl.innerHTML = chapter.content;

        // Update active state for chapter buttons
        document.querySelectorAll('.chapter-btn').forEach((btn, index) => {
            if (index === chapterIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function openStory() {
        // Set story title
        storyTitleEl.textContent = storyData.title;

        // Clear and create chapter buttons
        chapterNavEl.innerHTML = '';
        storyData.chapters.forEach((chapter, index) => {
            const button = document.createElement('button');
            button.classList.add('chapter-btn');
            button.textContent = chapter.title;
            button.addEventListener('click', () => loadChapter(index));
            chapterNavEl.appendChild(button);
        });

        // Load the first chapter by default
        loadChapter(0);
        
        // Navigate to the reader page
        navigateTo('story-reader-page');
    }

    // Event Listeners for story flow
    storyCard.addEventListener('click', openStory);
    backToHomeBtn.addEventListener('click', () => navigateTo('home-page'));

});