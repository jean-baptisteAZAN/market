<script>
    import logopPath from "$lib/assets/logo.png"
</script>

<footer class="bg-white shadow-2xl pb-10 pt-3 ">
    <div class="w-screen max-h-[400px] flex flex-col md:flex-row justify-center items-center">
        <a href="/" class="flex items-center">
            <img src={logopPath} class="h-24 md:h-32 mr-3" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>

        <div class="w-[70%] md:w-[1px] h-[1px] md:h-[130px] mt-2 md:mt-0 md:ml-[5%] mt-3 bg-gray-700 bg-opacity-40 rounded-full">

        </div>

        <div class=" flex flex-col justify-center items-center mt-2 md:mt-0 md:ml-[5%]">
            <h2 class="md:mb-6 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium text-center">
                <li class="mb-2 md:mb-4">
                    <a href="/mentions_legals" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>

        <div class="w-[70%] md:w-[1px] h-[1px] md:h-[130px] mt-2 md:mt-0 md:ml-[5%] mt-3 bg-gray-700 bg-opacity-40 rounded-full">

        </div>

        <div class=" flex flex-col justify-center items-center mt-2 md:mt-0 md:ml-[5%] gap-4">
            <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white border-solid border-2 border-gray-500 rounded-full p-2 hover:scale-125 transition-all">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                </svg>
            </a>

            <a href="https://donorbox.org/marketofflowers" target="_blank">
                <button class="bg-green-600 px-3 py-1 md:px-5 md:py-3 rounded-xl text-[15px] md:text-[20px] text-white font-roboto font-bold hover:scale-110 hover:bg-white hover:border-solid hover:border-4 hover:border-green-600 hover:text-green-600 transition-all">
                    Soutenir le <br>
                    marché au fleurs
                </button>
            </a>

        </div>

    </div>
</footer>

<!--

<footer class="bg-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                  <img src={logopPath} class="h-32 mr-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/mentions_legals" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-end">
          <div class="flex mt-4 space-x-5 sm:justify-center items-end sm:mt-0">
              <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

-->
