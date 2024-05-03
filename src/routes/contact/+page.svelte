<script>
    import Navbar from "$lib/component/navbar.svelte"
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

<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
    <div class="py-12 md:px-12">
      <div class="container mx-auto xl:px-32">
        <div class="grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 class="mb-12 text-3xl font-bold">Contactez-nous</h2>
              <form action="https://formspree.io/f/xeqbwzoq" method="post">
                <div class="relative mb-6">
                  <input type="text" name="name" class="peer block w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200" id="exampleInput90" placeholder="Name" required />
                  <label for="exampleInput90" class="pointer-events-none absolute top-0 left-3 truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200">Nom</label>
                </div>
                <div class="relative mb-6">
                  <input type="email" name="_replyto" class="peer block w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200" id="exampleInput91" placeholder="Email address" required />
                  <label for="exampleInput91" class="pointer-events-none absolute top-0 left-3 truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200">Adresse Email</label>
                </div>
                <div class="relative mb-6">
                  <textarea name="message" class="peer block w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" required></textarea>
                  <label for="exampleFormControlTextarea1" class="pointer-events-none absolute top-0 left-3 truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200">Message</label>
                </div>
                <button type="submit" class="inline-block w-full rounded px-6 pt-2.5 pb-2 text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-400 focus:outline-none focus:ring-0 bg-green-500 lg:mb-0">Envoyer</button>
              </form>
            </div>
          </div>
            <div class="md:mb-12 lg:mb-0">
              <div
                      class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.14777596174!2d2.344982676891588!3d48.855392400917054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e1d1d2ae53%3A0x62264edc3c9699d7!2sMarch%C3%A9%20aux%20Fleurs%20Reine%20Elizabeth%20II!5e0!3m2!1sfr!2sfr!4v1689843954323!5m2!1sfr!2sfr"
                        class="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameborder="0"
                        allowfullscreen></iframe>
              </div>
        </div>
      </div>
    </div>
    </section>
</div>
