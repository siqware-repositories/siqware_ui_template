<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                icon="menu"
                class="q-mx-md"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row q-pl-none items-center no-wrap">
          <!--<img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">-->
          <span class="text-primary text-bold">SIQWARE</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GPL__toolbar-input" dense standout="bg-primary" v-model="search" placeholder="Search">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>{{activeUserInfo.displayName}}</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable @click="logout" class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
            v-model="leftDrawerOpen"
            bordered
            behavior="mobile"
            @click="leftDrawerOpen = false"
    >
      <q-scroll-area
              class="fit"
              :thumb-style="thumbStyle">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <!--<img class="q-pl-md" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg">-->
            <span class="q-pl-md text-primary text-bold">SIQWARE</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item to="/login" v-for="link in links1" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links3" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable class="GPL__drawer-item GPL__drawer-item--storage">
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section top>
              <q-item-label>Storage</q-item-label>
              <q-linear-progress :value="storage" class="q-my-sm" />
              <q-item-label caption>2.6 GB of 15 GB</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />

          <q-item class="column">
            <q-btn
                    icon="fas fa-sign-out-alt"
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                    @click="logout"
            />
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view />
      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-lg q-px-sm column">
          <q-btn to="/login" round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="photo" />
            <div class="GPL__side-btn__label">Photos</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="assistant" />
            <div class="GPL__side-btn__label">Assistant</div>
            <q-badge floating color="red" text-color="white" style="top: 8px; right: 16px">
              1
            </q-badge>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: 'GooglePhotosLayout',
    data () {
      return {
        leftDrawerOpen: false,
        thumbStyle: {
          right: '2px',
          borderRadius: '5px',
          backgroundColor: '#027be3',
          width: '5px',
          opacity: 0.75
        },
        search: '',
        storage: 0.26,
        links1: [
          { icon: 'photo', text: 'Photos' },
          { icon: 'photo_album', text: 'Albums' },
          { icon: 'assistant', text: 'Assistant' },
          { icon: 'people', text: 'Sharing' },
          { icon: 'book', text: 'Photo books' }
        ],
        links2: [
          { icon: 'archive', text: 'Archive' },
          { icon: 'delete', text: 'Trash' }
        ],
        links3: [
          { icon: 'settings', text: 'Settings' },
          { icon: 'help', text: 'Help & Feedback' },
          { icon: 'get_app', text: 'App Downloads' }
        ],
        createMenu: [
          { icon: 'photo_album', text: 'Album' },
          { icon: 'people', text: 'Shared Album' },
          { icon: 'movie', text: 'Movie' },
          { icon: 'library_books', text: 'Animation' },
          { icon: 'dashboard', text: 'Collage' },
          { icon: 'book', text: 'Photo book' }
        ]
      }
    },
    computed: {
      activeUserInfo() {
        return this.$store.state.AppActiveUser
      }
    },
    methods:{
      logout() {
        localStorage.removeItem('userInfo');
        window.location.href = "#/login"
      },
    },
    async created() {
      let self = this;
      const token = JSON.parse(localStorage.getItem("userInfo"));
      if (token) {
        await self.$store.dispatch('updateUserData',token);
      }
    }
  }
</script>

<style lang="sass">
  .GPL
    &__toolbar
      height: 64px
    &__toolbar-input
      width: 35%
    &__drawer-item
      line-height: 24px
      border-radius: 0 24px 24px 0
      margin-right: 12px
      .q-item__section--avatar
        padding-left: 12px
        .q-icon
          color: #5f6368
      .q-item__label:not(.q-item__label--caption)
        color: #3c4043
        letter-spacing: .01785714em
        font-size: .875rem
        font-weight: 500
        line-height: 1.25rem
      &--storage
        border-radius: 0
        margin-right: 0
        padding-top: 24px
        padding-bottom: 24px
    &__side-btn
      &__label
        font-size: 12px
        line-height: 24px
        letter-spacing: .01785714em
        font-weight: 500
    @media (min-width: 1024px)
      &__page-container
        padding-left: 94px
</style>