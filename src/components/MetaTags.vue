<template>
    <div></div>
</template>
  
<script>
export default {
    name: 'MetaTags',
    props: {
        ogImage: {
            type: String,
            required: true,
        },
        twitterImage: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.setMetaTags();
    },
    methods: {
        setMetaTags() {
            const head = document.head || document.getElementsByTagName('head')[0];

            // Create og:image meta tag
            const ogImageMeta = document.createElement('meta');
            ogImageMeta.setAttribute('property', 'og:image');
            ogImageMeta.setAttribute('content', this.ogImage);
            head.appendChild(ogImageMeta);

            // Create twitter:image meta tag
            const twitterImageMeta = document.createElement('meta');
            twitterImageMeta.setAttribute('name', 'twitter:image');
            twitterImageMeta.setAttribute('content', this.twitterImage);
            head.appendChild(twitterImageMeta);
        },
    },
};
</script>
  