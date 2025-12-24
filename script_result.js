document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded - Final Version");

    // ==========================================
    // 1. URLパラメータの取得と計算
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const point = parseInt(urlParams.get('point') || '0', 10);
    const selectedPref = urlParams.get('pref') || 'niigata'; 
    let pScore = parseInt(urlParams.get('p') || '0', 10);
    let tScore = parseInt(urlParams.get('t') || '0', 10);
    let vScore = parseInt(urlParams.get('v') || '0', 10);

    let graphP = pScore, graphT = tScore, graphV = vScore;
    let bondScore = 0, destinyScore = 0;

    if (point >= 9) {
        graphP = 40; graphT = 40; graphV = 40;
        bondScore = 40; destinyScore = 40;
    } else {
        graphP *= 10; graphT *= 10; graphV *= 10;
        bondScore = point * 4; 
        destinyScore = Math.floor(Math.random() * 20) + 10; 
    }

    [graphP, graphT, graphV, bondScore, destinyScore].forEach((val, i) => {
        let finalVal = val > 40 ? 40 : val;
        if (i === 0) graphP = finalVal;
        if (i === 1) graphT = finalVal;
        if (i === 2) graphV = finalVal;
        if (i === 3) bondScore = finalVal;
        if (i === 4) destinyScore = finalVal;
    });

    let typeName = "「未知数の新コンビ」";
    if (point >= 9) {
        typeName = "「伝説のM-1王者」\n神コンビ";
    } else {
        const scores = { 'p': graphP, 't': graphT, 'v': graphV };
        let maxKey = 'p';
        if (scores.t > scores.p && scores.t > scores.v) maxKey = 't';
        if (scores.v > scores.p && scores.v > scores.t) maxKey = 'v';
        
        if (maxKey === 'p') typeName = "「歩く放送事故」\n破壊的コンビ"; 
        else if (maxKey === 't') typeName = "「脳みそ共有済み」\n双子コンビ"; 
        else typeName = "「全肯定セラピー」\n平和なコンビ"; 
        
        if (bondScore >= 35 && point < 9) typeName = "「同じDNAを持つ他人」\n運命のコンビ";
        if (point <= 2) typeName = "「永遠の氷河期」\n解散危機";
    }

    const diagnosisEl = document.getElementById('diagnosis-text');
    if (diagnosisEl) diagnosisEl.innerText = typeName;

    // ==========================================
    // 2. DOM要素の取得
    // ==========================================
    const resultPage = document.getElementById('result-page');
    const trophyContainer = document.getElementById('s-rank-trophy-container');
    const resultBackgroundImage = document.getElementById('result-background-image');
    const selectedPrefHead = document.getElementById('selected-pref-head');
    const shareButton = document.getElementById('share-button');
    const qrBtn = document.getElementById('qr-button');
    const commentBox = document.getElementById('result-comment');

    // ==========================================
    // 3. ランク判定
    // ==========================================
    let resultImageSrc = 'images/result_c.png';
    let simpleRank = 'C';
    let isSRank = false;
    if (point >= 9) { simpleRank = 'S'; resultImageSrc = 'images/result_s.png'; isSRank = true; }
    else if (point >= 6) { simpleRank = 'A'; resultImageSrc = 'images/result_a.png'; }
    else if (point >= 3) { simpleRank = 'B'; resultImageSrc = 'images/result_b.png'; }
    
    if (resultBackgroundImage) resultBackgroundImage.src = resultImageSrc;
    if (selectedPrefHead) {
        selectedPrefHead.src = `images/${selectedPref}-head.png`;
        selectedPrefHead.onerror = function() { this.src = 'images/niigata-head.png'; };
    }

    if (commentBox) {
        let commentHtml = "";
        if (simpleRank === 'S') commentHtml = 
        `<div class="comment-head">最高の相性です！</div>
        <div class="comment-body">山形県が繰り出す狂気のスパイラルを、あなたは「待ってました」と言わんばかりに完璧に捌き切りました。<br><br>もはや漫才というより、二人にしか通じない高度なテレパシー通信を見せられている気分です。<br><br>この二人なら、どんな過疎地に行っても笑いを生み出せるでしょう。</div>`;
        else if (simpleRank === 'A') commentHtml = 
        `<div class="comment-head">良好な関係です。</div>
        <div class="comment-body">山形県の暴走をあなたが適切に処理できているため、コンビとしての機能性は非常に高いです。<br><br>ただ、たまに事務的というか、少し「置きにいった」対応が見え隠れします。<br><br>心の底から通じ合っているというよりは、「仕事ができる同僚」止まりの相性かもしれません。</div>`;
        else if (simpleRank === 'B') commentHtml = 
        `<div class="comment-head">少しピントがズレています。</div>
        <div class="comment-body">山形県は「ボケて」いるのに、あなたはそれを「間違い」として正そうとしたり、全く違う角度から返したりしていませんか？<br><br>悪気はないものの、会話のドッジボールが続いています。<br><br>「性格の不一致」で解散するカップルのような、微妙な空気が流れています。</div>`;
        else commentHtml = 
        `<div class="comment-head">絶望的な相性です。</div>
        <div class="comment-body">山形県が必死に投げたボケを、あなたは全て見逃しているか、怖がって避けてしまっています。<br><br>共通言語が存在しないため、意思疎通が図れていません。<br><br>これ以上一緒にいると、お互いに不幸になるだけの関係です。早急な解散をお勧めします。</div>`;
        commentBox.innerHTML = commentHtml;
    }

    // ==========================================
    // 5. ボタン機能の設定
    // ==========================================
    if (shareButton) {
    // 改行をきれいに整え、診断テキストを含める
    const shareText = `【山形ツッコミオーディション】\n私の相性は…\nランク：${simpleRank}\n称号：${typeName.replace(/\n/g, "")}\n\n`;
    
    // シェアするURLを自分のリポジトリのトップページ（公開URL）に固定する
    const shareUrl = "https://hisa0u0.github.io/yamagata_tsukkomi_audition/";
    
    // ハッシュタグも追加
    const hashtags = "山形ツッコミオーディション";

    shareButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(hashtags)}`;
}

    if (qrBtn) {
        qrBtn.onclick = (e) => {
            e.preventDefault();
            
            // 既にモーダルがある場合は削除
            const exist = document.getElementById('qr-modal');
            if(exist) exist.remove();

            // 1. モーダルのHTML構造
            const modalHtml = `
            <div id="qr-modal" style="position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); width:min(100vw, 100vh * (390 / 750)); height:min(100vh, 100vw * (750 / 390)); background:rgba(0,0,0,0.8); z-index:10001; display:flex; justify-content:center; align-items:center; flex-direction:column; backdrop-filter:blur(5px); box-sizing:border-box;">
                <div style="background:#111; border:2px solid #04FF00; padding:20px; border-radius:15px; text-align:center; box-shadow:0 0 30px rgba(4,255,0,0.5); width:85%; box-sizing:border-box;">
                    <p style="color:#04FF00; font-weight:bold; font-size:18px; margin:0 0 10px 0;">診断結果カード発行</p>
                    <div id="qrcode-target" style="background:white; padding:10px; margin:0 auto; border-radius:8px; display:inline-block; min-width:160px; min-height:160px;"></div>
                    <div id="mobile-link-container"></div>
                    <button id="close-qr" style="margin-top:20px; padding:12px 30px; cursor:pointer; background:#04FF00; color:#000; border:none; border-radius:20px; font-size:14px; width:100%; font-weight:bold;">閉じる</button>
                </div>
            </div>`;
            
            // 2. 画面にHTMLを追加
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            // 3. 【ここが最重要】描画先の要素を「ID名」ではなく「要素そのもの」で取得
            const qrElement = document.getElementById('qrcode-target');

            if (qrElement && typeof QRCode !== 'undefined') {
                const baseUrl = window.location.href.split('?')[0].replace('result.html', 'card.html');
                const safeName = typeName.replace(/\n/g, "");
                const qrUrl = `${baseUrl}?point=${point}&pref=${selectedPref}&name=${encodeURIComponent(safeName)}&p=${graphP}&t=${graphT}&v=${graphV}&b=${bondScore}&d=${destinyScore}`;
                
                // 第一引数に「ID文字列」ではなく「取得した要素」を渡すことで確実性を高める
                new QRCode(qrElement, {
                    text: qrUrl,
                    width: 160,
                    height: 160,
                    correctLevel: QRCode.CorrectLevel.H
                });

                document.getElementById('mobile-link-container').innerHTML = 
                    `<a href="${qrUrl}" style="display:block; margin-top:15px; padding:12px; background:#04FF00; color:#000; text-decoration:none; border-radius:8px; font-weight:bold; font-size:15px;">この端末で直接開く ➡</a>`;
            }

            // 閉じる処理
            document.getElementById('close-qr').onclick = () => document.getElementById('qr-modal').remove();
        };
    }

    // ==========================================
    // 6. グラフ & 表示
    // ==========================================
    const drawChart = () => {
        const ctx = document.getElementById('myRadarChart');
        if (!ctx) return;
        if (window.myChartInstance) window.myChartInstance.destroy();
        window.myChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['爆発力', ['阿吽の', '呼吸'], '包容力', ['ガチの', '絆'], '運命'],
                datasets: [{
                    data: [graphP, graphT, graphV, bondScore, destinyScore],
                    backgroundColor: 'rgba(4, 255, 0, 0.2)', 
                    borderColor: '#04FF00',
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { r: { min: 0, max: 40, ticks: { display: false }, grid: { color: 'rgba(4, 255, 0, 0.3)' }, pointLabels: { color: '#04FF00' } } },
                plugins: { legend: { display: false } }
            }
        });
    };

    const showFinalResult = () => {
        if (resultPage) resultPage.style.display = 'block';
        setTimeout(drawChart, 100);
    };

    // Sランク演出 or 通常表示
    if (isSRank && trophyContainer) {
        resultPage.style.display = 'none';
        trophyContainer.style.display = 'flex';
        setTimeout(() => trophyContainer.classList.add('start-trophy-anim'), 100);
        setTimeout(() => {
            trophyContainer.classList.remove('start-trophy-anim');
            trophyContainer.classList.add('end-trophy-anim');
        }, 3100);
        setTimeout(() => {
            trophyContainer.style.display = 'none'; 
            showFinalResult(); 
        }, 4200);
    } else {
        showFinalResult();
    }
});

