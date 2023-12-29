import { Album } from "./Conteudo/Album";
import { EscuteNovamente } from "./Conteudo/EscuteNovamente";
import { Header } from "./Conteudo/Header";
import { OutrosArtistas } from "./Conteudo/OutrosArtistas";
import { Radio } from "./Conteudo/Radio";
import { Tags } from "./Conteudo/Tags";

const tags = [
  {
    nome: "sertanejo",
  },
  {
    nome: "funk",
  },
  {
    nome: "pop",
  },
  {
    nome: "rap",
  },
  {
    nome: "eletronica",
  },
];

const musicasRadio = [
  {
    nome: "If You... (Disco Mix)",
    banda: "Magic Box • If You...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Thnks fr th Mmrs",
    banda: "Fall Out Boy • Level II",
    imagem: "https://i.scdn.co/image/ab67616d0000b2734766a1586b308a6246b4ac6e",
  },
  {
    nome: "LONELY MACHINES",
    banda: "30H!3 e 100 gecs • LONELY MACHINES",
    imagem:
      "https://musicainstantanea.com.br/wp-content/uploads/2020/11/3oh3-100-gecs-lonely-machines.jpeg",
  },
  {
    nome: "Castle In The Sky (Da Brozz Remix Edit)",
    banda: "DJ Satomi • Castle In the Sky (2010 Remixes)",
    imagem: "https://i.scdn.co/image/ab67616d0000b27350a61fd35c46b70d482697eb",
  },
  {
    nome: "Chasing That Feeling",
    banda: "TOMORROW X TOGETH... • The Name Chapter: FR...",
    imagem:
      "https://i2.wp.com/hjksdhhgajhdsiueiqwe.uyeshare.cc/cover/D1hLPAkbT.jpg?resize=300,300",
  },
  {
    nome: "The Night Is Still Young",
    banda: "Nicki Minaj • The Pinkprint (Deluxe)",
    imagem: "https://i.scdn.co/image/ab67616d0000b273e132ffe656bd17abec3960d7",
  },
  {
    nome: "Way Back Home [Sam Feldt Edit] (part. Conor Mayn...",
    banda: "SHAUN • Way Back Home [Sam Feldt Edit]",
    imagem: "https://i.scdn.co/image/ab67616d0000b27391994452af66b672954b6eb4",
  },
  {
    nome: "Little Kandi Raver 2012",
    banda: "S3rl • Little Kandi Raver 2012",
    imagem: "https://i1.sndcdn.com/artworks-000029366667-skkbs5-t500x500.jpg",
  },
  {
    nome: "Boom (German Bonus Extended Mix by Rob & Chris)",
    banda: "ItaloBrothers feat.Carlprit • Hands Up Forever (The...",
    imagem:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d0/4c/7e/d04c7eb5-d53e-dc95-ad36-38b26ecf4ee7/4260148498176_1448.jpg/400x400cc.jpg",
  },
  {
    nome: "If You Love Someone",
    banda: "The Veronicas • The Veronicas",
    imagem: "https://i.scdn.co/image/ab67616d0000b2738212b5177b39bab83337440f",
  },
  {
    nome: "Turn The Lights Off",
    banda: "EQRIC, VADDS e Lonnel • Turn The Lights Off",
    imagem:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/49/d7/f6/49d7f653-8204-d64c-99aa-87675d5d0ed0/053000851066_cover.jpg/1200x1200bf-60.jpg",
  },
  {
    nome: "fall apart",
    banda: "renforshot e glaive • hold on I still want you",
    imagem:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/14/e2/a1/14e2a1b6-45d1-51c3-fce5-05fb4ca51af1/21UMGIM89898.rgb.jpg/1200x1200bf-60.jpg",
  },
];

const lancamentos = [
  {
    nome: "Bad",
    descricao: "Bad • Michael Jackson",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/5/51/Michael_Jackson_-_Bad.png",
  },
  {
    nome: "Nevermind (Remastered)",
    descricao: "Nevermind • Nirvana",
    image:
      "https://m.media-amazon.com/images/I/71DQrKpImPL._UF1000,1000_QL80_.jpg",
  },
  {
    nome: "Starboy",
    descricao: "Starboy • The Weeknd",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/3/39/The_Weeknd_-_Starboy.png",
  },
  {
    nome: "Superman",
    descricao: "Superman • Eminem",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/The_Eminem_Show.jpg/220px-The_Eminem_Show.jpg",
  },
  {
    nome: "Highway to hell",
    descricao: "Highway to hell • ACDC",
    image:
      "https://cdn.ome.lt/mliEfdqgFXlw-bJ6T207TMh3AaU=/837x0/smart/uploads/conteudo/fotos/highway-to-hell-ac-dc.jpg",
  },
  {
    nome: "Appetite For Destruction",
    descricao: "Appetite For Destruction • Guns n Roses",
    image:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg",
  },
];

const artistas = [
  {
    nome: "Drake",
    descricao: "29,1 mi de inscritos",
    image: "https://lcmagalhaes.com.br/wp-content/uploads/2023/04/drake.jpg",
  },
  {
    nome: "Michael Jackson",
    descricao: "29,4 mi de inscritos",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgZHRwaHBwcHB4aGh4dHBoaGhwcHhwhIy4mHh4rHxwcJjgmKzA0NTU2GiQ7QDs0Py40NjEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAQIDBAUAB//EAEMQAAIBAgQDBQUECAUEAgMAAAECEQAhAwQSMQVBUQYiYXGBEzKRobFCUsHRFGJykrLS4fAVIzOC8QeTosJD4lOUo//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEBAQACAwEBAQAAAAAAAAABAhEDIRIxQVEiYf/aAAwDAQACEQMRAD8A1MyzQsC0SLEjTdjfyJkxbnFcMHVpVVIYTN7sRew5+7y6fB2GGLAIWLb6TcERe2wBkjyikxMKCGYGAACIEwoCsYuR5+HKLgq4rKIHdGoMdha3egnwtynV5VXxn1E6f1YgbAidU8r9Ad+UVKxYA7gxMmSASOXPY3NzceFPBlZNlEclvsCBE6ZEfAxzkFWSNChSTsxXkZgRF/z+ddpW1pBFwYuAZIsbyQfqKRSGMgCSAIsLXkGY8PhzirX6Op1aWgJJYtMRv1gkgx17pPhQQF7FTeVmQYAXnA3PTrtborhT3lJDDeDG4AFxYC56RNSAzfVYkmADeCREjYD13FR5/HRE1lwqBiJNgLrMSYNlWFnfymgjGGIDXiBNjIEXtG4uR5VyKtisjcbqTBiORnnb1iKGeI9ryWCZdNbWhiGJJHNV369KqJwrO5kE4jnDTeCTEzEaF2/3RQb+Z4xgYbnViDnKSWJOx2J5WvPXpWdme2WBywmcx7xhAPESx28vOafkOyWAoBfW/WSEEgmbC8b3PTmTFbeQ4dhISUwkQ2092TNvtG/I32vRIZftjjMSUwJHL3mFxHIbRaBFIvaTPEEDL2Nv9NyZkGLne3reZoseEElvECNgeUbeG4t4U3DzSe6xk+WwOom0yBOkx4DpUdhwKDjmeWCcta3/AMOJccuZpR2sxls+WgCzAh1vG5DA38D1owTFgmVYAAHveuogHlz2G3kRXwc0CTDQSZBvczym20XP5U7DjDy3bbLgn/JxFPKGVgJEEcjvfbr1rRTtNg4ptiKhYAQdQna0NYc+fM1bzOVw8Qd/DwnOwBUEiZmDFo5Dw8DWbnOxeAyal1IeQRg0ncSp2G/TaKka2GuvTtMCGWCDeLyTuLz8zNlVYuGuDB33BIv0H4bUIY3Z/N5ck4Dl1ESBC7xupYrv43ipMt2qZGOHmcMqbgsohgdWq6HlPToKArIYFR3ogSFtLWOx373ICBfrTgwjSpgNBFpMyTAJ2Bueot4iq3D86j99HXFWxIg73LBlNx5HkJ8reWw9Q92bibwZgGbxymOV/GiEbKIG0iDuDvEkRHKCQJggdLvfA1ISZ5CfKBEzGjcSeu3RHw0iCLyVggWNoBk2EMb+NccUFSqkhTDFfvFbDmJ7ptIvpHSgXDw7mSSzQTv1gAHYtH1HSkxsSSWDTA3ICgSN9+Yg7daRsMh7RNok2AJ1Xnn3vOpsTD+won3bgkahYixNjGmfKgr4RZoNwDMgggMwInnckkH0FqmVFYsvn+sTANyWAEA3tBjpS+yVAwa7WFiQNOkHSDPWOZHdNQuNJMEnckAbROx5zI+VBJqP3G/cH5V1Qam6N/3l/lrqCxh4jSNInUZBBF+gvOwBF5625sVHQ+697TcTvpJnfn0tPnUUCx1EGCdOkxYdTYG2221WcbEazd5goHu7KIAI1REH+lpuEKqoA1rqP0vcTueu/P0qS5LwxFw299Sho39LDY6uolqJKllnuzIYmSSvlccq7EHJr2MAGBbr4xy8iaCViSSYuLELtFgZMkREWIkgVXfO3vAJtflE+hsBeesztUeNjqEYltIvDTYAFRMnoJPod6FeJ8YxM0/sMsncMBmAgtc3J+wlxzk6RytQX+L9qhhHThkPieEFFJBmfvGYOmOQvWbhcDzGZb2mZcqIkKfejlpTZVv9a3uB8ATLd4wXII1sLiPeCKdjeOu1+Q08V5kEhuhuI7xM+Z1Hbn5CHC2RBw3hSYA7qBBIlm+1G4D7zB5eUXpuLxEL7q6miJ22i8xubiwi81zknck/2PyHwpMLCBN6tzinytvovC/aYplyVQWAUaQbRcmfHatLOZzT3EAHjsPlc1XPF0SVVNUWBNhJvt5CsXO8Q1ozARyJIgeMD7Vqy1r+Ncz+rg4jhMSHvEA6ARc+Jmaa+dw5ZsJoAIA1DSSSJtJNqG8dwV0htN+9vM7bis7FxCrEqTzBPuzPQDl4eFV4t6E2LxnEUMzMrCDJJB26XmTtcxVLiHEln/LKkEagQsOLAsDHOSbjehvGxiYBI85sOQty51IiDVcEgjdbEHYH5c6nkG9h8RcAezBK895tc2M1cy/abQJClovPK4vN/MetD2HnGTUsspujGDM9PM0mA5BkEEEQVPetFzJ2g0SOstxUMqs3dJlu8sGDABA+0vdjYz6V2ZbBzKjVDqSLMSSuoaZsCViPgBvsAf8ASYJGkcvtE2F4528qVJB1YLOrQdgQSDAImYO9TLVblq8R7Mth4mvJu2oGyFlLiZsrAAOPAjkZmpOEdpu8MPMroYd3XBAF7Su6nl08q7hfbMgKmYXUBMOiqGExdhYE+PlawrW4lwnBzKL3lJIlHUjmJJkWYW2N7gWq6rQRSyjZgwmRcEbiSDz+pqREhbmxB0gqfEDY2J3tO23QIwM3mMg2h5fCbYiYtMFDYqe8TpPX1ozyWYw8VUdCWBsINrbyPAxIPqaISYhQCBJBBJPLl7vxO9OwELBdH2GmDYSNJ06Z33HT8GJhh2JE2MnWYbTYRyvF79OhqV8NgAwcTJ1Kv3eZE8j4REHrQQthAkKDJEfZHvSOfWW8I2IvXY2EqnSx1FLWgg91eazM3k+PWae+AWZNbQTpF4AWC253gDp4dLc7DQA41WK6vtDTYDc29es3mgTUnRv3V/OuqWV+439+ldQVygJmTb9rSJMKTa/d1CDyG29TsW0hQ0C8wRcNFhBIK9PCfCnoiBBuzCRBIKmZUEX7xAPU36UuJgqSWLAkzJIaYAGm28RJtB33GwVHxCGMEc/dIERGw82HwPQ0/HzKgam7qwQSdlglS3eNiFHlenvCEsCSLjoAIvfczcxvegrjfE3zeIMvg+4I1NJIMfaYzGhZ+PO4oI85m8XiGKMLDkYYMkmYubu3OOi+HWirhXD0y6aEOnvX+88qRqbw8Jty5yvCOHJl19nePttzJH2jaD+EUjPyG2/r/ZqZOo1r4p8XEXkAOpAiT4AbAC3xqBnqNmpC1X5xjbakJpcXBVsMnVB2PSJHPcGJtTspgFzP2REnYfHrVjjigIFUi148+XzNU1r008ee1h5/FVDKiTpE6m2AtO15rAz3FQ8QWgQYOx6iPOk41jSzACO9G83i9YYxjETEc+fyrOZ/W1vF9s93QAonlA26Hz8aRswCgUhRE3G5bxPgKztZFvs+P92qYMxBG0C0UsTFh1QG/ePQ8rfCkV9R7zHoIgRGwPSqrALfVJIv5+dKtoPI89qqJEwzNySDc3+BjrSPiiAF1DkaRWBmB6U02NySbyPpQOwngQfrUhxTBBmPug1BA2aakRtIDTJmw3+PWgjXeBzrX4DxY4Dcyv3RzPUdPSsZ8Qnw8rVLh45EEb7TVuoelK2FmcGdKurggqYDK2whT7p6EdN6EnGLkMSVl8FyJBjvc4P3XiYPMfAJwPONhtIcAEmQ3OF1KARtJte1FeVIzmGw0yCSHRTYxDEiBsCRDQT3TVpeosXcjmExETERgVYcjoaxgk/dGoRHKpHEKNLahGqLRuZsRaBb/iKBymLw7M6HnQxm/TYNAsHW0gfO1HLaAqsHJBIJKwU02I0kGCS3T86lVzCAAysr2YMTAjYg3mJ2PlyprKxgnkG+BDRcmTvtEbDoaY7BoEEzEcmtMi3WeU3UVIMeyl7rEIQ0aSTdreXWST8Ah0jq/wAR/JXVc9un3l/fP81JQQK2gRqIBlYMki8MZnvCZMTFqflQ1wSAziLwLT1Pgfgd+rMdJjT3YKgFjPduNUc739QOd25vEVUdyBpw+85gEBQRHi0iB4etBg9seKDDQYKe+92jcAklj5k225E+b+zHCPYpJIDuBJNoNyFg7gRe0Exyis/s1w985jvmXXUiGInZolAB0Vfwoo4hmiO7qVpAlgINpi/T+/IW8iDExTAXpI872+lQlqiOJUZxKv8ATC+72pi9cGqs2JS4bEmBvTpIIeEounUW2mUmJHW4jeqGZGtySYBJgeXIXmKtI6rhEcyAYEXvzg36VjLhln2mOfj58qw3p1eLPoK8VyzK8Ee6L+c/PkZ8ayHw6NO0LCNAUmIk33PidztQ/nsmqaQT3tILAcjyqM6aax+qSYqi+kSet/C3SosTHJnlO9bGW4MzrqI328qz8xlGUwYtYVM1LUXOpPaihN4250qibchNT4+UKRPOoCvOp+1fp2q+81IthO5qK0Cn6uVQFXqPXwqZcMX8L0wNpnby/v1pwI0kj5/hUCIgHoCPga5RSAU8taP7PnUoXcjmNG4kAzvBrd4fncbDVXypZoENhqQXKlp0qFE2BFzy9aGMLFIHy9K2eByXZVJk6YKd0rBkkMfcJA3qYCriORTM5cMsAR3CfeVxIhgSCPE/2MLsxnWRzlsSQy2QE80MlPLmI6eNRcF42yZzEw8RpXEYwWYkLiEbze7Nz6x41d7acPYaMygKuI1Ec4JCvPODAnpBq6ouRYYPMjS23IwQI3gWNpO/wrhZlTDQCYmBvcXvtJi/LxqpwbOHGwdeogMLixhl6+Hvehq+cEASSNxA8AJg2mI0r0MDkLkIP0E/23/2rque2HVPgP5aSgguZmJ3gnVbqd4MHla80N9ueINpTLIBLwWjciRoBPiQD/tooUwGi0wJLard4EBQNr3t1igrgijMZ58UnuYcsoHh3UjfnLc9jQE/C8muFgrhtJRRqYjYsRJJJ2gsfSLUOZjioZp5chvArV7b50YeAuGCC7kSdrCSRHTbf73WgD9JNWzlnu3vBL/iI60hz460M+3NKMwat8VPYjbOjrUuBnoIINxzoZGOamwMxeosTB3jZrWiflBrXOBpRRHKawOFf5ns4FiwH5mjriWWVEAJvFcu3d4/UgQzABMnlWFlsAYmKzMh0ETPjYC9bueOlWIvas3IYUOAjErFx93aI+dc01ZLXTzvGvlk07CsPiuVUuXSxDgsJta4tyJohw1qnxDhhclhuRB29DVca5U6z0McVU4j6wLNcfAc+tjWY+DIo2wspoUD61G+AjWIFbZ83PXGevF32BcUTBt0sNuVK+Daas5rL6HZTsLDxHKnovd2mxro65/j+M3UJvXEjltTsQCmRRVOsbf81AKdPpTSKCRXjY0SdnMHDYujtpDoApIkF9UzKiVPTxoZS/WjrsY6lCmn/M1akPQQA4/ck/8AFOkCHaHCZXVNOlsNAH0liwIYwWJ2IXQLWFhbajjgWdXNZcKy6rBMRSSBqgrIIuAZnfmKs9suCYBy2LiYSacSzHVpLQhOrSVIkwLi/UDnQX2JzujGbCJgYqmP2luvLmNQ+FXzexTUavZjGbLZl8s8+8Y/aXmL/aQb+VFuKbnVeCrCJIvOxBk/Xx3kR7Z5c4eJh4672BPiveWeUkSKJsswdVcGz3BJ5MA58yL+M9Och2hev/m38tdV39LX/wDGnwP8tdRDJ7Q4jYWA7hiJQgSIMk6QQSJ1A97leelZnY3LlMAuBfEYnyVQQDt11f3u7t9jKMFEUEMXGr7ulEMQTeZK8vXedfhzDCy+GkLCokkGGMCTPLeD/wA0SA+12bL5grMhAEHnuxv1J+VYc0/M4xd3c7szN+8xP41FNaxlfss0s02lFDhZp6NTKcgqEyD7sli6UDLBZJI3tPOps32hcuQ8mqfZLBYKxALd0wo8Od67iqYiFNaINZhZYCLi5awAvXJud1x2Y9RpYGaVxIM1aw8MAWAFYHDXDElQRBg8xPnz86IMJDXJvPK6s3sSI8VOMVY3of4o+JMIfOsk4GMTd/nTOO+7TWv+CfOYq9R8aoFgbiq+X4YIl3nyNNfh2mSjEH5HzFT8Z/UfK/xncYwtR7zAdLd7ymshGYW+VFSpqHeFxVDiuVGnVzH0rbx75/msvJjv+oHsVajItVh1qvXQ5qSKaRen0goHqeQol7JKXx0hlTTJ1Ha407c5ty60OYQuCb0cdgsoGxCS5w+615gn3RAsevMRVb9GWr2gxQiO+IFxWQk6EBXuaN7oTp8fHfavJcHMlMRcRN0YOB5GYr17tdmPZOq+3COUdWGLOnSbGGCwGIsIEdeteNmreOciN/j0/jafpGVYgzCDETn7o1wSRvo1bc6j7IY2vLAWLIzJeNj3hy2gxz5VZ7GP7XKICwlQcNtRAACnSP8Axj0npWJ2LOjExsE32ixJ7hZSwAvOx9LzV1RfqboflXUv6L+1++v5V1EBLtthj2mWwxqBghtWk3bEC2i52NzvFE3Gn9jlsQgj/TYoZ37lyIY7Tytba9CvaFJz+ACIJOFqgdcUg29D52rc7XPpymKIEmJO5guttoEggz4cqQry4UtIK6tOq8LThTaUUQdU2CsmoQK1+A4aFyXGoASBeCfGKjV5E5nbx6F/02y3ddjNlIHS5G3lFdx9TiymIikgkhgYIJ3jwPSr3ZjMk4bbbgCLCIsAOlXMXBBMmuHyavfTvxj17YeUyUIuGiACZPWdrmtLMKF1R+z8N62eFZcDU5Flv68hWBnXlj4msdT12tc+6onA1GnZDhuGWh2uTZLgeBJ5+VW8qBNTZzJhuVUzrlX1OwG8dyeKmNiJhpid91KFWbSEAOoadjJI3No8aly+DiI+h212BkdeYPiKImybkadZiZipcvkVQQK015JZzjPObGXh5a01Vz+EII61s5hxFYufexqmberULZvCAMCqnsDVz33vWvlOB63S5hvziR5V2XczPblmLq+mfleFOULxHmJkzFU8/lND6TBMctudH2Zy3ssFwzSFgSesxQHn8Uu7N1NvLlVfHu6tv4v5c5zmT9VsNKJ+F5wnSitEJqJEgj7ykgEkHuyNprHyOULEkDl/zaifIcHdNOMuHqUHU5XdZBBRgekTAkVfVY5n6w+12c9omEpeTh6w3emNrAEaogbTvNCBr1Dt6mVOGuMrAOyBURCSGBOolpHcIM2vMHavMGFaY+lN/Y5/6eY3+XiKTYOD5SFlgJ8KTJ4wTieLAMMX2kGGC4gNrz4eNVv+n9/bggGyXJgC7A/hVnM4ejioWT9nbcH2FukbD0PpVlILtK/rfF/zrqj/AMRxvuP+7/WkoBXtGT+n4DSCT7K45n2h2je5N62u1sHKY0RNjbYgOpMXjeT6c6w+166cfAewNiQJEaHWLSYJF7GiXj+EHy2MFAB0NC96bSTYjeQOnPeLImvJhS0qrNWsDJlquztVYp4Q1uZbg7HlWlh8APSnVfkFAlaXCsxof3ZBsRfnztWti8EI+zVZckyGRINRr6Xxr2L+CZvvMB0BnxFbCYpYgdaFOC5h1dNcRMExBIJvJG9HuW4cB3m2G1cW8drv8e/Rc3nVVRhJIXcsd2PU9PKsLMwWOk1NxXD0WS4JkgnY84PTwrKTCxCdRdU8AJ+J/KsNy2tsc4uI5UitNcWaxlViRMQL2O/5VcL86o0XmeqWYxaifMVTxcaafaqPHxKxs+8g1fx3rMze3rWmJ7U1fSlw/CuSRzoqyeE6d9nAtpVAAYBPXrWJlcVEC67KTv8AjWjmuO4KL3WDnkBf4nYVffy1eSKyzMU+0fES0YYMAmYmY8WPX6Vl5Lh7YmIqLck+n93pMDLM7a3BhjM+t/IUX9m+Gd5QW0a9m3OidlA2Jnet8Z+OeRz718r2mcE4E6O2gawpZNXKZtAnp9aJ89w7EKrhK7hBCsBCpqbvGTE+X5GiThvD1wwNIgE32vG1ZnaZSvfRmQp3mYTBUSWWI94mIB8KWImp9PKe3ThD7MGIUDQQCwGosdZixnp16CglhW/2u4mcfMM5VAQAsrPej7Rkm949BWAa2zOZZbvdDH/p2ktjEC4CRYHYsSYNyIn/AJin4ktxRQAZlQBBMRh7RzgeW1S/9PE7mM2oglgsAEyAs8t9z8KZlH1cTxHf7OuZHMYYw4j1q1RBr+leA/cxPzrqpfpWD0P/AJ/lXVCGB25wCcHCxCZbWVbwBWReL7dfrW/w/NB8BCFsyKDzJLIobY8jztHrVLtFgl8tiJYlQXUabyhkmdwYDCOlV+xuOr5YIROhivhe4+v19CQrkuEmYjYkfC1FfC+BTFpNEHBuCe2csqgKSSTyFHGQ4cmEIUS3Njv6dKnWpGPxtob4b2WMAvCDx3+FbeH2dwgLlj8B+FahaKT2lZXyaq0zmMbM9mUI7jQf1tvlWNjdkXZo7gHWfwiaMNZpQ1Pnr9WmZ+B3KdkMBILy5F/ur8Bf51T4lmyjlTYCw6UXGh3i2HoxNY3iR9DVL7jfxX/QXzOOCZNQDGWPerSz6YbmSAp6i0mqf+HJ94xXHqzr0M47ESP4g0vtRUeLk0XZjPnUCIV5kjxqPVLOH4r1Wdqmc1AWqYrUbbVn5reK0HNUswQLmr4+1NKOfNlXzNVsjw8uxAsBueVNbU7Fo3sKO+y3DQuDrYXbvegrsz6nHL5PvqhgI2Hh+zhdJicSYUEgQpnYxJNeh9n+GYeEqOWUkoAIYMLWtH4V47xvPwzqo0kvJItYLEddyeceFN4b2mxMMjvnSCDEtAIEBrc6n41Tsvp7/jZoLHdJHhyHUjeK8o7adsg2rDSyzujRJgi8i/nWFxztxjY4AB0AKVOkkawY976UIYuIWN6Zzf1Fsk9G4jkmajNPpFQsQqiSTAHUmwHxrVl16J2Qw9OWSwBLO8xM37sxfZR0t61m9jnD5jFxG2bn01sY5Exttfzra4m6YGVKjdU0AgEXI0QItcknfrVLsdlP8gtaWZm691e6OvRtx+FVXE2lPvv8E/Kuqn/hrdG/ew/566iFk4YAKzAiZP60d0yIO/4TQf2cX2OcfLzZ5VCY5d5fC6E/CjQiAW0zpsNJBuQTqC38fAQOtB/bDKvhvh5hTJTSrHppgpJHhIt1HOiXp3ZfFKuyEmHEweTL0i0FfpRKDXnGU4oHRcxhtBOhgkExzbvGQO8Ijex5V6BlscOiuNmE+XUehkVnqe+oLiPemhqQmuFUQUGpNVR0ooJKzOOYcoD0/GtGoM+gKMD0ovm8vXnWdwjNV11Dmas5/MgEiRaqqZoVy7jvxf4kANNakOZFV8fNqBJIFVmbVro5zULtFZuY40gsvePyqgc7i4hhbeX51rnx6/VLqNbHzKjc1WGE2LciE+tTcO4SSRq7zHlR7wnhKYYDMAW+QrTOP4z3vgb4V2ZZ4dxpTkNifL86Lc5hDDwSAItpHrb6Vq4OHq7xFhsPxqhxsg6F8Z/Ct5OOXWuvJuOZBvaP5n61hYmARvXueP2TwMQayzhmAJiCJoe4r2CME4bh/AjSfrFWmlHk5Smla3eIcJdGIZSCNway3woq8qKqRW52PyPtMyjESqd5rSJuEn1+lZDpXofZHIeyy5LbvGIwIAEAEjvciF1fH1pSMntrmCWw8AHUx71tjLFUEdJmibheB7JEw1tpAB2IkXA/WnfaxJ6ULcGU5nOPjnuoplJ+99hL2NgSfKjPEYGEAk90MRaeQNu7EbbR4TVVyezbp8j+ddVj/Df1MP8A/Yf+euohA0bRcwGm8xtM2AAjrEXqrn8r7TBfDNkYGTEwRBEk7XUGfPerap9ptVjJNvEyDInzMC4nxTQGiekXJ35CLwZB5dB0gAvsrm9Dvl3sQSyGTAYe8IHUCR5HmRXp/Ac7oY4RaQ3ukrp72xAG1/qPGvO+2XDjK5hAwdY1wLQLh9hEGB5ESa3ezvEUzCDE2dbPfYwbhYv1A5zG9RZ2Jei0oFUuEZ8YqXjWu45no0b/ANZrSC1jfSvDAtOApwFKbUSZehbtT2iXDUohlzv0HnXce7ToupMNr7Fh9Afxrz3iHEQxIAkn1qV8xj53OOXJDGTvFE+SRNKhxJ9mCTz1ETPzrFy/CMXGItpTry/qav5/DdcQkDujujyAiq71m8kb5mmZnM0wJAJisvFxGY3JNaz5NmMxU2W4VBk0lzmL2WqGQ4cXubCiHKZQLZRU+BlulEfCOFmzsPL86zlu9cRrmcm8L4eUEkd4/IUR5TKE3f0H507L5UC9XkFdHqTkcutW3roih3PqXzMclj8z9aIzWVh5UyzxdyT6Tapiq/hY4Cgb0muahVD0qwiUQocX4Lh5lYYQ42cC/keorznjfZLFw5JSV+8t1+PL1r1tRXZjGVEZm90CTzpLweF8J4KXxQWHcQyZsCQJC+sf3NaXbHiTKnsVnW+456JFo5EkAeMGt7i3EEwlfEKKEM91ZXce6NrmJnbrQp2eyxzGM2ZxRIB7ovBbko/VUfPxq/UycbnAcicsiggazd4hhLcj1gdPntWqzksb3FvdAJABPW/Tntelw8SQYUmJjTJF5I7wEczzO3pU+C++kadySurbaAYlTcbm+ryFBV9iPv8A/wDNa6rX6Nifcf8AeFdQRPtIuepkXAkczEG2/Ou9mPZ6tRDKx7pHKLsDEm428ZMXqbBwlN3Yo0alB2Nx3dJPUkztdqrKYJABYi5k93kJF7za4PyigcXncSDYaiTb7t9xBA9fC4Rm8F8hj+0RZwn+zcCNyh/WXcH4Ub4KlmhyYBjbUABBnwAnqfqKrcTyqYqlXIK3AAMBbSNJM33Pp5SFrhvERoTFwnUyJJgk2BkNOxEEFdumwo4yOcXEWQRI94DkfDqPGvDUZ8hjAMC+CxMbd4REjkHFvMfI44PxQaVfBO/dm2kmTYgbeR51XWej0J3AEkwBzoN7Q9oS0ohITYsN28ug+tZ3aftDisNIXQkXNzJ89t5oPPEHZgoAbpvVZkTcaxl1BcOdMTLRqPnFS8AyGu8TequftbdjufwHhRbwDC0oAKy815OOjwzvtorh6V2iKy2wgdU1sYuHNqb+jIPE1zWOqMTBynMjuilXBk7VqPgFt9uQFTZfIkkAc6SXSLZDeD8L1vcd0XY/QetFPsQIgbWp2Syww0CDzJ6mpWFdeM/GOLyb+WkYWlpYpTVmZrmAT4V2GsKo8BSPsfI1xNA6KdFNWm5jHVFLuYA3/pUh7uACWIAFyTsKD+M8ZV2aQPZpNzICkEjUx2vGx6eNJxXjGsB9WjDUzDCJFwWJNjHy8a884hn8TOYnscEErN2uS192P3fCPwi0hITM4jZ7G0IdOCktJEW++R95tgDt4XoywMFURVXUqi3JoAIi2/OZm563qvw3IJgIES9iSTpLsxi5IHQ2g2q7h6PeLAt7yiQAd5DDmIPK0VYNxIk6QQtxHiJm45zyIP0qRGZRJdrTcxfcA3O223jvFKmCSQq2jU1iQIErNuUQI6gUx1JkX7tz4sQB9rnPXx5bBW0J975/1pad7ZvuL8V/KuoLOICRq2C3iJMeBiwAHU7VGAswx0jeYF2jcE3Wb8vsnrSqYEMBYR1iLmIg2Aj8BXYyLcoViwknaYnaw2JtyjnQWlVWdR7uwkmwMELpMe747c7DasEIOmxAAm4A5EQ283HryvJ4AA7agZgqCOVpUxFv4qs5lxIBVVCkGN7mJJHMwLiOtBW4hw9HRkcApOkgkzuNOn7ukx8fiGZjKY/D3V0l8B4Ox0n9V7d1xG//ABRujlkO4jmJ3JA5CZ2E+VQPggqwI1KRBA5+B+e/XyoKmT4nhZnDIwkBbdg0nEUE7abiPEAg26VF/hCLrdFgg+6WBgE2gz1t8Kx+J9mnw3OJlnZSvIGLkSQjA/I/lS8M7WaTpzKlXAguAbi860AmbkyPC1CzqDMKTiKpBBkb2o14QsKKqYiJihGARwQGDLyUSLEc55R0ncVeyLAHSL9Dt9f7tXP5cat7HR4d5zOVpKtIwEeVZ3EOLpgi8k9Bt097ahrH4xiYxiYXoNv61nMWtdeSQR4/E1UwnePy/rRNwLJOF9pie83urtpU+HU0O9keDa29o47iHn9puQ8utHTNWkxI5t+S6JTDXGuqzMlIadFJiMFEsQB42HzqQ3TTlSs7N8XRI0qXJ2+yDeLE7+lYOZ4u7SXbQggwoIAjSe+xIMEE3HSrTNo3eIccw8PujvtzA90ebbelCPGeLoGL5ljEHTpvIJ91VmPAkTsTQ1xbtOglMEB21EAxAE8v1jPT4mq+W4Bj5hva5lj+xYNpAkeCJblfwq0zIlXxcbGz76MNSmCvLcAby0QGaB7o6etGPBeHJgoEw0NxLONRdyeZA5AT3RtbcUuXyqImhPcGygDYGbTcEk784NS5adtvtRf3hN5XnbqOW1SgjYskCSWEbndQbAAwdrcjFSKRqbUWCnnc+Uyb7mPATUXto70trgj3gD8I8PUU8IWWw0sYAFuoESdpmLcgek0CPhhNI1yI1EqZ62IjeOew8t3YRQize8ehg2vpjci5mm5rTZVERuDcz9qWFpMG39Kdh4dtO5U7AyTyFwbRcwBzF+VA/v8A3/4q6qn6X+t8l/mrqCVkErJB393fnESBz2PT5TtpssQdQ2iDMteduew/MwSVabaQQsbmxbvAkd3ckdYpMQ3Jvpjn3pEXNhJvM9BHKgfmMMKdhz6gTJn4W2teDemugiZvMX+1Mm0jvG4ub06QWCg6QABLDUAIBN4iW8NpNMQncCwIuDG87g3nefQdTQcXGkhm06D0JBO1+doJH9a7GIZluwB2m45AGT4gD4VK2CYI0wZnSZmAeU2tHLmdosWok2LMIBIETqgGwMG9+nKgacMQvuyTHn1vvc828qqZ/hWFjqNarYQGkhlEAiGAI9Lj41ZA3Ji3OPC5gRNz53HSrGHp91SdTHmRcWK/WZtEDrQBeJ2dzOCdeWdypvE6GMbWsrxbpc7c6XLdrMRO5mMM25junYi6kwb9CKMW7vcDAxJDAgi9psbCbwf+WYuCjgK6Btp1QYBIsVJPh5USysv2gwHEJiBREFXJQxBmJtcnlWng5TCYatKiTPdAus3IYcx0I2mdqxc12Uy7zoV0Nx3W1KdzI1E+At1rMfsliI0YOOOWwKbgTdSR184oPSMtxZ8NFRAhUd3SVKtbdpmGBvfw5VIe0jCdaKIB2JO0dYtevMxkOJKCFxSQN5dT6w45zz3rjicTBMrqMQe7hGBty2qPjB6YO0jFZGGJBIIJI2E8/pyHWaZidpDoBGhXvKkFhf3Ygz52rzZ8fijGCGHogvy3rhk+IuJLwGP3kXlv3RJ86fGA8fjmK8Q7KCYtCxJ+gA69PTBzvH8Id98ZdUz3SWf/AGgTHx51iYfZLHxCPbZkBTuYfEAkT7sj+z41fy3Y/ASNerFn9fQJEgxpAJ73K9qngpY/bNmATDwziNcLr1MIM7ICSbHw2qv/AIbnMyQcd2VLd29lE7IO6Iho1RefE0Y5LBw0CqiIgMjurAmDcwCxgc7kzUn6QRqUG1lYg20iOokAaR9DQZnCeE4GAJRNbMAdbglhYSZiFF9h1E1fse6SBO8zEkC49b+HQ1ZVYiSo94yd3ImLDewifA361cUwSftTAEgxJ3gnflb8LEFdAu5AJspADT1Nxe9/I9alfEtBBIAEEAGCZieoN9+RpAqi62PdtHMKAe8bDp6rM71EmIYuDBm4bmQdukib+MdaBygglQO8SVsJFwbRy5n86fpAJBMTJJ3O50iwEmbbCuwl1ASTvAawPeuZAm/w+VR4QvqZgOQBJsbDc3Nonx2oFfDhSDYWuTvYxFtiB8helRyxkAgbqBYxyJjmYBvNvSokA+1Gk3tYctj63jwqVMS1wApvBFyJsbbHYb/0Dv0j9f5GuqH2ydR/21/nrqBeL/8Ay+afwYdWU930/GurqCni+6PN/wCDDqXL+9/uaurqC5mP9f8A3n+OuwfcH7afXFpa6gzn9wftt+FK3vt+1+VdXUDcl/L/AOtWsb3H8/xrq6gkyvvH9g/UVRT3z+0v/pXV1BIPe/7v0anLuf7+1XV1B2b2b0+iVFkPcfyP411dQOynuD9n/wBjU+Q99v8AZ/E1dXVIVuX7bfwvUXBf9VPWurqgWU99P2jVPMb4fkv4V1dQOzf2vJP/AHpyf6g8n/heurqBmFv6n6YlSj/SX9gfwiurqB+Fuv7eH/C9Rts/kf4q6uoErq6uoP/Z",
  },
  {
    nome: "Roberto Carlos",
    descricao: "4,74 mi de inscritos",
    image: "https://i.scdn.co/image/818f9ce3057354c119192da2b670781c30f87a7d",
  },
  {
    nome: "Shakira",
    descricao: "45,3 mi de inscritos",
    image:
      "https://f.i.uol.com.br/fotografia/2023/01/18/167406387063c82ffe1571f_1674063870_3x2_md.jpg",
  },
  {
    nome: "Taylor Swift",
    descricao: "55,8 mi de inscritos",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/3/3e/Taylor_Swift_%C3%81lbum.jpg",
  },
  {
    nome: "Elvis Presley",
    descricao: "3,67 mi de inscritos",
    image:
      "https://segredosdomundo.r7.com/wp-content/uploads/2022/07/elvis-presley-15-curiosidade-sobre-o-rei-do-rock.jpg",
  },
];

const escuteNovamente = [
  {
    nome: "If You... (Disco Mix)",
    banda: "Magic Box • If You...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Thnks fr th Mmrs",
    banda: "Fall Out Boy • Level II",
    imagem: "https://i.scdn.co/image/ab67616d0000b2734766a1586b308a6246b4ac6e",
  },
  {
    nome: "Rape Me",
    banda: "Rape Me • Nirvana",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Nirvana_Rape_Me_German_CD_cover.jpg/220px-Nirvana_Rape_Me_German_CD_cover.jpg",
  },
  {
    nome: "Castle of Glass",
    banda: "castle of glass • Linkin Park",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/7/77/Linkin_Park_-_Castle_of_Glass.jpg",
  },
  {
    nome: "Thunderstruck",
    banda: "Thunderstruck • ACDC",
    imagem:
      "https://i.pinimg.com/originals/3b/c9/e8/3bc9e87e6f4fed1d3b95fb4c8d091db0.png",
  },
  {
    nome: "The Night Is Still Young",
    banda: "Nicki Minaj • The Pinkprint",
    imagem: "https://i.scdn.co/image/ab67616d0000b273e132ffe656bd17abec3960d7",
  },
  {
    nome: "If You... (Disco Mix)",
    banda: "Magic Box • If You...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Thnks fr th Mmrs",
    banda: "Fall Out Boy • Level II",
    imagem: "https://i.scdn.co/image/ab67616d0000b2734766a1586b308a6246b4ac6e",
  },
];

export function Musicas() {
  return (
    <div className="conteudo">
      <Header />
      <Tags tags={tags} />
      <Radio musicasRadio={musicasRadio} />
      <Album lancamentos={lancamentos} />
      <OutrosArtistas artistas={artistas} />
      <EscuteNovamente escuteNovamente={escuteNovamente} />
    </div>
  );
}
