document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================================
    // 1. ストーリー演出：スクロールに合わせて文字をふわっと出す
    // ============================================================
    
    // 監視の設定
    const observerOptions = {
        root: null,          
        rootMargin: '-20% 0px', // 画面の下20%のラインに来たら発動（早すぎず遅すぎず）
        threshold: 0         
    };

    // 監視ロボット（Observer）の作成
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            // 画面に入ってきたら...
            if (entry.isIntersecting) {
                // クラスを追加してCSSアニメーション開始
                // （山形県の場合はCSS側で3.5秒かけて出る設定になっています）
                entry.target.classList.add('is-visible');
                
                // 一度表示したら監視をやめる（スクロール戻しても消えないようにする）
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // すべての .story-section を監視対象に登録
    const sections = document.querySelectorAll('.story-section');
    sections.forEach(section => {
        observer.observe(section);
    });


    // ============================================================
    // 2. スタートボタンの処理（画面遷移）
    // ============================================================
    const startBtn = document.getElementById('start-button');
    const prefSelect = document.getElementById('pref-select');

    if (startBtn && prefSelect) {
        startBtn.addEventListener('click', () => {
            const selectedVal = prefSelect.value;
            
            // 何も選んでいない場合
            if (!selectedVal) {
                alert("都道府県を選択してください");
                return;
            }

            // 「準備中」を選んだ場合（HTMLで disabled になってるものをチェック）
            const selectedOption = prefSelect.options[prefSelect.selectedIndex];
            if (selectedOption.disabled) {
                alert("その都道府県は現在準備中です。");
                return;
            }

            // 選ばれた値を保存して、漫才ページへGO
            // （URLの後ろに ?pref=tokyo のようにつける方式）
            window.location.href = `manzai.html?pref=${selectedVal}`;
        });
    }
    
    
// ============================================================
    // 3. ロゴのアニメーション（タイミング調整版）
    // ============================================================
    const logo = document.querySelector('.stage-logo');
    
    function startLogoAnimation() {
        if(!logo) return;
        
        // ▼ ここで「一呼吸（0.3秒）」置いてから開始する
        setTimeout(() => {
            
            // Phase 1: バンッ！
            logo.classList.add('show-phase1');

            setTimeout(() => {
                // Phase Shake: 震える
                logo.classList.remove('show-phase1');
                logo.classList.add('show-phase-shake');
            }, 500);

            setTimeout(() => {
                // Phase Static: 静止
                logo.classList.remove('show-phase-shake');
                logo.classList.add('show-phase-static');
            }, 1000);

            setTimeout(() => {
                // Phase 2: 鼓動開始
                logo.classList.remove('show-phase-static');
                logo.classList.add('show-phase2');
            }, 2000);
            
        }, 800); // ★この 800ms が「溜め」になります
    }

    if (logo) {
        const logoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startLogoAnimation();
                    logoObserver.disconnect();
                }
            });
        }, { 
            // ▼ 修正点：画面の下端から「30%」上のラインを越えるまで待つ
            // これで「画面の真ん中あたり」に来るまで発動しません
            rootMargin: '0px 0px -30% 0px', 
            threshold: 0 
        });

        logoObserver.observe(logo);
    }
});