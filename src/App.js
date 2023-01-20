import Event1 from "./Event/Event1"
import Event2 from "./Event/Event2"
import Event3 from "./Event/Event3"
import Event4 from "./Event/Event4"

// 1. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 1"); (onClick)

// 2. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 2");
// แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld (onClick, function)

// 3. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 3");
// แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld และตอนเรียก onClick ให้เรียกแบบ onClick={helloWorld2}
// (onClick, function)

// 4. สร้าง Input Field ที่เมื่อกรอกค่าใดๆ แล้ว console.log ค่าที่กรอก (onChange)

// 5. สร้าง div ที่วาง Mouse แล้ว console.log("Hello 4"); (onMouseOver)

// 6. สร้าง div ขนาด h-screen ที่ scroll แล้ว console.log("Hello 5"); (onScroll)

const App = () => {
  return (
    <div>
      <Event1 />
      <Event2 />
      <Event3 />
      <Event4 />
    </div>
  )
}

export default App
