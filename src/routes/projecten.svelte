<script setup lang="ts">
  import { onMount } from "svelte";
  import { logEvent } from "firebase/analytics";
  
  onMount(async () => {
    const {analytics} = await import('../lib/firebase');
    logEvent(analytics, 'projecten');
  })
</script>

<section class="hero">
  <div class="hero-body block">
    <h1 class="title">
      Programmeren geeft je superpowers!
    </h1>
    <!-- <p class="subtitle">Programmeren geeft je superpowers!</p> -->
  </div>
</section>

<section class="content handwritten">
  <p>Bekijk hier de projecten die we gemaakt hebben!</p>
  <p>Klink op het groene vlaggetje om er eentje te starten.</p>
</section>

<section class="content">
  <h2 class="title is-3">1 April 2022</h2>
  <iframe src="https://scratch.mit.edu/projects/669904572/embed" title="" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <hr />
  <iframe src="https://scratch.mit.edu/projects/669902196/embed" title="" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <p>De bal volgt je muis. Start met je muis in de linkerbovenhoek, druk op spatie om het spel te starten!</p>
  <hr />
  <iframe src="https://scratch.mit.edu/projects/669899631/embed" title="" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <p>Gebruik je pijltjes toetsen om de bal te bewegen.</p>
  <hr />
  <iframe src="https://scratch.mit.edu/projects/669898479/embed" title="" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <p>Druk op de spatiebalk!</p>
  <hr />
  <iframe src="https://scratch.mit.edu/projects/669896889/embed" title="" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <hr />
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

  .handwritten {
    font-family: 'Caveat', cursive;
    font-size: 1.7rem;
  }

  .hero-body {
    padding-left: 1rem;
  }
  iframe {
    width: 100%;
    height: 428px;
  }

  .quote {
    font-style: italic;
    padding: 0 2rem;
    margin-left: 1rem;
    border-left: 4px solid #ccc;
  }
</style>