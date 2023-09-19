<script>
    import hero_src from "$lib/assets/hero.jpg"
    let linkDonate = "https://donorbox.org/marketofflowers";
</script>

<div class="bg-cover bg-no-repeat bg-center h-screen  bg-[url('$lib/assets/hero2.jpg')]">
    <div class="w-[40%] flex flex-col items-center justify-center">
        <h1 class="text-amber-50 text-6xl font-roboto pt-40 px-20">
            Market of Flowers Elisabeth II, Paris
        </h1>
        <h1 class="font-roboto text-4xl text-amber-50 mt-20 ml-20">
            NOUS AVONS BESOIN DE VOUS
        </h1>
        <a href={linkDonate}  class="flex flex-row justify-center items-center w-48 h-12 bg-gradient-to-r from-green-900 to-green-400 gap-3 rounded-full hover:scale-110 cursor-pointer transition-all duration-200">
            <img src="/Icon-heart.png" alt="heart" class="w-5">
            <p class="font-montserrat font-bold text-white md:text-lg lg:text-2xl"> Je donne</p>
        </a>
    </div>
</div>