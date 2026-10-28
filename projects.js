const PROJECTS = [
  {
    "id": "timer",
    "name": "自分用タイマー",
    "description": "勉強・作業・休憩に使えるシンプルタイマー",
    "category": "management",
    "icon": "⏱️",
    "url": "https://kentaro0810.github.io/timer-app/",
    "version": "1.0.0"
  },
  {
    "id": "memo",
    "name": "自分用メモ帳",
    "description": "思いついたことをすぐ保存できます",
    "category": "study",
    "icon": "📘",
    "url": "https://kentaro0810.github.io/memo-app/",
    "version": "1.0.0"
  },
  {
    "id": "todo",
    "name": "自分用ToDo管理サイト",
    "description": "やることを登録して管理できます",
    "category": "management",
    "icon": "🎮",
    "url": "https://kentaro0810.github.io/todo-site/",
    "version": "1.0.0"
  },
  {
    "id": "roulette",
    "name": "ルーレット抽選アプリ",
    "description": "登録した候補からルーレットで抽選できます",
    "category": "selection",
    "icon": "⭐️",
    "url": "https://kentaro0810.github.io/roulette-picker/",
    "version": "1.0.0"
  },
  {
    "id": "password-generator",
    "name": "パスワード自動生成ツール",
    "description": "安全な乱数を使ってランダムなパスワードを生成します",
    "category": "development",
    "icon": "🛠️",
    "url": "https://kentaro0810.github.io/password-generator/",
    "version": "1.0.0"
  },
  {
    "id": "bulk-url-opener",
    "name": "一括URLオープンツール",
    "description": "複数のURLをまとめて新しいタブで開けます",
    "category": "development",
    "icon": "📁",
    "url": "https://kentaro0810.github.io/bulk-url-opener/",
    "version": "1.0.0"
  },
  {
    "id": "color-palette",
    "name": "カラーパレット作成ツール",
    "description": "色を生成して気に入った配色を保存できます",
    "category": "design",
    "icon": "🎨",
    "url": "https://kentaro0810.github.io/color-palette-maker/",
    "version": "1.0.0"
  },
  {
    "id": "character-counter",
    "name": "文字数カウンター",
    "description": "文字数・行数・段落数・原稿用紙換算・読了時間を確認できます",
    "category": "study",
    "icon": "🔢",
    "url": "https://kentaro0810.github.io/character-counter/",
    "version": "1.0.0"
  },
  {
    "id": "reaction-test",
    "name": "反射神経テスト",
    "description": "画面が緑色に変わった瞬間にタップして反応時間を測定します",
    "category": "game",
    "icon": "⚡",
    "url": "https://kentaro0810.github.io/reaction-test/",
    "version": "1.0.0"
  },
  {
    "id": "habit-tracker",
    "name": "習慣トラッカー",
    "description": "毎日の習慣を記録し、達成率と連続達成日数を確認できます",
    "category": "management",
    "icon": "🌱",
    "url": "https://kentaro0810.github.io/habit-tracker/",
    "version": "1.0.0"
  },
  {
    "id": "countdown-manager",
    "name": "カウントダウン管理",
    "description": "予定日時までの残り日数と時間をリアルタイムで確認できます",
    "category": "management",
    "icon": "📅",
    "url": "https://kentaro0810.github.io/countdown-manager/",
    "version": "1.0.0"
  },
  {
    "id": "flashcard-app",
    "name": "暗記カード",
    "description": "問題と答えを登録し、ランダム出題や苦手カードの復習ができます",
    "category": "study",
    "icon": "📚",
    "url": "https://kentaro0810.github.io/flashcard-app/",
    "version": "1.0.0"
  },
  {
    "id": "study-time-tracker",
    "name": "学習時間記録",
    "description": "教科別の学習時間を記録し、今日・今週・今月の合計を確認できます",
    "category": "study",
    "icon": "📊",
    "url": "https://kentaro0810.github.io/study-time-tracker/",
    "version": "1.0.0"
  },
  {
    "id": "packing-checklist",
    "name": "持ち物チェックリスト",
    "description": "旅行・学校・部活動などの持ち物を用途別に整理して確認できます",
    "category": "management",
    "icon": "🎒",
    "url": "https://kentaro0810.github.io/packing-checklist/",
    "version": "1.0.0"
  },
  {
    "id": "backup-center",
    "name": "一括バックアップ管理",
    "description": "各ツールのブラウザーデータをまとめて保存・復元できます",
    "category": "management",
    "icon": "📦",
    "url": "https://kentaro0810.github.io/backup-center/",
    "version": "1.0.0"
  },
  {
    "id": "gradient-maker",
    "name": "グラデーション作成",
    "description": "色・角度・種類を調整してCSSグラデーションを作成できます",
    "category": "design",
    "icon": "🌈",
    "url": "https://kentaro0810.github.io/gradient-maker/",
    "version": "1.0.0"
  },
  {
    "id": "image-optimizer",
    "name": "画像圧縮・サイズ変更",
    "description": "画像の容量・大きさ・形式をブラウザー内で調整できます",
    "category": "design",
    "icon": "🖼️",
    "url": "https://kentaro0810.github.io/image-optimizer/",
    "version": "1.0.0"
  },
  {
    "id": "memory-game",
    "name": "神経衰弱",
    "description": "カードをめくって同じ絵柄のペアをそろえるゲームです",
    "category": "game",
    "icon": "🃏",
    "url": "https://kentaro0810.github.io/memory-game/",
    "version": "1.0.0"
  },
  {
    "id": "snake-game",
    "name": "スネークゲーム",
    "description": "ヘビを操作して食べ物を集め、最高スコアを目指すゲームです",
    "category": "game",
    "icon": "🐍",
    "url": "https://kentaro0810.github.io/snake-game/",
    "version": "1.0.0"
  },
  {
    "id": "team-divider",
    "name": "チーム分け",
    "description": "参加者をシャッフルして、人数差の少ないチームに分けます",
    "category": "selection",
    "icon": "👥",
    "url": "https://kentaro0810.github.io/team-divider/",
    "version": "1.0.0"
  },
  {
    "id": "tournament-maker",
    "name": "トーナメント表作成",
    "description": "参加者を配置し、試合の勝者を選んで優勝まで記録できます",
    "category": "selection",
    "icon": "🏆",
    "url": "https://kentaro0810.github.io/tournament-maker/",
    "version": "1.0.0"
  },
  {
    "id": "league-table",
    "name": "リーグ戦順位表",
    "description": "総当たり戦を作成し、試合結果から順位を自動計算します",
    "category": "selection",
    "icon": "📊",
    "url": "https://kentaro0810.github.io/league-table/",
    "version": "1.0.0"
  },
  {
    "id": "readme-generator",
    "name": "README作成",
    "description": "入力内容からGitHub向けのREADME.mdを作成します",
    "category": "development",
    "icon": "📝",
    "url": "https://kentaro0810.github.io/readme-generator/",
    "version": "1.0.0"
  },
  {
    "id": "json-formatter",
    "name": "JSON整形",
    "description": "JSONの整形・圧縮・構文検証・ファイル保存ができます",
    "category": "development",
    "icon": "🧩",
    "url": "https://kentaro0810.github.io/json-formatter/",
    "version": "1.0.0"
  },
  {
    "id": "html-css-preview",
    "name": "HTML・CSS・JavaScriptプレビュー",
    "description": "HTML・CSS・JavaScriptの表示と動作をその場で確認できます",
    "category": "development",
    "icon": "🧪",
    "url": "https://kentaro0810.github.io/html-css-preview/",
    "version": "1.1.0"
  },
  {
    "id": "seat-change-tool",
    "name": "席替えツール",
    "description": "前列指定・ブロック・隣指定に対応し、席の入れ替えや完成表のPNG保存ができます",
    "category": "selection",
    "icon": "🪑",
    "url": "https://kentaro0810.github.io/seat-change-tool/",
    "version": "1.5.0"
  }
];
