<template lang="pug">
  .app-rank-third
    .rank-circle
      img.crown(src="~/assets/images/bronze.png")
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
.app-rank-third {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  .rank-circle {
    width: 130px;
    height: 130px;
    font-size: 1.6em;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    background: #c47222;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;
    .crown {
      position: absolute;
      width: 40px;
      top: -8px;
      left: -8px;
      transform: rotate(-20deg);
      filter: drop-shadow(1px 1px 3px #bbb1b1);
    }
  }

  .rank-contents {
    width: 600px;
    height: 110px;
    background: linear-gradient(-90deg, #ef8b1c, #8e4f08);
    margin-left: -60px;
    position: relative;
    &:after {
      content: '';
      border-style: solid;
      border-width: 55px 0 55px 50px;
      border-color: transparent transparent transparent #f18930;
      position: absolute;
      right: -50px;
    }
  }
}
</style>
