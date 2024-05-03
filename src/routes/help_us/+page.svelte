<script src="https://donorbox.org/widget.js" paypalExpress="false">
    import Navbar from "../../lib/component/navbar.svelte";
		import favico from '$lib/assets/logo.png';

</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Marché aux fleurs de Paris</title>
	<meta name="title" content="Appel aux dons pour le marché aux fleurs" />
	<meta name="description" content="Fleuristes du marché et spécialistes dévoués s'unissent pour défendre un projet qui préserve à la fois l'histoire et l'avenir de ce lieu unique. De nombreuses actions sont lancées pour que le Marché aux Fleurs reste accessible et appartienne pour l’éternité à tous les parisiens et amoureux du végétal." />

	<link rel="icon" href={favico} />
</svelte:head>

<Navbar/>

<div class="flex items-center justify-center">
<iframe src="https://donorbox.org/embed/marketofflowers"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style="max-width: 500px; min-width: 250px; max-height:none!important">
</iframe>
</div>
