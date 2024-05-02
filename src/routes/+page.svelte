<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Hero from "$lib/component/hero.svelte";
    import Footer from "$lib/component/footer.svelte";
    import {onMount} from "svelte";
    import My_card from "$lib/component/card.svelte";

    onMount(() => {
        const updateParticlesToShow = () => {
            if (window.innerWidth <= 700) {
                particlesToShow = 1;
            } else if (window.innerWidth <= 1200)
                particlesToShow = 2;
            else {
                particlesToShow = 3;
            }
        };
        updateParticlesToShow();

        window.addEventListener('resize', updateParticlesToShow);

        onDestroy(() => {
            window.removeEventListener('resize', updateParticlesToShow);
        });
    });

    let cards = [
        {
            img: "/phtos/edgar.jpg",
            href: "/",
            title: "Un projet porté par une association",
            description: 'Les fleuristes du Marché aux Fleurs se sont structurés au sein d’une association. <br>Elle est secondée par des experts juridiques et une équipe de designer. L’équipe va continuer à s’étoffer d’autres spécialistes'
        },
        {
            img: "/phtos/Marche-aux-fleurs-01092023-12.jpg",
            href: "/",
            title: "Un projet reposant sur un appel aux dons.",
            description: 'L’objectif   de   cet   appel   participatif,   via   une ' +
            '  plateforme   sécurisée   est   double. Réunir le capital pour proposer un ' +
            'contre-projet à la Ville de Paris et financer les travaux   de   rénovation   du   Marché   aux   Fleurs. <br>'
        },
        {
            img: "/phtos/reine.jpg",
            href: "/",
            title: "Un projet reposant sur la création d'une communauté des amoureux du marché aux fleurs",
            description: 'Protéger le marché aux Fleurs est un acte citoyen, affectif et solidaire. Pour cela, nous   souhaitons   regrouper   et   consolider   la   communauté   des   amoureux  du Marché aux Fleurs. A travers les réseaux-sociaux et d’évènements, nous vous ferons partager les différents moments de cette aventure.'
        },
    ];

</script>

<div class="h-screen w-screen overflow-hidden">
    <Navbar/>
    <Hero/>
</div>

<div class="px-[10%]">
    <h1 class="mt-20 text-center text-[40px] font-roboto font-bold uppercase">
        UN APPEL AUX DONS POUR PROTEGER LE MARCHE AUX
        FLEURS
    </h1>
    <h2 class="text-center text-[20px] md:text-[30px] font-roboto mt-5">
        Avec   l’appui   des   fleuristes   du   marché   et   de   spécialistes,   nous   défendons   un
        projet préservant l’histoire et l’avenir de ce lieu exceptionnel. Nous avons donc
        lancé de nombreuses actions pour que ce projet se réalise et que le Marché aux
        fleurs   reste   accessible   et   appartienne   pour   l’éternité   à   tous   les   parisiens   et
        amoureux du végétal.
    </h2>
</div>

<div class="w-screen mt-10  justify-center items-center  hidden md:flex">
    {#each cards as cardItem, index}
        <div class="flex justify-center items-center w-1/3">
            <My_card img={cardItem.img} href={cardItem.href} title={cardItem.title} description={cardItem.description}/>
        </div>
    {/each}
</div>

<div class="mt-10  mb-10 flex flex-col items-center justify-center">
    <div class="w-full flex flex-col justify-center items-center md:flex-row">
        <div class="w-[90%] md:w-[50%] flex items-center justify-center">
            <h4 class=" mb-5 md:mb-0 text-center md:text-left font-roboto md:px-[10%]">
                <b class="text-xl">MOBILISEZ VOUS A NOS COTES DANS CE COMBAT</b><br/>
                nous avons besoin de vous pour donner un nouvel élan au marché aux fleurs et pour le défendre en justice si nécessaire
                Participez étroitement à définir le concept sur lequel nous fonderons le marché pour le
                futur dans le respect de ce qu’il est depuis toujours: un lieu romantique unique et
                charmant.
                Tout sauf une galerie marchande à ciel ouvert.
            </h4>
        </div>
        <img class="w-[80%] h-[40rem] md:mr-10 md:w-[50%] rounded-2xl" src="/phtos/shawnee.jpg" alt="img">
    </div>
</div>

<Footer/>

