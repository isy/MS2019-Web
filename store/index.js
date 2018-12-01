import { firebase, database } from '~/plugins/firebase';

const refScores = database.ref('/scores');

const initialState = {
  scores: [],
  lastScore: {
    uid: '',
    name: '',
    score: ''
  }
};

export const state = () => {
  return Object.assign({}, initialState);
};

export const mutations = {
  initScore(state, { scores }) {
    state.scores = scores.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });
  },
  addScore(state, { score }) {
    state.scores.push(score);
  },
  addLastScore(state, { score }) {
    state.lastScore = score;
  }
};

export const actions = {
  async initScore({ commit }) {
    let newItem = false;
    await refScores.on('child_added', snapshot => {
      if (!newItem) return;
      const { name, score } = snapshot.val();
      window.location.href = `/new?name=${name}&point=${score}`;
      // commit('addLastScore', {
      //   score: {
      //     uid: snapshot.key,
      //     ...snapshot.val()
      //   }
      // });
    });

    await refScores.once('value', snapshot => {
      const scores = Object.entries(snapshot.val()).map(([uid, value]) => ({
        uid,
        ...value
      }));
      commit('initScore', { scores });
      newItem = true;
    });
  },
  async fetchLastScore({ commit }) {
    await refScores
      .endAt()
      .limitToLast(1)
      .once('child_added', snapshot => {
        commit('addLastScore', {
          score: {
            uid: snapshot.key,
            ...snapshot.val()
          }
        });
      });
  }
};
