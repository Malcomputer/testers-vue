<template>
  <!--  class="db158bb02e7bf30f7e9892ac0d6b07a2-scss"-->
  <section v-bind:class="{
    '_7e0ce830f3504054d8b73c0fd1ddc1d5-scss': isAlbum,
    '_9fe8a0caa4f26833e73e09018d2e33fd-scss': isTracks || isPlaylist}">
    <div class="b9cf8ca0c14080b2bd5ea7b219e3939b-scss">
      <div class="_6f1bb16d690aec58cb10e82de1ac2410-scss"
           v-bind:style="{'background-color':`${contentImage.includes('mosaic') ? 'rgb(83, 83, 83)' : contentColor}`}"></div>
      <div class="_6f1bb16d690aec58cb10e82de1ac2410-scss _4e5d4ac7abe19f92074b5861b22fa8a4-scss"></div>
      <div></div>
      <div class="_580b6fafecf9720b3ac1e6ac671839ff-scss" draggable="true">
        <img draggable="false" class="_31deeacc1d30b0519bfefa0e970ef31d-scss _11b29b5a5f3bcae347f832a4278b28b8-scss"
             srcset="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png 150w, https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png 300w"
             src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
             sizes="(min-width: 1280px) 232px, 192px" v-if="isTracks" alt="Liked Songs">
        <img draggable="false" class="_31deeacc1d30b0519bfefa0e970ef31d-scss _11b29b5a5f3bcae347f832a4278b28b8-scss"
             :srcset="`${contentImage} 150w, ${contentImage} 300w`"
             :src=contentImage
             sizes="(min-width: 1280px) 232px, 192px" v-if="!isTracks" :alt="title">
      </div>
<!--      css continue here-->
      <div class="_7313e48b8f1c8a11ff2eff89b67ff69a-scss">
        <h2 class="bab4e7e0003c98b59e58b925d59840f8-scss d043401fc6c1247d9bab1d03fb554b48-scss b4b36569a9650c59003ec88a4551c3ea-scss _7fccf2efe6726e6281233b60b6d78f1b-scss">
          {{ contentType }}</h2>
        <span dir="auto" class="dc48565bba15548872ea84c715a5fee2-scss">
          <h1 style="padding: 0.08em 0px; /*font-size: 4vw; line-height: 4vw;*/ visibility: visible;"
              class="a12b67e576d73f97c44f1f37026223c4-scss">{{ contentTitle }}</h1>
        </span>
        <h2 dir="auto" class="bab4e7e0003c98b59e58b925d59840f8-scss _67c00c4a84025924b45af08c5f77cf83-scss">contentDescription</h2>
        <div class="aa7a8f31f242c15e7de49ff9c08edebb-scss">
          <figure v-if="false" class="b539bc6142f838f675fc2d3d26b9ed5b-scss _0d8ce8c76dbfa6f67d9f1d95d1f82aec-scss"
                  :title="contentOwner"
                  style="width: 24px; height: 24px;">
            <img class="_64acb0e26fe0d9dff68a0e9725b2a920-scss _0633a9ba14ac0ee36539331fc7368798-scss"
                 draggable="false"
                 src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1531643247156895&height=300&width=300&ext=1601199474&hash=AeQ1sgvE_HDmE0AL"
                 :alt="contentOwner">
          </figure>
          <router-link draggable="false" class="_2b067c7a307d670c6b228bc3f783c022-scss" :to="contentOwnerId">{{ contentOwner }}</router-link>
          <span class="f6a6c11d18da1af699a0464367e2189a-scss" v-if="contentLikes !== '0 likes'">{{ contentLikes }}</span>
          <span class="_0462465b64c9df5f31f2601f892b57d3-scss f6a6c11d18da1af699a0464367e2189a-scss">{{ contentTotalTime }}</span>
        </div>
      </div>
    </div>
    <div class="_59ed5f1313c7c4b211995d2b6463683f-scss"
         v-bind:style="{'background-color': `${contentImage.includes('mosaic') ? 'rgb(83, 83, 83)' : contentColor}`}"></div>
    <div class="f39dd6caa689537bffdfc875c3f33d08-scss contentSpacing">
      <div class="_95e9f2bdf9c64702a6123c2d6de8076b-scss">
        <button class="_8e7d398e09c25b24232d92aac8a15a81-scss e8b2fe03d4e4726484b879ed8ff6f096-scss" title="Play" style="--size:56px">
          <svg height="28" role="img" width="28" viewBox="0 0 24 24">
            <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
          </svg>
        </button>
        <div class="react-contextmenu-wrapper">
          <button type="button" class="_605821ce181f6de6632eabd6a46377fb-scss" title="More" @click="myContextMenu('mainContextMenu', $event)">
            <div class="spoticon-ellipsis-32"></div>
          </button>
        </div>
      </div>
    </div>
    <div class="contentSpacing">
      <section class="tracklist-container tracklist-container--rendering-bug-hack-2019-07-08">
        <ol class="tracklist">
          <div class="react-contextmenu-wrapper" v-for="value of contentItemList === null ? [] : contentItemList" :key="value.track.id"
               @contextmenu="myContextMenu('trackContextMenu', $event)">
            <div draggable="true">
              <li class="tracklist-row" role="button" tabindex="0">
                <div class="tracklist-col position-outer">
                  <div class="tracklist-play-pause tracklist-top-align">
                    <svg class="icon-play" viewBox="0 0 85 100">
                      <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                        <title>PLAY</title>
                      </path>
                    </svg>
                  </div>
                  <div class="position tracklist-top-align"><span class="spoticon-track-16"></span></div>
                </div>
                <div class="tracklist-col name">
                  <div class="track-name-wrapper tracklist-top-align">
                    <div class="tracklist-name ellipsis-one-line" dir="auto">{{ value.track.name }}</div>
                    <div class="second-line">
                      <span class="_94c80de399d6a1146750abccf661f480-scss TrackListRow__explicit-label" v-if="value.track.explicit">E</span>
                      <span class="TrackListRow__artists ellipsis-one-line" dir="auto">
                        <span class="react-contextmenu-wrapper" v-for="(artist, index) of value.track.artists" :key="artist.id">
                          <span draggable="true">
                            <router-link tabindex="-1" class="tracklist-row__artist-name-link"
                                         :to="`/${artist.uri.split(':')[1]}/${artist.uri.split(':')[2]}`">{{ artist.name }}</router-link>
                          </span>
                          <span v-if="value.track.artists.length !== (index + 1)">, </span>
                        </span>
                      </span>
                      <span class="second-line-separator">•</span>
                      <span class="TrackListRow__album ellipsis-one-line" dir="auto">
                        <span class="react-contextmenu-wrapper">
                          <span draggable="true">
                            <router-link tabindex="-1" class="tracklist-row__album-name-link"
                                         :to="`/${value.track.album.uri.split(':')[1]}/${value.track.album.uri.split(':')[2]}`">
                              {{ value.track.album.name }}</router-link>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="tracklist-col more">
                  <div class="tracklist-top-align">
                    <div class="react-contextmenu-wrapper">
                      <button class="_3f37264be67c8f40fa9f76449afdb4bd-scss e6ed3359ee250e2ecc13253d4db86076-scss" type="button">
                        <div class="spoticon-ellipsis-16"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tracklist-col tracklist-col-duration">
                  <div class="tracklist-duration tracklist-top-align">
                    <span>{{ milliToReadTime(value.track.duration_ms, true) }}</span></div>
                </div>
              </li>
            </div>
          </div>
        </ol>
      </section>
      <div v-if="false" class="PlaylistRecommendedTracks"></div>
    </div>
    <h1>working path {{ $route.path.split("/")[1] }}</h1>
  </section>
</template>

<script>
import FastAverageColor from 'fast-average-color';
// import FastAverageColor from 'colorthief';
let fac = new FastAverageColor();
export default {
  data() {
    return {
      contentImage: '',
      title: '',
      contentTitle: '',
      contentColor: '',
      contentType: '',
      contentOwner: '',
      contentOwnerId: '',
      contentTotalTime: '',
      contentLikes: '',
      contentItemList: [],
      isPlaylist: false,
      isAlbum: false,
      isTracks: false,
      updateUiOnce: ''
    }
  },
  methods: {
    updateLink: function () {
      switch (this.$route.path.split("/")[1]) {
        case "collection":
          this.axiosGet(`/me/${this.$route.path.split("/")[2]}`, value => {
            switch (value.status) {
              case 200:
                console.log(value.data);
                this.contentTitle = 'Liked Songs';
                this.contentColor = '#463e76';
                this.contentType = 'Playlist';
                this.contentOwner = 'Malcolm Bett';
                this.contentTotalTime = '17 hr 7 min ';
                this.isPlaylist = false;
                this.isTracks = true;
                this.isAlbum = false;
                break;
              case 400:
                break;
            }
          });
          break;
        case "playlist":
          this.axiosGet(`/${this.$route.path.split("/")[1]}s/${this.$route.path.split("/")[2]}`, value => {
            const context = this;

            // eslint-disable-next-line no-unused-vars
            function huh() {
              let img = document.querySelector('._4c838ef3d2b6da1a61669046bbfae3d1-scss');
              img.addEventListener('load', function () {
                console.log(fac.getColor(img));
                // context.contentColor = `rgb(${fac.getColor(img).join(", ")})`; // ColorThief
                context.contentColor = `${fac.getColor(img).rgba}`; // fast-average-color
                // context.contentColor = `${fac.getColor(img).hex}`; // fast-average-color
              });
            }

            switch (value.status) {
              case 200:
                // console.log(value.data);
                // console.log(value.data.tracks.items[5]);
                // console.log(value.data.tracks.items[7].track.artists);
                this.contentItemList = value.data.tracks.items;
                this.contentTitle = value.data.name;
                this.contentImage = value.data.images[0].url;
                // this.contentImage = `${location.origin}/image/one.jpg`;
                // huh();
                this.contentOwner = value.data.owner.display_name;
                this.contentOwnerId = `/user/${value.data.owner.id}`;
                this.contentLikes = `${value.data.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${value.data.followers.total === 1 ? "like" : "likes"}`;
                this.contentTotalTime = this.milliToReadTime(this.totalTime(value.data.tracks.items));
                this.contentType = 'playlist';
                this.isPlaylist = true;
                this.isTracks = false;
                this.isAlbum = false;
                break;
            }
          });
          break;
        case "album":
          this.contentColor = '';
          this.contentType = 'album';
          this.isPlaylist = false;
          this.isTracks = false;
          this.isAlbum = true;
          // this.axiosGet(`/${this.contentType}/${this.$route.path.split("/")[2]}`);
          break;
      }
    },
    axiosGet: function (url, callback) {
      this.$axios.get(`https://api.spotify.com/v1${url}`, {headers: {'Authorization': `Bearer ${this.$parent.access_token}`}}).then(callback);
    },
    updateItemUi: function (data) {
      console.log(data);
    },
    milliToReadTime: function (value, isTrack) {
      let durationRawhours = value / 3600000;
      let hours = Math.floor(durationRawhours);
      let durationRawMinutes = (durationRawhours - hours) * 60;
      let minutes = Math.floor(durationRawMinutes);
      let durationRawSeconds = (durationRawMinutes - minutes) * 60;
      let seconds = ("0" + Math.floor(durationRawSeconds)).slice(-2);
      return isTrack ? `${minutes}:${seconds}` : hours === 0 ? ` ${minutes} min ${seconds} sec` : `${hours} hr ${minutes} min`;
    },
    totalTime: function (value) {
      let time_ms = 0;
      for (let item of value) {
        time_ms = time_ms + item.track.duration_ms;
      }
      return time_ms;
    },
    myContextMenu: function (elementId, event) {
      let element = document.getElementById(elementId);
      element.style.top = `${event.clientY}px`;
      element.style.left = `${event.clientX}px`;
      element.style.opacity = '1';
      document.onclick = function (e) {
        if (!(!(event.clientX > e.clientX || e.clientX > (event.clientX + element.clientWidth)) && !(event.clientY > e.clientY || e.clientY > (event.clientY + element.clientHeight)))) {
          if (element.style.opacity === '1') {
            element.style.opacity = '0';
          }
        }
      }
      // event.preventDefault();
    }
  },
  updated() {
    console.log('hi');
    if (this.updateUiOnce !== location.pathname.split("/")[2]) {
      this.updateUiOnce = location.pathname.split("/")[2];
      this.updateLink();
    }
  },
  beforeCreate() {
    setTimeout(() => {
      this.updateLink();
    }, 200);
  }
}
</script>