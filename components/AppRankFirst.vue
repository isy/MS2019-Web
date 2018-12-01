<template lang="pug">
  .app-rank-first
    .rank-circle
      img.crown(src="~/assets/images/gold.png")
      span {{ rank }}
    .rank-contents
      .point(v-if="$slots.point")
        slot(name="point")
        span.inner-text pt
      .name(v-if="$slots.name")
        slot(name="name")
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
.app-rank-first {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  .rank-circle {
    width: 170px;
    height: 170px;
    font-size: 2em;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    background: #ffd700;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;
    .crown {
      position: absolute;
      width: 80px;
      top: -20px;
      left: -20px;
      transform: rotate(-20deg);
      filter: drop-shadow(1px 1px 3px #e2b305);
    }
  }

  .rank-contents {
    width: 600px;
    height: 150px;
    background: linear-gradient(-90deg, #ffff00, #ffb300);
    margin-left: -60px;
    position: relative;
    text-shadow: 1px 1px 1px #615e5e;
    color: rgba(0, 0, 0, 0.71);
    &:after {
      content: '';
      border-style: solid;
      border-width: 75px 0 75px 50px;
      border-color: transparent transparent transparent #fcff00;
      position: absolute;
      right: -50px;
    }

    .point {
      display: inline-block;
      font-size: 52px;
      position: absolute;
      bottom: 10px;
      right: 120px;

      .inner-text {
        font-size: 30px;
        padding: 0 5px;
      }
    }

    .name {
      display: inline-block;
      position: absolute;
      font-size: 4em;
      top: 0;
      left: 160px;
    }
  }
}
</style>
