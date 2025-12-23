// script_manzai.js (大阪表示・アニメーション完全修正版)

// -------- 漫才データ（台本） --------
const manzaiData = {
    'niigata': {
        scenario: [
            { type: 'dialogue', speaker: '新潟', text: 'はいどうも〜！<br>新潟県と〜' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
            { type: 'dialogue', speaker: '新潟', text: 'このあいだ<br>長岡花火見に行ったんだよ' },
            { type: 'dialogue', speaker: '新潟', text: '迫力すごかったな〜<br>やっぱ夏といえば花火大会だよな' },
            { type: 'dialogue', speaker: '新潟', text: '山形にはなんかある？' },
            { type: 'dialogue', speaker: '山形', text: '山形の夏といえば・・・' },
            {
                type: 'prompt', speaker: '山形', text: '冷やしラーメン、冷やしシャンプー<br>・・・あとは冷やしマスクとか？',
                tsukkomi: [
                    { text: "冷やしシャンプー！？<br>風邪ひくだろ！", 
                        point: 1, 
                        type: ['p', 'v'], 
                        reaction: '新潟「冬の寒さで<br>冷たさは十分だろ...」' },
                    { text: "なんでもかんでも<br>冷やしすぎだろ！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '新潟「雪国なんだから<br>夏くらい温まれよ！」' },
                    { text: "冷やしラーメン<br>美味そうだなぁ", 
                        point: 0, 
                        type: ['v'], 
                        reaction: '新潟「へぎそばも美味いけど<br>ラーメンもいいな...」' }
                ]
            },
            { type: 'dialogue', speaker: '新潟', text: 'でも秋になると、さすがに温かいものが恋しくなるよな？' },
            { type: 'dialogue', speaker: '新潟', text: '新潟は新米シーズンで、<br>美味しいおにぎりが食べたくなるな〜' },
            { type: 'dialogue', speaker: '新潟', text: 'コシヒカリの塩むすび最高だぞ〜<br>山形は秋、何食べるの？' },
            { type: 'dialogue', speaker: '山形', text: '秋か〜' },
            { type: 'dialogue', speaker: '山形', text: '秋なら芋煮会かな<br>日本一の芋煮会をするんだよ' },
            { type: 'dialogue', speaker: '新潟', text: '日本一の芋煮会？<br>それは日本一美味しいってこと？' },
            {
                type: 'prompt', speaker: '山形', text: '直径6.5mの大鍋と、重機で作る<br>日本一の芋煮会フェスティバルだよ',
                tsukkomi: [
                    { text: "日本一って<br>デカさの話かよ！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '山形「いいだろ別に<br>デカさでも」' },
                    { text: "重機！？<br>食べ物なのに！？", 
                        point: 1, 
                        type: ['p'],
                        reaction: '新潟「・・・まあ流石に<br>綺麗なの使ってるだろうけど」' },
                    { text: "柿の種<br>入れたら美味そう", 
                        point: 0, 
                        type: ['p', 'v'],
                        reaction: '山形「あ、食感のアクセントに<br>なるかもね」' }
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'フェスティバルと言えば・・・' },
            { type: 'dialogue', speaker: '新潟', text: 'え？<br>まだなんかあんの？'},
            { type: 'dialogue', speaker: '山形', text: 'うん<br>空気まつり' },
            { type: 'dialogue', speaker: '新潟', text: '・・・<br>空気まつり・・・？'},
            { type: 'dialogue', speaker: '山形', text: '空気神社のまつりだよ' },
            { type: 'dialogue', speaker: '新潟', text: '空気神社・・・？'},
            { type: 'dialogue', speaker: '山形', text: '空気の恩恵に感謝して<br>有志によってつくられた神社だよ' },
            { type: 'dialogue', speaker: '山形', text: 'やっぱ空気には<br>感謝しないと' },
            {
                type: 'prompt', speaker: '新潟', text: '空気に・・・感謝・・・？',
                promptText: '空気の恩恵に感謝して<br>有志によってつくられた神社だよ',
                tsukkomi: [
                    { text: "山形県民は<br>心が綺麗だなあ", 
                        point: 0, 
                        type: ['v'],
                        reaction: '新潟「感動したわ」' },
                    { text: "なんでそれで<br>神社になるんだよ！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '新潟「発想と行動力が<br>突飛すぎるだろ...」' },
                    { text: "空気の神様って<br>なんだよ！", 
                        point: 1, 
                        type: ['v', 'p'],
                        reaction: '山形「いやいや<br>空気神社に神様いないから」' }
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '新潟', text: 'う〜ん<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '新潟', text: 'ツッコミどころが多いってことは<br>わかった' },
            { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
            { type: 'dialogue', speaker: '新潟', text: '・・・・・・' },
            { type: 'dialogue', speaker: '新潟', text: 'それでいいのかよ！' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！' },
        ]
    },

    'osaka': {
        scenario: [
            { type: 'dialogue', speaker: '大阪', text: 'はいどうもー！！<br>大阪府でーす！！ 元気ですかー！！' },
            { type: 'dialogue', speaker: '山形', text: '・・・・・・' },
            { type: 'dialogue', speaker: '大阪', text: '...って、喋らんのかい！！<br>放送事故や！！' },
            { type: 'dialogue', speaker: '山形', text: 'あ、ごめん<br>今、空気と一体化してた' },
            { type: 'dialogue', speaker: '大阪', text: '一体化て何やねん！<br>怖いわ！！' },
            { type: 'dialogue', speaker: '山形', text: '山形県民は空気を崇拝してるからね' },
            { type: 'dialogue', speaker: '大阪', text: '崇拝！？ 重たいわ！<br>もっと気楽に喋らんかい！' },
            { type: 'dialogue', speaker: '山形', text: 'でも本当に「空気神社」があるんだよ' },
            { type: 'dialogue', speaker: '大阪', text: '空気神社！？<br>嘘みたいな名前やな！' },
            { type: 'dialogue', speaker: '山形', text: '本殿もなくて、<br>5m四方の「鏡」があるだけ' },
            { type: 'prompt', speaker: '山形', text: 'ただ、<br>そこに映る空気に感謝するんだ・・・' ,
                promptText: '本殿もなくて、5mの「鏡」があるだけ<br>ただ、そこに映る空気に感謝するんだ...',
                tsukkomi: [
                    { text: "感謝はわかるけど<br>なんで神社建ててん！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '大阪「発想が飛躍しすぎや！<br>深呼吸しとけばええやろ！」' },
                    { text: "通天閣のほうが<br>ご利益あるわ！", 
                        point: 1, 
                        type: ['p', 'v'],
                        reaction: '大阪「ビリケンさんは黄金やぞ！」' },
                    { text: "吸い溜めして<br>持って帰ったろか！", 
                        point: 0, 
                        type: ['v'],
                        reaction: '大阪「タダのもんは限界まで貰わな損や！」' }
                ]
            },
            { type: 'dialogue', speaker: '大阪', text: 'もうええ！ <br>神社はわかった！' },
            { type: 'dialogue', speaker: '大阪', text: 'もっとこう<br>キャッチーなヤツおらんのか！！' },
            { type: 'dialogue', speaker: '大阪', text: 'くいだおれ太郎とか<br>グリコとか！' },
            { type: 'dialogue', speaker: '山形', text: 'それならピンク色のウサギの<br>「桃色ウサヒ」がいるよ' },
            { type: 'dialogue', speaker: '山形', text: '朝日町の<br>非公式PRキャラクターなんだ' },
            { type: 'dialogue', speaker: '大阪', text: 'ピンク！ ええやん！<br>派手なんは大好きやで！' },
            { type: 'dialogue', speaker: '山形', text: 'でも目は虚ろで光がない<br>通称「備品」' },
            { type: 'dialogue', speaker: '山形', text: '無個性・無軌道・無表情の<br>三拍子が揃った' },
            { type: 'dialogue', speaker: '山形', text: '特徴がない<br>ピンク色のウサギの着ぐるみ' },
            { type: 'dialogue', speaker: '大阪', text: 'アカンやん！！<br>三拍子そろってアカンやん！！' },
            {
                type: 'prompt', speaker: '山形', text: 'でも儲け話は大好きなんだ<br>中の人の存在も隠さないしね',
                tsukkomi: [
                    { text: "夢を<br>壊すなや！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '大阪「子供が泣くわ！<br>夢の国を見習えや！」' },
                    { text: "くいだおれ太郎<br>見習えや！", 
                        point: 1, 
                        type: ['v', 'p'],
                        reaction: '大阪「人形ですらもっと働くで！」' },
                    { text: "カネの匂いが<br>プンプンするわ！", 
                        point: 0, 
                        type: ['v'],
                        reaction: '大阪「そこだけ大阪と<br>気が合いそうやな！」' }
                ]
            },
            { type: 'dialogue', speaker: '大阪', text: 'キャラ濃いわー！<br>胃もたれするわ！' },
            { type: 'dialogue', speaker: '大阪', text: 'もっと胃に優しいもん無いん？' },
            { type: 'dialogue', speaker: '山形', text: 'じゃあ「芋煮」食べる？' },
            { type: 'dialogue', speaker: '山形', text: '芋煮会フェスティバルでは<br>3万人分の芋煮を作るよ' },
            { type: 'dialogue', speaker: '大阪', text: '3万人！？炊き出しレベルやないか！<br>鍋なんぼほど並べる気や！' },
            { type: 'dialogue', speaker: '山形', text: 'ううん、鍋は1つだよ' },
            { type: 'dialogue', speaker: '大阪', text: '...は？ 1つ？' },
            {
                type: 'prompt', speaker: '山形', text: '直径6.5mの鍋と重機で作る<br>大規模な芋煮会だよ',
                tsukkomi: [
                    { text: "なんで鍋ごと<br>デカくしてん！", 
                        point: 3, 
                        type: ['t','p','v'],
                        reaction: '大阪「一気に3万食作るんかい！」' }, 
                    { text: "隠し味が<br>「鉄分」になるわ！", 
                        point: 1, 
                        type: ['v'],
                        reaction: '大阪「貧血には<br>ええかもしれんけど！」' },
                    { text: "重機で<br>「あ〜ん」して！", 
                        point: 0, 
                        type: ['v', 'p'],
                        reaction: '大阪「って口裂けるわ！<br>アームでかすぎんねん！」' }
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '大阪', text: 'せやなぁ<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '大阪', text: 'ツッコミどころが多すぎる<br>ってことはようわかったわ' },
            { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
            { type: 'dialogue', speaker: '大阪', text: '・・・・・・' },
            { type: 'dialogue', speaker: '大阪', text: 'ほんまにそれでええんかい！！' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！！' },
        ]
    },
'tokyo': {
        scenario: [
            // --- 導入：東京の閉塞感 vs スケールの話 ---
            { type: 'dialogue', speaker: '東京', text: 'はいどうもー！<br>東京都と〜' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '東京', text: 'いや〜、東京は土地が狭くて<br>せせこましいですよ' },
            { type: 'dialogue', speaker: '山形', text: 'そうなの？' },
            { type: 'dialogue', speaker: '東京', text: 'ええ。だからもっとこう、<br>「スケールのデカい」企画が見たいんですよね' },

            // --- ネタ1：人間将棋（規模の履き違え） ---
            { type: 'dialogue', speaker: '山形', text: 'スケールなら山形だよ。<br>将棋を「大規模」にしたお祭りがあるから' },
            { type: 'dialogue', speaker: '東京', text: 'おっ、いいですね。<br>何万人も集まる世界大会とかですか？' },
            { type: 'dialogue', speaker: '山形', text: 'ううん。将棋盤を巨大にして、<br>人間を「駒」として配置するんだ' },
            { type: 'dialogue', speaker: '東京', text: '・・・はい？' },
            {
                type: 'prompt', speaker: '山形', text: '甲冑を着た人間が、巨大な盤の上を<br>練り歩くんだよ',
                tsukkomi: [
                    { text: "「大規模」の意味<br>履き違えてるだろ！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '東京「物理的にデカくして<br>どうすんですか！」' },
                    { text: "土地の<br>無駄遣いですね", 
                        point: 1, 
                        type: ['t'],
                        reaction: '東京「そのスペースあれば<br>タワマン建ちますよ」' },
                    { text: "巨人用の<br>将棋かな？", 
                        point: 0, 
                        type: ['t'],
                        reaction: '東京「進撃の巨人の<br>世界観ですか？」' }
                ]
            },

            // --- ネタ2：冷やし文化（なんでも冷やす安直さ） ---
            { type: 'dialogue', speaker: '東京', text: 'なんか発想が単純ですね...。<br>ただでさえ東京はヒートアイランドで蒸し暑いのに' },
            { type: 'dialogue', speaker: '東京', text: 'もっとこう、クーラーの効いた部屋で<br>スマートに涼みたいですよ' },
            { type: 'dialogue', speaker: '山形', text: '涼みたいなら任せてよ。<br>山形は何でも冷やすから' }, // ←前フリ
            { type: 'dialogue', speaker: '山形', text: '冷やしラーメンに、冷やしシャンプー、<br>冷やしマスクもあるよ' }, // ←羅列して異常性を出す
            { type: 'dialogue', speaker: '東京', text: '・・・シャンプーまで？<br>冷蔵庫に入れてるってことですか？' },
            {
                type: 'prompt', speaker: '山形', text: 'うん。とにかく冷やせば<br>みんな喜ぶからね',
                tsukkomi: [
                    { text: "なんでもかんでも<br>冷やせばいいと思うな！", 
                        point: 3, 
                        ttype: ['t', 'p','v'],
                        reaction: '東京「解決策が<br>安直すぎませんか！」' }, // 核心：とりあえず冷やす精神へのツッコミ
                    { text: "冷房<br>つければいいじゃん", 
                        point: 1, 
                        type: ['t'],
                        reaction: '東京「文明の利器（エアコン）を<br>使ってくださいよ」' }, // 東京的解決：エアコン
                    { text: "お腹<br>壊しますよ", 
                        point: 0, 
                        type: ['t'],
                        reaction: '東京「体冷やしすぎは<br>健康に悪いですよ」' }
                ]
            },

            // --- ネタ3：ケサランパサラン（癒やしを求めて） ---
            { type: 'dialogue', speaker: '東京', text: 'ストイックすぎるなぁ...。<br>もう疲れました。原宿のカフェで可愛い動物でも見たいです' },
            { type: 'dialogue', speaker: '山形', text: '癒やしならあるよ。<br>加茂水族館の「ケサランパサラン」' },
            { type: 'dialogue', speaker: '東京', text: 'ケサランパサラン？<br>なんか聞いたことはあるけど...' },
            { type: 'dialogue', speaker: '山形', text: '白い毛玉みたいな謎の生物だよ。<br>水族館の桐箱の中で飼ってるんだ' },
            {
                type: 'prompt', speaker: '山形', text: 'エサは「おしろい（白粉）」だよ。<br>見てると幸せになれるんだって',
                tsukkomi: [
                    { text: "正体不明の生物<br>展示するなよ！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '東京「水族館なのに<br>魚じゃないんですか！」' },
                    { text: "おしろいを食う？<br>コスパ悪くない？", 
                        point: 1, 
                        type: ['t'],
                        reaction: '東京「化粧品食べるペットとか<br>東京の家賃より高いですよ...」' },
                    { text: "ただの<br>ホコリじゃない？", 
                        point: 0, 
                        type: ['t'],
                        reaction: '東京「掃除してないだけ<br>なんじゃないですか？」' }
                ]
            },

            // --- オチ：山手線で帰る ---
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '東京', text: 'そうですね...<br>とりあえず...' },
            { type: 'dialogue', speaker: '東京', text: '価値観が合わないってことは<br>よく分かりました' },
            { type: 'dialogue', speaker: '山形', text: 'そう？ 残念だな' },
            { type: 'dialogue', speaker: '東京', text: '・・・・・・' },
            { type: 'dialogue', speaker: '東京', text: '山手線乗って帰ります' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜' },
        ]
    },
};

// -------- グローバル変数 --------
let currentScenario, currentPrefKey;
let step = 0, totalPoint = 0;
// ★グラフ用変数はここで定義されています（そのままでOK）
let scorePassion = 0;   // 勢い (p)
let scoreTechnique = 0; // テクニック (t)
let scoreVibe = 0;      // ノリ・優しさ (v)
let waitingForTsukkomi = false;
let audioEnabled = false;
let manzaiStarted = false;

// --- タイプライター用 ---
let isTyping = false, typingTimer = null;
const typeSpeed = 50;

// --- Web Speech API 用 ---
let synth = window.speechSynthesis;
let isSpeechSupported = ('speechSynthesis' in window);
let voices = [], playerVoice = null, yamagataVoice = null;

// -------- HTML要素の取得 --------
const manzaiPage = document.getElementById('manzai-page');
const playerContainer = document.getElementById('player-container');
const playerHead = document.getElementById('player-head');
const yamagataContainer = document.getElementById('yamagata-container');
const yamagataHead = document.getElementById('yamagata-head');

const manzaiUI = document.getElementById('manzai-ui');
const serifuBox = document.getElementById('serifu-box');
const speakerName = document.getElementById('speaker-name');
const serifuText = document.getElementById('serifu-text');
const tapIcon = document.getElementById('tap-icon');
const tsukkomeCutin = document.getElementById('tsukkome-cutin');
const tsukkomiOptions = document.getElementById('tsukkomi-options');
const promptSerifuText = document.getElementById('prompt-serifu-text');
const tsukkomiButtons = document.querySelectorAll('.tsukkomi-btn');
const speakerIcon = document.querySelector('.speaker-icon');
const bgmAudio = document.getElementById('bgm');
const seClickAudio = document.getElementById('se-click');
const seSelectAudio = document.getElementById('se-select');
const seClapAudio = document.getElementById('se-clap');
const seTsukkomeAudio = document.getElementById('se-tsukkome');
const seCorrectAudio = document.getElementById('se-correct');
const seNormalAudio = document.getElementById('se-normal');
const seMissAudio = document.getElementById('se-miss');
const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
const audioPermissionUI = document.getElementById('audio-permission');
const audioYesButton = document.getElementById('audio-yes');
const audioNoButton = document.getElementById('audio-no');


// -------- 利用可能な声を取得 --------
function loadVoices() {
    if (!audioEnabled || !isSpeechSupported) return;
    voices = synth.getVoices().filter(voice => voice.lang === 'ja-JP');
    if (voices.length > 0) { yamagataVoice = voices[0]; }
    if (voices.length > 1) { playerVoice = voices[1]; } 
    else { playerVoice = yamagataVoice; }
}

// -------- 結果画面へ遷移する関数（★新規追加：URL生成を共通化） --------
function goToResult() {
    // ここで p, t, v もURLに含める
    const url = `result.html?point=${totalPoint}&pref=${currentPrefKey}&p=${scorePassion}&t=${scoreTechnique}&v=${scoreVibe}`;
    window.location.href = url;
}

// -------- ゲーム初期化 --------
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pref = urlParams.get('pref'); 

    if (pref && manzaiData[pref]) {
        currentPrefKey = pref;
        currentScenario = manzaiData[pref].scenario;
        step = 0; 
        totalPoint = 0; 
        // ★初期化
        scorePassion = 0; scoreTechnique = 0; scoreVibe = 0;
        waitingForTsukkomi = false; manzaiStarted = false;
        
        if (playerHead) {
            playerHead.src = `images/${currentPrefKey}-head.png`;
            playerHead.alt = currentPrefKey;
        }

        if(playerContainer) playerContainer.style.display = 'block';
        if(yamagataContainer) yamagataContainer.style.display = 'block';

        if (audioPermissionUI) {
            initializeAudioPermission(); 
            audioPermissionUI.style.display = 'block';
            if(manzaiPage) manzaiPage.style.filter = 'brightness(0.1)';
            if(playerContainer) playerContainer.style.opacity = '0';
            if(yamagataContainer) yamagataContainer.style.opacity = '0';
        } else {
            audioEnabled = false; isSpeechSupported = false; startSilentIntro();
        }
    } else {
        alert('エラー：都道府県データがありません。'); window.location.href = 'index.html';
    }
});

// -------- 音声確認ボタン --------
function initializeAudioPermission() {
    if (!audioYesButton || !audioNoButton || !audioPermissionUI) return;
    audioYesButton.addEventListener('click', () => {
        audioEnabled = true; isSpeechSupported = ('speechSynthesis' in window);
        silentAudio.play().catch(e => {});
        if (isSpeechSupported) { loadVoices(); if (speechSynthesis.onvoiceschanged !== undefined) { speechSynthesis.onvoiceschanged = loadVoices; } }
         if (audioEnabled) {
             if(seClickAudio) seClickAudio.load(); if(seSelectAudio) seSelectAudio.load(); if(seClapAudio) seClapAudio.load();
             if(seTsukkomeAudio) seTsukkomeAudio.load(); if(seCorrectAudio) seCorrectAudio.load();
             if(seNormalAudio) seNormalAudio.load(); if(seMissAudio) seMissAudio.load();
         }
        audioPermissionUI.style.display = 'none'; startFullIntro();
    }, { once: true });
    audioNoButton.addEventListener('click', () => {
        audioEnabled = false; isSpeechSupported = false;
        audioPermissionUI.style.display = 'none'; startSilentIntro();
    }, { once: true });
}


// -------- 共通イントロアニメーション (音声あり) --------
function startFullIntro() {
    const initialDelay = 500; const animationDuration = 1500;
    
    if(manzaiPage) manzaiPage.style.filter = 'brightness(0.1)'; 
    if(playerContainer) { playerContainer.style.opacity = '0'; playerContainer.style.transform = 'scale(0.8)'; }
    if(yamagataContainer) { yamagataContainer.style.opacity = '0'; yamagataContainer.style.transform = 'scale(0.8)'; }
    if(manzaiPage) manzaiPage.style.transition = '';

    setTimeout(() => {
        if(manzaiPage) manzaiPage.style.transition = `filter ${animationDuration}ms ease-out`; 
        if(manzaiPage) manzaiPage.style.filter = 'brightness(1)'; 
        
        if(playerContainer) { playerContainer.style.opacity = '1'; playerContainer.style.transform = 'scale(1)'; }
        if(yamagataContainer) { yamagataContainer.style.opacity = '1'; yamagataContainer.style.transform = 'scale(1)'; }
        
        if (audioEnabled && seClapAudio) { seClapAudio.currentTime = 0; seClapAudio.volume = 0.5; seClapAudio.play().catch(e => {}); }
        setTimeout(() => { if(manzaiPage) manzaiPage.style.transition = ''; }, animationDuration);
    }, initialDelay);

    setTimeout(() => {
        if (audioEnabled && bgmAudio) { bgmAudio.volume = 0.1; bgmAudio.play().catch(e => {}); }
        setTimeout(() => {
            runStep(); manzaiStarted = true;
            if(manzaiUI) manzaiUI.style.display = 'block'; if(manzaiUI) manzaiUI.style.opacity = '0'; requestAnimationFrame(() => { if(manzaiUI) manzaiUI.style.opacity = '1'; });
        }, 900);
    }, initialDelay + animationDuration);
}

// -------- 共通イントロアニメーション (音声なし) --------
function startSilentIntro() {
    const initialDelay = 500; const animationDuration = 1500;
    
    if(manzaiPage) manzaiPage.style.filter = 'brightness(0.1)'; 
    if(playerContainer) { playerContainer.style.opacity = '0'; playerContainer.style.transform = 'scale(0.8)'; }
    if(yamagataContainer) { yamagataContainer.style.opacity = '0'; yamagataContainer.style.transform = 'scale(0.8)'; }
    if(manzaiPage) manzaiPage.style.transition = '';
    
    setTimeout(() => {
        if(manzaiPage) manzaiPage.style.transition = `filter ${animationDuration}ms ease-out`; 
        if(manzaiPage) manzaiPage.style.filter = 'brightness(1)'; 
        
        if(playerContainer) { playerContainer.style.opacity = '1'; playerContainer.style.transform = 'scale(1)'; }
        if(yamagataContainer) { yamagataContainer.style.opacity = '1'; yamagataContainer.style.transform = 'scale(1)'; }
        
        setTimeout(() => { if(manzaiPage) manzaiPage.style.transition = ''; }, animationDuration);
    }, initialDelay);
    
    setTimeout(() => {
        if(manzaiUI) manzaiUI.style.display = 'block'; if(manzaiUI) manzaiUI.style.opacity = '0'; requestAnimationFrame(() => { if(manzaiUI) manzaiUI.style.opacity = '1'; });
        if(tapIcon) tapIcon.style.display = 'block';
    }, initialDelay + animationDuration);
}

// -------- テキスト読み上げ --------
function speakText(textToSpeak, speaker, isEnding = false) {
    if (!audioEnabled || !isSpeechSupported || !synth) return;
     if (synth.speaking) { synth.cancel(); }
     stopSpeakingAnimation(); 

     const utteranceText = textToSpeak.replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
     const utterance = new SpeechSynthesisUtterance(utteranceText);
     utterance.lang = 'ja-JP';
     let selectedVoice = null; 
     
     if (speaker === '山形' && yamagataVoice) { 
         selectedVoice = yamagataVoice; 
     } else if (speaker !== 'both' && playerVoice) { 
         selectedVoice = playerVoice; 
     }
     
     if (selectedVoice) { utterance.voice = selectedVoice; }
     utterance.rate = 10; 
     
     if (speaker === '山形') { utterance.pitch = 0; }
     else if (speaker === 'both') { utterance.pitch = 0.8; }
     else { utterance.pitch = 1; }

     utterance.onstart = () => { startSpeakingAnimation(speaker); if(tapIcon) tapIcon.style.display = 'none'; };

     utterance.onend = () => {
         stopSpeakingAnimation();
         if (!isTyping && tapIcon) { tapIcon.style.display = 'block'; }
         if (isEnding && audioEnabled && seClapAudio) {
             seClapAudio.currentTime = 0; seClapAudio.volume = 0.5;
             seClapAudio.play().catch(e => {});
             setTimeout(() => {
                 if (currentScenario && step + 1 >= currentScenario.length && totalPoint !== undefined) {
                      goToResult(); // ★修正：共通関数を使用
                 }
             }, 4000);
         }
     };
     utterance.onerror = (event) => { stopSpeakingAnimation(); if (!isTyping && tapIcon) { tapIcon.style.display = 'block'; } };
     setTimeout(() => { try { synth.speak(utterance); } catch (e) { stopSpeakingAnimation(); if (!isTyping && tapIcon) { tapIcon.style.display = 'block'; } } }, 50);
}

// -------- しゃべりアニメーション --------
function startSpeakingAnimation(speaker) {
    if (speaker === '山形') {
        if(yamagataHead) yamagataHead.classList.add('speaking');
        if(playerHead) playerHead.classList.remove('speaking');
    } else if (speaker === 'both') {
        if(yamagataHead) yamagataHead.classList.add('speaking');
    } else {
        if(playerHead) playerHead.classList.add('speaking');
        if(yamagataHead) yamagataHead.classList.remove('speaking');
    }
}

function stopSpeakingAnimation() {
    if (playerHead) playerHead.classList.remove('speaking');
    if (yamagataHead) yamagataHead.classList.remove('speaking');
}

// -------- タイプライター表示 --------
function typeCharacter(fullText, index, isEnding = false) {
    const displayText = fullText;
    if (index >= displayText.length) {
        isTyping = false; typingTimer = null;
        if ((!synth || !synth.speaking || !audioEnabled) && tapIcon) { tapIcon.style.display = 'block'; }
        if (isEnding && !audioEnabled && seClapAudio) {
             seClapAudio.currentTime = 0; seClapAudio.volume = 0.5;
             seClapAudio.play().catch(e => {});
             setTimeout(() => {
                 if (currentScenario && step + 1 >= currentScenario.length && totalPoint !== undefined) {
                      goToResult(); // ★修正：共通関数を使用
                 }
             }, 500);
        }
        return;
    }
     let char = displayText.charAt(index); let nextIndex = index + 1; if (char === '<') { const closingTagIndex = displayText.indexOf('>', index); if (closingTagIndex !== -1 && displayText.substring(index, closingTagIndex + 1).toLowerCase() === '<br>') { char = '<br>'; nextIndex = closingTagIndex + 1; } else { char = ''; nextIndex = index + 1; } }
     if(serifuText) serifuText.innerHTML += char;
    typingTimer = setTimeout(() => { typeCharacter(fullText, nextIndex, isEnding); }, typeSpeed);
}


// -------- メイン進行関数 --------
function runStep() {
    if (!currentScenario || step >= currentScenario.length) return;
    const currentStepData = currentScenario[step];
    if (!currentStepData) return;

    displayCharacters(currentStepData.speaker);

    if (speakerIcon) speakerIcon.style.display = 'none';
    if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }
    isTyping = false;
    if (audioEnabled && isSpeechSupported && synth && synth.speaking) { synth.cancel(); stopSpeakingAnimation(); }
    
    if(serifuText) serifuText.classList.remove('niigata-text', 'yamagata-text');
    if(speakerName) speakerName.classList.remove('niigata-name-bg', 'yamagata-name-bg');
    if(speakerName) speakerName.style.display = 'inline-block';

    if (currentStepData.type === 'dialogue' || currentStepData.type === 'prompt' || currentStepData.type === 'ending') {
        waitingForTsukkomi = (currentStepData.type === 'prompt');
        if(tsukkomiOptions) tsukkomiOptions.style.display = 'none';

        const fullText = currentStepData.text || "";
        const isEnding = (currentStepData.type === 'ending');

        speakText(fullText, currentStepData.speaker, isEnding);

        if(tapIcon) tapIcon.style.display = 'none';
        if(serifuText) serifuText.innerHTML = '';
        isTyping = true;
        typeCharacter(fullText, 0, isEnding);

        if (currentStepData.speaker === 'both') { 
            if(speakerName) speakerName.style.display = 'none'; 
            if(tapIcon) tapIcon.style.color = '#171717'; 
        }
        else if (currentStepData.speaker === '山形') { 
            if(speakerName) speakerName.textContent = '山形';
            if(serifuText) serifuText.classList.add('yamagata-text'); 
            if(speakerName) speakerName.classList.add('yamagata-name-bg'); 
            if(tapIcon) tapIcon.style.color = '#80D34A'; 
        } 
        else {
            if(speakerName) speakerName.textContent = currentStepData.speaker;
            if(serifuText) serifuText.classList.add('niigata-text');
            if(speakerName) speakerName.classList.add('niigata-name-bg');
            if(tapIcon) tapIcon.style.color = '#FF3F3F';
        }

        if (currentStepData.type === 'prompt') { 
            const promptDisplayText = currentStepData.promptText || fullText; 
            if(promptSerifuText) promptSerifuText.innerHTML = promptDisplayText; 
            if(tsukkomiButtons && currentStepData.tsukkomi && currentStepData.tsukkomi.length >= tsukkomiButtons.length) { 
                for (let i = 0; i < tsukkomiButtons.length; i++) { 
                    const tsukkomi = currentStepData.tsukkomi[i]; 
                    if(tsukkomi) { 
                        tsukkomiButtons[i].innerHTML = tsukkomi.text || ""; 
                        tsukkomiButtons[i].dataset.point = tsukkomi.point || 0; 
                        
                        // ★修正：配列情報を文字列としてdata属性にセット (例: "p,v")
                        const types = tsukkomi.type || [];
                        tsukkomiButtons[i].dataset.type = Array.isArray(types) ? types.join(',') : types;
                        
                        tsukkomiButtons[i].dataset.reaction = tsukkomi.reaction || ""; 
                        tsukkomiButtons[i].dataset.tsukkomiText = (tsukkomi.text || "").replace(/<br>/g, ' '); 
                    } 
                } 
            } 
        }
    }
}


// -------- フキダシ画像切り替え --------
function displayCharacters(currentSpeaker) {
    if(serifuBox) {
        serifuBox.classList.remove('yamagata', 'both');
        if (currentSpeaker === '山形') { serifuBox.classList.add('yamagata'); }
        else if (currentSpeaker === 'both') { serifuBox.classList.add('both'); }
    }
}


// -------- 会話進行タップ処理 --------
manzaiPage.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (targetElement.closest('.tsukkomi-btn') || targetElement.closest('#audio-permission button')) { return; }
    if (audioEnabled && seClickAudio) { seClickAudio.currentTime = 0; seClickAudio.play(); }
    if (currentScenario && step < currentScenario.length && currentScenario[step].type === 'ending') { return; }
    if (!manzaiStarted) { manzaiStarted = true; runStep(); return; }
    if (isTyping || (audioEnabled && isSpeechSupported && synth && synth.speaking)) {
        if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; } isTyping = false; if (audioEnabled && isSpeechSupported && synth && synth.speaking) { synth.cancel(); stopSpeakingAnimation(); } const currentStepData = currentScenario ? currentScenario[step] : null; if (currentStepData && serifuText) { const displayText = currentStepData.text || ""; serifuText.innerHTML = displayText; } if(tapIcon) tapIcon.style.display = 'block';
        return;
    }
    if (waitingForTsukkomi && tsukkomiOptions && tsukkomiOptions.style.display === 'none') { runTsukkomeCutin(); return; }
    if (waitingForTsukkomi) { return; }
    step++;
    runStep();
});

// -------- ツッコめ！カットイン --------
function runTsukkomeCutin() {
     if(manzaiUI) manzaiUI.style.display = 'none';
     if (audioEnabled && isSpeechSupported && synth && synth.speaking) { synth.cancel(); stopSpeakingAnimation(); }
     if (audioEnabled && seTsukkomeAudio) { seTsukkomeAudio.currentTime = 0; seTsukkomeAudio.volume = 0.7; seTsukkomeAudio.play().catch(e => {}); }
     if(tsukkomeCutin) {
         tsukkomeCutin.classList.remove('show'); tsukkomeCutin.style.display = 'block'; requestAnimationFrame(() => { requestAnimationFrame(() => { tsukkomeCutin.classList.add('show'); }); }); const cutinAnimationDuration = 1100;
         setTimeout(() => {
             tsukkomeCutin.style.display = 'none'; tsukkomeCutin.classList.remove('show');
             if(tsukkomiOptions) {
                 tsukkomiOptions.style.opacity = '0'; tsukkomiOptions.style.display = 'flex'; if (speakerIcon) speakerIcon.style.display = 'flex'; requestAnimationFrame(() => { tsukkomiOptions.style.opacity = '1'; });
             }
         }, cutinAnimationDuration);
     }
}


// -------- ツッコミ選択ボタン処理 (★ここが重要) --------
tsukkomiButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const point = Number(event.currentTarget.dataset.point);
        
        // ★修正：タイプ別スコアの計算
        const typeStr = event.currentTarget.dataset.type || "";
        if (typeStr) {
            const types = typeStr.split(',');
            types.forEach(t => {
                if (t === 'p') scorePassion++;
                if (t === 't') scoreTechnique++;
                if (t === 'v') scoreVibe++;
            });
        }

        let selectedSE = null; let volume = 0.7;
        if (audioEnabled) {
             if (point >= 3) { selectedSE = seCorrectAudio; volume = 0.8;}
             else if (point >= 1) { selectedSE = seNormalAudio; volume = 0.7;}
             else { selectedSE = seMissAudio; volume = 0.6;}
        }

        if (waitingForTsukkomi === false) { return; }
        waitingForTsukkomi = false;
        if (audioEnabled && isSpeechSupported && synth && synth.speaking) { synth.cancel(); stopSpeakingAnimation(); }

        const reactionText = event.currentTarget.dataset.reaction;
        const selectedTsukkomiText = event.currentTarget.dataset.tsukkomiText;
        if(totalPoint !== undefined) totalPoint += point;

        if (reactionText && selectedTsukkomiText && currentScenario) {
            const tsukkomiStepText = selectedTsukkomiText.replace(/<br>/g, ' ');
            let playerSpeakerName = '相方';
            if (currentScenario && currentScenario.length > 0) {
                playerSpeakerName = currentScenario[0].speaker; 
            }

            const tsukkomiStep = { type: 'dialogue', speaker: playerSpeakerName, text: tsukkomiStepText };

            const parts = reactionText.split('「');
            if (parts.length >= 2) {
                const reactionSpeaker = parts[0];
                const reactionDialogueRaw = parts[1].replace('」', '');
                const reactionStep = { type: 'dialogue', speaker: reactionSpeaker, text: reactionDialogueRaw };
                currentScenario.splice(step + 1, 0, tsukkomiStep, reactionStep);
            }
        }

        step++;

        if(tsukkomiOptions) tsukkomiOptions.style.opacity = '0';
        setTimeout(() => {
            if(tsukkomiOptions) tsukkomiOptions.style.display = 'none';
            if (speakerIcon) speakerIcon.style.display = 'none';

            setTimeout(() => {
                if(manzaiUI) manzaiUI.style.display = 'block';
                if(manzaiUI) manzaiUI.style.opacity = '0';
                runStep();
                requestAnimationFrame(() => { if(manzaiUI) manzaiUI.style.opacity = '1'; });

                const pointSeDelay = 700;
                setTimeout((seToPlay, seVolume) => {
                    if (seToPlay) { seToPlay.currentTime = 0; seToPlay.volume = seVolume; seToPlay.play().catch(e => {}); }
                }, pointSeDelay, selectedSE, volume);

            }, 300);
        }, 300);
    });
});