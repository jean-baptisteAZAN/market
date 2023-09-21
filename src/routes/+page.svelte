<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Hero from "$lib/component/hero.svelte";
    import Footer from "$lib/component/footer.svelte";
    import My_card from "$lib/component/card.svelte";
    import Carousel from "svelte-carousel";
    import {browser} from "$app/environment";
    import Timeline from "$lib/component/Timeline.svelte";
    let carousel;
    let cards = [
        {
            img: "/phtos/Marche-aux-fleurs-01092023-08.jpg",
            href: "/",
            title: "Première étape",
            description: "C’est d’abord   se structurer  et en conséquence adopter des statuts conformes à notre ambition de porter un contreprojet face à la  ville de PARIS"
        },
        {
            img: "/willi.jpeg",
            href: "/",
            title: "Deuxième étape",
            description: "Choisir des prestataires compétents pour nous défendre et bâtir notre projet alternatif ce que nous avons fait en choisissant WILLIAM AZAN  comme avocat spécialisé en droit public ;MAURIZIO ET TAL LANCMAN comme directeurs artistiques ."
        }, {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Troisième étape",
            description: "Bâtir un site internet pour nous présenter et collecter des fonds via une plateforme sécurisée en totale transparence avec vous. C’est la mission que nous avons confiée à  CAROLE DUPARC , huissier audiencier du Tribunal de Commerce de PARIS."
        }, {
            img: "/phtos/Marche-aux-fleurs-01092023-22.jpg",
            href: "/",
            title: "Dernière étape",
            description: "Se doter d’un compte INSTAGRAM  et d’un compte FACEBOOK qui seront nos lignes de vie et de partages avec vous"
        }
    ];

    let cards2 = [
        {
            img: "/phtos/Marche-aux-fleurs-01092023-20.jpg",
            href: "/",
            title: "Choisir des ambassadeurs de renom",
            description: "pour nous faire connaitre tant en France  que sur la scène internationale ."
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Inscrire le marché aux fleurs",
            description: "et ses artisans et commerçants au patrimoine immatériel de l’UNESCO."
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Créer un musée virtuel",
            description: "du marché aux fleurs en diffusant la parole et l’image de ses amoureux d’hier et d’aujourd’hui."
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Définir notre projet de rénovation",
            description: "pour assurer un futur au marché aux fleurs"
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Le porter devant la ville de PARIS",
            description: "et le cas échéant le défendre en justice"
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-01.jpg",
            href: "/",
            title: "Et si nous ne parvenons pas à nous imposer",
            description: "utiliser le fruit de vos dons pour proposer à nos salariés des indemnités honorables de licenciement et aux commerçants qui le souhaitent une reconversion digne ."
        },
    ];

</script>

<div class="h-screen w-screen overflow-hidden">
    <Navbar/>
    <Hero/>
</div>

<div class="px-[10%]">
    <h1 class="mt-20 text-center text-[40px] font-roboto font-bold">
        NOTRE PROJET
    </h1>
    <h2 class="text-center text-[30px] font-roboto mt-5">
        Avec l’appui des meilleurs spécialistes nous voulons préserver l’environnement et l’histoire de ce lieu
        exceptionnel pour chacun d’entre vous.
        Nous avons donc engagé de nombreuses actions destinées à nous renforcer avec le soutien de chacun d’entre vous.
    </h2>
</div>

<div class=" w-screen mt-10 flex justify-center items-center overflow-hidden">
    {#if browser}
        <Carousel
                bind:this={carousel}
                particlesToShow={3}
                particlesToScroll={1}
                arrows={false}
                autoplay
                autoplayDuration={2000}
                dots={false}
        >
            {#each cards as cardItem, index}
                <div class="flex justify-center items-center">
                    <My_card img={cardItem.img} href={cardItem.href} title={cardItem.title}
                             description={cardItem.description}/>
                </div>

            {/each}
        </Carousel>
    {/if}
</div>
<div class="mt-10  mb-10 flex flex-col items-center justify-center">
    <div class="w-full flex flex-row">
        <div class="w-[50%] flex items-center justify-center">
            <h4 class="font-roboto md:px-32">
                <b>MOBILISEZ VOUS A NOS COTES DANS CE COMBAT</b>
                <br>Nous avons besoin de vous pour donner un nouvel élan au marché aux fleurs et pour le défendre en
                justice
                <br>Participez étroitement à définir le concept sur lequel nous fonderons le marché pour le futur dans
                le respect de ce qu’il est depuis toujours: un lieu romantique unique et charmant. Tout sauf une galerie
                marchande à ciel ouvert.
            </h4>
        </div>
        <img class="w-[50%] rounded-2xl" src="/phtos/Marche-aux-fleurs-01092023-03.jpg" alt="img">
    </div>
</div>
<h1 class="mt-10 text-center text-[40px] font-roboto font-bold">
    Mais les prochaines étapes sont décisives. !
</h1>
<Timeline/>
<Footer/>
