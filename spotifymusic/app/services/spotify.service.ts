import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    //由于spotify在17年对其API做了更改改成了OAuth认证，所有的请求都需要授权，这里的Token就是通过授权获取的，可以通过运行spotify提供的示例获取：
    //https://github.com/spotify/web-api-auth-examples/tree/master/authorization_code
    private accessToken="BQDP-8u8OpmWtoTVUEg6t9Wb6Gt6-4Gvk3Y01XAkWSoNydQNomsoTHuIQF6t943O5ww-8edtfctSmn6GWnc_36u4ld-yTY3AEeq5fe77-r1U9KCqx3gdt0sxprTAD48lVlFpsu233hwCTEz290zVS7_abdnU&refresh_token=AQDmOQ0mD2VvD2rnVfEKTw3TU2CoXp_FHCA0DbHZibFXIYblyE29tlKlm4IVNvjnmj43UzgvkfXZq17_mhG_FvtPSvI3rN2K-s_nIxCah6bc4HAm5QVkAzuvwvXl9QQG7gk";
    private headers:Headers;

    constructor(private _http:Http){
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + this.accessToken);
    }

    searchMusic(str:string, type='artist'){

        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl,{headers:this.headers})
            .map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl,{headers:this.headers})
            .map(res => res.json());
    }

    getAlbums(artistId:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl,{headers:this.headers})
            .map(res => res.json());
    }

    getAlbum(id:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl,{headers:this.headers})
            .map(res => res.json());
    }
}