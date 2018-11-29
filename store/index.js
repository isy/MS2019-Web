import { firebase, database } from '~/plugins/firebase';

const refScores = database.ref('/scores');

const initialState = {
  scores: []
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
  }
};

export const actions = {
  async initScore({ commit }) {
    let newItem = false;
    await refScores
      // .endAt()
      // .limitToLast(1)
      .on('child_added', snapshot => {
        if (!newItem) return;
        commit('addScore', {
          score: {
            uid: snapshot.key,
            ...snapshot.val()
          }
        });
      });

    await refScores.once('value', snapshot => {
      const scores = Object.entries(snapshot.val()).map(([uid, value]) => ({
        uid,
        ...value
      }));
      commit('initScore', { scores });
      newItem = true;
    });
  }
};
