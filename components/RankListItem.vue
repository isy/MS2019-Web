<template lang="pug">
  .app-list-item
    .rank
      span {{ rank }}
    .icon
      img.image-icon(:src="require('~/assets/images/hero' + (rank % 3 + 1) + '.png')")
    .user-name

</template>

<script>
export default {
  props: {
    rank: {
      type: [Number, String],
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.app-list-item {
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
}
</style>
