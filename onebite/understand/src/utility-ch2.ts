/**
 * Pick<T, K>
 *
 * - 뽑다, 고르다
 * - 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'tags' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// Post type으로부터 title, content 프로퍼티만 있는 객체 타입으로 새롭게 타입을 정의해줌
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 *
 * - 생략하다, 빼다
 * - 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// Post type에서 title 프로퍼티만 제거한 타입으로 새롭게 타입을 정의해라!
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 */

// 직접 정의해보기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
