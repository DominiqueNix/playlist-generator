import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  topPlaylists: any = {
    "message": "Popular Playlists",
    "playlists": {
      "href": "https://api.spotify.com/v1/browse/featured-playlists?offset=0&limit=9&locale=en-US%2Cen%3Bq%3D0.9",
      "limit": 9,
      "next": "https://api.spotify.com/v1/browse/featured-playlists?offset=9&limit=9&locale=en-US%2Cen%3Bq%3D0.9",
      "offset": 0,
      "previous": null,
      "total": 100,
      "items": [
        {
          "collaborative": false,
          "description": "Dua Lipa is on top of the Hottest 50!",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
          "id": "37i9dQZF1DXcBWIGoYBM5M",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f000000023386614f0885feec7bc6bfc5",
              "height": null,
              "width": null
            }
          ],
          "name": "Today’s Top Hits",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZhixwAAAAACmQFfqvx1+0z/JUoy9c1fM",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "New music from Future and Metro Boomin. ",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd",
          "id": "37i9dQZF1DX0XUsuxWHRQd",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002d0f5f09f66d88054da5ca0ee",
              "height": null,
              "width": null
            }
          ],
          "name": "RapCaviar",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "Zh1f1gAAAAB86X+RSSt0xiA3XmW/GEq8",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX0XUsuxWHRQd",
          "primary_color": "#F49B23"
        },
        {
          "collaborative": false,
          "description": "Today's top country hits. Cover: Tyler Hubbard",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1lVhptIYRda",
          "id": "37i9dQZF1DX1lVhptIYRda",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f000000026ed0a6cd2be512af118811b9",
              "height": null,
              "width": null
            }
          ],
          "name": "Hot Country",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZhixwAAAAAD9+kt8cSEpVTQN7kf8HAZl",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1lVhptIYRda/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX1lVhptIYRda",
          "primary_color": "#FFC864"
        },
        {
          "collaborative": false,
          "description": "The hottest tracks in the United States. Cover: Hozier",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0kbJZpiYdZl"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0kbJZpiYdZl",
          "id": "37i9dQZF1DX0kbJZpiYdZl",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002b826d4da52117c72255b576d",
              "height": null,
              "width": null
            }
          ],
          "name": "Hot Hits USA",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "Zhq5mwAAAABTbBz0unU6jXMjFUdlR3Ep",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0kbJZpiYdZl/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX0kbJZpiYdZl",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "The essential tracks, all in one playlist.",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5KpP2LN299J"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5KpP2LN299J",
          "id": "37i9dQZF1DX5KpP2LN299J",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002d4b123e7ae0a84047ab62164",
              "height": null,
              "width": null
            }
          ],
          "name": "This Is Taylor Swift",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZfccbAAAAABJcM9HHSM6fo8if1c15qdF",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5KpP2LN299J/tracks",
            "total": 164
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX5KpP2LN299J",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "Today's top Latin hits, elevando nuestra música. Cover: TINI",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX10zKzsJ2jva",
          "id": "37i9dQZF1DX10zKzsJ2jva",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002543cbc9a323f92fb71be9cef",
              "height": null,
              "width": null
            }
          ],
          "name": "Viva Latino",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "Zh0jBQAAAACtLdtbPJKiHqeiYh52Zvpt",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX10zKzsJ2jva/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX10zKzsJ2jva",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "New music from Future & Metro Boomin, Dua Lipa, Sabrina Carpenter, Peso Pluma and more!",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4JAvHpjipBk",
          "id": "37i9dQZF1DX4JAvHpjipBk",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002c714b06c7dd8b755a0ad9b4f",
              "height": null,
              "width": null
            }
          ],
          "name": "New Music Friday",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZhixwAAAAAC7fDGvzEfvTr03QYtGZ7oX",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4JAvHpjipBk/tracks",
            "total": 100
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX4JAvHpjipBk",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Ice Spice",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6GwdWRQMQpq"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GwdWRQMQpq",
          "id": "37i9dQZF1DX6GwdWRQMQpq",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002f7f749cb767665ad20ede08e",
              "height": null,
              "width": null
            }
          ],
          "name": "Feelin' Myself",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZhuKNgAAAABE/825JBpzMu9auuKGBdQk",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GwdWRQMQpq/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX6GwdWRQMQpq",
          "primary_color": "#FFFFFF"
        },
        {
          "collaborative": false,
          "description": "Country music's 50 most played songs in the world. Updated weekly. Cover: Morgan Wallen",
          "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7aUUBCKwo4Y"
          },
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7aUUBCKwo4Y",
          "id": "37i9dQZF1DX7aUUBCKwo4Y",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67706f00000002d0cf46e396551b8366c3a6fb",
              "height": null,
              "width": null
            }
          ],
          "name": "Country Top 50",
          "owner": {
            "external_urls": {
              "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify",
            "display_name": "Spotify"
          },
          "public": true,
          "snapshot_id": "ZhhZoQAAAAC6Ngp4Z5qSgdA6bneJNsRK",
          "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7aUUBCKwo4Y/tracks",
            "total": 50
          },
          "type": "playlist",
          "uri": "spotify:playlist:37i9dQZF1DX7aUUBCKwo4Y",
          "primary_color": "#ffffff"
        }
      ]
    }
  }

  newAlbums: any;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getNewAlbums().subscribe((data:any) => {
      this.newAlbums = data
    })

  }

}