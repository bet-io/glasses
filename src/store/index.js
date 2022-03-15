import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  //歌曲生成周期
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],

  state: {
    //搜索关键字
    songkeyworks: "",
    //歌曲搜索总数
    songcount: "",

    audioInfo: [
      {
        name: "Daisy",
        artist: "STEREO DIVE FOUNDATION",
        url: "https://sound-ks1.cdn.missevan.com/aod/202103/06/4e0afafd500b0a063b2f0f25ff56c0106f185049.m4a",
        cover: "https://p1.music.126.net/YF4U3T8KAdSp7LiJ0s_7Sg==/109951163914073982.jpg",
        lrc: "https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc",
        // name: "At The Edge",
        // artist: "千板",
        // url: "http://m7.music.126.net/20211228234124/75a205fed9edfa0ac2cb6bd861c3c6b1/ymusic/3a75/a801/a29f/e04ebd17d085dd5a338e9e33076863ac.mp3",
        // cover: "https://p2.music.126.net/j0kTkSQDEn3MksdJ3S3BSQ==/109951163825143640.jpg",
        // lrc: "https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc",
      }],
  },
  //mutations用于修改state
  //Async 异步
  mutations: {
    addsong(state, adds) {
      state.audioInfo.push({
        name: adds.amount1,
        artist: adds.amount2,
        url: adds.amount3,
        cover: adds.amount4,
        lrc: adds.amount5,
      })
    },
  },
  //actions专门用来做异步处理
  actions: {

  }
})