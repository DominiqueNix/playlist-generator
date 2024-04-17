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

  newAlbums: any = {
    "albums": {
      "href": "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=5&locale=en-US%2Cen%3Bq%3D0.9",
      "limit": 5,
      "next": "https://api.spotify.com/v1/browse/new-releases?offset=5&limit=5&locale=en-US%2Cen%3Bq%3D0.9",
      "offset": 0,
      "previous": null,
      "total": 100,
      "items": [
        {
          "album_type": "album",
          "total_tracks": 25,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3bSNhnaQQXpC639OQ4pMyP"
          },
          "href": "https://api.spotify.com/v1/albums/3bSNhnaQQXpC639OQ4pMyP",
          "id": "3bSNhnaQQXpC639OQ4pMyP",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02962afebc072a661242cda591",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851962afebc072a661242cda591",
              "height": 64,
              "width": 64
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273962afebc072a661242cda591",
              "height": 640,
              "width": 640
            }
          ],
          "name": "WE STILL DON'T TRUST YOU",
          "release_date": "2024-04-12",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:3bSNhnaQQXpC639OQ4pMyP",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
              },
              "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
              "id": "1RyvyyTE3xzB2ZywiAwp0i",
              "name": "Future",
              "type": "artist",
              "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
              },
              "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
              "id": "0iEtIxbK0KxaSlF7G42ZOp",
              "name": "Metro Boomin",
              "type": "artist",
              "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
            }
          ]
        },
        {
          "album_type": "single",
          "total_tracks": 4,
          "available_markets": ["AR", "AU", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/68mwSgiHv3JF9nrw9feMrt"
          },
          "href": "https://api.spotify.com/v1/albums/68mwSgiHv3JF9nrw9feMrt",
          "id": "68mwSgiHv3JF9nrw9feMrt",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02c01fb32d3c89474b4c5d17fd",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851c01fb32d3c89474b4c5d17fd",
              "height": 64,
              "width": 64
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273c01fb32d3c89474b4c5d17fd",
              "height": 640,
              "width": 640
            }
          ],
          "name": "Illusion",
          "release_date": "2024-04-11",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:68mwSgiHv3JF9nrw9feMrt",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
              },
              "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
              "id": "6M2wZ9GZgrQXHCFfjv46we",
              "name": "Dua Lipa",
              "type": "artist",
              "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
            }
          ]
        },
        {
          "album_type": "single",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5quMTd5zeI9yW5UDua8wS4"
          },
          "href": "https://api.spotify.com/v1/albums/5quMTd5zeI9yW5UDua8wS4",
          "id": "5quMTd5zeI9yW5UDua8wS4",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02659cd4673230913b3918e0d5",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851659cd4673230913b3918e0d5",
              "height": 64,
              "width": 64
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5",
              "height": 640,
              "width": 640
            }
          ],
          "name": "Espresso",
          "release_date": "2024-04-12",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5quMTd5zeI9yW5UDua8wS4",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B"
              },
              "href": "https://api.spotify.com/v1/artists/74KM79TiuVKeVCqs8QtB0B",
              "id": "74KM79TiuVKeVCqs8QtB0B",
              "name": "Sabrina Carpenter",
              "type": "artist",
              "uri": "spotify:artist:74KM79TiuVKeVCqs8QtB0B"
            }
          ]
        },
        {
          "album_type": "single",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2H6k8joKIeY5mLZVPyPVfu"
          },
          "href": "https://api.spotify.com/v1/albums/2H6k8joKIeY5mLZVPyPVfu",
          "id": "2H6k8joKIeY5mLZVPyPVfu",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d00001e022a1cce0c1fe2849dce37e22e",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048512a1cce0c1fe2849dce37e22e",
              "height": 64,
              "width": 64
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2732a1cce0c1fe2849dce37e22e",
              "height": 640,
              "width": 640
            }
          ],
          "name": "b i g f e e l i n g s",
          "release_date": "2024-04-11",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2H6k8joKIeY5mLZVPyPVfu",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3rWZHrfrsPBxVy692yAIxF"
              },
              "href": "https://api.spotify.com/v1/artists/3rWZHrfrsPBxVy692yAIxF",
              "id": "3rWZHrfrsPBxVy692yAIxF",
              "name": "WILLOW",
              "type": "artist",
              "uri": "spotify:artist:3rWZHrfrsPBxVy692yAIxF"
            }
          ]
        },
        {
          "album_type": "single",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4lHX02NbEG7B7f7LHfcAUg"
          },
          "href": "https://api.spotify.com/v1/albums/4lHX02NbEG7B7f7LHfcAUg",
          "id": "4lHX02NbEG7B7f7LHfcAUg",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02973cbcd89ba94dd8bc46d646",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851973cbcd89ba94dd8bc46d646",
              "height": 64,
              "width": 64
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273973cbcd89ba94dd8bc46d646",
              "height": 640,
              "width": 640
            }
          ],
          "name": "MERCEDES (feat. Oscar Maydon)",
          "release_date": "2024-04-11",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:4lHX02NbEG7B7f7LHfcAUg",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4obzFoKoKRHIphyHzJ35G3"
              },
              "href": "https://api.spotify.com/v1/artists/4obzFoKoKRHIphyHzJ35G3",
              "id": "4obzFoKoKRHIphyHzJ35G3",
              "name": "Becky G",
              "type": "artist",
              "uri": "spotify:artist:4obzFoKoKRHIphyHzJ35G3"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3l9G1G9MxH6DaRhwLklaf5"
              },
              "href": "https://api.spotify.com/v1/artists/3l9G1G9MxH6DaRhwLklaf5",
              "id": "3l9G1G9MxH6DaRhwLklaf5",
              "name": "Oscar Maydon",
              "type": "artist",
              "uri": "spotify:artist:3l9G1G9MxH6DaRhwLklaf5"
            }
          ]
        }
      ]
    }
  }

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken().subscribe((data:any) => {
      console.log(data)
    })
  }

}
