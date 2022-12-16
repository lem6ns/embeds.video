<script>
	import { page } from '$app/stores';
	let { url } = $page.params;
	url = url.replace(/https?:\/\/(cdn|media)\.discordapp\.(com|net)/, "https://embeds.video/discproxy")
</script>

<svelte:head>
    <meta property="og:image" content="https://embeds.video/black.jpg" />
    <meta property="og:type" content="video.other">
    <meta property="og:video:url" content="{url}">
    <meta property="og:video:width" content="1280">
    <meta property="og:video:height" content="720">
</svelte:head>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={url} controls autoplay />

<style>
	/* full-sized  container that fills up the page */
	video {
		height: 100%;
		width: 100%;
	}
</style>
