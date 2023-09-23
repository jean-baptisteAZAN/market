<script>
    let linkDonate = "https://donorbox.org/marketofflowers";
</script>

<div class="bg-cover bg-no-repeat bg-center  h-full flex flex-col items-center justify-center bg-[url('$lib/assets/hero2.jpg')]">
<!--    <div class="bg-gradient-to-t w-full h-10 absolute top-0 from-transparent to-white">-->
<!--    </div>-->
    <div class="md:max-w-[100%] max-w-[80%] md:px-20 items-center justify-center md:-mt-[10%]">
        <div class="bg-green-800 bg-opacity-70 relative rounded-2xl flex flex-col justify-center items-center pt-10 pb-10 px-5">
            <h1 class="font-roboto text-center text-3xl uppercase text-white">
                marché aux fleurs
            </h1>
            <h1 class="font-roboto text-[40px] font-bold text-white text-center leading-[43px]">
                NOUS AVONS<br>BESOIN DE <span class="text-[50px] text-[white]">VOUS</span>
            </h1>
            <a href={linkDonate}  class="flex flex-row mt-8 justify-center items-center max-w-[90%] px-5 h-12 bg-white gap-3 rounded-full hover:scale-110 cursor-pointer transition-all duration-200">
                <img loading="lazy" src="/Icon-heart.png" alt="heart" class="w-5">
                <p class="font-montserrat font-bold text-green-800 md:text-lg lg:text-2xl"> Je fais un don</p>
            </a>
        </div>
    </div>
    <div class="absolute  bottom-0 md:bottom-5 z-20 w-[80px] h-[80px] rounded-full border-solid border-4 animate-bounce flex justify-center items-center">
        <img src="/arrow.png" alt="descendre" class="w-[60px]">
    </div>
</div>
