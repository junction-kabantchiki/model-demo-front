<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">We Hear You</h1>
        <p>Anger detection demo. <a href="https://docs.google.com/presentation/d/1_VYIBujfyY4zuhJbMxfWaP9HFZ0pEx6uicuaJa0Jpzo">Slides</a></p>
      </div>
    </div>
    <div class="container page">
      <VideoForm />
    </div>
  </div>
</template>

<script>
import VideoForm from "@/components/VideoForm";

export default {
  name: "home",
  components: { VideoForm },
};
</script>

<style scoped>
  .banner {
    background-color: #3f6055!important;
    padding-top: 1em!important;
    padding-bottom: 1em!important;
  }
</style>