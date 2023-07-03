<template>
    <header class="main-header">
        <div class="logo1-container">
            <img class="logo" :src="require('@/assets/tmlogo.png')" alt="Temple Mount Logo" />
        </div>
        <div class="logo2-container">
            <img src="../assets/tmlogo2.png" alt="Logo2" class="logo2" />
        </div>
        <div class="nav-container">
            <div class="menu-button" @click="isMenuOpen = !isMenuOpen">
                <i class="fas fa-bars"></i>
            </div>
            <div class="dropdown" v-bind:class="{ show: isMenuOpen }" v-click-outside="closeMenu">
                <a href="https://discord.gg/aygEfaxWeF" target="_blank" rel="noopener"
                    aria-label="Link to Temple Mount Discord">Discord</a>
                <a href="https://www.youtube.com/@templemountofficial/videos" target="_blank" rel="noopener"
                    aria-label="Link to Temple Mount Youtube">Youtube</a>
                <a href="https://www.bitchute.com/channel/templemountpodcast/" target="_blank" rel="noopener"
                    aria-label="Link to Temple Mount Bitchute">Bitchute</a>
                <a href="https://twitter.com/templemountco" target="_blank" rel="noopener"
                    aria-label="Link to Temple Mount Youtube">Twitter</a>
                <a href="https://www.zazzle.com/store/templemount" target="_blank" rel="noopener"
                    aria-label="Link to Temple Mount Shop">Shop</a>
            </div>
            <div class="icons-container" v-if="isMenuOpen || screenWidth > 768" :class="{ 'open': isMenuOpen }">
                <nav class="navigation-icons main-nav">
                    <a href="https://discord.gg/aygEfaxWeF" target="_blank" rel="noopener"
                        aria-label="Link to Temple Mount Discord"><i class="fab fa-discord"></i></a>
                    <a href="https://www.youtube.com/@templemountofficial/videos" target="_blank" rel="noopener"
                        aria-label="Link to Temple Mount Youtube"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.bitchute.com/channel/templemountpodcast/" target="_blank" rel="noopener"
                        aria-label="Link to Temple Mount Bitchute"> <img class="fab custom-icon"
                            :src="require('@/assets/bitchute_icon.png')" alt="Bitchute Logo"></a>
                    <a href="https://twitter.com/templemountco" target="_blank" rel="noopener"
                        aria-label="Link to Temple Mount Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.zazzle.com/store/templemount" target="_blank" rel="noopener"
                        aria-label="Link to Temple Mount Shop"><i class="fas fa-shopping-cart"></i></a>

                </nav>
            </div>
        </div>
    </header>
</template>

  
<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    name: 'AppHeader',
    setup() {
        const isMenuOpen = ref(false)
        const screenWidth = ref(window.innerWidth)

        function updateScreenWidth() {
            screenWidth.value = window.innerWidth;
            if (isMenuOpen.value && screenWidth.value > 768) {
                closeMenu()
            }
        }

        function closeMenu() {
            isMenuOpen.value = false;
        }

        function handleOutsideClick(event) {
            const dropdownElement = document.querySelector('.dropdown')
            const menuButtonElement = document.querySelector('.menu-button')
            const isClickedOutside = dropdownElement && !dropdownElement.contains(event.target) && !menuButtonElement.contains(event.target)
            if (isClickedOutside) {
                closeMenu()
            }
        }

        function handleScroll() {
            if (window.scrollY > 0 && isMenuOpen.value) {
                closeMenu();
            }
        }

        onMounted(() => {
            window.addEventListener('resize', updateScreenWidth)
            window.addEventListener('scroll', handleScroll)
            document.addEventListener('click', handleOutsideClick)
            updateScreenWidth();
        })

        onUnmounted(() => {
            window.removeEventListener('resize', updateScreenWidth)
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('click', handleOutsideClick)
        })

        return {
            isMenuOpen,
            screenWidth,
            closeMenu
        }
    }
}
</script>
<style scoped>
.custom-icon {
    height: 24px;
    width: 24px;
}

/* Header, Logo, Navigation Wrapper */
.main-header {
    min-height: 4vw;
    /*     height: 100px; */
    overflow: visible;
    position: relative;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.9);
}

.main-nav a i {
    color: white;
    font-size: 24px;
}

.logo1-container,
.logo2-container,
.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo1-container {
    justify-content: flex-start;
    align-self: center;
}

.icons-container {
    justify-content: flex-end;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    display: none;
}

.icons-container.open {
    transform: translateY(0);
    /* When open, the container moves to its original position */
}

.logo {
    max-height: 5.5rem;
    width: auto;

}

.logo2 {
    max-height: 77px;
    width: auto;
    display: none;
}

.logo2-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.navigation-icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
}

.main-nav a {
    text-decoration: none;
    color: #FBF8F8;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.menu-button {
    display: none;
    color: #FBF8F8;
    font-size: 2.5rem;
    cursor: pointer;
}

.dropdown {
    display: none;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    z-index: 1;
    width: 100%;
}

.dropdown.show {
    display: flex;
}

.dropdown a {
    color: #FBF8F8;
    text-decoration: none;
    margin-bottom: 1rem;
    font-family: average-sans, sans-serif;
}

.dropdown a:last-child {
    margin-bottom: 0.5rem;
}

.dropdown a:first-child {
    margin-top: 1rem;
}


@media (max-width: 977px) {
    .logo1-container {
        order: 0;
        width: 100%;
        justify-content: center;
        grid-column: 2;
    }

    .logo2-container {
        display: none;
    }

    .nav-container {
        grid-column: 3;
        padding-left: 18vw;
    }

    .menu-button {
        display: block;
    }

    .icons-container {
        position: fixed;
        top: 100px;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        transform: translateY(-100%);
    }
}

@media (min-width: 978px) {
    .logo-container {
        justify-content: flex-start;
    }

    .icons-container {
        display: flex;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    .logo2 {
        display: block;
    }

    .main-nav {
        display: flex;
        justify-content: space-around;
    }

    .main-nav a {
        margin-right: 20px;
    }

    .dropdown {
        display: none;
    }
}
</style>
