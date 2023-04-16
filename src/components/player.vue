<template>
  <div id='player'>
    <!--    <h1>Player {{ accessToken }}</h1>-->
  </div>
</template>

<script>
export default {
  name: 'Player',
  created() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      // eslint-disable-next-line no-undef
      const player = new Spotify.Player({
        name: document.title,
        getOAuthToken: callback => callback(this.$parent.access_token)
      }), updatePlayer = playerState => {
        if (playerState) {
          let {paused, track_window} = playerState;
          console.log(paused, track_window);
          // let {previous_tracks, current_track, next_tracks} = track_window;
          // trackName.innerHTML = current_track.name;
          // trackArtist.innerHTML = current_track.artists.map(artist => artist.name).join(', ');
        } else if (this.$parent.access_token) this.$parent.axiosGet('https://api.spotify.com/v1/me/player', ({data, status}) => {
          if (status === 200) {
            console.info(`User is not playing music through the Web Playback SDK but on ${data.device.name}`);
          } else if (status === 204) console.log('Not Currently Playing Anything'); // || todo: > add Intervalas here.
          else console.log('hehe');
        });
      }, checkState = () => {
        // Playback status updates
        player.getCurrentState().then(updatePlayer);
        player.addListener('player_state_changed', updatePlayer);
      };

      // Error handling
      player.addListener('initialization_error', ({message}) => console.error(message));
      player.addListener('authentication_error', ({message}) => console.error(message));
      player.addListener('account_error', ({message}) => console.error(message));
      player.addListener('playback_error', ({message}) => console.error(message));

      // player.getCurrentState().then(state => {
      // check this
      // if (!state && this.access_token) {
      //   this.currentState();
      //   console.log('no state yes access: ' + state);
      // } else {
      //   console.log('current State: ' + state);
      // }
      // });
      //   player.addListener('player_state_changed', state => {
      //     // let {
      //     //     paused,
      //     //     track_window
      //     //   } = state;
      //     //   let {
      //     //     previous_tracks,
      //     //     current_track,
      //     //     next_tracks
      //     //   } = track_window;
      //     this.state = state;
      //   });

      // Ready
      player.addListener('ready', ({device_id}) => {
        console.log('Ready with Device ID', device_id);
        this.deviceId = device_id;
        // this.axiosPut('https://api.spotify.com/v1/me/player', {'device_ids': [device_id]});
        checkState(player);
      });

      // Not Ready
      player.addListener('not_ready', ({device_id}) => console.log('Device ID has gone offline', device_id));

      // Connect to the player!
      player.connect().then(console.log('Player Connected'));

      // previous track
      // prevButton.onclick = () => player.previousTrack();

      // play/pause track
      // playButton.onclick = () => player.togglePlay().then(v => v % 2 === 1 ? Intervals.removeInterval('track_duration') : checkState());

      //next track
      // nextButton.onclick = () => player.nextTrack();
    };
  }
}
</script>