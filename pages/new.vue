<template lang="pug">
  section.container
    .contents
      .contents-center
        .icon
          img.icon-img(src="~/assets/images/hero1.png")
        .name
          span {{ score.name }}
        .point
          span {{ score.point }} pt
</template>

<script>
export default {
  data() {
    return {
      score: {
        name: '',
        point: ''
      }
    };
  },
  created() {
    const { name, point } = this.$route.query;
    this.score = { name, point };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$router.push('/');
      }, 5000);
    });
  }
};
</script>

<style lang="postcss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, #2196f3, #8dd6f1);
  animation: appearance 1.2s linear forwards 1s;
  transform: rotateY(90deg);
  display: flex;
  justify-content: center;
  align-items: center;

  .contents {
    width: 40%;
    height: 40vh;
    background: #fff;
    animation: fade 1s linear forwards 2.5s;
    opacity: 0;
    margin-bottom: -100px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px #cfcfcf;
    display: flex;
    justify-content: center;
    align-items: center;

    .contents-center {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      color: rgba(0, 138, 255, 0.77);
      animation: inner-fade 1.2s linear forwards 3.5s;
      opacity: 0;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        .icon-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid #94c2e8;
        }
      }

      .name {
        margin: 10px 0;
        text-shadow: 1px 1px 3px #bddef9;
        font-size: 2.4em;
        font-weight: 600;
        letter-spacing: 0.6em;
        text-indent: 0.6em;
      }

      .point {
        margin: 10px 0;
        text-shadow: 1px 1px 3px #bddef9;
        font-size: 2.8em;
        font-weight: 600;
      }
    }
  }
}

@keyframes appearance {
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes fade {
  50% {
    opacity: 1;
    margin-bottom: 0px;
  }
  55% {
    transform: skew(0deg, 0deg);
  }
  60% {
    transform: skew(5deg, 4.2deg);
  }
  70% {
    transform: skew(-4deg, -3deg);
  }
  80% {
    transform: skew(3deg, 2.2deg);
  }
  90% {
    transform: skew(-2deg, -1.5deg);
  }
  100% {
    opacity: 1;
    margin-bottom: 0px;
  }
}

@keyframes inner-fade {
  100% {
    opacity: 1;
  }
}
</style>
