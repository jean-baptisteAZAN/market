<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem} from 'flowbite-svelte'
    import logopPath from "$lib/assets/logo.png"
    let linkDonate = "https://donorbox.org/marketofflowers";
  </script>

  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src={logopPath}
        class="mr-3 h-6 sm:h-16"
        alt="Logo"
      />
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/mot-president" class="font-roboto cursor-pointer">Le mot de la présidente</NavLi>
      <NavLi id="nav-menu1" class="font-roboto cursor-pointer">Qui sommes-nous</NavLi>
      <NavLi href={linkDonate} class="font-roboto">Je donne</NavLi>
      <NavLi href="/contact" class="font-roboto">Rejoignez nous</NavLi>
    </NavUl>
  </Navbar>