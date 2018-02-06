import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerAction from '../redux/action'
import $http from '../axios'
import history from '../history'

export default (WrappedComponent) => {
    class NewComponent extends Component {
        setList(list,hash,index){
            this.props.changePlayer.setList({playlist:list,currentIndex:index})
            this.play(hash);
        }
        play(hash) {
            //loading
            $http.get('/dproxy/yy/index.php?r=play/getdata',{
                params:{
                    hash:hash
                }
            }).then(res => {
                console.log(res)
                //将信息储存到redux中
                let data = res.data.data
                this.props.changePlayer.updata({
                    smallScreen: true,
                    singer:{
                        imgurl: data.img,
                        playUrl: data.play_url,
                        songName: data.song_name,
                        authorName: data.author_name
                    }
                })
                this.props.changePlayer.playState({playing:true})
            })
        }
        prevSong(e){
            if(e){
                e.stopPropagation();
            }
            if(this.props.singer.playUrl !== ''){
                var index = this.props.currentIndex === 0 ? this.props.playlist.length - 1 : this.props.currentIndex - 1;

                var hash = this.props.playlist[index].hash;

                this.setList(this.props.playlist,hash,index);
            }
        }
        playState(e){
            e.stopPropagation();
            if(this.props.singer.playUrl !== ''){
                let player = this.props.playing;
                if(player){
                    document.getElementById('audioPlayer').pause()
                }else{
                    document.getElementById('audioPlayer').play()
                }
                player = !player;
                this.props.changePlayer.playState({playing:player})
            }
        }
        nextSong(e){
            if(e){
                e.stopPropagation();
            }
            if(this.props.singer.playUrl !== ''){
                var index = this.props.currentIndex === this.props.playlist.length - 1 ? 0 : this.props.currentIndex + 1;

                var hash = this.props.playlist[index].hash;

                this.setList(this.props.playlist,hash,index);
            }

        }
        toDtails(text){
            history.push('/player-details')
            this.props.changePlayer.changeFull({fullScreen:text})
            this.props.changePlayer.updata({smallScreen: false})
        }
        render() {
            //prevSong={this.props.prevSong.bind(this)}
            return <WrappedComponent {...this.props}  {...this.state} toDtails={this.toDtails.bind(this)}  play={this.setList.bind(this)} prevSong={this.prevSong.bind(this)} playState={this.playState.bind(this)} nextSong={this.nextSong.bind(this)}/>
        }
    }
    function mapStateToProps(state) {
        return {
            fullScreen: state.changePlayer.fullScreen,
            smallScreen: state.changePlayer.smallScreen,
            singer: state.changePlayer.singer,
            playlist: state.changePlayer.playlist,
            currentIndex: state.changePlayer.currentIndex,
            playing: state.changePlayer.playing
        }
    }
    function mapDispatchToProps(dispatch) {
        return {
            //通过bindActionCreators把dispath注入进action中，调用action，则会自动触发dispath，修改store
            changePlayer: bindActionCreators(playerAction,dispatch)
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(NewComponent)
}