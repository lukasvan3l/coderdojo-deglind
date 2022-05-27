<script setup lang="ts">
  import { onMount } from "svelte";
  import { logEvent } from "firebase/analytics";

  const data = [
    {
      date: 'Speciaal voor Frans!',
      projects: [
        { id: 697653418, explanation: 'Voor het 25 jarig jubileum van Frans!' },
        { id: 697658630, explanation: 'Een Frans doolhof. Gebruik de pijltjes om naar het blauwe doel te komen.' },
      ]
    },
    {
      date: 'Mei 2022',
      projects: [
        // { id: 697653418, explanation: 'Voor het 25 jarig jubileum van Frans!' },
        // { id: 697658630, explanation: 'Een Frans doolhof. Gebruik de pijltjes om naar het blauwe doel te komen.' },
        { id: 697666355, explanation: 'Gebruik de volgende toetsen en zoek de juiste volgorde: a, pijl omlaag, spatiebalk, pijl omhoog.' },
        { id: 697668118, explanation: 'Spatiebalk om te schieten, pijl omhoog om de overwinning te claimen!' },
        { id: 697669971, explanation: '' }
      ]
    },
      {
        date: 'April 2022',
        projects: [
          { id: 697664882, explanation: 'Gebruik de pijltjes, en pas op voor de creme drempels!' },
          { id: 669904572, explanation: '' },
          { id: 669902196, explanation: 'De bal volgt je muis. Start met je muis in de linkerbovenhoek, druk op spatie om het spel te starten!' },
          { id: 669899631, explanation: 'Gebruik je pijltjes toetsen om de bal te bewegen.' },
          { id: 669898479, explanation: 'Druk op de spatiebalk!' },
          { id: 669896889, explanation: '' },
      ]
    }
  ];

  let expandedDate = data[0].date;
  function expand(date) {
    expandedDate = date;
  }
  
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
  <p>Bekijk hier de projecten die we gemaakt hebben!<br />Klink op het groene vlaggetje om er eentje te starten.<br /><a href="/">Meer weten over de programmeerles?</a></p>
</section>

<div class="tabs">
  <ul>
    {#each data as d}
    <li class="{d.date === expandedDate ? 'is-active' : ''}"><a on:click={() => expand(d.date)}>{d.date}</a></li>
    {/each}
  </ul>
</div>

{#each data as d}
{#if d.date === expandedDate}
<section class="content">
  <h2>{d.date}</h2>
  <div>
    {#each d.projects as p}
    <iframe src="https://scratch.mit.edu/projects/{p.id}/embed" title="{p.id.toString()}" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
    <p>{p.explanation}</p>
    <hr />
    {/each}
  </div>
</section>
{/if}
{/each}

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