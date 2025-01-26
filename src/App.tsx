import { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "AIの第1次ブームを引き起こした主な要因は何ですか？",
      options: [
        "探索と推論の技術の進展",
        "機械学習アルゴリズムの普及",
        "ディープラーニングの成功",
        "コンピュータの高速化",
      ],
      correctAnswer: "探索と推論の技術の進展",
    },
    {
      question: "AIの第2次ブームを引き起こした主な技術はどれですか？",
      options: [
        "ニューラルネットワーク",
        "エキスパートシステム",
        "強化学習",
        "ビッグデータ解析",
      ],
      correctAnswer: "エキスパートシステム",
    },
    {
      question: "AIの第3次ブームを支える技術はどれですか？",
      options: [
        "ディープラーニング",
        "探索と推論",
        "エキスパートシステム",
        "プログラミング言語",
      ],
      correctAnswer: "ディープラーニング",
    },
    {
      question:
        "ニューラルネットワークの活性化関数として一般的に使用されるのはどれですか？",
      options: ["ReLU", "ソフトマックス", "シグモイド関数", "すべて"],
      correctAnswer: "すべて",
    },
    {
      question: "教師あり学習に該当するものはどれですか？",
      options: ["回帰分析", "クラスタリング", "強化学習", "生成モデル"],
      correctAnswer: "回帰分析",
    },
    {
      question: "強化学習で使用されるアルゴリズムはどれですか？",
      options: ["Q学習", "K-means", "線形回帰", "ロジスティック回帰"],
      correctAnswer: "Q学習",
    },
    {
      question:
        "ディープラーニングのモデルが学習する際に必要なものは何ですか？",
      options: [
        "大量のデータ",
        "高速な計算環境",
        "適切なアルゴリズム",
        "すべて",
      ],
      correctAnswer: "すべて",
    },
    {
      question: "AIの過学習を防ぐために使用される手法はどれですか？",
      options: [
        "ドロップアウト",
        "ミニバッチ学習",
        "活性化関数の変更",
        "オプティマイザの調整",
      ],
      correctAnswer: "ドロップアウト",
    },
    {
      question:
        "畳み込みニューラルネットワーク（CNN）はどのようなタスクに適していますか？",
      options: ["画像認識", "自然言語処理", "音声認識", "データベース検索"],
      correctAnswer: "画像認識",
    },
    {
      question:
        "リカレントニューラルネットワーク（RNN）はどのようなデータに適していますか？",
      options: [
        "時系列データ",
        "画像データ",
        "非構造化データ",
        "データベースデータ",
      ],
      correctAnswer: "時系列データ",
    },
    {
      question: "自然言語処理におけるBERTモデルの特徴は何ですか？",
      options: [
        "双方向の文脈を考慮する",
        "単語ごとに独立した解析を行う",
        "文のペア比較のみを行う",
        "画像データの解析に特化している",
      ],
      correctAnswer: "双方向の文脈を考慮する",
    },
    {
      question: "生成モデルとして正しいものはどれですか？",
      options: ["GAN", "CNN", "RNN", "Q学習"],
      correctAnswer: "GAN",
    },
    {
      question: "AI倫理で議論される問題として適切でないものはどれですか？",
      options: [
        "プライバシーの保護",
        "AIの透明性",
        "機械の感情の欠如",
        "公平性",
      ],
      correctAnswer: "機械の感情の欠如",
    },
    {
      question:
        "ディープラーニングにおける勾配消失問題を解決するために広く使用される手法はどれですか？",
      options: ["ReLU", "ドロップアウト", "バッチ正規化", "ランダムフォレスト"],
      correctAnswer: "ReLU",
    },
    {
      question:
        "ビッグデータ時代にAIが活躍する理由として適切なものはどれですか？",
      options: [
        "大量のデータを効率的に処理できる",
        "データが少なくても正確に動作する",
        "プログラムの手動入力が不要",
        "インターネット環境が不要",
      ],
      correctAnswer: "大量のデータを効率的に処理できる",
    },
    {
      question:
        "以下のどれがディープラーニングの代表的なフレームワークですか？",
      options: ["TensorFlow", "Angular", "Laravel", "Django"],
      correctAnswer: "TensorFlow",
    },
    {
      question:
        "バイアスとバリアンスのトレードオフに関連する問題はどれですか？",
      options: [
        "モデルの汎化性能",
        "データ不足",
        "計算リソースの不足",
        "アルゴリズムの複雑さ",
      ],
      correctAnswer: "モデルの汎化性能",
    },
    {
      question: "AIモデルの評価に用いられる指標はどれですか？",
      options: ["精度", "F値", "再現率", "すべて"],
      correctAnswer: "すべて",
    },
    {
      question: "AIが社会で広く使用されるために必要なものはどれですか？",
      options: ["透明性の向上", "倫理的な配慮", "法的枠組み", "すべて"],
      correctAnswer: "すべて",
    },
    {
      question: "AIの性能向上において重要な要素はどれですか？",
      options: ["データ", "アルゴリズム", "計算資源", "すべて"],
      correctAnswer: "すべて",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const getMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      return "素晴らしい！全問正解です！🎉";
    } else if (percentage >= 70) {
      return "よくできました！もう少しで満点です！👍";
    } else if (percentage >= 50) {
      return "まあまあです！次回はもっと頑張りましょう！😊";
    } else {
      return "頑張りましょう！次回に期待！💪";
    }
  };

  const handleAnswerClick = (option: string) => {
    // 正解ならスコアを加算
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // 次の問題へ進む、最後の問題なら結果表示
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0); // 問題を最初に戻す
    setScore(0); // スコアをリセット
    setShowResult(false); // 結果画面を非表示
  };

  return (
<div
  style={{
    display: "flex",
    justifyContent: "center", // 左右中央揃え
    alignItems: "center", // 上下中央揃え
    height: "100vh", // 画面全体の高さ
    margin: "0 auto", // 左右中央揃えの補強
    textAlign: "center", // 子要素内テキスト中央揃え
  }}
>
  <div
    style={{
      width: "90%",
      maxWidth: "600px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    }}
  
      >
        {!showResult ? (
          <div className="quiz-container">
            <h1>クイズアプリ</h1>
            <p>
              問題数: {currentQuestionIndex + 1} / {questions.length}
            </p>
            <p>{questions[currentQuestionIndex].question}</p>
            <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={{
                    margin: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="result-container">結果発表</h1>
            <p>
              あなたのスコア: {score} / {questions.length}
            </p>
            <p>{getMessage()}</p>
            <button
              onClick={handleRestart}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              もう一度挑戦する
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
