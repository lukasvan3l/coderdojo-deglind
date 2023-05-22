<script setup lang="ts">
import { onMount } from "svelte";
import { logEvent } from "firebase/analytics";

onMount(async () => {
  const {analytics} = await import('../lib/firebase');
  logEvent(analytics, 'index');
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
  <p>Met programmeerskills kun je een beetje magie aan de wereld toevoegen. 
    Bedenk een toffe game, website of handige app, en ga het bouwen!
    Ik help je graag op weg, welke kant je ook op wilt gaan.</p>
  <p>Tot vrijdag!</p>
  <p>Lukas</p>
</section>

<div class="columns">
  <div class="column">
    <article class="message is-primary">
      <div class="message-header">
        <p>Waar en wanneer?</p>
      </div>
      <div class="message-body content">
        <p>Elke maandag van 16:00 - 17:00.</p>
        <p>De Soos in de Glindster</p>
      </div>
    </article>

    <article class="message is-primary">
      <div class="message-header">
        <p>Wat moet ik meenemen?</p>
      </div>
      <div class="message-body content">
        <p>Goede ideëen, en verder niks!</p>
        <p>Er staan laptops klaar om mee aan de slag te gaan, gesponsored door <a href="https://www.q42.nl">Q42</a>.</p>
      </div>
    </article>

    <article class="message is-primary">
      <div class="message-header">
        <p>Hoe meld ik me aan?</p>
      </div>
      <div class="message-body content">
        <p>Stuur mij een mailtje: <a href="mailto:lukas@q42.nl">lukas@q42.nl</a>.</p>
      </div>
    </article>
  </div>
  <div class="column">
    <article class="message is-primary">
      <div class="message-header">
        <p>Wat gaan we doen?</p>
      </div>
      <div class="message-body content">
        <img alt="Scratch" src="/scratch.png" />
        <p>Een game bouwen! Met <a href="https://scratch.mit.edu/">Scratch</a>. Nog even geen ingewikkelde codes 
          intypen maar blokken slepen om een spel te maken.</p>
          <p class="has-text-centered"><a href="/projecten" class="button is-link">Bekijk voorbeelden</a></p>
          <p class="has-text-centered"><a href="/lesmateriaal" class="button is-link">Bekijk lesmateriaal</a></p>
        <!-- <p>Ken je Scratch al, en wil je wat nieuws proberen? Dan pakken we een MakeyMakey en maken we een eigen controller voor onze Scratch game!</p>
        <img alt="MakeyMakey" src="/banana.webp" /> -->
        <p>Of misschien maak je liever een eigen website? Dat kan ook, dan pakken we HTML en CSS van de plank. Alles mag :)</p>
      </div>
    </article>
  </div>
</div>

<section class="content">
  <h1 class="title">Over Lukas</h1>
  <p>Hoi, ik ben Lukas! Ik woon sinds anderhalf jaar in De Glind. Ik werk bij <a href="https://www.q42.nl">Q42</a> waar ik websites en games maak. Lesgeven vind ik ook gaaf, dus dat doe ik ook af en toe. Hieronder een begeleidend filmpje uit een lespakket waar ik aan heb meegewerkt. Je leert mij, en Q42, een beetje kennen.</p>
</section>

<iframe 
  class="block"
  src="https://www.youtube.com/embed/uY1ZaMtFYxc" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>

<section class="content">
  <h1 class="title">Over CoderDojo</h1>
  <p class="subtitle">Gratis leren programmeren voor kinderen in heel Nederland</p>
  <p>CoderDojo is een stichting die mensen ondersteunt in het geven van programmeerlessen. Hier haal ik veel inspiratie vandaan. Hoe ze zelf een CoderDojo verwoorden:</p>
  <p class="quote">Bij een CoderDojo leren jonge mensen, tussen de 5 en 17 jaar, om te programmeren, websites bouwen, apps ontwikkelen, programma's te maken, games te maken en meer. Dojo's worden opgezet en georganiseerd door vrijwilligers. Naast het leren programmeren, ontmoeten deelnemers ook anderen like-minded mensen, delen deelnemers waar ze aan aan het werken zijn en maken ze nieuwe dingen. CoderDojo maakt development en leren programmeren een leuke, sociale en kick ass ervaring. CoderDojo legt ook veel nadruk op open source en gratis software en heeft wereldwijd een breed netwerk aan vrijwilligers. CoderDojo heeft slecht één regel: "Boven Alles: Wees Cool!", pesten, liegen en mensen hun tijd verdoen is niet cool. Om aan een Dojo mee te doen kun je er een bij jou in de buurt zoeken of zelf een opstarten.</p>
  <p>Voor meer informatie, zie <a href="https://coderdojo.nl/">CoderDojo.nl</a>.</p>
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