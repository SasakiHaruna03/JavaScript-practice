//関数ライブラリ

// 1. 平方根を求める関数
export function getSquareRoot(num) {
    if (!isValidNumber(num) || num < 0) {
        console.error("エラー: 正の数値を入力してください。");
        return null;
    }
    return Math.sqrt(num);
}

// 2. 立方根を求める関数
export function getCubeRoot(num) {
    if (!isValidNumber(num)) {
        console.error("エラー: 有効な数値を入力してください。");
        return null;
    }
    return Math.cbrt(num);
}

// 3. 円周を求める関数（引数がなければデフォルトで半径1として計算）
export function getCircumference(radius = 1) {
    if (!isValidNumber(radius) || radius < 0) {
        console.error("エラー: 半径には正の数値を入力してください。");
        return null;
    }
    // 円周 = 2 * π * r
    return 2 * Math.PI * radius;
}