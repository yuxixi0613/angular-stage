export const toolUtils = {
  // 序列生成器函数（通常称为“range”，例如 Clojure、PHP 等）
  createRange(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  }
};
