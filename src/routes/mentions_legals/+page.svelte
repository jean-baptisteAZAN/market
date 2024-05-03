<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Footer from "$lib/component/footer.svelte"
    import favico from '$lib/assets/logo.png';
    let pdfUrl = '/status.pdf';
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Marché aux fleurs de Paris</title>
    <meta name="title" content="Appel aux dons pour le marché aux fleurs" />
    <meta name="description" content="Fleuristes du marché et spécialistes dévoués s'unissent pour défendre un projet qui préserve à la fois l'histoire et l'avenir de ce lieu unique. De nombreuses actions sont lancées pour que le Marché aux Fleurs reste accessible et appartienne pour l’éternité à tous les parisiens et amoureux du végétal." />

    <link rel="icon" href={favico} />
</svelte:head>

<Navbar/>

<div class="flex justify-center items-center h-screen">
    <object data={pdfUrl} type="application/pdf" class="w-full h-full">
        <p>
            Il semble que votre navigateur ne peut pas afficher les PDFs.
            Pas de problème, vous pouvez <a href={pdfUrl}>télécharger le PDF</a> à la place.
        </p>
    </object>
</div>

<Footer/>
