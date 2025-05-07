// next.config.mjs
// ご自身のGitHubリポジトリ名に置き換えてください
// 例: https://your-username.github.io/meito-website/ の場合、repoNameは 'meito-website'
const repoName = 'meito-website'; // ★★★ 必ずご自身のGitHubリポジトリ名に変更してください ★★★

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的サイトとして出力する設定
  // GitHub Pagesでリポジトリ名に基づいたサブディレクトリで公開する場合に必要
  // (例: https://username.github.io/repository-name/)
  // NODE_ENV === 'production' の条件は、ローカル開発時に影響しないようにするためです
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // 静的エクスポートではNext.jsの画像最適化が無効になるため必須
  },
  // trailingSlash: true, // GitHub Pagesでサブディレクトリ内のindex.htmlを正しく認識させるために推奨される場合がある
};

export default nextConfig;