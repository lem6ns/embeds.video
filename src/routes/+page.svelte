<script lang="ts">
    let url = "";

    const copy = () => {
        const copyEl = document.querySelector(".copy");
        const image = document.querySelector("#image");
        image?.setAttribute("src", "/copied.png");
        navigator.clipboard.writeText(copyEl?.textContent ?? "");
        setTimeout(() => {
            image?.setAttribute("src", "/favicon.png");
        }, 1000)
    }
</script>

<div class="wrapper">
	<div>
        <img id="image" src="/favicon.png" alt="Film Roll Emoji">
        <h1>embeds.video</h1>
        <p>a service to embed files bigger than 50MB on discord or AV1 encoded files. <a href="/docs">documentation.</a></p>
        <br>
        <br>

        <input type="text" bind:value={url} placeholder="direct video link here">
        <p class="copy" on:click={() => copy()} on:keypress={() => copy()}>https://embeds.video/{url}</p>
    </div>
</div>

<style>
    input {
        padding: 10px;
        text-align: center;
        border: 2px solid gray;
        border-radius: 30px;
        background: black;
        color: white;
    }

	.wrapper {
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100vh;
		align-items: center;
		justify-items: center;
	}

    .copy {
        cursor: pointer;
    }
</style>
