<template>
    <main>
        <section class="banner">
            <a href="https://discord.gg/aygEfaxWeF">
                <div class="banner-heading">
                    <a href="https://discord.gg/aygEfaxWeF">
                        <h1>Join the Server</h1>
                        <h1>discord.gg/templemount</h1>
                    </a>
                    <!-- You can also add a description if needed -->
                    <!-- <p>Your Banner Description</p> -->
                </div>
            </a>
        </section>

        <section class="background-image-section">

            <div class="glass-effect">
                <!-- <h2 class="carousel-heading">About Temple Mount</h2>
                <div class="centered-paragraph about-section">

                    <p>Inspired by the Knights Templar, the Temple Mount 18+ community offers daily live
                        discussions, debates, and podcasts. As a trusted and esteemed group, we prioritize friendship,
                        respect,
                        loyalty, and honor, forming a closely-knit virtual family with a shared history.</p>
                    <p>Our live discussions provide an engaging platform for robust debates and intriguing conversations.
                        The
                        Temple Mount Podcast, a focal point of our community, serves to ignite intellectual discourse, while
                        simultaneously offering the opportunity for members to be part of the show as guest speakers.</p>
                    <p>Join us, where camaraderie meets vibrant discourse, and become a part of these enriching dialogues.
                        At
                        Temple Mount, you are not just a member, but a potential voice, amplifying the spirit of our
                        collective
                        wisdom.</p>
                </div> -->

                <h2 class="carousel-heading">Latest Podcasts</h2>

                <section class="carousel">

                    <div class="carousel-grid">

                        <a v-for="video in videos" :key="video.id" class="slide centered-paragraph"
                            :href="'https://www.youtube.com/watch?v=' + video.id">
                            <img class="slide-img" :src="video.thumbnail" alt="Video thumbnail">
                            <div class="video-info">
                                <h3 v-html="video.title"></h3>
                            </div>

                        </a>

                    </div>
                </section>



            </div>
        </section>


    </main>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            videos: []
        };
    },
    async created() {
        try {
            const cache = JSON.parse(localStorage.getItem('videos'));
            const now = Date.now();
            const ONE_DAY = 24 * 60 * 60 * 1000; // in ms

            if (cache && (now - cache.timestamp) < ONE_DAY) {
                this.videos = cache.data;
                return;
            }

            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSN37VwohvzZMs8paiys_OfU7WzjtE_jY&channelId=UCejEXnx1OcXmIei8OGwLSMQ&part=snippet,id&order=date&maxResults=6`);

            this.videos = response.data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: `https://img.youtube.com/vi/${item.id.videoId}/0.jpg`,
            }));

            // save the videos and current timestamp to the localStorage
            localStorage.setItem('videos', JSON.stringify({ data: this.videos, timestamp: now }));

        } catch (err) {
            console.error(err);
        }
    }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Average+Sans&display=swap');

.slide-img {
    border-radius: .3rem;
}

.banner {
    position: relative;
    height: 90vh;
    background-image: url('../assets/TMVideoGif.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: #eee;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(0.5px);

    margin: auto;
    padding: 6px 18px;
    border-radius: .6rem;
    box-shadow:
        0 0 20px #000AB2;
    background-color: rgba(11, 11, 11, 0.8);
    /* background-color: rgba(0, 10, 178, 0.9); */



}

.banner-heading a,
.banner-heading a:visited,
.banner-heading a:active {
    color: #eee;
    text-decoration: none;
    animation: glowing 2s infinite;
}



.banner-heading:hover {
    box-shadow:
        0 0 20px #000AB2,
        0 0 25px #000AB2,
        0 0 50px #000AB2,
        0 0 100px #000AB2;
    /* background-color: rgba(0, 10, 178, 0.4); */
    background-color: rgba(0, 0, 0, 0.7);
}




@keyframes glowing {

    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow:
            0 -1px 0 #000AB2,
            0 1px 0 #000AB2,
            0 0 7px #000AB2,
            0 0 10px #000AB2,
            0 0 21px #000AB2,
            0 0 42px #000AB2;
    }

    20%,
    24%,
    55% {
        text-shadow: none;
    }
}



.background-image-section {
    position: relative;
    background-image: url('../assets/knight.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

}

.glass-effect {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border-radius: .3rem;
    /*  border: 1px solid rgba(255, 255, 255, 0.18); */
    padding-bottom: 1rem;
    padding-top: 1rem;
}


.centered-paragraph {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.66);
    border-radius: .3rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #FBF8F8;
    font-size: 1.1em;
    text-align: center;
    line-height: 1.6;
}

.about-section {
    font-family: 'Average Sans', sans-serif !important;
    margin: 0 auto;
}

.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel-heading {
    text-align: center;
    font-size: 2em;
    color: #FBF8F8;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    animation: glowing 4s infinite;
    padding-top: 1rem;
}

.carousel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 0 10px;
    width: 100%;
    max-width: 1200px;
}

.slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    border-radius: 10px;
    overflow: hidden;
}

.slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.slide:hover {
    transform: scale(1.05);
    /*  box-shadow:
        0 0 5px #000AB2,
        0 0 10px #000AB2,
        0 0 20px #000AB2,
        0 0 40px #000AB2; */
}

.video-info {
    padding: 10px;
    background: rgba(0, 0, 0, 0) !important;
    color: #FBF8F8;
}


.video-info h3 {
    margin: 0;
    font-size: 1em;
    text-align: center;
    box-shadow: 1px rgba(0, 0, 0, 1);
}


.video-container {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 Aspect Ratio */
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media (min-width: 768px) {
    .carousel-grid {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .about-section {
        max-width: 40%;
    }

    .slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #333;
        border-radius: 10px;
        overflow: hidden;
    }

    .slide img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .video-info {
        padding: 10px;
        background: #000;
        color: #FBF8F8;
    }

    .video-info h3 {
        margin: 0;
        font-size: 1em;
        text-align: center;
    }
}
</style>