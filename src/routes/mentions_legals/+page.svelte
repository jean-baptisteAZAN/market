<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Footer from "$lib/component/footer.svelte"
    let pdfUrl = '/status.pdf';
</script>

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