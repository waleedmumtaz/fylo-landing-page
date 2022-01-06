<script>
  import Footer from './lib/footer.svelte'
  import Header from './lib/header.svelte'
  import MainContent from './lib/MainContent.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />
<MainContent />
<Footer />

<style>
</style>
