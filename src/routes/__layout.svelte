<script>
import NavBar from "$lib/NavBar.svelte";

</script>

<div class="box layout-container">
  <NavBar />

  <slot></slot>
</div>

<style>
.layout-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>