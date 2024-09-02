// inputに入力データ全体が入る
function Main(input: string): void {
  console.log(input)
  // let all = input.split('\n')


  const result: string = 'test'
  // console.log(result)
  require("fs").writeFileSync("output.txt", result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
