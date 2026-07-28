document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // 機能①：【ホーム画面用】家族の趣味おみくじ
    // ----------------------------------------------------
    const omikujiBtn = document.getElementById('omikujiBtn');
    const omikujiResult = document.getElementById('omikujiResult');

    if (omikujiBtn) {
        const fortunes = [
            "🎯 父・正一より：『今日は勝負運が最高だ！直感を信じて進め！』(ラッキーアイテム: 競馬新聞)",
            "🎬 母・幸恵より：『疲れたら無理せず、好きなドラマを見てのんびり過ごそう！』(ラッキーアイテム: リモコン)",
            "🍻 姉・藍那より：『今日もお疲れ様！美味しい飲み物で乾杯してリフレッシュしよう！』(ラッキーアイテム: 冷えたグラス)",
            "⚾ 弟・創太朗より：『全力投球で行こう！努力は必ず報われるぞ！』(ラッキーアイテム: 白いボール)",
            "🛍️ あなた自身より：『がんばった自分にご褒美を！お買い物や散歩に出かけよう！』(ラニーカー)"
        ];

        omikujiBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            omikujiResult.textContent = fortunes[randomIndex];
            omikujiResult.style.display = 'block';
        });
    }

    // ----------------------------------------------------
    // 機能②：【バドミントン経歴・大学生活用】アクティビティ絞り込み機能
    // ----------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.activity-section');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // アクティブなボタンの見た目を切り替え
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const target = button.getAttribute('data-target');

                // 指定されたカテゴリー以外のセクションを非表示にする
                sections.forEach(section => {
                    const category = section.getAttribute('data-category');
                    if (target === 'all' || target === category) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });
    }

});