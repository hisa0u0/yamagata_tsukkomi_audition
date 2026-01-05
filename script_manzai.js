

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
         if ((!synth || !synth.speaking || !audioEnabled) && tapIcon) {
    const currentStepData = currentScenario[step];
    if (currentStepData && currentStepData.speaker !== 'both') {
        tapIcon.style.display = 'block';
    }
}
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

// -------- しゃべりアニメーション (修正版) --------
function startSpeakingAnimation(speaker) {
    // 1. 安全確認：画像要素がない場合は何もしない
    if (!playerHead || !yamagataHead) return;

    // 2. 一旦、全員の「しゃべっているクラス」を消す
    playerHead.classList.remove('speaking');
    yamagataHead.classList.remove('speaking');

    // 3. 話者に応じてクラスを付与
    if (speaker === '山形') {
        yamagataHead.classList.add('speaking');
    } else if (speaker === 'both') {
        yamagataHead.classList.add('speaking');
        playerHead.classList.add('speaking');
    } else {
        // 都道府県（北海道、沖縄など）が話者の場合
        playerHead.classList.add('speaking');
        
        // 【重要】
        // CSS側の [src*="okinawa"].speaking というセレクタのおかげで、
        // 画像が沖縄なら自動的に「okinawaHeadShake」が適用され、
        // それ以外なら「niigataHeadShake」が適用されます。
    }
}

// 停止用の関数も忘れずに定義（既にある場合は上書き）
function stopSpeakingAnimation() {
    if (playerHead) playerHead.classList.remove('speaking');
    if (yamagataHead) yamagataHead.classList.remove('speaking');
}

// -------- タイプライター表示 --------
function typeCharacter(fullText, index, isEnding = false) {
    const displayText = fullText;
    if (index >= displayText.length) {
        isTyping = false; 
        typingTimer = null;

        // ★ここから修正：現在の話者が both かどうかを正しく判定する
        const currentStepData = currentScenario[step];
        const isBoth = (currentStepData && currentStepData.speaker === 'both');

        // ★ !isBoth (二人同時じゃない時) という条件を追加
        if ((!synth || !synth.speaking || !audioEnabled) && tapIcon && !isBoth) { 
            tapIcon.style.display = 'block'; 
        }
        // ★ここまで

        if (isEnding && !audioEnabled && seClapAudio) {
             seClapAudio.currentTime = 0; seClapAudio.volume = 0.5;
             seClapAudio.play().catch(e => {});
             setTimeout(() => {
                 if (currentScenario && step + 1 >= currentScenario.length && totalPoint !== undefined) {
                      goToResult(); 
                 }
             }, 500);
        }
        return;
    }
    let char = displayText.charAt(index); 
    let nextIndex = index + 1; 
    if (char === '<') { 
        const closingTagIndex = displayText.indexOf('>', index); 
        if (closingTagIndex !== -1 && displayText.substring(index, closingTagIndex + 1).toLowerCase() === '<br>') { 
            char = '<br>'; 
            nextIndex = closingTagIndex + 1; 
        } else { 
            char = ''; 
            nextIndex = index + 1; 
        } 
    }
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