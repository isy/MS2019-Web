<template lang="pug">
  .app-list-item
    .rank
      span {{ rank }}
    .icon
      img.image-icon(:src="require('~/assets/images/hero' + (rank % 3 + 1) + '.png')")
    .user-name
      span {{ score.name || '匿名さん' }}
    .user-point
      span {{ score.score }} pt
    .crown(v-if="rank <= 3")
      img.crown-img(:src="require('~/assets/images/' + rankImageHandler()[rank] + '.png')")

</template>

<script>
export default {
  props: {
    rank: {
      type: Number,
      required: true
    },
    score: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    rankImageHandler() {
      return {
        1: 'gold',
        2: 'silver',
        3: 'bronze'
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.app-list-item {
  color: rgba(0, 138, 255, 0.77);
  width: 100%;
  padding: 5px 0;
  border-radius: 3px;
  box-shadow: 1px 1px 8px #cecece;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .rank {
    width: 10%;
    text-align: center;
    padding: 0 10px;
    font-size: 1.6em;
  }

  .icon {
    width: 20%;
    .image-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid #bddef9;
    }
  }

  .user-name {
    width: 30%;
    text-shadow: 1px 1px 3px #bddef9;
    font-size: 1.2em;
    font-weight: 600;
  }

  .user-point {
    width: 20%;
    font-size: 1.4em;
    font-weight: 600;
  }

  .crown {
    width: 20%;

    .crown-img {
      width: 60%;
      transform: rotate(15deg);
    }
  }
}
</style>
