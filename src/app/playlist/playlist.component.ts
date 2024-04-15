import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  sampleData: any = {
    "seeds": [
      {
        "afterFilteringSize": 417,
        "afterRelinkingSize": 417,
        "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
        "id": "6vWDO969PvNqNYHIOW5v0m",
        "initialPoolSize": 510,
        "type": "ARTIST"
      },
      {
        "afterFilteringSize": 417,
        "afterRelinkingSize": 417,
        "href": null,
        "id": "classical",
        "initialPoolSize": 517,
        "type": "GENRE"
      },
      {
        "afterFilteringSize": 417,
        "afterRelinkingSize": 417,
        "href": null,
        "id": "country",
        "initialPoolSize": 999,
        "type": "GENRE"
      }
    ],
    "tracks": [
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 10,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5UPjyfi3zD7Oak7frjH8zk"
          },
          "href": "https://api.spotify.com/v1/albums/5UPjyfi3zD7Oak7frjH8zk",
          "id": "5UPjyfi3zD7Oak7frjH8zk",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273c3fe0ccfeacabfd43e586de3",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02c3fe0ccfeacabfd43e586de3",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851c3fe0ccfeacabfd43e586de3",
              "height": 64,
              "width": 64
            }
          ],
          "name": "John Michael Montgomery",
          "release_date": "1995-03-17",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5UPjyfi3zD7Oak7frjH8zk",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7mPcfx7PhnBh6n4HMCd61A"
              },
              "href": "https://api.spotify.com/v1/artists/7mPcfx7PhnBh6n4HMCd61A",
              "id": "7mPcfx7PhnBh6n4HMCd61A",
              "name": "John Michael Montgomery",
              "type": "artist",
              "uri": "spotify:artist:7mPcfx7PhnBh6n4HMCd61A"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7mPcfx7PhnBh6n4HMCd61A"
            },
            "href": "https://api.spotify.com/v1/artists/7mPcfx7PhnBh6n4HMCd61A",
            "id": "7mPcfx7PhnBh6n4HMCd61A",
            "name": "John Michael Montgomery",
            "type": "artist",
            "uri": "spotify:artist:7mPcfx7PhnBh6n4HMCd61A"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 235000,
        "explicit": false,
        "external_ids": {
          "isrc": "USAN10000027"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/19lw4C2aW6TYvxqRsek2Kd"
        },
        "href": "https://api.spotify.com/v1/tracks/19lw4C2aW6TYvxqRsek2Kd",
        "id": "19lw4C2aW6TYvxqRsek2Kd",
        "name": "I Can Love You Like That",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/f7cbffa7ea0bc89345d82d8a1990f0e0f99a3794?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:19lw4C2aW6TYvxqRsek2Kd",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 11,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6KnZp9UWIWTP6XqANgXaTi"
          },
          "href": "https://api.spotify.com/v1/albums/6KnZp9UWIWTP6XqANgXaTi",
          "id": "6KnZp9UWIWTP6XqANgXaTi",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273704f3cc20f63b44f80298d5d",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02704f3cc20f63b44f80298d5d",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851704f3cc20f63b44f80298d5d",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Julie Roberts",
          "release_date": "2004-01-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:6KnZp9UWIWTP6XqANgXaTi",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5sXhYkm9PpLn5R70U2T6Ba"
              },
              "href": "https://api.spotify.com/v1/artists/5sXhYkm9PpLn5R70U2T6Ba",
              "id": "5sXhYkm9PpLn5R70U2T6Ba",
              "name": "Julie Roberts",
              "type": "artist",
              "uri": "spotify:artist:5sXhYkm9PpLn5R70U2T6Ba"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5sXhYkm9PpLn5R70U2T6Ba"
            },
            "href": "https://api.spotify.com/v1/artists/5sXhYkm9PpLn5R70U2T6Ba",
            "id": "5sXhYkm9PpLn5R70U2T6Ba",
            "name": "Julie Roberts",
            "type": "artist",
            "uri": "spotify:artist:5sXhYkm9PpLn5R70U2T6Ba"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 245493,
        "explicit": false,
        "external_ids": {
          "isrc": "USMR10300493"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1xsGrsVJwG9zel8pefzVeo"
        },
        "href": "https://api.spotify.com/v1/tracks/1xsGrsVJwG9zel8pefzVeo",
        "id": "1xsGrsVJwG9zel8pefzVeo",
        "name": "Break Down Here",
        "popularity": 51,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1xsGrsVJwG9zel8pefzVeo",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 17,
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3FJ8CPTKmF9bzzs898TfXN"
          },
          "href": "https://api.spotify.com/v1/albums/3FJ8CPTKmF9bzzs898TfXN",
          "id": "3FJ8CPTKmF9bzzs898TfXN",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2737c77b43fa27a93019088965f",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e027c77b43fa27a93019088965f",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048517c77b43fa27a93019088965f",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Sinkovsky Plays & Sings Vivaldi",
          "release_date": "2015-03-09",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:3FJ8CPTKmF9bzzs898TfXN",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2QOIawHpSlOwXDvSqQ9YJR"
              },
              "href": "https://api.spotify.com/v1/artists/2QOIawHpSlOwXDvSqQ9YJR",
              "id": "2QOIawHpSlOwXDvSqQ9YJR",
              "name": "Antonio Vivaldi",
              "type": "artist",
              "uri": "spotify:artist:2QOIawHpSlOwXDvSqQ9YJR"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6KxLsPEyo1B169xGOWUCwD"
              },
              "href": "https://api.spotify.com/v1/artists/6KxLsPEyo1B169xGOWUCwD",
              "id": "6KxLsPEyo1B169xGOWUCwD",
              "name": "Dmitry Sinkovsky",
              "type": "artist",
              "uri": "spotify:artist:6KxLsPEyo1B169xGOWUCwD"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2QOIawHpSlOwXDvSqQ9YJR"
            },
            "href": "https://api.spotify.com/v1/artists/2QOIawHpSlOwXDvSqQ9YJR",
            "id": "2QOIawHpSlOwXDvSqQ9YJR",
            "name": "Antonio Vivaldi",
            "type": "artist",
            "uri": "spotify:artist:2QOIawHpSlOwXDvSqQ9YJR"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6KxLsPEyo1B169xGOWUCwD"
            },
            "href": "https://api.spotify.com/v1/artists/6KxLsPEyo1B169xGOWUCwD",
            "id": "6KxLsPEyo1B169xGOWUCwD",
            "name": "Dmitry Sinkovsky",
            "type": "artist",
            "uri": "spotify:artist:6KxLsPEyo1B169xGOWUCwD"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0hQy24Snm3txnO86NWwQe1"
            },
            "href": "https://api.spotify.com/v1/artists/0hQy24Snm3txnO86NWwQe1",
            "id": "0hQy24Snm3txnO86NWwQe1",
            "name": "La Voce Strumentale",
            "type": "artist",
            "uri": "spotify:artist:0hQy24Snm3txnO86NWwQe1"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 502733,
        "explicit": false,
        "external_ids": {
          "isrc": "FRZ131402140"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0QDxP1NMCfKdnLCMY2sOcy"
        },
        "href": "https://api.spotify.com/v1/tracks/0QDxP1NMCfKdnLCMY2sOcy",
        "id": "0QDxP1NMCfKdnLCMY2sOcy",
        "name": "Farnace, RV 711, Act II, Scene V: Aria \"Gelido in ogni vena\"",
        "popularity": 0,
        "preview_url": null,
        "track_number": 14,
        "type": "track",
        "uri": "spotify:track:0QDxP1NMCfKdnLCMY2sOcy",
        "is_local": false
      },
      {
        "album": {
          "album_type": "SINGLE",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "MY", "MT", "MX", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5cH7FqB7JD5q1tJXJ7FHYu"
          },
          "href": "https://api.spotify.com/v1/albums/5cH7FqB7JD5q1tJXJ7FHYu",
          "id": "5cH7FqB7JD5q1tJXJ7FHYu",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2737dd3ba455ee3390cb55b0192",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e027dd3ba455ee3390cb55b0192",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048517dd3ba455ee3390cb55b0192",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Dance The Night (From Barbie The Album)",
          "release_date": "2023-05-25",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5cH7FqB7JD5q1tJXJ7FHYu",
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
        ],
        "available_markets": ["AR", "AU", "AT", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "MY", "MT", "MX", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 176579,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT22305457"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1vYXt7VSjH9JIM5oRRo7vA"
        },
        "href": "https://api.spotify.com/v1/tracks/1vYXt7VSjH9JIM5oRRo7vA",
        "id": "1vYXt7VSjH9JIM5oRRo7vA",
        "name": "Dance The Night - From Barbie The Album",
        "popularity": 88,
        "preview_url": "https://p.scdn.co/mp3-preview/acaea048f50a3b30ca24b348c84a6047373baabb?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1vYXt7VSjH9JIM5oRRo7vA",
        "is_local": false
      },
      {
        "album": {
          "album_type": "COMPILATION",
          "total_tracks": 19,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6zeHM5CV0CjcS0K8ouWE4N"
          },
          "href": "https://api.spotify.com/v1/albums/6zeHM5CV0CjcS0K8ouWE4N",
          "id": "6zeHM5CV0CjcS0K8ouWE4N",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b27313f982aa5c43146c3d2c1964",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e0213f982aa5c43146c3d2c1964",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000485113f982aa5c43146c3d2c1964",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Harry Potter and The Sorcerer's Stone Original Motion Picture Soundtrack",
          "release_date": "2001-10-30",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:6zeHM5CV0CjcS0K8ouWE4N",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3dRfiJ2650SZu6GbydcHNb"
              },
              "href": "https://api.spotify.com/v1/artists/3dRfiJ2650SZu6GbydcHNb",
              "id": "3dRfiJ2650SZu6GbydcHNb",
              "name": "John Williams",
              "type": "artist",
              "uri": "spotify:artist:3dRfiJ2650SZu6GbydcHNb"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3dRfiJ2650SZu6GbydcHNb"
            },
            "href": "https://api.spotify.com/v1/artists/3dRfiJ2650SZu6GbydcHNb",
            "id": "3dRfiJ2650SZu6GbydcHNb",
            "name": "John Williams",
            "type": "artist",
            "uri": "spotify:artist:3dRfiJ2650SZu6GbydcHNb"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 309093,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT20109275"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
        },
        "href": "https://api.spotify.com/v1/tracks/1n8NKQRg8LVHy7oUhUgbFF",
        "id": "1n8NKQRg8LVHy7oUhUgbFF",
        "name": "Hedwig's Theme",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/1716237b40d951c7dd8abdca7fdc5afaf47560fb?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 19,
        "type": "track",
        "uri": "spotify:track:1n8NKQRg8LVHy7oUhUgbFF",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 14,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1w9O7mS9WEp5xlZUpYbDt9"
          },
          "href": "https://api.spotify.com/v1/albums/1w9O7mS9WEp5xlZUpYbDt9",
          "id": "1w9O7mS9WEp5xlZUpYbDt9",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273cc186669d80a223438a9716a",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02cc186669d80a223438a9716a",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851cc186669d80a223438a9716a",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Music for 18 Musicians",
          "release_date": "1998",
          "release_date_precision": "year",
          "type": "album",
          "uri": "spotify:album:1w9O7mS9WEp5xlZUpYbDt9",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1aVONoJ0EM97BB26etc1vo"
              },
              "href": "https://api.spotify.com/v1/artists/1aVONoJ0EM97BB26etc1vo",
              "id": "1aVONoJ0EM97BB26etc1vo",
              "name": "Steve Reich",
              "type": "artist",
              "uri": "spotify:artist:1aVONoJ0EM97BB26etc1vo"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1aVONoJ0EM97BB26etc1vo"
            },
            "href": "https://api.spotify.com/v1/artists/1aVONoJ0EM97BB26etc1vo",
            "id": "1aVONoJ0EM97BB26etc1vo",
            "name": "Steve Reich",
            "type": "artist",
            "uri": "spotify:artist:1aVONoJ0EM97BB26etc1vo"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 238506,
        "explicit": false,
        "external_ids": {
          "isrc": "USN019745103"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1LWabh9wqLITaRpYe82PoD"
        },
        "href": "https://api.spotify.com/v1/tracks/1LWabh9wqLITaRpYe82PoD",
        "id": "1LWabh9wqLITaRpYe82PoD",
        "name": "Music for 18 Musicians: Section I",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/4bad1124a56fdaf63b4424bae9a6348625fe2b75?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1LWabh9wqLITaRpYe82PoD",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 14,
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/42sqfix0LCG84XUSOJ0L1D"
          },
          "href": "https://api.spotify.com/v1/albums/42sqfix0LCG84XUSOJ0L1D",
          "id": "42sqfix0LCG84XUSOJ0L1D",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2731024dabab41b5bbf13cba251",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e021024dabab41b5bbf13cba251",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048511024dabab41b5bbf13cba251",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Mescalito",
          "release_date": "2007-01-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:42sqfix0LCG84XUSOJ0L1D",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/31z9f9AyPawiq0qlBO1M3i"
              },
              "href": "https://api.spotify.com/v1/artists/31z9f9AyPawiq0qlBO1M3i",
              "id": "31z9f9AyPawiq0qlBO1M3i",
              "name": "Ryan Bingham",
              "type": "artist",
              "uri": "spotify:artist:31z9f9AyPawiq0qlBO1M3i"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/31z9f9AyPawiq0qlBO1M3i"
            },
            "href": "https://api.spotify.com/v1/artists/31z9f9AyPawiq0qlBO1M3i",
            "id": "31z9f9AyPawiq0qlBO1M3i",
            "name": "Ryan Bingham",
            "type": "artist",
            "uri": "spotify:artist:31z9f9AyPawiq0qlBO1M3i"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 379160,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM70745065"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6aLl1AjRbo4ddJZh7Hzazx"
        },
        "href": "https://api.spotify.com/v1/tracks/6aLl1AjRbo4ddJZh7Hzazx",
        "id": "6aLl1AjRbo4ddJZh7Hzazx",
        "name": "Southside Of Heaven",
        "popularity": 0,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6aLl1AjRbo4ddJZh7Hzazx",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 14,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4tNtjyBBXMhGRwqOQTbh6i"
          },
          "href": "https://api.spotify.com/v1/albums/4tNtjyBBXMhGRwqOQTbh6i",
          "id": "4tNtjyBBXMhGRwqOQTbh6i",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b27390a00067d70bfab568ca27f4",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e0290a00067d70bfab568ca27f4",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d0000485190a00067d70bfab568ca27f4",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Fine Ho, Stay",
          "release_date": "2024-03-15",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:4tNtjyBBXMhGRwqOQTbh6i",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08PvCOlef4xdOr20jFSTPd"
              },
              "href": "https://api.spotify.com/v1/artists/08PvCOlef4xdOr20jFSTPd",
              "id": "08PvCOlef4xdOr20jFSTPd",
              "name": "Flo Milli",
              "type": "artist",
              "uri": "spotify:artist:08PvCOlef4xdOr20jFSTPd"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/08PvCOlef4xdOr20jFSTPd"
            },
            "href": "https://api.spotify.com/v1/artists/08PvCOlef4xdOr20jFSTPd",
            "id": "08PvCOlef4xdOr20jFSTPd",
            "name": "Flo Milli",
            "type": "artist",
            "uri": "spotify:artist:08PvCOlef4xdOr20jFSTPd"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2sflbTtCirog5VxD6jPAfb"
            },
            "href": "https://api.spotify.com/v1/artists/2sflbTtCirog5VxD6jPAfb",
            "id": "2sflbTtCirog5VxD6jPAfb",
            "name": "Monaleo",
            "type": "artist",
            "uri": "spotify:artist:2sflbTtCirog5VxD6jPAfb"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 157192,
        "explicit": true,
        "external_ids": {
          "isrc": "USRC12400546"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5mjAXptfZ8yCVHTRpelvos"
        },
        "href": "https://api.spotify.com/v1/tracks/5mjAXptfZ8yCVHTRpelvos",
        "id": "5mjAXptfZ8yCVHTRpelvos",
        "name": "Neva (feat. Monaleo)",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/36239ec00eb7fa260a316d4862ea24848e5e06cc?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:5mjAXptfZ8yCVHTRpelvos",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 12,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5YlBA1tCY0M8DDs75RB2LY"
          },
          "href": "https://api.spotify.com/v1/albums/5YlBA1tCY0M8DDs75RB2LY",
          "id": "5YlBA1tCY0M8DDs75RB2LY",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273cac9b52107643faf13a7587b",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02cac9b52107643faf13a7587b",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851cac9b52107643faf13a7587b",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Messy",
          "release_date": "2023-06-30",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5YlBA1tCY0M8DDs75RB2LY",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/00x1fYSGhdqScXBRpSj3DW"
              },
              "href": "https://api.spotify.com/v1/artists/00x1fYSGhdqScXBRpSj3DW",
              "id": "00x1fYSGhdqScXBRpSj3DW",
              "name": "Olivia Dean",
              "type": "artist",
              "uri": "spotify:artist:00x1fYSGhdqScXBRpSj3DW"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/00x1fYSGhdqScXBRpSj3DW"
            },
            "href": "https://api.spotify.com/v1/artists/00x1fYSGhdqScXBRpSj3DW",
            "id": "00x1fYSGhdqScXBRpSj3DW",
            "name": "Olivia Dean",
            "type": "artist",
            "uri": "spotify:artist:00x1fYSGhdqScXBRpSj3DW"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 81222,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM72301862"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2LzOTLGAqF9IPkwHFiCysq"
        },
        "href": "https://api.spotify.com/v1/tracks/2LzOTLGAqF9IPkwHFiCysq",
        "id": "2LzOTLGAqF9IPkwHFiCysq",
        "name": "I Could Be A Florist",
        "popularity": 65,
        "preview_url": null,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:2LzOTLGAqF9IPkwHFiCysq",
        "is_local": false
      },
      {
        "album": {
          "album_type": "SINGLE",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2kJunH6dfHcjJa0lxZbRKr"
          },
          "href": "https://api.spotify.com/v1/albums/2kJunH6dfHcjJa0lxZbRKr",
          "id": "2kJunH6dfHcjJa0lxZbRKr",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2730b33baa98ef691f09bfa23a1",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e020b33baa98ef691f09bfa23a1",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048510b33baa98ef691f09bfa23a1",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Doctor (Work It Out) [feat. Miley Cyrus]",
          "release_date": "2024-03-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2kJunH6dfHcjJa0lxZbRKr",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
              },
              "href": "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
              "id": "2RdwBSPQiwcmiDo9kixcl8",
              "name": "Pharrell Williams",
              "type": "artist",
              "uri": "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6"
              },
              "href": "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
              "id": "5YGY8feqx7naU7z4HrwZM6",
              "name": "Miley Cyrus",
              "type": "artist",
              "uri": "spotify:artist:5YGY8feqx7naU7z4HrwZM6"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
            },
            "href": "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
            "id": "2RdwBSPQiwcmiDo9kixcl8",
            "name": "Pharrell Williams",
            "type": "artist",
            "uri": "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6"
            },
            "href": "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
            "id": "5YGY8feqx7naU7z4HrwZM6",
            "name": "Miley Cyrus",
            "type": "artist",
            "uri": "spotify:artist:5YGY8feqx7naU7z4HrwZM6"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 182221,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM12400672"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4f9wNNZET9wH7eMBgONd3d"
        },
        "href": "https://api.spotify.com/v1/tracks/4f9wNNZET9wH7eMBgONd3d",
        "id": "4f9wNNZET9wH7eMBgONd3d",
        "name": "Doctor (Work It Out) [feat. Miley Cyrus]",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/6ca2f27fc8c72bc24ab6e0da483636c7e789a623?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4f9wNNZET9wH7eMBgONd3d",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 17,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/53Oa5Bu0UTU8o8qCTaHKoz"
          },
          "href": "https://api.spotify.com/v1/albums/53Oa5Bu0UTU8o8qCTaHKoz",
          "id": "53Oa5Bu0UTU8o8qCTaHKoz",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273ccba76fad1c624c09e72bc78",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02ccba76fad1c624c09e72bc78",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851ccba76fad1c624c09e72bc78",
              "height": 64,
              "width": 64
            }
          ],
          "name": "This One's for You Too (Deluxe Edition)",
          "release_date": "2018-06-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:53Oa5Bu0UTU8o8qCTaHKoz",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS"
              },
              "href": "https://api.spotify.com/v1/artists/718COspgdWOnwOFpJHRZHS",
              "id": "718COspgdWOnwOFpJHRZHS",
              "name": "Luke Combs",
              "type": "artist",
              "uri": "spotify:artist:718COspgdWOnwOFpJHRZHS"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS"
            },
            "href": "https://api.spotify.com/v1/artists/718COspgdWOnwOFpJHRZHS",
            "id": "718COspgdWOnwOFpJHRZHS",
            "name": "Luke Combs",
            "type": "artist",
            "uri": "spotify:artist:718COspgdWOnwOFpJHRZHS"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 183160,
        "explicit": false,
        "external_ids": {
          "isrc": "US6XF1700267"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/698eQRku24PIYPQPHItKlA"
        },
        "href": "https://api.spotify.com/v1/tracks/698eQRku24PIYPQPHItKlA",
        "id": "698eQRku24PIYPQPHItKlA",
        "name": "She Got the Best of Me",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/62987b51b76bd417ac56812161cf825d4c22f549?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 17,
        "type": "track",
        "uri": "spotify:track:698eQRku24PIYPQPHItKlA",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 13,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6dFMJi2op2N2IJaieIJhzm"
          },
          "href": "https://api.spotify.com/v1/albums/6dFMJi2op2N2IJaieIJhzm",
          "id": "6dFMJi2op2N2IJaieIJhzm",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2732f8e2f53d9256b964b708901",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e022f8e2f53d9256b964b708901",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048512f8e2f53d9256b964b708901",
              "height": 64,
              "width": 64
            }
          ],
          "name": "My Town",
          "release_date": "2002-08-19",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:6dFMJi2op2N2IJaieIJhzm",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3bGXaFVQLASmDMdjjeJr8a"
              },
              "href": "https://api.spotify.com/v1/artists/3bGXaFVQLASmDMdjjeJr8a",
              "id": "3bGXaFVQLASmDMdjjeJr8a",
              "name": "Montgomery Gentry",
              "type": "artist",
              "uri": "spotify:artist:3bGXaFVQLASmDMdjjeJr8a"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3bGXaFVQLASmDMdjjeJr8a"
            },
            "href": "https://api.spotify.com/v1/artists/3bGXaFVQLASmDMdjjeJr8a",
            "id": "3bGXaFVQLASmDMdjjeJr8a",
            "name": "Montgomery Gentry",
            "type": "artist",
            "uri": "spotify:artist:3bGXaFVQLASmDMdjjeJr8a"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 239066,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM10209240"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1zUQcIZZK3QpJKeBNbS9wk"
        },
        "href": "https://api.spotify.com/v1/tracks/1zUQcIZZK3QpJKeBNbS9wk",
        "id": "1zUQcIZZK3QpJKeBNbS9wk",
        "name": "Speed",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/50c124d33cc573c1bf695cf346e93f586027dcc9?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:1zUQcIZZK3QpJKeBNbS9wk",
        "is_local": false
      },
      {
        "album": {
          "album_type": "SINGLE",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0jj8xYfd6vh54BN4PyuWts"
          },
          "href": "https://api.spotify.com/v1/albums/0jj8xYfd6vh54BN4PyuWts",
          "id": "0jj8xYfd6vh54BN4PyuWts",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2736398dd7b89099502e51c49ff",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e026398dd7b89099502e51c49ff",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048516398dd7b89099502e51c49ff",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Georgia Time",
          "release_date": "2018-06-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:0jj8xYfd6vh54BN4PyuWts",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2QMsj4XJ7ne2hojxt6v5eb"
              },
              "href": "https://api.spotify.com/v1/artists/2QMsj4XJ7ne2hojxt6v5eb",
              "id": "2QMsj4XJ7ne2hojxt6v5eb",
              "name": "Riley Green",
              "type": "artist",
              "uri": "spotify:artist:2QMsj4XJ7ne2hojxt6v5eb"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2QMsj4XJ7ne2hojxt6v5eb"
            },
            "href": "https://api.spotify.com/v1/artists/2QMsj4XJ7ne2hojxt6v5eb",
            "id": "2QMsj4XJ7ne2hojxt6v5eb",
            "name": "Riley Green",
            "type": "artist",
            "uri": "spotify:artist:2QMsj4XJ7ne2hojxt6v5eb"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 221200,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACY1762572"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5XqHOqbjKb7YsQV6f3eGeD"
        },
        "href": "https://api.spotify.com/v1/tracks/5XqHOqbjKb7YsQV6f3eGeD",
        "id": "5XqHOqbjKb7YsQV6f3eGeD",
        "name": "Georgia Time",
        "popularity": 64,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5XqHOqbjKb7YsQV6f3eGeD",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 27,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL"
          },
          "href": "https://api.spotify.com/v1/albums/2m1enA3YrMLVvR3q0MqLpL",
          "id": "2m1enA3YrMLVvR3q0MqLpL",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e024903a9678d5664b9cd9a3fd8",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048514903a9678d5664b9cd9a3fd8",
              "height": 64,
              "width": 64
            }
          ],
          "name": "COWBOY CARTER",
          "release_date": "2024-03-27",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2m1enA3YrMLVvR3q0MqLpL",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
              },
              "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
              "id": "6vWDO969PvNqNYHIOW5v0m",
              "name": "Beyoncé",
              "type": "artist",
              "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
            },
            "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
            "id": "6vWDO969PvNqNYHIOW5v0m",
            "name": "Beyoncé",
            "type": "artist",
            "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/32vWCbZh0xZ4o9gkz4PsEU"
            },
            "href": "https://api.spotify.com/v1/artists/32vWCbZh0xZ4o9gkz4PsEU",
            "id": "32vWCbZh0xZ4o9gkz4PsEU",
            "name": "Dolly Parton",
            "type": "artist",
            "uri": "spotify:artist:32vWCbZh0xZ4o9gkz4PsEU"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 250725,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM12402726"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3NtCIBBz5pEAVGeHL4h5mS"
        },
        "href": "https://api.spotify.com/v1/tracks/3NtCIBBz5pEAVGeHL4h5mS",
        "id": "3NtCIBBz5pEAVGeHL4h5mS",
        "name": "TYRANT",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/32c70c11c2d3286ae0b8d8d339b9ea0d9ff12f78?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 25,
        "type": "track",
        "uri": "spotify:track:3NtCIBBz5pEAVGeHL4h5mS",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 11,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2JHLYDS3tiDbrtmB6wGtcL"
          },
          "href": "https://api.spotify.com/v1/albums/2JHLYDS3tiDbrtmB6wGtcL",
          "id": "2JHLYDS3tiDbrtmB6wGtcL",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273b1b8474fb3ff0f96ccff1de8",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02b1b8474fb3ff0f96ccff1de8",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851b1b8474fb3ff0f96ccff1de8",
              "height": 64,
              "width": 64
            }
          ],
          "name": "You Got 'Em All",
          "release_date": "2018-05-18",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2JHLYDS3tiDbrtmB6wGtcL",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1YSoHvvSAY0oOJW7VxJx3M"
              },
              "href": "https://api.spotify.com/v1/artists/1YSoHvvSAY0oOJW7VxJx3M",
              "id": "1YSoHvvSAY0oOJW7VxJx3M",
              "name": "Trent Harmon",
              "type": "artist",
              "uri": "spotify:artist:1YSoHvvSAY0oOJW7VxJx3M"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1YSoHvvSAY0oOJW7VxJx3M"
            },
            "href": "https://api.spotify.com/v1/artists/1YSoHvvSAY0oOJW7VxJx3M",
            "id": "1YSoHvvSAY0oOJW7VxJx3M",
            "name": "Trent Harmon",
            "type": "artist",
            "uri": "spotify:artist:1YSoHvvSAY0oOJW7VxJx3M"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 214360,
        "explicit": false,
        "external_ids": {
          "isrc": "QMTM61600012"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7fCYf72AG7AdiEWv3wa0jV"
        },
        "href": "https://api.spotify.com/v1/tracks/7fCYf72AG7AdiEWv3wa0jV",
        "id": "7fCYf72AG7AdiEWv3wa0jV",
        "name": "There’s A Girl",
        "popularity": 0,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7fCYf72AG7AdiEWv3wa0jV",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 10,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5Zkkpctw3ak9LqoZH9Xxe6"
          },
          "href": "https://api.spotify.com/v1/albums/5Zkkpctw3ak9LqoZH9Xxe6",
          "id": "5Zkkpctw3ak9LqoZH9Xxe6",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273d4f518d28f2f06b80c2f5faf",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02d4f518d28f2f06b80c2f5faf",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851d4f518d28f2f06b80c2f5faf",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Schumann, C.: Piano Concerto, Op. 7 / Piano Trio, Op. 17 / 3 Romanzen",
          "release_date": "2009-09-29",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5Zkkpctw3ak9LqoZH9Xxe6",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2yzaWNFV3cxmcRZtwtr5WC"
              },
              "href": "https://api.spotify.com/v1/artists/2yzaWNFV3cxmcRZtwtr5WC",
              "id": "2yzaWNFV3cxmcRZtwtr5WC",
              "name": "Clara Schumann",
              "type": "artist",
              "uri": "spotify:artist:2yzaWNFV3cxmcRZtwtr5WC"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nd3IdPZ8CDPAkwjGuz1MS"
              },
              "href": "https://api.spotify.com/v1/artists/3Nd3IdPZ8CDPAkwjGuz1MS",
              "id": "3Nd3IdPZ8CDPAkwjGuz1MS",
              "name": "Joseph Silverstein",
              "type": "artist",
              "uri": "spotify:artist:3Nd3IdPZ8CDPAkwjGuz1MS"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2yzaWNFV3cxmcRZtwtr5WC"
            },
            "href": "https://api.spotify.com/v1/artists/2yzaWNFV3cxmcRZtwtr5WC",
            "id": "2yzaWNFV3cxmcRZtwtr5WC",
            "name": "Clara Schumann",
            "type": "artist",
            "uri": "spotify:artist:2yzaWNFV3cxmcRZtwtr5WC"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6SvBBYop3J1TTFYVpcgtIL"
            },
            "href": "https://api.spotify.com/v1/artists/6SvBBYop3J1TTFYVpcgtIL",
            "id": "6SvBBYop3J1TTFYVpcgtIL",
            "name": "Veronica Jochum",
            "type": "artist",
            "uri": "spotify:artist:6SvBBYop3J1TTFYVpcgtIL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7qs9lBPZgZzLAYAWfHLAll"
            },
            "href": "https://api.spotify.com/v1/artists/7qs9lBPZgZzLAYAWfHLAll",
            "id": "7qs9lBPZgZzLAYAWfHLAll",
            "name": "Bamberg Symphony",
            "type": "artist",
            "uri": "spotify:artist:7qs9lBPZgZzLAYAWfHLAll"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Nd3IdPZ8CDPAkwjGuz1MS"
            },
            "href": "https://api.spotify.com/v1/artists/3Nd3IdPZ8CDPAkwjGuz1MS",
            "id": "3Nd3IdPZ8CDPAkwjGuz1MS",
            "name": "Joseph Silverstein",
            "type": "artist",
            "uri": "spotify:artist:3Nd3IdPZ8CDPAkwjGuz1MS"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 269973,
        "explicit": false,
        "external_ids": {
          "isrc": "CH0040903790"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3LNsyHdo8MWl4mqbkzAvKh"
        },
        "href": "https://api.spotify.com/v1/tracks/3LNsyHdo8MWl4mqbkzAvKh",
        "id": "3LNsyHdo8MWl4mqbkzAvKh",
        "name": "Piano Concerto in A Minor, Op. 7: II. Romanze: Andante non troppo con grazia",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/511be092c8ff8947cb21e8791295f873953d6c74?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3LNsyHdo8MWl4mqbkzAvKh",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 17,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1YabyjEw7SGbqzPFt3IFHI"
          },
          "href": "https://api.spotify.com/v1/albums/1YabyjEw7SGbqzPFt3IFHI",
          "id": "1YabyjEw7SGbqzPFt3IFHI",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273b1a301d3f1c0109cefb9614b",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02b1a301d3f1c0109cefb9614b",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851b1a301d3f1c0109cefb9614b",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Brahms: 4 Ballades, 2 Rhapsodies & Intermezzi",
          "release_date": "1961",
          "release_date_precision": "year",
          "type": "album",
          "uri": "spotify:album:1YabyjEw7SGbqzPFt3IFHI",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5wTAi7QkpP6kp8a54lmTOq"
              },
              "href": "https://api.spotify.com/v1/artists/5wTAi7QkpP6kp8a54lmTOq",
              "id": "5wTAi7QkpP6kp8a54lmTOq",
              "name": "Johannes Brahms",
              "type": "artist",
              "uri": "spotify:artist:5wTAi7QkpP6kp8a54lmTOq"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/13dkPjqmbcchm8cXjEJQeP"
              },
              "href": "https://api.spotify.com/v1/artists/13dkPjqmbcchm8cXjEJQeP",
              "id": "13dkPjqmbcchm8cXjEJQeP",
              "name": "Glenn Gould",
              "type": "artist",
              "uri": "spotify:artist:13dkPjqmbcchm8cXjEJQeP"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5wTAi7QkpP6kp8a54lmTOq"
            },
            "href": "https://api.spotify.com/v1/artists/5wTAi7QkpP6kp8a54lmTOq",
            "id": "5wTAi7QkpP6kp8a54lmTOq",
            "name": "Johannes Brahms",
            "type": "artist",
            "uri": "spotify:artist:5wTAi7QkpP6kp8a54lmTOq"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/13dkPjqmbcchm8cXjEJQeP"
            },
            "href": "https://api.spotify.com/v1/artists/13dkPjqmbcchm8cXjEJQeP",
            "id": "13dkPjqmbcchm8cXjEJQeP",
            "name": "Glenn Gould",
            "type": "artist",
            "uri": "spotify:artist:13dkPjqmbcchm8cXjEJQeP"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 2,
        "duration_ms": 318440,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM16000713"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5GkvPnH2sZRda9YSk92dcO"
        },
        "href": "https://api.spotify.com/v1/tracks/5GkvPnH2sZRda9YSk92dcO",
        "id": "5GkvPnH2sZRda9YSk92dcO",
        "name": "3 Intermezzi, Op. 117: No. 3 in C-Sharp Minor, Andante con moto",
        "popularity": 19,
        "preview_url": "https://p.scdn.co/mp3-preview/65d9ec475278271abf43dea9235d1ea080d29ba1?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5GkvPnH2sZRda9YSk92dcO",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 11,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1Kc7TpYwJQ0mzVAssuWbB0"
          },
          "href": "https://api.spotify.com/v1/albums/1Kc7TpYwJQ0mzVAssuWbB0",
          "id": "1Kc7TpYwJQ0mzVAssuWbB0",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2736af7773dc6d546ff54f4fd7f",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e026af7773dc6d546ff54f4fd7f",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048516af7773dc6d546ff54f4fd7f",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Texoma Shore",
          "release_date": "2017-11-03",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:1Kc7TpYwJQ0mzVAssuWbB0",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1UTPBmNbXNTittyMJrNkvw"
              },
              "href": "https://api.spotify.com/v1/artists/1UTPBmNbXNTittyMJrNkvw",
              "id": "1UTPBmNbXNTittyMJrNkvw",
              "name": "Blake Shelton",
              "type": "artist",
              "uri": "spotify:artist:1UTPBmNbXNTittyMJrNkvw"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1UTPBmNbXNTittyMJrNkvw"
            },
            "href": "https://api.spotify.com/v1/artists/1UTPBmNbXNTittyMJrNkvw",
            "id": "1UTPBmNbXNTittyMJrNkvw",
            "name": "Blake Shelton",
            "type": "artist",
            "uri": "spotify:artist:1UTPBmNbXNTittyMJrNkvw"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 183640,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB11701520"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/609qKv3KPAbdtp0LQH2buA"
        },
        "href": "https://api.spotify.com/v1/tracks/609qKv3KPAbdtp0LQH2buA",
        "id": "609qKv3KPAbdtp0LQH2buA",
        "name": "I'll Name the Dogs",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/a64d3dcf3fb91499d6a50cd9604b34c9ac6dcbd4?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:609qKv3KPAbdtp0LQH2buA",
        "is_local": false
      },
      {
        "album": {
          "album_type": "SINGLE",
          "total_tracks": 1,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2VIJu8iWncUpGcv64UOxnv"
          },
          "href": "https://api.spotify.com/v1/albums/2VIJu8iWncUpGcv64UOxnv",
          "id": "2VIJu8iWncUpGcv64UOxnv",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2730969013bba974a554fdf09e3",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e020969013bba974a554fdf09e3",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048510969013bba974a554fdf09e3",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Made For Me",
          "release_date": "2023-09-15",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:2VIJu8iWncUpGcv64UOxnv",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7tjVFCxJdwT4NdrTmjyjQ6"
              },
              "href": "https://api.spotify.com/v1/artists/7tjVFCxJdwT4NdrTmjyjQ6",
              "id": "7tjVFCxJdwT4NdrTmjyjQ6",
              "name": "Muni Long",
              "type": "artist",
              "uri": "spotify:artist:7tjVFCxJdwT4NdrTmjyjQ6"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7tjVFCxJdwT4NdrTmjyjQ6"
            },
            "href": "https://api.spotify.com/v1/artists/7tjVFCxJdwT4NdrTmjyjQ6",
            "id": "7tjVFCxJdwT4NdrTmjyjQ6",
            "name": "Muni Long",
            "type": "artist",
            "uri": "spotify:artist:7tjVFCxJdwT4NdrTmjyjQ6"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 188000,
        "explicit": false,
        "external_ids": {
          "isrc": "USUG12307428"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0WIv5qV41y6YjjB9V1biuC"
        },
        "href": "https://api.spotify.com/v1/tracks/0WIv5qV41y6YjjB9V1biuC",
        "id": "0WIv5qV41y6YjjB9V1biuC",
        "name": "Made For Me",
        "popularity": 87,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0WIv5qV41y6YjjB9V1biuC",
        "is_local": false
      },
      {
        "album": {
          "album_type": "ALBUM",
          "total_tracks": 20,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0xIKZI6Fg8EYJTpL0x5JJt"
          },
          "href": "https://api.spotify.com/v1/albums/0xIKZI6Fg8EYJTpL0x5JJt",
          "id": "0xIKZI6Fg8EYJTpL0x5JJt",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273374cc165b8bd7e0b2b4181fd",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02374cc165b8bd7e0b2b4181fd",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851374cc165b8bd7e0b2b4181fd",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Bach: Partitas Nos. 1, 5 & 6",
          "release_date": "2009-08-31",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:0xIKZI6Fg8EYJTpL0x5JJt",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408"
              },
              "href": "https://api.spotify.com/v1/artists/5aIqB5nVVvmFsvSdExz408",
              "id": "5aIqB5nVVvmFsvSdExz408",
              "name": "Johann Sebastian Bach",
              "type": "artist",
              "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4EEQIAJoeN1V30MqFFtXxB"
              },
              "href": "https://api.spotify.com/v1/artists/4EEQIAJoeN1V30MqFFtXxB",
              "id": "4EEQIAJoeN1V30MqFFtXxB",
              "name": "Murray Perahia",
              "type": "artist",
              "uri": "spotify:artist:4EEQIAJoeN1V30MqFFtXxB"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408"
            },
            "href": "https://api.spotify.com/v1/artists/5aIqB5nVVvmFsvSdExz408",
            "id": "5aIqB5nVVvmFsvSdExz408",
            "name": "Johann Sebastian Bach",
            "type": "artist",
            "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4EEQIAJoeN1V30MqFFtXxB"
            },
            "href": "https://api.spotify.com/v1/artists/4EEQIAJoeN1V30MqFFtXxB",
            "id": "4EEQIAJoeN1V30MqFFtXxB",
            "name": "Murray Perahia",
            "type": "artist",
            "uri": "spotify:artist:4EEQIAJoeN1V30MqFFtXxB"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 187546,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM10902769"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4A8DzH3u3o7sukAqtjmIJT"
        },
        "href": "https://api.spotify.com/v1/tracks/4A8DzH3u3o7sukAqtjmIJT",
        "id": "4A8DzH3u3o7sukAqtjmIJT",
        "name": "Partita No. 1 in B-Flat Major, BWV 825: II. Allemande",
        "popularity": 18,
        "preview_url": "https://p.scdn.co/mp3-preview/ab9991d3a590375060eaa4047b562d22b3761434?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4A8DzH3u3o7sukAqtjmIJT",
        "is_local": false
      }
    ]
  } 
  tracks: any[] = this.sampleData["tracks"];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tracks)
  }

  msConversion(time: number): string{
    let seconds = time/1000
    //  let mintues = seconds/60;
     let secondsLeftOver = Math.round(seconds % 60);
     
     let mins = (seconds - secondsLeftOver) / 60

     if(secondsLeftOver < 10){
      return `${Math.round(mins)}:0${secondsLeftOver}`
     }


    return `${Math.round(mins)}:${secondsLeftOver}`
  }

}
