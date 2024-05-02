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
            title: "Unis au sein d'une association dynamique, les fleuristes du Marché aux Fleurs ont su s'organiser et se structurer.",
            description: 'Cette association bénévole est épaulée par une équipe d\'experts juridiques et de designers talentueux. Afin d\'enrichir ses compétences et d\'apporter une expertise toujours plus pointue au projet de sauvegarde du marché, l\'équipe continue de s\'agrandir en accueillant de nouveaux spécialistes.'
        },
        {
            img: "/phtos/img.png",
            title: "Un projet reposant sur un appel aux dons.",
            description: 'Cet appel participatif, lancé sur une plateforme sécurisée, poursuit un double objectif : lever les fonds nécessaires pour soumettre à la Ville de Paris un contre-projet alternatif et financer les travaux de rénovation du Marché aux Fleurs'
        },
        {
            img: "/phtos/reine.jpg",
            title: "Un projet reposant sur la création d'une communauté des amoureux du marché aux fleurs",
            description: 'Protéger le marché aux Fleurs est un acte citoyen, affectif et solidaire. Pour cela, nous   souhaitons   regrouper   et   consolider   la   communauté   des   amoureux  du Marché aux Fleurs. A travers les réseaux-sociaux et d’évènements, nous vous ferons partager les différents moments de cette aventure.'
        },
    ];

</script>

<div class="h-screen w-screen overflow-hidden">
    <Navbar/>
    <Hero/>
</div>

<div id="Description" class="px-[10%]">
    <h1 class="mt-20 text-center text-[40px] font-roboto font-bold uppercase">
        UN APPEL AUX DONS POUR PROTEGER LE MARCHE AUX
        FLEURS
    </h1>
    <h2 class="text-center text-[20px] md:text-[30px] font-roboto mt-5">
        Fleuriste du marché et spécialistes dévoués s'unissent pour défendre un
        projet qui préserve à la fois l'histoire et l'avenir de ce lieu unique.
        De nombreuses actions sont lancées pour que le Marché aux Fleurs reste
        accessible et appartienne pour l’éternité à tous les parisiens et amoureux
        du végétal.
    </h2>
</div>

<div class="w-screen mt-10  justify-center items-center  hidden md:flex">
    {#each cards as cardItem, index}
        <div class="flex justify-center items-center w-1/3">
            <My_card img={cardItem.img} title={cardItem.title} description={cardItem.description}/>
        </div>
    {/each}
</div>

<div class="mt-10  mb-10 flex flex-col items-center justify-center">
    <div class="w-full flex flex-col justify-center items-center md:flex-row">
        <div class="w-[90%] md:w-[50%] flex items-center justify-center">
            <h4 class=" mb-5 md:mb-0 text-center md:text-left font-roboto md:px-[10%]">
                <b class="text-xl">MOBILISEZ VOUS A NOS COTES DANS CE COMBAT</b><br/>
                Ensemble, sauvons le Marché aux Fleurs !
                Nous avons besoin de vous pour donner un nouvel élan au marché aux fleurs et pour le défendre en justice si nécessaire.
                Votre voix et votre soutien sont essentiels pour préserver ce lieu unique et romantique, menacé par des projets de transformation inacceptables.
                Faites connaître notre cause. Parlez du Marché aux Fleurs à vos amis, votre famille et vos réseaux sociaux.Ensemble, nous pouvons faire la différence !
            </h4>
        </div>
        <img class="w-[80%] h-[40rem] md:mr-10 md:w-[50%] rounded-2xl" src="/phtos/shawnee.jpg" alt="img">
    </div>
</div>

<Footer/>

