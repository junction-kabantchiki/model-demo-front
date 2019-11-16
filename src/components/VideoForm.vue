<template>
  <form>
    <label class="label">YouTube link</label>&nbsp;

    <input class="input" type="text" v-model="videoUrl" />&nbsp;
    
    <input class="button is-primary margin-bottom" type="submit" @click.prevent="submit" />
  </form>
</template>

<script>
import urlParser from "js-video-url-parser";

export default {
  name: "VideoForm",
  data() {
    return {
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
  },
  methods: {
    submit() {
      let res = urlParser.parse(this.$data.videoUrl);
      this.$router.push({
        name: "video-page",
        params: { videoId: res.id }
      });
    },
  },
};
</script>
