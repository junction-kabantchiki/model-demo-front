<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">We Hear You</h1>
        <p>Voice analysis demo</p>
      </div>
    </div>
    <div class="container page">
      <VideoForm />
    </div>
  </div>
</template>

<script>
import urlParser from "js-video-url-parser";
import VideoForm from "@/components/VideoForm";

export default {
  name: "home",
  components: { VideoForm },
};
</script>
