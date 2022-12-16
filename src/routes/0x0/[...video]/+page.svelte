<script>
	import { page } from '$app/stores';
	const { video } = $page.params;
</script>

<svelte:head>
    <meta property="og:image" content="https://embeds.video/black.jpg" />
	<meta property="og:type" content="video.other" />
	<meta property="og:video:url" content="https://0x0.st/{video}" />
	<meta property="og:video:width" content="1280" />
	<meta property="og:video:height" content="720" />
</svelte:head>

<!-- svelte-ignore a11y-media-has-caption -->
<video src="https://0x0.st/{video}" controls autoplay />

<style>
	/* full-sized  container that fills up the page */
	video {
		height: 100%;
		width: 100%;
	}
</style>
