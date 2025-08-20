/**
 * Partial<T>
 *
 * - 부분적인, 일부분의
 * - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 직접 정의해보기
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안 ...",
};

/**
 * Required<T>
 *
 * - 필수의, 필수적인
 * - 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// 직접 구현해보기
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// thumbnailURL 프로퍼티를 필수 프로퍼티로 만들기!
const withThumbnailPost: Required<Post> = {
  title: "인프콘 후기",
  tags: ["개발 컨퍼런스"],
  content: "",
  thumbnailURL: "https://naver.com",
};

/**
 * Readonly<T>
 *
 * - 읽기 전용, 수정 불가
 * - 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// 직접 정의
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};
// readonlyPost.content = "";
