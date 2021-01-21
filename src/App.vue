<template>
  <main>
    <div id='main-container'>
      <div id='top-bar'>
        <header>
          <div id='topbar-content-wrapper'></div>
          <div id='user-widget'>
            <button id='user-widget-btn' type='button'>
              <figure title='Malcolm Bett' style='height: 28px; width: 28px;'></figure>
              <span>Malcolm Bett</span>
            </button>
          </div>
        </header>
      </div>
      <nav id='nav-bar'>
        <div id='logo' role='banner'>
          <a href='/'>
            <svg viewBox='0 0 1134 340'>
              <path fill='currentColor' d='M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z'></path>
            </svg>
          </a>
        </div>
        <ul>
          <li>
            <router-link to='/'>
              <div class='icon'></div>
              <span class='ellipsis-one-line page-context-text'>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to='/search'>
              <div class='icon'></div>
              <span class='ellipsis-one-line page-context-text'>Search</span>
            </router-link>
          </li>
          <li>
            <router-link to='/collection'>
              <div class='icon'></div>
              <span class='ellipsis-one-line page-context-text'>Your Library</span>
            </router-link>
          </li>
        </ul>
        <div class='sidebar-items'>
          <h1>Playlists</h1>
          <div>
            <button type='button' id='create-playlist'>
              <svg class='add-btn icon' height='32' width='32' shape-rendering='crispEdges' viewBox='0 0 36 36'>
                <path d='m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z'></path>
              </svg>
              <span class='ellipsis-one-line page-context-text'>Create Playlist</span>
            </button>
          </div>
          <div>
            <router-link to='/collection/tracks'></router-link>
          </div>
          <hr/>
          <div></div>
        </div>
      </nav>
      <div id='main-view'>
        <!--        <router-view></router-view>-->
      </div>
      <div id='player'>
        <div></div>
      </div>
    </div>
    <div id='queue'></div>
  </main>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  watch: {
    '$route'() {
      this.uiElements();
    },
    expandAlbumArt: function (value) {
      this.albumViewListener(value);
    },
    player: function () {
      console.log('this is player');
    },
    state: function (value) {
      // let {
      //   track_window
      // } = value;
      // let {
      //   current_track
      // } = track_window;
      this.updateMainUi(value.track_window.current_track);
    }
  },
  methods: {
    startApp: function () {
      let scriptTag = document.createElement('script');
      scriptTag.setAttribute('defer', 'defer');
      scriptTag.setAttribute('src', 'https://sdk.scdn.co/spotify-player.js');
      document.head.append(scriptTag);
      this.spotifyInit();
      this.getUser();
      this.requestUserPlaylist('https://api.spotify.com/v1/me/playlists');
    },
    getGlobalData: () => {

    },
    spotifyInit: function () {
      window.onSpotifyWebPlaybackSDKReady = () => {
        // eslint-disable-next-line no-undef
        const player = new Spotify.Player({
          name: document.title,
          getOAuthToken: callback => {
            callback(this.access_token);
          }
        });
        this.player = player;
        player.addListener('initialization_error', ({message}) => {
          if (message === 'Failed to initialize player') {
            console.error('player initialization failed');
          } else {
            console.error(message);
          }
        });
        player.addListener('authentication_error', ({message}) => {
          console.error(message.toString());
          if (message === 'Authentication failed') {
            console.log(message);
          } else if (message === 'Invalid token scopes.') {
            console.log(message);
          } else {
            // getJSON(location.origin + '/refresh_token', function (err, data) {
            //   console.log(err + ' : ' + data);
            console.log(location.origin + '/refresh_token');
            console.log('just displaying the url');
            // });
          }
        });
        player.addListener('account_error', ({message}) => {
          console.error(message);
        });
        player.addListener('playback_error', ({message}) => {
          console.error(message);
        });
        player.addListener('player_state_changed', state => {
        // let {
        //     paused,
        //     track_window
        //   } = state;
        //   let {
        //     previous_tracks,
        //     current_track,
        //     next_tracks
        //   } = track_window;
          this.state = state;
        });
        player.addListener('ready', ({device_id}) => {
          console.log('Ready with Device ID', device_id);
          this.axiosGet('https://api.spotify.com/v1/me/player', value => {
            this.deviceId = device_id;
            if (value.status === 200) {
              console.log(' Listening Device ID', value.data.device.id);
            }
          });
          // this.axiosPut('https://api.spotify.com/v1/me/player', {'device_ids': [device_id]});
        });
        player.addListener('not_ready', ({device_id}) => {
          console.log('Device ID has gone offline', device_id);
        });
        player.connect().then(console.log('Player Connected'));
        player.getCurrentState().then(state => {
          // check this
          if (!state && this.access_token) {
            this.currentState();
            console.log('no state yes access: ' + state);
          } else {
            console.log('current State: ' + state);
          }
        });
      }
    },
    joinArtistName: function (artists) {
      let list = [];
      for (let i = 0; i < artists.length; i++) {
        list.push(artists[i].name);
      }
      return list.join(', ');
    },
    currentState: function () {
      this.axiosGet('https://api.spotify.com/v1/me/player', response => {
        // let time = response.data.item.duration_ms - response.data.progress_ms;
        if (response.status === 200) {
          this.deviceName = response.data.device.name;
          this.isPlayingHere = response.data.device.id === this.deviceId;
          this.updateMainUi(response.data.item);
        } else if (response.status === 204) {
          console.log('Not Playing Anywhere at all!!!');
          this.axiosGet('https://api.spotify.com/v1/me/player/recently-played', value => {
            this.updateMainUi(value.data.items[0].track);
          });
        }
        // setTimeout(() => {
        //   this.currentState();
        // }, (response.data.item.duration_ms - response.data.progress_ms) + 10000);
      });
    },
    updateMainUi: function (data) {
      this.trackTitle = data.name;
      this.trackArtist = this.joinArtistName(data.artists);
      this.trackAlbumUri = `/${data.album.type}/${data.album.id}`;
      this.trackArtistUri = `/${data.artists[0].type}/${data.artists[0].id}`;
      if (data.album.images[0].url !== null) {
        this.trackAlbumArt = data.album.images[0].url;
      } else {
        document.getElementsByClassName('cover-art-image').forEach(node => {
          node.style.display = 'none';
        });
      }
      this.trackDuration = this.milliToReadTime(data.duration_ms);
    },
    getUser: function () {
      this.axiosGet('https://api.spotify.com/v1/me', value => {
        this.userDisplayName = value.data.display_name;
        this.userDisplayPhoto = value.data.images[0].url;
        // console.log(value.data);
      });
    },
    progressBarHover: function (value) {
      switch (value.type) {
        case 'mouseover':
          if (value.relatedTarget.getAttribute('id') === 'progress-bar') {
            value.relatedTarget.classList.add('progress-bar--is-active');
          }
          break;
        case 'mouseleave':
          if (value.fromElement.getAttribute('id') === 'progress-bar') {
            value.fromElement.classList.remove('progress-bar--is-active');
          }
          break;
      }
    },
    axiosGet: function (uri, callback) {
      this.$axios.get(uri, {headers: {'Authorization': `Bearer ${this.access_token}`}}).then(callback);
    },
    axiosPut: function (uri, data) {
      this.$axios.put(uri, data, {headers: {'Authorization': `Bearer ${this.access_token}`}});
    },
    requestUserPlaylist: function (uri) {
      this.axiosGet(uri, value => {
        this.playlistData = this.playlistData.concat(value.data.items);
        if (value.data.next != null) {
          this.requestUserPlaylist(value.data.next);
        }
      });
    },
    addAttributeNavLink: function (element, queryTag) {
      element.querySelectorAll(queryTag).forEach(node => {
        if (node.getAttribute('href').split('/')[1] === this.$route.path.split('/')[1] && !['tracks'].includes(this.$route.path.split('/')[2])) node.setAttribute('aria-current-path', '');
        else node.removeAttribute('aria-current-path');
      });
    },
    swapAlbumArtView: function () {
      this.expandAlbumArt = this.expandAlbumArt !== true;
    },
    albumViewListener: function (value) {
      if (value) {
        document.getElementById('small_album_art').classList.add('now-playing--cover-expanded');
        document.getElementById('big_album_art').classList.remove('_60519efa4d6db52ac90a34bb18a3c3ac-scss');
      } else {
        document.getElementById('small_album_art').classList.remove('now-playing--cover-expanded');
        document.getElementById('big_album_art').classList.add('_60519efa4d6db52ac90a34bb18a3c3ac-scss');
      }
    },
    milliToReadTime: function (value) {
      let durationRawMinutes = value / 60000;
      let minutes = Math.floor(durationRawMinutes);
      let seconds = Math.floor((durationRawMinutes - minutes) * 60);
      return `${minutes}:${('0' + seconds).slice(-2)}`;
    },
    uiElements: function () {
      this.addAttributeNavLink(document.querySelector('#nav-bar > ul'), 'A');
      // this.addClassLink(document.getElementById('playlist_links'), 'A', 'RootlistItem__link--is-highlighted');
    }
  },
  components: {
    // HelloWorld
  },
  data() {
    return {
      access_token: '',
      tokenData: {},
      activeUser: false,
      playlistData: [],
      player: null,
      state: null,
      currentPlayerState: null,
      isPlayingHere: true,
      userDisplayName: '',
      userDisplayPhoto: '',
      UID: '',
      deviceName: '',
      deviceId: '',
      trackAlbumArt: '',
      trackTitle: '',
      trackAlbumUri: '',
      trackArtistUri: '',
      trackArtist: '',
      trackDuration: '',
      expandAlbumArt: JSON.parse(this.$cookies.get('expandAlbumArt'))
    }
  },
  mounted() {
    this.uiElements();
    this.activeUser ? this.albumViewListener(this.expandAlbumArt) : null;
  },
  created() {
    // this.axiosGet(`${location.origin}/get_access_token`, value => {
    // this.axiosGet(`https://spotauthtoken.herokuapp.com/get_access_token`, value => {
    //   if (value.status === 200) {
    //     this.activeUser = value.data.isLoggedIn || !value.data.isAnonymous;
    //     this.access_token = value.data.access_token || value.data.accessToken;
    //     this.activeUser ? this.startApp() : this.getGlobalData();
    //   }
    // });
  },
  // updated() {
  //   this.uiElements();
  // },
  beforeUpdate() {
    this.$cookies.set('expandAlbumArt', this.expandAlbumArt);
  }
}
</script>