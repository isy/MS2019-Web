<template lang="pug">
  section.container
    main.inner
      .inner-header
        .page-title
          h1 RANKING
        .header-contents
          img.header-icon(src="~/assets/images/top.png")

      .inner-contents
        .rank-list(v-for="(score, idx) in scores" :key="idx")
          rank-list-item.list-item(:rank="idx + 1" :score="score")

    footer.page-footer

</template>

<script>
import { mapActions, mapState } from 'vuex';
import RankListItem from '~/components/RankListItem';

export default {
  components: {
    RankListItem
  },
  // async fetch({ store }) {
  //   await store.dispatch('initScore');
  // },
  computed: {
    ...mapState({
      scores: state => state.scores
    })
  },
  mounted() {
    this.initScore();
  },
  methods: {
    ...mapActions(['initScore'])
  }
};
</script>

<style lang="postcss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  .inner {
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
    margin: 20vh auto 0 auto;
    width: 50%;
    height: 80vh;
    box-shadow: 1px 1px 15px #d0e3f3;
    border-radius: 5px;
    background: #fff;
    z-index: 2;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;

    .inner-header {
      min-height: 200px;
      background: #008bff;

      .page-title {
        text-align: center;
        color: #fff;
        padding: 10px 0;
      }

      .header-contents {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;

        .header-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid #94c2e8;
        }
      }
    }

    .inner-contents {
      width: 100%;

      .rank-list {
        width: 95%;
        margin: 0 auto;

        .list-item {
          margin: 10px 0;
        }
      }
    }
  }

  .page-footer {
    width: 150%;
    height: 100vh;
    position: absolute;
    border-radius: 50%;
    background: #008bff;
    bottom: -80vh;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
