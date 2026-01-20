import js from "@eslint/js";
import globals from "globals";

export default [
  // 全ファイル共通の推奨ルールを適用
  js.configs.recommended,

  {
    // 対象となるファイル
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      // ブラウザ環境の変数（windowやdocumentなど）を許可
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // script形式かmodule形式か
      sourceType: "module",
    },
  },
];