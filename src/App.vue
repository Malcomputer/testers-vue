<template>
  <div id="main">
    <div class="Root">
      <div></div>
      <div class="Root__top-container">
        <div class="Root__top-bar">
          <header class="b5b01e376bfe3156c865cba3909f11c3-scss" v-bind:class="{'_3a86f45d81725794b5ca3eee9de8d462-scss': !activeUser}">
            <div class="_21f29c9d16bf3b2adbeb2fe04bdcbe8b-scss"
                 style="background-color: rgb(18, 18, 18); opacity: 0;">
              <div class="e082d93e1995fad3363fcbc6ae888189-scss"></div>
            </div>
            <div style="display: none" class="_26d9e31a05dd5fba3afe1b281ae2cf9e-scss">
              <button id="go_back" disabled=""
                      class="_66febc2caff37c822a831232b6e73171-scss _7d846137186e6bfd0724a32565d216cb-scss"
                      title="Go back">
                <svg role="img" focusable="false" height="24" width="24"
                     viewBox="0 0 24 24"
                     class="Svg-sc-1usfroi-0 jNmUis _6be6d9f3103325b95e6d4c0f6b10b783-scss">
                  <polyline style="stroke: currentcolor; vector-effect: non-scaling-stroke;" points="16 4 7 12 16 20" fill="none"
                            stroke="#181818"></polyline>
                </svg>
              </button>
              <button disabled=""
                      class="_66febc2caff37c822a831232b6e73171-scss e06b9585e170a5bfbfb886e70217ea9f-scss"
                      title="Go forward">
                <svg style="stroke-width: 1pt;" role="img" focusable="false" height="24" width="24"
                     viewBox="0 0 24 24"
                     class="Svg-sc-1usfroi-0 jNmUis _6be6d9f3103325b95e6d4c0f6b10b783-scss">
                  <polyline style="stroke: currentcolor; vector-effect: non-scaling-stroke;" points="8 4 17 12 8 20" fill="none"
                            stroke="#181818"></polyline>
                </svg>
              </button>
            </div>
            <div class="_48e360f8825a4f1e777dae4da035dc61-scss"></div>
            <div v-if="activeUser" class="_3a2dbd61921e0194803774bdcfb4a9f3-scss">
              <button class="_34098cfd13d48e2910679f35aea2c377-scss" type="button">
                <figure class="_4f6cff0f3480e8d8cc3614e38afad63d-scss" :title="userDisplayName"
                        style="width: 28px; height: 28px;"><img
                    draggable="false"
                    :src="userDisplayPhoto"
                    :alt="userDisplayName"
                    class="_31deeacc1d30b0519bfefa0e970ef31d-scss _71b2b74d199d96b907da0c433c3c8da6-scss">
                </figure>
                <span class="_1cbbc2381b5bd2615676e5c522e5756c-scss f92d0df6ae4da826d7d532fbf608d469-scss">{{ userDisplayName }}</span>
                <span class="bcdaf2d12c2c21e06601f61efb5ee4c0-scss spoticon-chart-down-16"></span>
              </button>
            </div>
            <div v-if="!activeUser">
              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">Sign up</button>
              <a class="_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss" href="/login">Log in</a>
            </div>
          </header>
        </div>
        <div class="Root__nav-bar Root__nav-bar--connect-bar-visible">
          <nav class="_501e41d6d88f38a5545d3107aef0f7ab-scss">
            <div class="e320e8b1b9da885b2892445e59d0c3a2-scss" role="banner">
              <router-link class="logo _1975d1f240f1a46e345c472e9ab3b4fd-scss active" draggable="false" to="/">
                <svg viewBox="0 0 1134 340" class="spotify-logo--text"><title>Spotify</title>
                  <path fill="currentColor"
                        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path>
                </svg>
              </router-link>
            </div>
            <ul id="nav_links" class="_191817c2fdde1252cfff389aa28b0bda-scss">
              <li class="_435d17cddae8437d6182df7623d0c41b-scss InvalidDropTarget">
                <router-link
                    class="link-subtle _3dacc8e3519146f4a1357269f5dd5525-scss" draggable="false"
                    to="/">
                  <div class="icon home-icon">
                    <svg viewBox="0 0 512 512" width="24" height="24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                          fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="icon home-active-icon">
                    <svg viewBox="0 0 512 512" width="24" height="24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                          fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss">Home</span>
                </router-link>
              </li>
              <li class="_435d17cddae8437d6182df7623d0c41b-scss InvalidDropTarget">
                <router-link
                    class="link-subtle _3dacc8e3519146f4a1357269f5dd5525-scss" draggable="false"
                    to="/search">
                  <div class="icon search-icon">
                    <svg viewBox="0 0 512 512" width="24" height="24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                          fill="currentColor" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="icon search-active-icon">
                    <svg viewBox="0 0 512 512" width="24"
                         height="24" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
                          fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss">Search</span>
                </router-link>
              </li>
              <li class="_435d17cddae8437d6182df7623d0c41b-scss">
                <div
                    class="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--albums GlueDropTarget--artists GlueDropTarget--playlists GlueDropTarget--playlists">
                  <router-link class="link-subtle _3dacc8e3519146f4a1357269f5dd5525-scss"
                               draggable="false" to="/collection">
                    <div class="icon collection-icon">
                      <svg viewBox="0 0 512 512" width="24"
                           height="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="icon collection-active-icon">
                      <svg viewBox="0 0 512 512" width="24"
                           height="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                            fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="ellipsis-one-line f92d0df6ae4da826d7d532fbf608d469-scss">Your Library</span>
                  </router-link>
                </div>
              </li>
            </ul>
            <div class="Rootlist">
              <div class="Rootlist__content">
                <div class="Rootlist__playlists">
                  <h1 class="Rootlist__playlists-header b8f3b021cf9de8a4fe5a02dd67893f97-scss">Playlists</h1>
                  <div class="GlueDropTarget GlueDropTarget--albums GlueDropTarget--tracks">
                    <button type="button" class="fcdf941c8ffa7d0878af0a4f04aa05bb-scss">
                      <svg class="_600e6b37610fb50fa7f2994258a51bf6-scss" shape-rendering="crispEdges" viewBox="0 0 36 36">
                        <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
                      </svg>
                      <span class="eebcc32f0688af5e05f2537e14c59633-scss f92d0df6ae4da826d7d532fbf608d469-scss">Create Playlist</span></button>
                  </div>
                  <div class="GlueDropTarget GlueDropTarget--tracks">
                    <router-link
                        class="ce8ac4aabb35a48dc93a67cf4fedd99c-scss" draggable="false"
                        to="/collection/tracks">
                      <div class="_4e99a4f6ae2db36d018817fe1524917e-scss spoticon-heart-active-16"></div>
                      <span class="f92d0df6ae4da826d7d532fbf608d469-scss">Liked Songs</span>
                    </router-link>
                  </div>
                  <hr class="Rootlist__divider">
                  <div
                      class="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden Rootlist__playlists-scroll-node os-host-overflow os-host-overflow-y os-host-transition">
                    <div class="os-resize-observer-host observed">
                      <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
                    </div>
                    <div class="os-padding">
                      <div class="os-viewport os-viewport-native-scrollbars-invisible" style="overflow-y: scroll;">
                        <div class="os-content" style="padding: 4px 0px; height: 100%; width: 100%;">
                          <ul tabindex="0" id="playlist_links">
                            <div class="react-contextmenu-wrapper" v-for="playlist of playlistData" :key="playlist.id">
                              <li class="RootlistItem RootlistItemPlaylist" style="--indentation:0;">
                                <div class="GlueDropTarget">
                                  <div draggable="true">
                                    <div class="RootlistItem__inner">
                                      <router-link class="RootlistItem__link" draggable="false" tabindex="-1" v-bind:to="`/playlist/${playlist.id}`">
                                        <div class="RootlistItemPlaylist__text-wrapper">
                                          <span title="Collaborative Playlist" v-if="playlist.collaborative">
                                            <svg class="RootlistItemPlaylist__collaborative-icon" viewBox="0 0 8 8"><path
                                                d="M4,0A4,4,0,1,0,8,4,4,4,0,0,0,4,0ZM4,6A2,2,0,1,1,6,4,2,2,0,0,1,4,6Z"></path></svg>
                                          </span>
                                          <span dir="auto">{{ playlist.name }}</span>
                                        </div>
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="os-resize-observer-host observed">
                      <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
                    </div>
                    <div class="os-scrollbar os-scrollbar-vertical" v-if="false">
                      <div class="os-scrollbar-track">
                        <div id="playlist_scollbar" class="os-scrollbar-handle"
                             style="transform: translate(0px, 0.778277px); height: 0.74842%;">
                        </div>
                      </div>
                    </div>
                    <div class="os-scrollbar-corner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="_6bf80b7687920c195942190a0968b56c-scss" v-if="!activeUser">
                <a draggable="false" href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noopener">
                  <span class="e80fc2e59729be32410c909c47ef87a3-scss">Cookies</span>
                </a>
                <a draggable="false" href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener">
                  <span class="e80fc2e59729be32410c909c47ef87a3-scss">Privacy</span>
                </a>
              </div>
              <div id="big_album_art" v-if="activeUser" class="_2ca1340cef4913f1884c76a5b4946807-scss d6e5892a336f6ae43bf066f2245c81b1-scss">
                <div draggable="true">
                  <router-link :to="`/user/${UID}/collection`" style="border: none;">
                    <div class="cover-art shadow" style="width: 232px; height: 232px;">
                      <div>
                        <div class="icon">
                          <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                            <title>Playlist Icon</title>
                            <path
                                d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                        </div>
                        <img draggable="false"
                             :src="trackAlbumArt" alt=""
                             class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image">
                      </div>
                    </div>
                  </router-link>
                </div>
                <button v-on:click="swapAlbumArtView" class="CoverSlotExpanded__actionButton _5cc30ad41e9c87b4c45756acdbac4a4c-scss">
                  <svg height="24" role="img" width="24" viewBox="0 0 24 24"
                       class="_17bfdd2b97642b2ad1547d8cf711bb99-scss">
                    <polygon points="7.96,21.151 7.311,20.39 16.865,12.229 7.311,4.069 7.96,3.309 18.405,12.229 "></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div class="Root__now-playing-bar" v-if="activeUser">
          <footer class="now-playing-bar-container">
            <div class="now-playing-bar" role="complementary">
              <div class="now-playing-bar__left">
                <div id="small_album_art" class="now-playing" role="contentinfo">
                  <div class="_56e7eb66839e1315d2c7305d3f63ceb2-scss">
                    <div draggable="true">
                      <router-link :to="`/user/${UID}/collection`" style="border: none;">
                        <div class="now-playing__cover-art">
                          <div class="cover-art shadow" style="width: 56px; height: 56px;">
                            <div>
                              <div class="icon">
                                <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                                  <title>Add Song Icon</title>
                                  <path
                                      d="M26 0C11.64 0 0 11.643 0 26c0 14.36 11.64 26 26 26s26-11.64 26-26S40.36 0 26 0zm0 50C12.767 50 2 39.234 2 26S12.767 2 26 2c13.234 0 24 10.766 24 24S39.234 50 26 50zm0-32c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.58-8-8-8zm0 14c-3.308 0-6-2.69-6-6s2.692-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                                      fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                              <img draggable="false"
                                   :src="trackAlbumArt"
                                   alt=""
                                   class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image">
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </div>
                    <button v-on:click="swapAlbumArtView" class="_8e5150a4e789e81616d957dd43b62c31-scss">
                      <svg height="24" role="img" width="24" viewBox="0 0 24 24" class="e13aaab7f9f5a632183614c111a67e19-scss">
                        <polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "></polygon>
                      </svg>
                    </button>
                  </div>
                  <div class="_2d35c1726829c507fca5a9b5b1aae1a2-scss ellipsis-one-line">
                    <div class="c319b99793755cc3bba709fe1b1fda42-scss ellipsis-one-line" dir="auto">
                      <div class="react-contextmenu-wrapper">
                        <span draggable="true">
                          <router-link :to="trackAlbumUri">{{ trackTitle }}</router-link>
                        </span>
                      </div>
                    </div>
                    <div class="_44843c8513baccb36b3fa171573a128f-scss ellipsis-one-line" dir="auto">
											<span>
												<span class="react-contextmenu-wrapper">
                          <span draggable="true">
                            <router-link :to="trackArtistUri">{{ trackArtist }}</router-link>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="control-button-wrapper">
                    <button class="control-button spoticon-heart-16" title="Save to your Liked Songs"></button>
                  </div>
                </div>
              </div>
              <div class="now-playing-bar__center">
                <div class="player-controls" dir="ltr" role="complementary">
                  <div class="player-controls__buttons">
                    <div class="control-button-wrapper">
                      <button class="control-button spoticon-shuffle-16" title="Enable shuffle"></button>
                    </div>
                    <div class="control-button-wrapper">
                      <button class="control-button spoticon-skip-back-16" title="Previous"></button>
                    </div>
                    <div class="control-button-wrapper">
                      <button class="control-button spoticon-pause-16 control-button--circled" title="Pause"></button>
                    </div>
                    <div class="control-button-wrapper">
                      <button class="control-button spoticon-skip-forward-16" title="Next"></button>
                    </div>
                    <div class="control-button-wrapper control-button--active-dot">
                      <button class="control-button spoticon-repeatonce-16 control-button--active" title="Disable repeat"></button>
                    </div>
                  </div>
                  <div class="playback-bar">
                    <div class="playback-bar__progress-time e80fc2e59729be32410c909c47ef87a3-scss">0:00</div>
                    <div id="progress-bar" class="progress-bar"
                         @mouseover="progressBarHover"
                         @mouseleave="progressBarHover">
                      <div class="middle-align progress-bar__bg">
                        <div class="progress-bar__fg_wrapper">
                          <div class="progress-bar__fg" style="transform: translateX(-65.6131%);"></div>
                        </div>
                        <button class="middle-align progress-bar__slider" style="left: 34.3869%;"></button>
                      </div>
                    </div>
                    <div class="playback-bar__progress-time e80fc2e59729be32410c909c47ef87a3-scss">{{ trackDuration }}</div>
                  </div>
                </div>
              </div>
              <div class="now-playing-bar__right"></div>
            </div>
            <div v-if="!isPlayingHere" id="other-device-banner" class="fa20bdf1bbbced663caf5b120c30da57-scss _0b9ba30a2dd3f1b600a776e2a0cdfdac-scss">
              <span class="spoticon-spotify-connect-16"></span>
              You're listening on
              <span class="f92d0df6ae4da826d7d532fbf608d469-scss" dir="auto">{{ deviceName }}</span>
            </div>
          </footer>
        </div>
        <div class="Root__main-view">
          <div class="main-view-container" role="main">
            <div
                class="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-transition os-host-overflow os-host-overflow-y">
              <div class="os-resize-observer-host observed">
                <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
              </div>
              <div class="os-padding">
                <div id="content_main" class="os-viewport os-viewport-native-scrollbars-invisible" style="overflow-y: scroll;">
                  <div class="os-content" style="padding: 0px; height: 100%; width: 100%;">
                    <div class="main-view-container__scroll-node-child-spacer"></div>
                    <div class="main-view-container__scroll-node-child">
                      <router-view></router-view>
                    </div>
                  </div>
                </div>
              </div>
              <div class="os-scrollbar os-scrollbar-vertical" v-if="false">
                <div class="os-scrollbar-track">
                  <div id="main_scrollbar" class="os-scrollbar-handle" style="height: 8.05103%; transform: translate(0px, 31.9617px);"></div>
                </div>
              </div>
              <div class="os-scrollbar-corner"></div>
            </div>
          </div>
        </div>
      </div>
      <nav role="menu" tabindex="-1" class="react-contextmenu react-contextmenu--visible" id="mainContextMenu"
           style="position: fixed; opacity: 0; pointer-events: auto; top: 0; left: 0;">
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1">Start Radio</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1"><span>Remove from Your Library</span></div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1">Add to Playlist</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1">Copy Playlist link
          <textarea readonly="" tabindex="-1" style="width: 0; height: 0; opacity: 0;">https://open.spotify.com/playlist/37i9dQZEVXcXAZ2d76Gc4k?si=wo_4g4VyTGWFu_OJ0lvprw</textarea>
        </div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1">Open in Desktop app</div>
      </nav>
      <nav role="menu" tabindex="-1" class="react-contextmenu react-contextmenu--visible" id="trackContextMenu"
           style="position:fixed; opacity: 0; pointer-events: auto; top: 0; left: 0;">
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Start Radio</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Save to your Liked Songs</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Add to Queue</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Add to Playlist</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Show credits</div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Copy Song Link
          <textarea readonly="" tabindex="-1" style="width: 0px; height: 0px; opacity: 0;">https://open.spotify.com/track/7e8utCy2JlSB8dRHKi49xM?si=TxSgX1ClSyKgWVm11oAcqg</textarea>
        </div>
        <div class="react-contextmenu-item" role="menuitem" tabindex="-1" aria-disabled="false">Open in Desktop app</div>
      </nav>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  watch: {
    expandAlbumArt: function (value) {
      this.albumViewListener(value);
    },
    player: function () {
      console.log("this is player");
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
      this.spotifyInit();
      this.getUser();
      this.requestUserPlaylist('https://api.spotify.com/v1/me/playlists');
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
          if (message === "Authentication failed") {
            console.log(message);
          } else if (message === "Invalid token scopes.") {
            console.log(message);
          } else {
            // getJSON(location.origin + "/refresh_token", function (err, data) {
            //   console.log(err + " : " + data);
            console.log(location.origin + "/refresh_token");
            console.log("just displaying the url");
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
          this.state = state;
        });
        player.addListener('ready', ({device_id}) => {
          console.log('Ready with Device ID', device_id);
          this.axiosGet('https://api.spotify.com/v1/me/player', value => {
            this.deviceId = device_id;
            if (value.status === 200) {
              console.log(" Listening Device ID", value.data.device.id);
            }
          });
          // this.axiosPut("https://api.spotify.com/v1/me/player", {"device_ids": [device_id]});
        });
        player.addListener('not_ready', ({device_id}) => {
          console.log('Device ID has gone offline', device_id);
        });
        player.connect().then(console.log("Player Connected"));
        player.getCurrentState().then(state => {
          // check this
          if (!state && this.access_token) {
            this.currentState();
            console.log("no state yes access: " + state);
          } else {
            console.log("current State: " + state);
          }
        });
      }
    },
    joinArtistName: function (artists) {
      let list = [];
      for (let i = 0; i < artists.length; i++) {
        list.push(artists[i].name);
      }
      return list.join(", ");
    },
    scrollFix: function (scrollContainer) {
      console.log(scrollContainer);
    },
    currentState: function () {
      this.axiosGet("https://api.spotify.com/v1/me/player", response => {
        // let time = response.data.item.duration_ms - response.data.progress_ms;
        if (response.status === 200) {
          this.deviceName = response.data.device.name;
          this.isPlayingHere = response.data.device.id === this.deviceId;
          this.updateMainUi(response.data.item);
        } else if (response.status === 204) {
          console.log("Not Playing Anywhere at all!!!");
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
        document.getElementsByClassName("cover-art-image").forEach(node => {
          node.style.display = "none";
        });
      }
      this.trackDuration = this.milliToReadTime(data.duration_ms);
    },
    getUser: function () {
      this.axiosGet('https://api.spotify.com/v1/me', value => {
        this.userDisplayName = value.data.display_name;
        this.userDisplayPhoto = value.data.images[0].url;
        console.log(value.data);
      });
    },
    progressBarHover: function (value) {
      switch (value.type) {
        case "mouseover":
          if (value.relatedTarget.getAttribute("id") === "progress-bar") {
            value.relatedTarget.classList.add("progress-bar--is-active");
          }
          break;
        case "mouseleave":
          if (value.fromElement.getAttribute("id") === "progress-bar") {
            value.fromElement.classList.remove("progress-bar--is-active");
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
    addClassLink: function (element, queryTag, className) {
      element.querySelectorAll(queryTag).forEach(node => {
        if (node.getAttribute("href") === this.$route.path) {
          node.classList.add(className);
        }
      });
    },
    swapAlbumArtView: function () {
      this.expandAlbumArt = this.expandAlbumArt !== true;
    },
    albumViewListener: function (value) {
      if (value) {
        document.getElementById("small_album_art").classList.add("now-playing--cover-expanded");
        document.getElementById("big_album_art").classList.remove("_60519efa4d6db52ac90a34bb18a3c3ac-scss");
      } else {
        document.getElementById("small_album_art").classList.remove("now-playing--cover-expanded");
        document.getElementById("big_album_art").classList.add("_60519efa4d6db52ac90a34bb18a3c3ac-scss");
      }
    },
    milliToReadTime: function (value) {
      let durationRawMinutes = value / 60000;
      let minutes = Math.floor(durationRawMinutes);
      let seconds = Math.floor((durationRawMinutes - minutes) * 60);
      return `${minutes}:${("0" + seconds).slice(-2)}`;
    },
    uiElements: function () {
      // this.scrollFix("playlist_links");
      // this.scrollFix("content_main");
      this.addClassLink(document.getElementById("nav_links"), "A", "de74c1f13a9a8150dfe21bf59c967111-scss");
      this.addClassLink(document.getElementById("playlist_links"), "A", "RootlistItem__link--is-highlighted");
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
      expandAlbumArt: JSON.parse(this.$cookies.get("expandAlbumArt"))
    }
  },
  mounted() {
    this.uiElements();
    this.activeUser ? this.albumViewListener(this.expandAlbumArt) : null;
  },
  created() {
    // this.axiosGet(`${location.origin}/get_access_token`, value => {
    this.axiosGet(`https://spotauthtoken.herokuapp.com/get_access_token`, value => {
          if (value.status === 200) {
            this.activeUser = value.data.isLoggedIn || !value.data.isAnonymous;
            this.access_token = value.data.access_token || value.data.accessToken;
            this.activeUser ? this.startApp() : null;
          }
        }
    );
  },
  updated() {
    this.uiElements();
  },
  beforeUpdate() {
    this.$cookies.set("expandAlbumArt", this.expandAlbumArt);
  }
}
</script>