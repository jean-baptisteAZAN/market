<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Footer from "$lib/component/footer.svelte"
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

<div class="flex flex-col items-center justify-center">
    <h1 class="font-roboto text-5xl mt-10">
        <b>Le mot du président</b>
    </h1>
    <div class="w-full flex flex-col md:flex-row items-center justify-center font-roboto text-3xl mt-10 md:px-20">
        <h4 class="w-full md:w-[50%] px-10 md:pr-20">
            Derrière le projet de rénovation du Marché aux Fleurs se cache une réalité bien plus sombre : la Ville de Paris envisage d'évincer ses commerçants historiques, menaçant ainsi l'existence même de ce lieu unique.
            Loin d'être une simple rénovation, ce projet semble dissimuler des intentions cachées qui risquent de dénaturer l'âme du Marché aux Fleurs,
        </h4>
        <img src="/phtos/president.jpeg" alt="img" class="w-full md:w-[50%] h-[50rem] rounded-2xl">
    </div>
    <div class="w-full flex flex-col md:flex-row items-center justify-center font-roboto text-3xl mt-20 md:px-20 ">
        <img src="/phtos/pic4.jpeg" alt="img" class="w-full md:w-[50%] rounded-2xl">
        <h4 class="w-full md:w-[50%] px-10 md:pr-20">
            Unis au sein d'une association de défense, ces passionnés du Marché aux Fleurs s'engagent dans une lutte solidaire pour sauvegarder ce site unique, véritable joyau du patrimoine immatériel français.
            Bien plus qu'un simple lieu de commerce, le Marché aux Fleurs est une institution indissociable de l'âme de Paris, une source d'inspiration pour des artistes illustres comme Juliette Gréco, Robert Doisneau, Paul Verlaine et Victor Hugo.
        </h4>
    </div>
    <div class="w-full flex flex-col md:flex-row items-center justify-center font-roboto text-3xl mt-10 md:px-20">
        <h4 class="w-full md:w-[50%] px-10 md:pr-20">
            Le marché aux fleurs Reine&nbsp;Elizabeth&nbsp;II accueille le long de la Seine au cœur de l’Ile de la cité
            une activité de ventes de fleurs actuellement exercée par une dizaine de commerçants.
            Faute d’investissements depuis des décennies, le marché aux fleurs décline peu à peu.
        </h4>
        <img src="/phtos/pic5.jpeg" alt="img" class="w-full md:w-[50%] h-[50rem] rounded-2xl">
    </div>
    <div class="w-full flex flex-col md:flex-row items-center justify-center font-roboto text-3xl mt-10 md:px-20 mb-5">
        <img src="/phtos/pic6.jpg" alt="img" class="w-full md:w-[50%] rounded-2xl">
        <h4 class="w-full md:w-[50%] px-10 md:pr-20">
            Pour les Parisiens et les touristes du monde entier, le Marché aux Fleurs représente
            un sanctuaire de la mémoire, un havre de paix et de beauté, une ode aux senteurs et aux couleurs qui
            font l'essence même de Paris. C'est dans ses allées parfumées qu'ont pris vie des chansons inoubliables,
            des photographies iconiques et des poèmes empreints de l'essence même de Paris.
            Supprimer ce lieu magique serait une perte irréparable pour le patrimoine culturel de la ville, une trahison envers les générations passées
            et présentes qui ont chéri ce marché unique au monde.
        </h4>
    </div>
</div>
<Footer/>
