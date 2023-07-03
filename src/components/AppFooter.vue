<template>
    <footer class="main-footer">
        <p>© 2023 Temple Mount Discord Server | All rights reserved</p>
        <nav class="navigation-icons footer-nav">
            <a href="https://discord.gg/templemount" target="_blank" rel="noopener"
                aria-label="Link to Temple Mount Discord"><i class="fab fa-discord"></i></a>
            <a href="https://www.youtube.com/@templemountofficial/videos" target="_blank" rel="noopener"
                aria-label="Link to Temple Mount Youtube"><i class="fab fa-youtube"></i></a>
            <a href="https://www.bitchute.com/channel/templemountpodcast/" target="_blank" rel="noopener"
                aria-label="Link to Temple Mount Bitchute"> <img class="fab custom-icon"
                    :src="require('@/assets/bitchute_icon.png')" alt="Bitchute Logo"></a>
            <a href="https://www.zazzle.com/store/templemount" target="_blank" rel="noopener"
                aria-label="Link to Temple Mount Shop"><i class="fas fa-shopping-cart"></i></a>
        </nav>
    </footer>
</template>
  
<script>
export default {
    name: 'AppFooter'
}
</script>
  
<style scoped>
.main-footer {
    background-color: #333;
    color: #FBF8F8;
    text-align: center;
    padding: 1vw;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
}

.navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-bottom: 1vw;
}

.navigation-icons a i {
    color: #FBF8F8;
    font-size: 18px;
}

.custom-icon {
    height: 24px;
    width: 24px;
}</style>