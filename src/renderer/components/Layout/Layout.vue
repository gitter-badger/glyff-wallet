<template>
  <div class="container-fluid">
    <toast position="nw"></toast>
    <div class="loading-overlay" v-if="globalLoading">
      <grid-loader></grid-loader>
    </div>
    <div class="row">
      <div id="left-side" class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div id="right-side" class="col-md-9">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <unlock-account></unlock-account>
    <new-account></new-account>
  </div>
</template>

<script>
import {Modal} from 'uiv'
import {mapState} from 'vuex'
import Toast from './Toast'
import Sidebar from './Sidebar'
import UnlockAccount from '../Accounts/UnlockAccount'
import NewAccount from '../Accounts/NewAccount'
import GridLoader from 'vue-spinner/src/GridLoader.vue'

export default {
  components: {
    Toast,
    Sidebar,
    Modal,
    GridLoader,
    UnlockAccount,
    NewAccount,
  },

  computed: {
    ...mapState({
      globalLoading: s => s.general.globalLoading,
    })
  },
}
</script>
