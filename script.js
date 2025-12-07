document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Die With A Smile",
            artist: "Lady Gaga y Bruno Mars",
            src: "song.mp3",
            lyrics: [
  { "time": 4, "line": "(Ooh...)" },
  { "time": 13, "line": "Recién desperté de un sueño" },
  { "time": 16, "line": "Donde tú y yo nos dijimos adiós" },
  { "time": 21, "line": "Y no sé qué signifique eso" },
  { "time": 25, "line": "Pero al despertar, me di cuenta hoy" },
  { "time": 30, "line": "A donde vayas, te seguiré" },
  { "time": 35, "line": "Nadie nos asegura el mañana" },
  { "time": 40, "line": "Así que te amaré cada noche como si fuera el final" },
  { "time": 43, "line": "Como si fuera el final" },
  { "time": 46, "line": "Si el mundo se acabara, a tu lado quiero estar" },
  { "time": 54, "line": "Si la fiesta termina y nuestro tiempo juntos se agota" },
  { "time": 64, "line": "Solo abrazarte un momento y morir con una sonrisa" },
  { "time": 73, "line": "Si el mundo se acabara, a tu lado quiero estar" },
  { "time": 86, "line": "(Ooh...)" },
  { "time": 88, "line": "Perdido en los gritos y el dolor" },
  { "time": 94, "line": "Ya no quiero seguir así, mi amor" },
  { "time": 99, "line": "Porque sabes lo que significas para mí" },
  { "time": 102, "line": "Y nuestro amor es la única guerra que vale pelear" },
  { "time": 108, "line": "A donde vayas, te seguiré" },
  { "time": 113, "line": "Nadie nos asegura el mañana" },
  { "time": 117, "line": "Así que te amaré cada noche como si fuera el final" },
  { "time": 120, "line": "Como si fuera el final" },
  { "time": 124, "line": "Si el mundo se acabara, a tu lado quiero estar" },
  { "time": 132, "line": "Si la fiesta termina y nuestro tiempo juntos se agota" },
  { "time": 142, "line": "Solo abrazarte un momento y morir con una sonrisa" },
  { "time": 150, "line": "Si el mundo se acabara, a tu lado quiero estar" },
  { "time": 160, "line": "Justo junto a ti..." },
  { "time": 164, "line": "Junto a ti..." },
  { "time": 169, "line": "Justo junto a ti..." },
  { "time": 171, "line": "Quisiera estar junto a ti" }
]
        },
        {
            title: "¿Por qué te vas?", 
            artist: "Jeanette", 
            src: "song2.mp3",
            lyrics: [
{ "time": 24, "line": "Todo te recuerda a mi" },
{ "time": 29, "line": "Y yo no estoy" },
{ "time": 31, "line": "Queda este mundo que nos vio juntos" },
{ "time": 37, "line": "Por última vez" },
{ "time": 40, "line": "El cuarto, el balcón y el ventanal" },
{ "time": 44, "line": "Tienen luz hoy" },
{ "time": 47, "line": "Puro como el día que nos vio juntos" },
{ "time": 53, "line": "Por última vez" },
{ "time": 56, "line": "El tiempo pasará y olvidarás lo nuestro" },
{ "time": 60, "line": "Lo que hubo entre tú y yo... entre tú y yo" },
{ "time": 63, "line": "No, no me esperes ya" },
{ "time": 67, "line": "Pero sabes que te amé" },
{ "time": 71, "line": "Por última vez" },
{ "time": 74, "line": "Por última vez" },
{ "time": 77, "line": "Por última vez" },
{ "time": 80, "line": "¡Por última vez!" },
{ "time": 86, "line": "Pasarán los días, no sé cuántos inviernos" },
{ "time": 90, "line": "Y cuántos años" },
{ "time": 93, "line": "Quizás logres ser feliz con alguien más" },
{ "time": 98, "line": "O tal vez no" },
{ "time": 101, "line": "Aunque nada es eterno bajo la luna" },
{ "time": 106, "line": "Mas ni un momento" },
{ "time": 109, "line": "Olvidarás el día que estuve aquí" },
{ "time": 114, "line": "Por última vez" },
{ "time": 118, "line": "El tiempo pasará y olvidarás lo nuestro" },
{ "time": 122, "line": "Lo que hubo entre tú y yo... entre tú y yo" },
{ "time": 125, "line": "No, no me esperes ya" },
{ "time": 128, "line": "Pero sabes que te amé" },
{ "time": 133, "line": "Por última vez" },
{ "time": 135, "line": "Por última vez" },
{ "time": 138, "line": "Por última vez" },
{ "time": 141, "line": "¡Por última vez!" },
{ "time": 160, "line": "El tiempo pasará y olvidarás lo nuestro" },
{ "time": 165, "line": "Lo que hubo entre tú y yo... entre tú y yo" },
{ "time": 167, "line": "No, no me esperes ya" },
{ "time": 171, "line": "Pero sabes que te amé" },
{ "time": 176, "line": "Por última vez" },
{ "time": 178, "line": "Por última vez" },
{ "time": 180, "line": "Por última vez" },
{ "time": 183, "line": "¡Por última vez!" },
            ]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    
    // CORRECCIÓN AQUÍ: Faltaba cerrar comilla y paréntesis, y el ID estaba cortado.
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
