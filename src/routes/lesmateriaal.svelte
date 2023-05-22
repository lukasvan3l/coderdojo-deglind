<script setup lang="ts">
  import { onMount } from "svelte";
  import { logEvent } from "firebase/analytics";

  onMount(async () => {
    const {analytics} = await import('../lib/firebase');
    logEvent(analytics, 'lesmateriaal');
  })
</script>

<section class="hero">
  <div class="hero-body block">
    <h1 class="title">
      Hup, aan de slag! 🚀
    </h1>
    <!-- <p class="subtitle">Programmeren geeft je superpowers!</p> -->
  </div>
</section>

<section class="content handwritten">
  <p>Een paar voorbeeld projecten om mee aan de slag te gaan.<br />Voor als je je zelf even niet zo creatief voelt :)<br /><a href="/">Meer weten over de programmeerles?</a></p>
</section>

<hr />

<section class="content">
  <h2>Doolhof</h2>
  <p>Een leuke inkomer: het doolhof!</p>
  <p>Je leert de Scratch omgeving kennen, sprites maken en programmeren, en op de achtergrond tekenen.</p>
  <iframe src="https://scratch.mit.edu/projects/669899631/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <p><a class="button is-link" href="/doolhof.pdf">Download de PDF.</a></p>
</section>

<hr />

<section class="content">
  <h2>Asteroids</h2>
  <p>Een favoriet van mij: meteorieten neerschieten, met een twist!</p>
  <p>Je leert veel: bewegen, schieten, raken, botsen... Speel hier een voorbeeld:</p>
  <iframe src="https://scratch.mit.edu/projects/849847481/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <p><a class="button is-link" href="https://www.youtube.com/playlist?list=PLy4zsTUHwGJKFO9kik6tBxkZnmujKIsWB">Youtube les (Engels)</a></p>
  <p><a class="button is-link" href="https://scratch.mit.edu/projects/548866331/">Starter project</a></p>
</section>

<hr />

<section class="content">
  <h2>Spring spel</h2>
  <p></p>
  <p>Je leert veel: bewegen, schieten, raken, botsen... Speel hier een voorbeeld:</p>
  <img src="/springer.png" alt="spring spel" />
  <p><a class="button is-link" href="https://www.makersbase.nl/projecten-1/een-spring-spel-maken-in-scratch">Uitleg pagina</a></p>
</section>

<hr />

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