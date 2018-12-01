<template lang="pug">
  .app-rank
    .rank-circle
      span {{ rank }}
    .rank-contents
      slot
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

<style lang ="postcss" scoped>
.app-rank {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;

  .rank-circle {
    width: 100px;
    height: 100px;
    font-size: 1.2em;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    background: #59a9f3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .rank-contents {
    width: 600px;
    height: 80px;
    background: linear-gradient(-90deg, #7db6ea, #46a4fb);
    margin-left: -60px;
    position: relative;
    &:after {
      content: '';
      border-style: solid;
      border-width: 40px 0 40px 50px;
      border-color: transparent transparent transparent #7db6e6;
      position: absolute;
      right: -50px;
    }
  }
}
</style>
