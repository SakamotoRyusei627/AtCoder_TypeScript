// inputに入力データ全体が入る
let score = 0;
let maxTime = -Infinity;
let maxScore = -Infinity
let maxScoreData = ""
let maxTimeInputData = "";
const multipleResult: string[] = []
let multipleIndex = 0

function multipleMain(input: string, outputFileName: string) {
  const start = performance.now();

  let all = input.split('\n')

  const result: string = 'test'
  require("fs").writeFileSync(outputFileName, result);





  const end = performance.now();

  if (end - start > 3000) {
    console.log("----------------timeout----------------");
  }
  if (end - start > maxTime) {
    maxTime = end - start;
    maxTimeInputData = outputFileName;
  }
  // if (resultOutputArr!.length > maxScore) {
  //   maxScore = resultOutputArr!.length
  //   maxScoreData = outputFileName
  // }
  console.log(`Execution Time: ${end - start} ms`);
  console.log(outputFileName);
  // score += resultOutputArr!.length;
  if (outputFileName === "output/1999.txt") {
    console.log(score / 1000);
  }
}

for (let i = 0; i < 1000; i++) {
  // 入力ファイルのパスを生成
  const inputFileName = `input/${i.toString().padStart(4, '0')}.txt`;

  // 出力ファイルのパスを生成
  const outputFileName = `output/${i.toString().padStart(4, '0')}.txt`;

  // ファイルから内容を読み込み、Main関数に渡す
  const inputContent = require("fs").readFileSync(inputFileName, "utf8");
  multipleMain(inputContent, outputFileName);

  if (i === 999) {
    console.log({maxTime});
    console.log({maxTimeInputData});
    console.log({maxScore})
    console.log({maxScoreData})
    const result = multipleResult.join('\n')
    console.log(result)
  }
}