<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">We Hear You</h1>
        <p>Voice analysis demo</p>
      </div>
    </div>
    <div class="container page">
      <VideoForm :videoUrl="`https://www.youtube.com/watch?v=${videoId}`" />
      <div class="video-wrapper">
        <youtube :video-id="videoId" ref="youtube" @playing="playing" class="player" ></youtube>
      </div>
      <div class="plot-wrapper">
        <trend
          :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
          :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
          auto-draw
          smooth
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoForm from "@/components/VideoForm";

export default {
  name: "video-page",
  components: { VideoForm },
  props: {
    videoId: { type: String, required: true },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    async playVideo() {
      await this.player.playVideo();
      // Do something after the playVideo command
    },
    playing() {
      // on play
    },
  },
};
</script>

<style>
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .plot-wrapper {
    position: relative;
    padding-bottom: 25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .plot-wrapper svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>