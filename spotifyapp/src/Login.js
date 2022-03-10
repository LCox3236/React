const CLIENT_ID = "25aac742eeb14c188aab9d1264f9838b"
const REDIRECT_URI = ""
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "code"


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=25aac742eeb14c188aab9d1264f9838b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing"


export default function Login(){
    return(
        <div id="loginContainer">
            <a id='loginButton' href={AUTH_URL}>Login to Spotify</a>
        </div>
    )
}



