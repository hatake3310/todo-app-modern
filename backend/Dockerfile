FROM node:20-alpine
# Node.js 20 (軽量版Linux) のイメージを使用

WORKDIR /app
# コンテナ内の作業ディレクトリを /app に設定

COPY package*.json ./
# 依存関係定義ファイル (package.json等) をコンテナにコピー

RUN npm install
# ライブラリをインストール (package.jsonの内容に基づいて)

COPY . .
# 残りの全ソースコードをコンテナにコピー

EXPOSE 3000
# コンテナが使用するポート番号 (3000) を明示

CMD ["npm", "run", "dev"]
# コンテナ起動時に実行するコマンド (開発サーバー起動)