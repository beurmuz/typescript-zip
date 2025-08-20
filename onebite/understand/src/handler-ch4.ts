/**
 * 템플릿 리터럴 타입
 */
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// Color와 Animal의 가능한 모든 타입들이 조합된 타입으로 만들어진다.
type ColoredAnimal = `${Color}-${Animal}`;

