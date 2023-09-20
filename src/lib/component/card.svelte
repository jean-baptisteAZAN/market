<script>
    export let img = '';
    export let href = '';
    export let title = '';
    export let description = '';
</script>

<div class="mb-4 border-solid border-2 rounded-xl w-[90%] flex flex-col items-center hover:drop-shadow-lg transition-all hover:bg-[#F0F0F0] border-[#F0F0F0] hover:scale-105 h-[90%] duration-600">
    <div class="h-[40%] w-full ">
        <img src="{img}" class="object-cover w-full rounded-xl h-[100%]"/>
    </div>
    <a href={href} class="px-8 h-[50%]">
        <h5 class="text-center mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{description}</p>
    </a>
</div>
