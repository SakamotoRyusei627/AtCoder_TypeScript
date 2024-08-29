## 開発環境のセットアップ

以下のコマンドを実行して、開発環境をセットアップしてください。

```bash
npm install
```

### 使い方
- index.ts にコンテストで実装するコードを記載します。
- ルート直下にある input.txt ファイルにコンテストで使用する入力をペーストします。
<br>
<br>
<br>
以下のコマンドを実行すると、input.txt が読み取られ、ルート直下にある output.txt に結果が出力されます。
```bash
npm run start
```
<span style="color: red; ">注意:</span>
 提出時には、require("fs").writeFileSync("output.txt", result); をコメントアウトし、console.log で出力するようにしてください。
<br>
<span style="color: red; ">提出時の選択 TypeScript 5.1 (Node.js 18.16.1)</span>
<br>
<br>
<br>
### 複数のテストケースを使用する場合
- 複数のテストケースを使って出力したい場合は、multipleInput.ts にコードを記載
- multipleInput.ts内のコードを入力データ分のループに変更してください。
- 入力データは input フォルダーに .txt ファイルを作成してください。
- 以下のコマンドを実行するとinputフォルダー内のデータが随時読み取られ結果は output フォルダーに input フォルダー内と同じ名前の .txt ファイルで出力されます。
```bash
npm run start2
```