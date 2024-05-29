// Backend에서 렌더링되고, frontend에서 hydrate 및 interactive 된다는 의미.
'use client';

import { useState } from "react";

/**
 * 
 * use client를 추가하면 CSR로 동작하고, 리로딩시 얘만 깜빡이거나, html에 없다고 생각함
 * but,,use client는 csr이 아닌 hydrate가 일어난다는 의미.
 * 그렇다면 use client가 없으면 뭐가 다를 것인가. js로 색상을 바꾼다면,,? 어떻게 구현하니?
 * use client가 없으면 훅에서 에러가 남 (useState 훅)
 * 음 React Application이 되려면 ? 인터랙티브한 동작을 ㅏㅎ려면 use client가 필요하다고 생각하면 되나
 */
export default function CountButton() {
    const [count, setState] = useState(0);

    const color = ['red', 'blue', 'yellow'].sort(() => 0.5 - Math.random())[0]
    const style = {
        backgroundColor: color,
    }
    return (
    <div>
        <button style={style} onClick={() => setState((c) => c + 1)}>{count}</button>
    </div>
);
}