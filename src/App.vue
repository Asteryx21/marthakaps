<template>
  <nav class="navbar">
    <RouterLink to="/" class="nav-link" active-class="active-nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link" active-class="active-nav-link">About</RouterLink>
    <!-- <RouterLink to="/unsynced" class="nav-link">Unsynced List</RouterLink> -->
  </nav>
  <RouterView />
</template>
