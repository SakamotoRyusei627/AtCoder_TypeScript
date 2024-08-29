// inputに入力データ全体が入る
function multipleMain(input:string, outputFileName:string) {
    let all = input.split('\n')

    const result = 'test'
    require("fs").writeFileSync(outputFileName, result);
}

for (let i = 0; i < 100; i++) {
    // 入力ファイルのパスを生成
    const inputFileName = `input/${i.toString().padStart(4, '0')}.txt`;

    // 出力ファイルのパスを生成
    const outputFileName = `output/${i.toString().padStart(4, '0')}.txt`;

    // ファイルから内容を読み込み、Main関数に渡す
    const inputContent = require("fs").readFileSync(inputFileName, "utf8");
    multipleMain(inputContent, outputFileName);
}