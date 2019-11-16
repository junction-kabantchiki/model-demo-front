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
          :data=sad
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
import ApiService from "@/common/api.service";

export default {
  name: "video-page",
  components: { VideoForm },
  props: {
    videoId: { type: String, required: true },
  },
  data() {
    return {
      sad: [],
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  created() {
    this.getSad().then(vals => this.sad = vals);
  },
  methods: {
    async playVideo() {
      await this.player.playVideo();
      // Do something after the playVideo command
    },
    playing() {
      // on play
    },
    async predictions() {
      let video = (await ApiService.video(this.videoId)).data.predictions;
      console.log(video);
      return video;
    },
    async getSad() {
      return (await this.predictions()).map(i => i.sad); 
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