<template>
  <div>Playlist {{ $route.params.playlist_id }}</div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    playlist_id: String
  }
}
</script>