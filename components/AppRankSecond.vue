<template lang="pug">
  .app-rank-second
    .rank-circle
      img.crown(src="~/assets/images/silber.png")
      span {{ rank }}
    .rank-contents
      .point
        slot(name="point")
      .name
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
.app-rank-second {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;

  .rank-circle {
    width: 150px;
    height: 150px;
    font-size: 1.8em;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    background: #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;
    .crown {
      position: absolute;
      width: 60px;
      top: -15px;
      left: -15px;
      transform: rotate(-20deg);
      filter: drop-shadow(1px 1px 3px #bbb1b1);
    }
  }

  .rank-contents {
    width: 600px;
    height: 130px;
    background: linear-gradient(-90deg, #ccc9c9, #b5adad);
    margin-left: -60px;
    position: relative;
    &:after {
      content: '';
      border-style: solid;
      border-width: 65px 0 65px 50px;
      border-color: transparent transparent transparent #cac8c8;
      position: absolute;
      right: -50px;
    }
  }
}
</style>
