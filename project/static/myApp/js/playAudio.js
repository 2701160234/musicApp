$(function(){
	var song = [
		{
			'cover' : "http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346",
			'src' : 'http://music.163.com/song/media/outer/url?id=38576323.mp3',
			'title' : '春风十里'
		},
		{
			'cover' : 'http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346',
			'src' : 'http://music.163.com/song/media/outer/url?id=531295576.mp3',
			'title' : '最美的期待'
		},
		{
			'cover' : 'http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346',
			'src' : 'http://music.163.com/song/media/outer/url?id=368794.mp3',
			'title' : '牡丹江'
		},
		{
			'cover' : 'http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346',
			'src' : 'http://music.163.com/song/media/outer/url?id=26217171.mp3',
			'title' : '有可能的夜晚'
		},
		{
			'cover' : 'http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346',
			'src' : 'http://music.163.com/song/media/outer/url?id=526646591.mp3',
			'title' : '（笑）'
		}
	];

	var audioFn = audioPlay({
		song : song,
		autoPlay : false  //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
	});

	/* 向歌单中添加新曲目，第二个参数true为新增后立即播放该曲目，false则不播放 */
	audioFn.newSong({
		'cover' : 'http://musicugc.qianqian.com/ugcdiy/pic/deb1778ef4a562908bd9d9c30cc27e07.jpg@s_2,w_346,h_346',
		'src' : 'http://music.163.com/song/media/outer/url?id=1356499052.mp3',
		'title' : '你的姑娘'
	},false);
	/* 暂停播放 */
//	audioFn.stopAudio();

	/* 开启播放 */
//	audioFn.playAudio();

	/* 选择歌单中索引为3的曲目(索引是从0开始的)，第二个参数true立即播放该曲目，false则不播放 */
//	audioFn.selectMenu(3,true);

	/* 查看歌单中的曲目 */
//	console.log(audioFn.song);

	/* 当前播放曲目的对象 */
//	console.log(audioFn.audio);
});