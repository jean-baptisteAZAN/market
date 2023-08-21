<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import logopPath from "$lib/assets/logo.png"
  </script>

  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src={logopPath}
        class="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Marché aux fleurs Elisabeth II
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi id="nav-menu1" class="cursor-pointer">Qui sommes-nous</NavLi>
      <NavLi href="/">Le Projet</NavLi>
      <NavLi href="/help_us">Aidez-nous</NavLi>
      <NavLi href="/contact">Rejoignez nous</NavLi>
      <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
        <DropdownItem>Le mot de la présidente</DropdownItem>
        <DropdownItem>Historique</DropdownItem>
      </Dropdown>
    </NavUl>
  </Navbar>