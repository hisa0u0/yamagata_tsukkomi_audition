// -------- 漫才データ（台本） --------
const manzaiData = {

    // -------- 北海道 -----------------------------------------------------------------------------------------------------
    'hokkaido': {
    scenario: [
            { type: 'dialogue', speaker: '北海道', text: 'はいどうも〜！<br>北海道と〜' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
            { type: 'dialogue', speaker: '北海道', text: '北海道といえば<br>やっぱデカい！' },
            { type: 'dialogue', speaker: '北海道', text: '土地も、イベントも<br>スケール感が売り！' },
            { type: 'dialogue', speaker: '北海道', text: 'さっぽろ雪まつりとかさ' },
            { type: 'dialogue', speaker: '山形', text: '“でっかいどう”ってやつだね' },
            { type: 'dialogue', speaker: '山形', text: '大規模イベントなら<br>山形にもあるよ' },
            { type: 'dialogue', speaker: '北海道', text: 'ほう<br>たとえば？' },
            { type: 'dialogue', speaker: '山形', text: 'たとえば、“人間将棋”' },
            { type: 'dialogue', speaker: '山形', text: '巨大な将棋盤の上を<br>人が駒となって動くんだ' },
            { type: 'dialogue', speaker: '北海道', text: '・・・ほう<br>他には？' },
            { type: 'dialogue', speaker: '山形', text: 'あと、日本一の<br>芋煮会フェスティバル' },
            {
             type: 'prompt', speaker: '山形',text: '直径6.5メートルの鍋と<br>バックホーを使って芋煮を作るんだ',
             promptText: '人が駒となって動く人間将棋と<br>巨大鍋とバックホーを使う芋煮会だよ',
                tsukkomi: [
                { text: "巨大化させた<br>だけかよ！", 
                    point: 3, type: ['t','p','v'],
                  reaction: '北海道「発想が小学生みたいだな！」' },
                { text: "重機使って<br>芋煮会！？", 
                    point: 1, type: ['v'],
                  reaction: '北海道「衛生面だけ気になるんだけど・・・」' },
                { text: "雪まつりと<br>戦えそう", 
                    point: 0, type: ['p','v'],
                  reaction: '北海道「盛り上がりそうだな！」' }
                ]
            },
            { type: 'dialogue', speaker: '北海道', text: '・・・まあ<br>スケールの話はさておき' },
            { type: 'dialogue', speaker: '北海道', text: '山形も一応、雪国だよな？' },
            { type: 'dialogue', speaker: '北海道', text: 'でも雪国って言ったら<br>やっぱ北海道っしょ' },
            { type: 'dialogue', speaker: '北海道', text: '夏でも涼しいし' },
            { type: 'dialogue', speaker: '北海道', text: '正直<br>暑さ対策で困ることは少ないな' },
            { type: 'dialogue', speaker: '山形', text: 'それは羨ましいなあ' },
            { type: 'dialogue', speaker: '山形', text: '山形の夏はすごく暑いから<br>暑さ対策は頑張ってるよ' },
            { type: 'dialogue', speaker: '山形', text: '「冷やし中華はじめました」<br>とか' },
            { type: 'dialogue', speaker: '北海道', text: 'おっ！やっぱ夏といえば<br>冷やし中華だよな〜' },
            { type: 'dialogue', speaker: '山形', text: '中華だけじゃなく・・・' },
            {
             type: 'prompt', speaker: '山形',text: '冷やしシャンプーとか<br>冷やしラーメンも始まるね',
                tsukkomi: [
                { text: "めっちゃ暑さに<br>弱いじゃん", 
                    point: 0, type: ['v'],
                  reaction: '北海道「もっと頑張れよ〜」' },
                { text: "冷やし中華と冷やしラーメン<br>何が違うの！？", 
                    point: 1, type: ['p','t'],
                  reaction: '山形「全然違うよ<br>食べてみる？」' },
                { text: "冷やせばいいと<br>思ってる！？", 
                    point: 3, type: ['t','p','v'],
                  reaction: '北海道「まあ<br>それが一番の近道か・・・」' }
                ]
            },
            { type: 'dialogue', speaker: '北海道', text: 'まあでもさ' },
            { type: 'dialogue', speaker: '北海道', text: '自然環境で言ったら<br>北海道は最強だよ' },
            { type: 'dialogue', speaker: '北海道', text: '世界遺産の知床もあるし<br>流氷も来るし、ヒグマも出るし' },
            { type: 'dialogue', speaker: '北海道', text: '山形も<br>そういう自然、ある？' },
            { type: 'dialogue', speaker: '山形', text: '山形は空気が綺麗なんだ<br>空気神社もあるし' },
            { type: 'dialogue', speaker: '北海道', text: 'ほう・・・' },
            { type: 'dialogue', speaker: '北海道', text: '・・・・・・<br>・・・・・・' },
            { type: 'dialogue', speaker: '北海道', text: '・・・え？空気神社？<br>なんの話？' },
            { type: 'dialogue', speaker: '山形', text: '空気があまりにも綺麗だから<br>感謝しようと思って' },
            {
                type: 'prompt',speaker: '山形',text: '空気を御神体とする神社が<br>できたんだよね',
                tsukkomi: [
                    { text: "北海道でも<br>やろうかな",
                        point: 0, type: ['v'],
                        reaction: '北海道「神社だらけになりそう」'},
                    { text: "感謝の仕方<br>独特すぎるだろ！",
                        point: 3, type: ['t','p','v'],
                        reaction: '北海道「スピってる！？大丈夫！？」'},
                    { text: "勝手に神様に<br>すんな！",
                        point: 1, type: ['t','p'],
                        reaction: '北海道「空気はみんなのものだろ！」'}
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '北海道', text: 'う〜ん<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '北海道', text: 'ツッコミどころが多いってことは<br>わかった' },
            { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
            { type: 'dialogue', speaker: '北海道', text: '・・・・・・' },
            { type: 'dialogue', speaker: '北海道', text: 'それでいいのかよ！' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！' },
    ]
    },

    // -------- 東京 -----------------------------------------------------------------------------------------------------
    'tokyo': {
        scenario: [
            { type: 'dialogue', speaker: '東京', text: 'はいどうもー！<br>東京都と〜' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
            { type: 'dialogue', speaker: '東京', text: 'いや〜、東京は土地が狭くて<br>窮屈ですね' },
            { type: 'dialogue', speaker: '山形', text: '東京は人が多いからなあ' },
            { type: 'dialogue', speaker: '東京', text: '山形は広そうですね' },
            { type: 'dialogue', speaker: '山形', text: '山形は大きいから<br>いろんな大きいイベントが開催されるよ' },
            { type: 'dialogue', speaker: '山形', text: 'たとえば、将棋のイベントとか' },
            { type: 'dialogue', speaker: '東京', text: 'おっ、いいですね。<br>何万人も集まる世界大会とかですか？' },
            { type: 'dialogue', speaker: '山形', text: 'いや<br>“人間将棋”って言って' },
            { type: 'dialogue', speaker: '山形', text: '将棋盤を巨大にして、<br>人間を「駒」として配置するんだ' },
            { type: 'dialogue', speaker: '東京', text: '・・・はい？' },
            {
                type: 'prompt', speaker: '山形', text: '甲冑を着た人間が<br>巨大な盤の上を練り歩くんだよ',
                tsukkomi: [
                    { text: "将棋を巨大に<br>しただけじゃないですか！", 
                        point: 3, 
                        type: ['t', 'p','v'],
                        reaction: '東京「物理的にデカくして<br>どうすんですか！」' },
                    { text: "土地の<br>無駄遣いですね", 
                        point: 1, 
                        type: ['t','v'],
                        reaction: '東京「そのスペースあれば<br>タワマン建ちますよ」' },
                    { text: "巨人用の<br>将棋かな？", 
                        point: 0, 
                        type: ['v'],
                        reaction: '東京「空から見るんですかね」' }
                ]
            },
            { type: 'dialogue', speaker: '東京', text: 'まったく...' },
            { type: 'dialogue', speaker: '東京', text: 'もっとこう、東京みたいに<br>“映える”ものはないんですか？' },
            { type: 'dialogue', speaker: '東京', text: '若者が行列を作るような、<br>オシャレな流行りものとか' },
            { type: 'dialogue', speaker: '山形', text: 'あるよ<br>“山形のタピオカ”が' },
            { type: 'dialogue', speaker: '東京', text: 'へぇ！ あるんですね！<br>じゃあ一つお願いします' },
            { type: 'dialogue', speaker: '東京', text: '・・・ってこれ、割り箸に刺さった“玉こんにゃく”ですよね？' },
            {
                type: 'prompt', speaker: '山形', text: '黒くて丸くてモチモチしてるから<br>実質タピオカだよ',
                tsukkomi: [
                    { text: "確かに原材料は<br>芋だけど！", 
                        point: 3, 
                        type: ['t', 'p', 'v'],
                        reaction: '東京「植物学的な分類でゴリ押ししないでくださいよ！」' },
                    { text: "醤油の匂い<br>すごい", 
                        point: 0, 
                        type: ['v'],
                        reaction: '東京「美味しそう<br>流行るんじゃないですか？」' },
                    { text: "全然<br>映えないよ！", 
                        point: 1, 
                        type: ['p',"v"],
                        reaction: '東京「渋すぎでしょ！<br>原宿で持ってたら浮きますよ！」' }
                ]
            },
            { type: 'dialogue', speaker: '東京', text: 'タピオカだと思って食べたら・・・<br>出汁が染みてて美味しいですけど' },
            { type: 'dialogue', speaker: '東京', text: 'こんにゃくがこれだけ美味しいなら、<br>鍋料理とかも絶品なんじゃないですか？' },
            { type: 'dialogue', speaker: '山形', text: 'おっ、鋭いね！<br>山形といえば「芋煮」だよ' },
            { type: 'dialogue', speaker: '東京', text: 'やっぱり！' },
            { type: 'dialogue', speaker: '東京', text: 'みんなで鍋を囲んで温まるのって最高ですよね' },
            { type: 'dialogue', speaker: '山形', text: '毎年、日本一の芋煮会をやってるよ' },
            { type: 'dialogue', speaker: '東京', text: '日本一の芋煮会？<br>最高の食材を使ってるんですか？' },
            { type: 'dialogue', speaker: '山形', text: 'いや、日本一の規模の芋煮会なんだ' },
            {
                type: 'prompt', speaker: '山形', text: '直径6.5mの鍋で作るから<br>バックホーでかき混ぜるんだ',
                tsukkomi: [
                    { text: "給食<br>センターかな", 
                        point: 1, 
                        type: ['t', 'v'],
                        reaction: '東京「何人分作る気ですか・・・」' },
                    { text: "調理器具が<br>おかしい！", 
                        point: 0, 
                        type: ['v', 'p'],
                        reaction: '東京「出汁じゃなくて鉄の味がしそうですね」' },
                    { text: "日本一の<br>“大きさ”なの！？", 
                        point: 3, 
                        type: ['p'],
                        reaction: '東京「デカけりゃいいってもんですか！？」' }
                ]
            },

            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '東京', text: 'う〜ん<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '東京', text: 'ツッコミどころが多いということは<br>よくわかりました' },
            { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
            { type: 'dialogue', speaker: '東京', text: '・・・・・・' },
            { type: 'dialogue', speaker: '東京', text: 'それでいいんですか！？' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！' },
        ]
    },

    // -------- 新潟 --------------------------------------------------------------------------------------------------------
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
            { type: 'dialogue', speaker: '新潟', text: 'コシヒカリの塩むすび<br>最高だぞ〜' },
            { type: 'dialogue', speaker: '新潟', text: '山形は秋、何食べるの？' },
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

    // -------- 長野 --------------------------------------------------------------------------------------------------------
    'nagano': {
        scenario: [
            { type: 'dialogue', speaker: '長野', text: 'こんにちは<br>長野県です' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
            { type: 'dialogue', speaker: '長野', text: '長野といえば、やっぱり「山」だね<br>日本アルプスの雄大な自然が自慢だよ' },
            { type: 'dialogue', speaker: '長野', text: '空気が美味しくて<br>深呼吸すると気持ちいいんだ' },
            { type: 'dialogue', speaker: '山形', text: '空気なら山形も負けてないよ' },
            { type: 'dialogue', speaker: '山形', text: 'あまりに空気が綺麗だから<br>「空気神社」を作って祀ってるんだ' },
            { type: 'dialogue', speaker: '長野', text: 'えっ？ 空気神社？<br>学問の神様とかじゃなくて？' },
            { type: 'dialogue', speaker: '山形', text: 'ううん、空気そのものが御神体だよ' },
            {
                type: 'prompt', speaker: '山形', text: '本殿もなくて、<br>鏡に映る空気を拝むんだ',
                tsukkomi: [
                    { text: "哲学的すぎるよ！", 
                        point: 3, type: ['t', 'p', 'v'], 
                        reaction: '長野「教育県でも<br>理解が追いつかないよ！」' },
                    { text: "賽銭は<br>どうするの？", 
                        point: 1, type: ['v'], 
                        reaction: '山形「普通の賽銭箱があるよ<br>そこは現金だよ」' },
                    { text: "長野にも<br>作ろうかな", 
                        point: 0, type: ['p'], 
                        reaction: '長野「いや、真面目な県民が<br>混乱しちゃうよ」' }
                ]
            },
            { type: 'dialogue', speaker: '長野', text: '空気を祀るなんて、独創的だなぁ...' },
            { type: 'dialogue', speaker: '長野', text: 'あと長野は海がないけど、<br>そのぶん川の水が綺麗なんだ' },
            { type: 'dialogue', speaker: '長野', text: 'イワナとかヤマメとか<br>川魚が美味しいよ' },
            { type: 'dialogue', speaker: '山形', text: 'お魚かぁ<br>山形は海があるから、海の生き物が豊富だよ' },
            { type: 'dialogue', speaker: '山形', text: '加茂水族館には<br>世界一の種類の「クラゲ」がいるし' },
            { type: 'dialogue', speaker: '長野', text: 'へぇ、世界一の展示数なんだ<br>見るだけで癒やされそうだね' },
            { type: 'dialogue', speaker: '山形', text: 'うん、見て癒やされた後は<br>美味しくいただくんだ' },
            {
                type: 'prompt', speaker: '山形', text: 'クラゲラーメンとか<br>クラゲアイスにしてね',
                tsukkomi: [
                    { text: "なんで<br>食べちゃうの！", 
                        point: 3, type: ['t', 'p', 'v'], 
                        reaction: '長野「展示を見た直後に！？<br>情緒がないよ！」' },
                    { text: "普通の魚<br>食べさせてよ！", 
                        point: 1, type: ['v', 'p'], 
                        reaction: '山形「コリコリして<br>ナタデココみたいで最高だよ？」' },
                    { text: "アイスに<br>入ってるの！？", 
                        point: 0, type: ['v'], 
                        reaction: '長野「食感の主張が<br>激しすぎるよ...」' }
                ]
            },
            { type: 'dialogue', speaker: '長野', text: 'はぁ...<br>山形の食文化は刺激的だね' },
            { type: 'dialogue', speaker: '長野', text: '長野県民は真面目だから<br>もっとこう、質素で団結力があるのが好きかな' },
            { type: 'dialogue', speaker: '長野', text: '県歌の「信濃の国」を<br>みんなで合唱したりね' },
            { type: 'dialogue', speaker: '山形', text: '団結力なら、山形の「芋煮会」もすごいよ' },
            { type: 'dialogue', speaker: '山形', text: '河原に集まって、みんなで鍋を囲むんだ' },
            { type: 'dialogue', speaker: '長野', text: 'ああ、芋煮！<br>それなら平和でいいね' },
            { type: 'dialogue', speaker: '山形', text: 'うん。ただ、日本一の芋煮会だと<br>3万食を作るからお玉じゃ無理なんだ' },
            {
                type: 'prompt', speaker: '山形', text: 'だから工事現場のショベルカーで<br>具材をかき混ぜるんだ',
                tsukkomi: [
                    { text: "衛生管理<br>どうなってるの！", 
                        point: 3, type: ['t', 'p', 'v'], 
                        reaction: '長野「工事現場じゃないか！<br>保健所は許可したの！？」' },
                    { text: "調理器具<br>じゃないよ！", 
                        point: 1, type: ['v', 'p'], 
                        reaction: '山形「ちゃんと新車を買って<br>バターを塗ってるから衛生的だよ」' },
                    { text: "真面目に<br>料理して！", 
                        point: 0, type: ['v'], 
                        reaction: '長野「給食のおばちゃんが<br>腰抜かすよ！」' }
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '長野', text: 'う〜ん<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '長野', text: 'ツッコミどころが多いってことは<br>学習できたよ' },
            { type: 'dialogue', speaker: '山形', text: '山形の魅力が伝わって嬉しいよ！' },
            { type: 'dialogue', speaker: '長野', text: '・・・・・・' },
            { type: 'dialogue', speaker: '長野', text: 'ポジティブすぎるよ！' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！' },
        ]
    },

    // -------- 大阪 -----------------------------------------------------------------------------------------------------
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

    // -------- 愛媛 ---------------------------------------------------------------------------------------------------------
    'ehime': {
        scenario: [
            { type: 'dialogue', speaker: '愛媛', text: 'はいどうもー、愛媛県よ〜' },
            { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
            { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
            { type: 'dialogue', speaker: '愛媛', text: '愛媛には「道後温泉」っていう<br>日本最古の温泉があるんよ' },
            { type: 'dialogue', speaker: '愛媛', text: '山形さんも温泉多いけど' },
            { type: 'dialogue', speaker: '愛媛', text: 'やっぱお風呂はポカポカして<br>癒やされるんがええよね' },
            { type: 'dialogue', speaker: '山形', text: 'そうだね<br>雪国だから冬は寒いし' },
            { type: 'dialogue', speaker: '山形', text: 'でも夏は暑いから<br>温泉よりも「冷やしシャンプー」かな' },
            { type: 'dialogue', speaker: '愛媛', text: '冷やしシャンプー・・・？' },
            { type: 'dialogue', speaker: '山形', text: '床屋さんでやってもらうんだ' },
            { type: 'dialogue', speaker: '愛媛', text: '頭が凍ってしまいそうやね・・・' },
            { type: 'dialogue', speaker: '山形', text: '暑い夏には最高だよ' },
            { type: 'dialogue', speaker: '山形', text: 'あと、ラーメン屋さんが<br>冷やしラーメンを始めたり' },
            { type: 'dialogue', speaker: '愛媛', text: 'はあ？<br>冷やしラーメン・・・？' },
            { type: 'dialogue', speaker: '山形', text: '「冷やし中華始めました」<br>みたいな感じで' },
            {
                type: 'prompt', speaker: '山形', text: '山形の夏は<br>いろんなものが冷えてるよ',
                promptText: '冷やし中華始めましたみたいな感じで<br>山形の夏はいろんなものが冷えてるよ',
                tsukkomi: [
                    { text: "暑がりすぎやろ！", 
                        point: 1, 
                        type: ['t', 'p'], 
                        reaction: '愛媛「山形の夏はそんなに暑いん！？」' },
                    { text: "冷やし中華だけで<br>十分やろ！", 
                        point: 3, 
                        type: ['t', 'p', 'v'], 
                        reaction: '山形「最近は冷やしマスクもあるよ」' },
                    { text: "お腹<br>壊さんようにね", 
                        point: 0, 
                        type: ['v'], 
                        reaction: '愛媛「冷やしすぎもいかんよ<br>体冷えるけん」' }
                ]
            },
            { type: 'dialogue', speaker: '愛媛', text: '刺激が強すぎるわい...' },
            { type: 'dialogue', speaker: '愛媛', text: 'もっとこう、瀬戸内の海みたいに<br>優雅なものはないんかな？' },
            { type: 'dialogue', speaker: '愛媛', text: 'うちは「鯛めし」が自慢よ' },
            { type: 'dialogue', speaker: '愛媛', text: 'お刺身のタイプと、<br>炊き込みタイプがあるんよ' },
            { type: 'dialogue', speaker: '山形', text: '海の幸なら山形にもあるよ<br>加茂水族館の「クラゲ」とか' },
            { type: 'dialogue', speaker: '愛媛', text: 'ク、クラゲ...？' },
            { type: 'dialogue', speaker: '愛媛', text: '海の幸って言っても<br>観賞用やろ...' },
            {
                type: 'prompt', speaker: '山形', text: '水族館を一通り見終わったら<br>売店でクラゲアイスを食べるんだ',
                tsukkomi: [
                    { text: "クラゲアイス！？<br>変なスイーツやね！", 
                        point: 1, 
                        type: ['t', 'p'], 
                        reaction: '愛媛「食用クラゲなんて<br>中華料理でしか聞かんよ」' },
                    { text: "鯛の餌に<br>しようや", 
                        point: 0, 
                        type: ['v'], 
                        reaction: '山形「食物連鎖だね」' },
                    { text: "さっき見たやつ<br>食うんかい！", 
                        point: 3, 
                        type: ['t', 'p', 'v'], 
                        reaction: '愛媛「今まで『綺麗やね〜』言うて愛でよったのに...」' }
                ]
            },
            { type: 'dialogue', speaker: '愛媛', text: 'なんかしんどなってきたわ...' },
            { type: 'dialogue', speaker: '愛媛', text: '愛媛に帰って「いもたき」でもして落ち着きたい...' },
            { type: 'dialogue', speaker: '愛媛', text: '河原で鍋囲んで食べるんよね<br>素朴でええよね〜' },
            { type: 'dialogue', speaker: '山形', text: 'あ、里芋を煮るやつ？' },
            { type: 'dialogue', speaker: '山形', text: 'それなら山形の「芋煮」も負けてないよ' },
            { type: 'dialogue', speaker: '山形', text: 'なんといっても、<br>「日本一」の芋煮会を目指したからね' },
            { type: 'dialogue', speaker: '愛媛', text: '日本一？<br>最高の味を追求したん？' },
            { type: 'dialogue', speaker: '山形', text: '味というか・・・' },
            {
                type: 'prompt', speaker: '山形', text: '直径6.5mの大鍋に具材を入れて<br>バックホーで調理する芋煮会だよ',
                tsukkomi: [
                    { text: "工事現場<br>やろが！", 
                        point: 1, 
                        type: ['p', 'v'], 
                        reaction: '愛媛「調理器具の概念壊れるわい！」' },
                    { text: "それって<br>衛生的にどうなん？", 
                        point: 0, 
                        type: ['t', 'v'], 
                        reaction: '山形「新品の重機を買って潤滑油にバターを塗ってるから大丈夫だよ」' },
                    { text: "日本一の<br>“デカさ”かい！", 
                        point: 3, 
                        type: ['t', 'p', 'v'], 
                        reaction: '愛媛「味やのうてサイズの話かい！<br>予想の斜め上すぎるわ！」' }
                ]
            },
            { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
            { type: 'dialogue', speaker: '愛媛', text: 'ほうやね<br>とりあえず・・・' },
            { type: 'dialogue', speaker: '愛媛', text: 'ツッコミどころが多すぎる<br>ってことはようわかったわ' },
            { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
            { type: 'dialogue', speaker: '愛媛', text: '・・・・・・' },
            { type: 'dialogue', speaker: '愛媛', text: 'ほんまにそれでええんかい！！' },
            { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！！' },
        ]
    },
    
    // -------- 沖縄 -----------------------------------------------------------------------------------------------------
    'okinawa': {
    scenario: [
        { type: 'dialogue', speaker: '沖縄', text: 'ハイサイ！<br>沖縄県さ〜' },
        { type: 'dialogue', speaker: '山形', text: '山形県で〜す' },
        { type: 'dialogue', speaker: '山形', text: '今日は県の形だけでも<br>覚えて帰ってくださ〜い' },
        { type: 'dialogue', speaker: '沖縄', text: '沖縄といえばシーサーさぁ<br>家の守り神だね' },
        { type: 'dialogue', speaker: '沖縄', text: '伝説上の生き物だけど<br>家族みたいに愛されてるわけさ' },
        { type: 'dialogue', speaker: '山形', text: '伝説上の生き物なら<br>山形でも愛でられてるよ' },
        { type: 'dialogue', speaker: '沖縄', text: 'へぇ〜、なになに？<br>龍とかキジムナー的な？' },
        { type: 'dialogue', speaker: '山形', text: 'ケサランパサラン' },
        { type: 'dialogue', speaker: '沖縄', text: 'え？<br>あの白い毛玉！？' },
        { type: 'dialogue', speaker: '山形', text: 'そうだよ' },
        { type: 'dialogue', speaker: '山形', text: '桐の箱に入れて<br>おしろいをあげて育てるんだ' },
        { type: 'dialogue', speaker: '沖縄', text: 'あれ正体不明の<ruby>未確認生物<rt>UMA</rt></ruby>だよね！？' },
        { type: 'dialogue', speaker: '沖縄', text: 'ペット感覚なの！？' },
        
        { type: 'prompt', speaker: '山形', text: '水族館にも<br>展示されてるよ',
            tsukkomi: [
                { text: "海の生き物じゃ<br>ないでしょ！", 
                    point: 1, type: ['v', 't'],
                    reaction: '沖縄「どっちかっていうと<br>動物園じゃない・・・？」' },
                { text: "美ら海水族館にも<br>展示して〜！", 
                    point: 0, type: ['v','p'],
                    reaction: '沖縄「未確認生物<br>確認した〜い」' },
                { text: "未確認生物<br>確認しちゃってるよ！", 
                    point: 3, type: ['t', 'p', 'v'],
                    reaction: '沖縄「展示してる場合じゃないでしょ！<br>調べて調べて！」' }
            ]
        },
        { type: 'dialogue', speaker: '沖縄', text: 'はぁ・・・<br>でーじパニックさぁ' },
        { type: 'dialogue', speaker: '沖縄', text: 'こういう時はスカッとするものを飲んで<br>リフレッシュしたいわけよ' },
        { type: 'dialogue', speaker: '山形', text: 'スカッとするもの？' },
        { type: 'dialogue', speaker: '沖縄', text: 'そう、沖縄のソウルドリンク<br>「ルートビア」！' },
        { type: 'dialogue', speaker: '沖縄', text: 'ハーブでスースーして<br>目が覚めるよ〜' },
        { type: 'dialogue', speaker: '沖縄', text: '・・・まあ、一部では<br>「飲む湿布」って言われてるけど' },
        { type: 'dialogue', speaker: '沖縄', text: 'でもそのスースー感が<br>暑い夏には最高さぁ' },
        { type: 'dialogue', speaker: '山形', text: '確かに、涼を取るなら<br>スースー感だよね' },
        { type: 'dialogue', speaker: '沖縄', text: '山形さんの夏は<br>どんな風に涼を取るの？' },
        { type: 'dialogue', speaker: '山形', text: '山形の夏は<br>冷やし中華と・・・' },
        { type: 'dialogue', speaker: '沖縄', text: 'だからよ〜<br>夏といえばそれだよね' },
        { type: 'prompt', speaker: '山形', text: '冷やしラーメン、冷やしシャンプー<br>冷やしマスクとか',
            tsukkomi: [
                { text: "冷やしルートビア<br>はじめました〜", 
                    point: 0, type: ['v'], 
                    reaction: '沖縄「やっぱキンキンに冷えてたほうが<br>まーさんだよね」' },
                { text: "なんでもかんでも<br>冷やしすぎ！", 
                    point: 3, type: ['t', 'p', 'v'], 
                    reaction: '沖縄「結構<br>力技で涼取るんだね・・・」' },
                { text: "山形の夏って<br>そんなに暑いの！？", 
                    point: 1, type: ['p', 'v'], 
                    reaction: '沖縄「暑さ対策<br>ちばりよー！」' }
            ]
        },
        { type: 'dialogue', speaker: '沖縄', text: '話聞いてるだけで<br>寒気がしてきたさぁ' },
        { type: 'dialogue', speaker: '沖縄', text: '体が冷えたから<br>温かいものでも食べたいわけよ' },
        { type: 'dialogue', speaker: '山形', text: '温かいものなら<br>山形は「芋煮」が有名だよ' },
        { type: 'dialogue', speaker: '沖縄', text: 'ああ、里芋のお鍋だね<br>響きが素朴で、平和そうでいいさぁ〜' },
        { type: 'dialogue', speaker: '山形', text: '河原でみんなで作るんだ<br>美味しいよ' },
        { type: 'dialogue', speaker: '沖縄', text: 'いいはずよ〜、癒やされそう' },
        { type: 'dialogue', speaker: '山形', text: '日本一の芋煮会フェスティバルは<br>すごく盛り上がるんだ' },
        { type: 'dialogue', speaker: '沖縄', text: '日本一・・・？<br>なんで日本一な訳？' },
        { type: 'prompt', speaker: '山形', text: '直径6.5mの鍋とバックホーで<br>3万食の芋煮を作るんだ',
            tsukkomi: [
                { text: "日本一の<br>サイズかよ！", 
                    point: 3, type: ['t', 'p', 'v'], 
                    reaction: '沖縄「芋煮会、巨大化させちゃいました<br>ってこと！？」' },
                { text: "ジンベエザメの方が<br>大きいかも", 
                    point: 0, type: ['t', 'v'], 
                    reaction: '山形「負けたか〜」' },
                { text: "隠し味は<br>潤滑油！？", 
                    point: 1, type: ['p', 'v'], 
                    reaction: '山形「潤滑油替わりに<br>バターを塗ってるよ」' }
            ]
        },
        { type: 'dialogue', speaker: '山形', text: 'どう？<br>山形のこと、だいたいわかった？' },
        { type: 'dialogue', speaker: '沖縄', text: 'う〜ん<br>とりあえず・・・' },
        { type: 'dialogue', speaker: '沖縄', text: 'ツッコミどころが多いってことは<br>わかったさぁ' },
        { type: 'dialogue', speaker: '山形', text: 'それが山形の魅力だ！' },
        { type: 'dialogue', speaker: '沖縄', text: '・・・・・・' },
        { type: 'dialogue', speaker: '沖縄', text: 'それでいいわけ！？' },
        { type: 'ending', speaker: 'both', text: 'どうも<br>ありがとうございました〜！' },
    ]
    },

};

