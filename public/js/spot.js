const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
	console.log(`${key}:${value}`);
}
window.onSpotifyWebPlaybackSDKReady = () => {
	player.addListener('player_state_changed', state => {
		// let {
		// paused,
		// track_window
		// } = state;
		// let {
		// previous_tracks,
		// current_track,
		// next_tracks
		// } = track_window;
		console.log(state);
	});
}