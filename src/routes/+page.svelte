<script>
    import Navbar from "$lib/component/navbar.svelte";
    import Hero from "$lib/component/hero.svelte";
    import Footer from "$lib/component/footer.svelte";
    import { Card, Button, Toggle } from 'flowbite-svelte';
    let hCard = false;
</script>

<div class="h-screen w-screen">
    <Navbar/>
    <Hero/>
</div>
<div class="mt-20  flex flex-col items-center justify-center">
    <Card img="/phtos/Marche-aux-fleurs-01092023-01.jpg" href="/" class="mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nous avons besoins de vous</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Les commerçants et les artisans du MARCHE AUX FLEURS REINE ELIZABETH II  sont confrontés à un défi sans précédent .
            <br>La ville de PARIS entend les exclure de ce lieu unique et préservé afin de construire une nouvelle halle commerciale.
            <br>Tout ce qui fait l’esprit et l’âme du marché aux fleurs auxquels des générations de parisiens et de touristes étrangers amoureux de PARIS va disparaitre et les commerçants et artisans également . </p>
    </Card>
    <div class="w-full flex flex-row">
       <div class="w-[50%] flex items-center justify-center">
           <h4 class="font-roboto px-20">
               <b>MOBILISEZ VOUS A NOS COTES DANS CE COMBAT</b>
               <br>Nous avons besoin de vous pour donner un nouvel élan au marché aux fleurs et pour le défendre en justice
               <br>Participez étroitement à définir le concept sur lequel nous fonderons le marché pour le futur dans le respect de ce qu’il est depuis toujours : un lieu romantique unique et charmant. Tout sauf une galerie marchande à ciel ouvert.
           </h4>
       </div>
        <img class="w-[50%] rounded-2xl" src="/phtos/Marche-aux-fleurs-01092023-03.jpg" alt="img">
    </div>
</div>
<Footer/>
