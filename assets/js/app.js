const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player');
const heading = $('header h2');
const cdThumb= $('.cd-thumb');
const playlist = $('.playlist');
const cd = $('.cd');
const audio = $('audio');
const playBtn = $('.btn-play');
const progress = $('.progress');
const nextBtn = $('.btn-next')
const preBtn = $('.btn-pre');
const randomBtn = $('.btn-random');
const repeadBtn = $('.btn-repeat');

const app = {

    currentIndex: 0,
    isPlay: true,
    isRandom: false,
    isRepeat: false,

    defineProperties(){
        Object.defineProperty(this,'currentSong',{
            get(){
                return this.songs[this.currentIndex];
            }
        })
    },

    songs:[
          {
            name: "Bài Này Chill Phết",
            singer: "Đen ft. Min",
            path: "https://tainhacmienphi.biz/get/song/api/304067",
            image: "https://data.chiasenhac.com/data/cover/143/142394.jpg"
          },
          {
            name: "Ngày lang Thang",
            singer: "Đen",
            path: "https://tainhacmienphi.biz/get/song/api/27135",
            image:
              "https://thumb.guucdn.net/webp/640x360/image-tmp.guu.vn/full/2017/08/14/8a3ab0cc5aee6ec8cb0c07f3943826ac7cb8a528.jpg"
          },
          {
            name: "Hai Triệu Năm",
            singer: "Đen ft. Biên",
            path:
              "https://aredir.nixcdn.com/NhacCuaTui985/HaiTrieuNam-DenBien-6007307.mp3?st=mY9vEjzGZEIIL94N-bx5IQ&e=1633934412",
            image: "https://cdn.24h.com.vn/upload/2-2019/images/2019-06-21/1561134836-52-den-vau-hai-trieu-nam-19-1561080590-width1277height692.jpg"
          },
          {
            name: "Đưa Nhau Đi Trốn",
            singer: "Đen ft. Linh Cáo",
            path: "https://aredir.nixcdn.com/NhacCuaTui906/DuaNhauDiTronChillVersion-DangCapNhat-4110390.mp3?st=QKqlgxbHq2GDjDNrA3RmJQ&e=1633933039",
            image:
              "https://i.ytimg.com/vi/5e7e_KZINA4/maxresdefault.jpg"
          },
          {
            name: "Cho Mình Em",
            singer: "Binz ft. Đen",
            path: "https://aredir.nixcdn.com/NhacCuaTui1013/ChoMinhEm-BinzDen-6985340.mp3?st=7RIHaHwisNo0GOFnBSrokQ&e=1633934737",
            image:
              "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/57/a0/1c/57a01ce3-ccd7-491f-2417-bff12894c455/190296717017.jpg/400x400cc.jpg"
          },
          {
            name: "Tình Nhân Ơi",
            singer: "Binz, Orange ft. Superbrothers",
            path:
              "https://aredir.nixcdn.com/NhacCuaTui974/TinhNhanOi-SuperbrothersOrangeBinz-5831772.mp3?st=hxe782u7le1mOTRy0EeLNw&e=1633929025",
            image:
              "https://i1.sndcdn.com/artworks-000465863538-lkylo8-t500x500.jpg"
          },
          {
            name: "Thiên Đàng",
            singer: "Wowy",
            path: "https://tainhac123.com/listen/thien-dang-live-wowy-ft-pham-dang-anh-thu.84Rw2hR69oN3.html",
            image:
              "https://image-us.24h.com.vn/upload/4-2020/images/2020-11-04/Loi-cam-on-tu-poster-final--1604480007-890-width660height849.jpg"
          },
          {
            name: "Chỉ Là Muốn Nói",
            singer: "Khải",
            path: "https://aredir.nixcdn.com/NhacCuaTui1013/ChiLaMuonNoi1-Khai-6992852.mp3?st=wrid2_CTjl85P-5zfpoS0w&e=1633961684",
            image:
              "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/0d/f8/aa/0df8aaab-948d-407f-edf2-1703442a1654/Chi_La_Muon_Noi_art.jpg/400x400cc.jpg"
          },
          {
            name: "Flying In The Deep Night",
            singer: "Onew (SHINee) ft. Lee Suhyun (AKMU)",
            path: "https://f9-stream.nixcdn.com/NhacCuaTui1022/FlyingInTheDeepNightSeaOfHope-OnewSHINeeLeeSuhyunAKMU-7092742.mp3?st=rZ8p0MJMAfDBX42n3y_TdA&e=1633961850",
            image:
              "https://i.ytimg.com/vi/bbqouI107CE/hqdefault.jpg"
          },
          {
            name: "Me To You, You To Me",
            singer: "Scenery of Riding Bicycle",
            path: "https://aredir.nixcdn.com/NhacCuaTui097/Metoyouyoutome-SceneryofRidingB_mxfu.mp3?st=XGvrG2WXjr8ANqOs6zi4Uw&e=1633961945",
            image:
              "https://kgasa.com/wp-content/uploads/2020/05/Hospital-Playlist-OST-Part-12.jpg"
          },
          {
            name: "Trap",
            singer: "Henry",
            path: "https://aredir.nixcdn.com/NhacCuaTui959/Trap-HenrySuperJuniorMKyuHyunSuperJuniorTaeMinSHINee-2583728.mp3?st=EtCX3258J9cMIZua9CRiMA&e=1633957287",
            image:
              "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ff/f6/37/fff637f3-a72a-ebf6-bb22-c1e8b28687b2/asset.jpg/400x400cc.jpg"
          }
    
       ],

    render(){
      _this = this;
      htmls = this.songs.map(function(song,index){
        return  `
              <div class="song ${ index == _this.currentIndex ? "active":""}"
              data-index ="${index}">
                <div class="song-thumb" 
                style = "background-image: url('${song.image}');"> </div>
                <div class="detail">
                    <h3 class="song-name">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>`
      })
      playlist.innerHTML = htmls.join("");  
    },

    loadCurrentSong(){
      heading.innerText = this.currentSong.name;
      cdThumb.style.backgroundImage = `URL('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
      
  },

    handle(){
        const _this = this;
        const cdWidth = cd.offsetWidth
        audio.play();
/* zoom in & zoom out a CD when Scroll page */
            document.onscroll = function(){
                const scrollTop = window.scrollY;
                const newCdWidth = cdWidth - scrollTop;
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
                cd.style.opacity = newCdWidth / cdWidth; 
            }


/* Play and Pause song by click button */
        playBtn.onclick = function(){
            if(_this.isPlay == true){
              audio.pause();
              player.classList.remove('playing');
              _this.isPlay = false
            }
            else{
              audio.play();
              player.classList.add('playing');
              _this.isPlay = true;
            }
        }

/* Procress bar running */
        audio.ontimeupdate = function(){
          progress.value =  Math.floor((audio.currentTime * 100)/audio.duration);      
        }

/* Change Audio CurrentTime when change Progress bar */
        progress.onchange = function(){
          const seekTime = (progress.value * audio.duration) /100
          audio.currentTime = seekTime;
        }

/* Next Song */
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.random();
            }
            else{
              _this.nextSong();
            }
            audio.play();
            player.classList.add('playing');
            $('.song.active').classList.remove('active');
            $$('.song')[_this.currentIndex].classList.add('active');
        }

/* Pre Song */
        preBtn.onclick = function(){
          if(_this.isRandom){
            _this.random();
          }
          else{
            _this.preSong();
          }
          audio.play();
          player.classList.add('playing');
          $('.song.active').classList.remove('active');
          $$('.song')[_this.currentIndex].classList.add('active');
        }
/* select song */
       playlist.onclick = function(e){
         selected = e.target.closest(".song:not(.active)");
         const indexSelected = Number(selected.dataset.index);
          _this.currentIndex = indexSelected;

          $('.song.active').classList.remove('active');
          $$('.song')[_this.currentIndex].classList.add('active');

          _this.loadCurrentSong();
          audio.play();
       }

/* random Song */
       randomBtn.onclick = function(){
          _this.isRandom = !_this.isRandom;
          randomBtn.classList.toggle('active', _this.isRandom);
       }

/*  Auto Play next Song */
       audio.onended = function(){
         if(_this.isRepeat){
            _this.repeat();
            audio.play();
         }
         else{
            nextBtn.click();
         }
          
       }

/* Repeat Song */
       repeadBtn.onclick = function(){
           // $('.btn-random.active').classList.remove('active');
            _this.isRepeat = !_this.isRepeat;
            repeadBtn.classList.toggle('active',_this.isRepeat);
       }
      
    },

  nextSong(){
      this.currentIndex++;
      if(this.currentIndex === this.songs.length ){
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },

    preSong(){
      this.currentIndex--;
      if(this.currentIndex < 0){
        this.currentIndex = this.songs.length;
      }
      this.loadCurrentSong();
    },

    random(){
        let indexRandom = 0;
        do{
          indexRandom = Math.floor(Math.random() * this.songs.length); 
        }while(indexRandom == _this.currentIndex);
        this.currentIndex = indexRandom;
        this.loadCurrentSong();
    },

    repeat(){
      this.currentIndex = this.currentIndex;
      this.loadCurrentSong();
    },

    start(){
        this.defineProperties(); 
        this.handle();     
        this.loadCurrentSong();       
        this.render();
    }
}

app.start();