# What We Learn

## Command Line

## JavaScript

- ประกาศตัวแปร let (mutable), const (immutable),
- global scope, function
- arrow function (es6)
- .map, .reduce, .filter, .find, .findIndex, .sort, .push, unique ([...new Set(data)]), .flat, .sort
- loop โดยใช้ for, while, forEach
- destructuring
- switch case, if else, ternary operator (... ? ... : )
- การสร้าง Class (OOP), Functional
- ประเภทตัวแปร boolean, string, number, object, array, array of objects, null, NaN, undefined
- ? ตัวเดียว ใช้ตอนไม่แน่ใจว่าค่านั้น undefined หรือไม่ ใช้ตอน .map
- ?? สองตัว ถ้าตัวแรกไม่มีค่า ให้ใช้ค่าตัวที่สอง เช่น a ?? 3
- && กรณี if/else คือและ กรณี React เราใช้ render object กรณีที่ condition เป็น true เช่น { toggle && <div>Hamburger</div }
- DOM Event เช่น onClick (Button), onSelect (Input), onChange (Input), onHover (Div), onSubmit (Form)
- เราจะใช้ .map เมื่อ
  - ใช้ loop เข้าไปใน array
  - ใช้เมื่อต้องการเปลี่ยนแปลงค่าใน array โดยที่จำนวนสมาชิกเท่าเดิม แต่หน้าตาเปลี่ยนไป
  - เราสามารถใช้ ? ตัวเดียวได้ เช่น `data?.map((r) => r)` ในกรณีที่ data อาจจะ undefined เพื่อไม่ให้เกิด error
  - เราสามารถเรียกแบบมี index ได้ เช่น `data?.map((r, idx) => r)` โดย idx คือค่า index
- เราจะใช้ .reduce เมื่อ
  - สะสมค่า/รวมค่า เช่น function sum
  - เราสามารถกำหนดค่าเริ่มต้นของ reduce ได้ เช่น
    - `data?.reduce((acc, r) => acc + r, 0)` อันนี้ค่าเริ่มต้นเป็น 0
    - `data?.reduce((acc, r) => { return acc }, {})` อันนี้ค่าเริ่มต้นเป็น object ว่าง
    - `data?.reduce((acc, r) => { return acc }, [])` อันนี้ค่าเริ่มเป็น array ว่าง
    - `data?.reduce((acc, r) => { return acc}, {name: 'Bin', count: 1})` อันนี้ค่าเริ่มต้นเป็น object ที่มี key-value
  - ตัว output ของ reduce จะ return ค่า / type ตามค่าที่ initial
- เราจะใช้ .filter เมื่อ
  - filter ข้อมูลใน array เช่น เป็น array of objects มี name กับ hobby ใช้ filter หา hobby ที่่ต้องการ หรือ หาอายุ >, < ที่กำหนด
  - ค่าที่ .filter return เป็น array
  - ค่าข้างใน .filter ต้องเป็น boolean `data.filter(r) => ตรงนี้ต้องเป็น boolean)`
- เราจะใช้ .flat เมื่อต้องการ แตก array ที่อยู่ใน array ออกมีเช่น `[[1], [2], [3]].flat()` จะได้ `[1,2,3]`
- การดึงค่าใน object โดยใช้ Object.entries เช่น `Object.entries({a: 1, b: 2, c: 3})` จะได้ `[['a', 1], ['b', 2], ['c', 3]]`
- การดึงค่าใน object โดยใช้ Object.values เช่น `Object.values({a: 1, b: 2, c: 3})` จะได้ `[1, 2, 3]`
- การดึงค่าใน object โดยใช้ Object.keys เช่น `Object.keys({a: 1, b: 2, c: 3})` จะได้ `['a', 'b', 'c']`
- เราสามารถใช้ .map, .filter. reduce chain กันได้ เช่น data.map().filter().reduce()
- Spread operator การ copy ค่าจาก object อื่นมารวมกัน เช่น

  ```
  const a = {name: 'Bin'}
  const b = {location: 'Bangkok'}
  const c = {...a, ...b} // จะได้ {name: 'Bin', location: 'Bangkok'}

  const d = [1, 2, 3],
  const e = [4, 5, 6],
  const f = [...a, ...b] // จะได้ [1, 2, 3, 4, 5, 6]
  ```

- เราทำ Unique ค่าโดยใช้ `[...new Set([1, 2, 3, 2, 1])]` จะได้ `[1, 2, 3]`
- เราเรียงค่าโดยใช้ sort เช่น
  - `[1, 2, 3, 2, 5, 0].sort()`
  - สามารถจัด order ของ sort ได้ `[1, 2, 3, 2, 5, 0].sort((a, b) => b - a)` จะเรียงจาก มาก ไปน้อย
  - สามารถ sort array of object ได้ เช่น `[{name: 'Bin', count: 2}, {name: 'Jam', count: 1}].sort((a, b) => b.count - a.count)`
- template literal เช่น
  ```
  const name = 'Bin';
  const prefix = 'Hello';
  const greeting = `${prefix} World! ${name}`
  ```
- arrow function
  - ถ้าใส่ {} ต้องมี return ถึงจะได้ค่า เช่น
    ```
    const func1 = () => {
      return 3
    }
    ```
  - ถ้าใส่ () ไม่ต้องมี return เช่น
    ```
    const func2 = () => (3);
    ```
  - จะใช้ () ก็ต่อเมื่อโค้ดสั้นๆ ทำบรรทัดเดียวเสร็จ
  - ถ้าใส่ {} จะประกาศตัวแปรข้างในได้ ถ้าใส่ () จะประกาศตัวแปรข้างในไม่ได้
  - ใช้ console.log ก่อน return เพื่อ debug เช่น
    ```
    const Component = (props) => {
      console.log(props);
      return props;
    }
    ```
- การสร้าง Class ใน javaScript จะมองทุกตัวเป็น Object 1 ก้อน มีทั้งตัวแปรและ function เช่น

  ```
  Class Rectangle {
    constructor (width, height) {
      this.width = width;
      height = height;
    }

    function area () { return this.width * this.height }
  }
  ```

  เวลาเรียกใช้จะเป็น const newRect = new Rectangle(4, 5);

  - class สามารถ inherited จาก class ก่อนหน้าได้ เช่น

  ```
  Class Box extends Box {
    constructor (width, height, length) {
    }

    function volume () { return this.width * this.height * this.length }
  }
  ```

- ความหมายของ undefined กับ NAN -> undefined คือตัวแปรที่ยังไม่ประกาศค่า, NAN -> จะ error (undefined, null คือคล้ายกัน)
- undefined ไม่เท่ากับ "" (string เปล่า)
- array กับ object ต่างกันยังไง?
  - ทั้งสองเป็น data structure เหมือนกัน
  - array ใช้ [] (สี่เหลี่ยม)
  - object ใช้ {} (ปีกกา)
  - argument, parameter ใช้ () (วงเล็บ)
  - object จะเป็น key / value,
  - array จะเป็น loop ได้
  - object ใช้ .map, .reduce, .filter, .find, .findIndex, .some ไม่ได้
  - array ใช้ .map, .reduce, .filter, .find, .findIndex, .some ได้
  - วิธีเรียกค่าใน object จะเรียกเป็น key.value เช่น data.name, data.location, data['name'], data['location']
  - วิธีเรียกค่าใน array จะเรียกเป็น index เช่น data[0], data[1]
  - object สามารถเรียกโดย ? (ตัวเดียว) เช่น data?.name ถ้าไม่มีข้อมูลจะได้ค่า undefined
  - array สามารถเรียกโดย ? (ตัวเดียว) เช่น data[0]?.name ถ้าไม่มีข้อมูลจะได้ค่า undefined
- destructring
  - เราสามารถ destructing จากใน parameters ของ function ได้ เช่น
  ```
  const Component = ({data1, data2}) => {
    console.log(data1, data2)
  }
  ```
  - เราสามารถเรารับตัวแปรเต็มๆ แล้วค่อย destructing ทีหลังได้ เช่น
  ```
  const Component = (props) => {
    console.log(props)
    const {data1, data2} = props;
  }
  เราใช้วิธีนี้เพื่อ ถ้าเราไม่รู้ว่า props ส่งข้อมูลอะไรมาบ้าง เรา จะ log เพื่อเห็น data ก่อน
  -
  ```

## TailwindCSS

- การจัดองค์ประกอบ โดยใช้ flex, grid
- flex ต่างจาก grid ยังไง
  - flex ใช้เวลาวาง div อาจจะขนาดไม่เท่ากันได้, grid div ต้องขนาดเท่ากัน
  - flex ใช้ตอนอยากให้ div เรียงกันตามแนวนอน
  - grid ใช้กรณีวาง component ซ้ำๆ เรียงกันเป็นตาราง เป็นตาราง เช่น หน้าสินค้า, เมนูอาหาร
  - flex ใช้วาง layout resume, layout หน้าเว็บที่ต้องการแบ่งสัดส่วน
- tailwind เหมือนตัวต่อ Lego (utility class) มีหลายสี ให้เลือกได้ เช่น bg-red-500
- padding กับ margin ต่างกันยังไง
  - padding ขอบใน
  - margin ขอบนอก
  - pt (padding top), pr (padding right), pl (padding left), pb (padding) บน ล่าง ซ้าย ขวา
  - py (บน ล่าง), px (ซ้าย ขวา)
  - p เฉยๆ (รวมทั้งหมด บนล่างซ้ายขวา)
- responsive แบ่งตาม size หน้าจอ (breaking point) xs, sm, md, lg, xl, 2xl
  - ตัวอย่างการใช้ เช่น การทำ Navbar xs:hidden, sm:block แสดง Navbar ตามขนาด device
  - default ของการเขียน Tailwind เริ่มจาก mobile ก่อน
  - min-[200px]:text-xl min-[300px]:text-2xl เซ็ตขนาด font ตาม size หน้าจอ
- position ถ้าใช้ flex บางที hamburger เมนูจะเพี้ยนตามแต่ละหน้าจอ ต้องใช้ static กับ absolute ช่วย
  - static เป็นจุด referrence
  - absolute ใช้กรณีกำหนดตำแหน่งแบบชัดเจน ไม่ relative
- hover ใช้เวลา mouse แตะแล้วเปลี่ยนสี เช่น `<button className="bg-red-700 hover:bg-red-300">Button</button>`
- object-cover ใช้กรณีรูป profile เข้า resume ให้เต็ม div แบบ aspect ratio เดิม
- w-[200px], w-[300px] เซ็น width ให้เป็นตาม pixel
- bg-gradient-from, bg-gradient-to อะไรสักอย่าง from, to ช่วยให้ bg ไล่สี
- aspect ratio เมนูอาหารรูปภาพกว้างไม่เท่ากัน เซ็ต aspect ratio 4:3 + object-cover จะทำให้รูปไม่เบี้ยว และทำให้ก้อน div ขนาดเท่ากัน
- "class" ไม่เท่ากับ "className" react ใช้ className ถ้าใส่ class แล้วจะพัง
- ใช้ mx-auto ข้างใน flex (nested) จะทำให้รูปอยู่ตรงกลาง
- มี flex-auto ช่วยให้ div เกลี่ยขนาดให้ใหญ่แบบ auto
- button มี active โดย active จะต่างจาก hover คือ active ต้องกดก่อนถึงจะขึ้น hover เอาเม้าวางก็ขึ้น
- rounded-full จะช่วยให้เป็นวงกลม ต้องใช้คู่กับ เซ็ต widht height ให้เท่ากัน
- rounded-[50%] ช่วยให้เป็นวงกลมเหมือนกัน
- backdrop-blur-md, backdrop-blur-lg ช่วยให้ background blurๆ ดูแล้วงงๆ
- position มี fixed กำหนดให้ค้างที่หน้าจอ เวลาเลื่อนขึ้นเลื่อนลงก็ค้าง ไว้ใช้ทำ NavBar ถ้าใช้ ต้องวาง margin ของ div ที่ตามมาให้เซ็น mt-64 เผื่อไว้
- position sticky กำหนดตำแหน่งไว้ ถ้าเลื่อนผ่าน จะติดหน้าจอลงไปด้วย ไว้ใช้ทำ NavBar ใช้ทำตารางยาวๆ เวลา scroll ลง ให้ header ตาราง ค้างไว้
- position relative กำหนดตำแหน่งจาก parent element เอาไว้กำหนดตำแหน่ง
- จัดกึ่งกลางใช้ justify-center กับ items-center ใช้ร่วมกับ flex
  - justify-center ใช้แนวนอน
  - items-center ใช้จัดแนวตั้ง
- z-index ใช้เซ็ตระดับชั้นของ element z-50 จะอยู่บน z-40
- สร้าง NavBar แล้วมันทับข้อมูลข้างล่าง กับไม่ทับ ใช้ position fixed, Navbar ใช้ mt ด้วย ถ้าบังอาจต้องลองใช้ mt
- ตัวหนาใช้ font-bold, font-semibold, font-light ตัวเอียงใช้ italic, ขีดเส้นใต้ใช้ underline, ขีดค่าใช้ strike
- tailwind ใช้ h1, h6 ตรงๆ จะได้ font-size เท่ากัน ต้องใช้ text-lg, text-xl เซ็ตขนาดเอง
- opacity ใช้ทำให้สีโปร่งแสง (transparent) เช่น `className="bg-red-400/40"` เซ็ตแบบนี้ได้ จะได้สีแดงโปร่งแสง
- float-left, float-right ช่วยให้จัดตำแหน่ง component icon ที่โดนปัดตกอีกบรรทัด ให้อยู่ในบรรทัดเดียวกัน หรือ div ที่โดนปัดตก
- div default จะขึ้นบรรทัดใหม่เสมอ ต้องใช้ float-left, float-right หรือ flex ช่วยถึงจะอยู่ในบรรทัดเดียวกันได้
- ถ้าใช้ css เราจะสร้าง style.css ถ้าใช้ tailwind จะ config ใน tailwind.css.js
- shadow ใส่เงา
- border ใส่บนล่างซ้ายขวา ใส่ขนาด ใส่สีได้
- justify-between ใช้ข้อความกระจายเต็มพื้นที่ของที่เราสร้างไว้
- gap ใช้กับ flex ใช้ได้ทั้ง x, y เช่น gap-x-2, gap-y-4 ข้อควรระวัง เช่น ถ้าเราใช้กับ grid แล้วมี 2 บรรทัด เวลาเซ็ต gap-x บรรทัดที่สอง จะมี gap ติดมาทางซ้ายด้วย
- box-sizing ใช้กับ box เวลาคิดพื้นที่ด้านนอก กับพื้นที่ด้านใน ใช้ร่วมกับ padding, margin, border
- import custom font ต้องไปเพิ่มใน index.css และเพิ่มตัวแปรใน tailwind.config.js
- indent ใช้ทำย่อหน้าของ paragraph
- เกม https://flexboxfroggy.com/ ช่วยให้วาง layout ได้คล่องขึ้น เล่นเกมนี้ซะ
- การกำหนด overflow ใช้กำหนดกรณี ข้อความยาวกกว่า div อาจจะให้ scroll หรือ hidden
- cursor-pointer บังคับให้เมาเป็น pointer
- border ปรับ style ได้ เช่น border-dashed, border-dot
- gradient ปรับทิศทางได้ ไปซ้าย-ขวา บนล่างได้ gradient-to-r, gradient-to-t, gradient-to-b
- shadow เปลี่ยนสี ปรับความฟุ้งได้ shadow-lg-red-500/10, shadow-lg-blue-500/50
- transparent เปลี่ยนสี text-transparent, bg-transparent
- progress-bar ทำ div ใน div, div นอกเซ็ต w-full, div ใน เซ็ต percent w-[30%]
- duration-200 ช่วยให้หน่วงเวลา เช่น เขียน hamburger menu เวลากดแล้วค่อยๆ slow
- transform, scale, ใช้ทำ animation ได้ เช่น NavBar กดแล้วไล่ลงมา translate-y
- break-word ถ้าเขียนยาวๆ แล้วข้อความทะลุกรอบ ต้องใช้ break ช่วยให้ขึ้นบรรทัดใหม่
- ทำ timeline / exprience ที่มีกลมๆ แบ่งเป็น 3 div, div แรกเป็น ปี, div สองเป็น div เปล่าๆ, div สามรายละเอียดที่ทำงาน ทำให้เป็น flex เรียงตามแนวนอน, div อันที่สองเปล่าๆ ใส่ สี ปั้นให้เป็นวงกลม แล้วดันให้ไปทางขวา float-right เซ็ต mr ติดลบ ถอยมาทับเส้นขอบก้อนแรก, div ก้อนแรกใส่ border-r ให้เป็นเส้น
- img ใช้แบบนี้ <img src="" /> ไม่ใช่ <img src=""></img>
- input ใช้แบบนี้ <input id="" /> ไม่ใช่ <input id=""></input>
- hr ใช้แบบนี้ <hr /> ไม่ใช่ <hr></hr>
- br ใช้แบบนี้ <br /> ไม่ใช่ <br></br>
- custom font จาก google มี Kanit, Prompt

## React

- React Component ชื่อใช้ตัวใหญ่ Uppercase เช่น ProductComponent ไม่ใช่ productComponent
- export default import ไม่ต้องมีปีกกา
  - export default ProductComponent; import ProductComponent from './productComponent';
  - export const ProductComponent = () => {}; import { ProductComponent } from './productComponent';
- Hook useState กับ useEffect
  - useState ใช้เซ็ตค่าตัวแปรที่มีการเปลี่ยนแปลงระหว่าง render ได้ เช่น ค่า State จาก button
  - useEffect ใช้เช็คตอน state มีการเปลี่ยนแปลง (listen จากตัวแปรต่างๆ) เช่น ถ้าตัวแปร state name มีการเปลี่ยนแปลง ใช้ useEffect เช็คว่าถ้า name เปลี่ยนแปลง แล้วไปทำงานอย่างอื่น
  - การ Initialize useEffect
    - ถ้าไม่ใส่ จะทำงานทุกๆ การเปลี่ยนแปลง
    - ถ้าใส่ [] จะทำงานครั้งแรกที่โหลด
    - ถ้าใส่ชื่อตัวแปร [name, location] จะทำงานทุกครั้งที่ตัวแปรนั้นๆ มีการเปลี่ยนแปลง
- Life Cycle ของ useEffect จริงๆ life cycle มีอยู่ในทุกๆ component (component ทุก component มี life cycle ของตัวเอง)
  - mounting การเริ่มต้นมีได้ครั้งเดียว เสียบปลั๊กพัดลม
  - updating การอัพเดท เปลี่ยนเบอร์ ความแรง เปลี่ยนปุ่มพัดลม
    - การใส่ props
    - การเซ็ต state
    - การ force update
  - unmounting การจบ ถอดปลั๊กพัดลม
- ถ้าจะส่งค่าจาก Parent ไปลูก ต้องส่งผ่าน Props, Parent ต้อง import component ลูกเข้ามา
- การเรียกใช้ props สามารถใช้แบบ props.data1 หรือทำ destructuring `const Product => ({data1}) => {}`
- components vs function ต่างกันยังไง
  - component render ออกมาเป็น html
  - function เหมือนสมการ ออกมาเป็นตัวแปรปกติ
  - component มี life cycle, function ไม่มี life cycle
  - component ใช้ useState, useEffect ได้, function ใช้ไม่ได้
  - component เป็น UpperCase เช่น `const ProductComponent = () => {}`, function ใช้ camelCase เช่น `const sumOrder = () => {}`
  - component ทำให้เราทำ UI ที่ซ้ำๆ ได้ reusable
- Props คืออะไร (properties)

  - Props เป็น parameters ที่ Component จะเรียกใช้งานค่า เช่น

  ```
  const ProductComponent = (props) => {};

  <ProductComponent data1={data1} data2={data2} />
  ```

  - ถ้าเป็น function

  ```
  const sumOrder = (params) => {};
  sumOrder(data1, data2)
  ```

- Props / Parameters / Arguments คือคำที่สื่อความหมายเดียวกัน คือการส่งค่าไปใน function / component คือ input นั่นเอง
- return ค่าใน component ต้องมีเป็น Node เดียว, ถ้ามีหลาย Node ต้องเอา Node เปล่าๆ มาครอบ เช่น <></> (Fragment) หรือ <div></div>
- ถ้ามี {} ต้องมี return ถ้า () ไม่ต้องมี return
- BrowserRouter, Routes, Route วิธีเขียนคือ
  ```
  <BrowserRouter>
    <Routes>
      <Route />
      <Route />
      <Route />
    </Routes>
  </BrowserRouter>
  ```
- SPA, MPA ต่างกันอย่างไร
  - SPA จะโหลดทุกอย่างมากก่อน, return ข้อมูลเป็น json ใช้งานฝั่ง client เช่น React
  - MPA จะคลิ๊กแล้วค่อยโหลด, return เป็น html ใช้งานฝั่ง server เช่น PHP ข้อดีคือ SEO
- เราสามารถส่งข้อมูลเข้าไปใน component เป็น data หรือ function ก้อได้ เช่น <ProductComponent counter={counter} setCounter={setCounter} />
- เทคนิคกันงง ส่งตัวแปรคนละชื่อไป <ProductComponent counter123={counter} setCounter123={setCounter} /> แล้วใช้ console.log(props) ออกมากันงง
- ข้อควรระวังการใช้ useEffect ต้องใส่ค่า initialize เป็น [] `useEffect(() => {}, [])` ป้องกันการ render ทุกครั้ง
- ข้อควรระวังการใช้ useEffect ห้าม self updating เช่น `useEffect(() => { setCounter(counter + 1)}, [counter])` จะเกิน infinity loop
- React Component จะ return เป็น jsx ถ้าจะใช้ javascript ใน jsx ต้อง inject เข้า เช่น
  ```
  return <div>Hello Bin. {counter + 1}</div>
  ```
- การดึงข้อมูลจากภายนอก API มักใช้กับ useEffect เพื่อรอโหลด มักใช้ร่วมกับตัวแปร state
- ข้อมูลที่ return จาก api มักจะส่งมาเป็น json ต้องใช้ JSON.stringify / JSON.parse เพื่อแปลงข้อมูลให้เป็น object
- await / async, synchronous / asynchronous
  - synchronous ทำงานให้จบก่อนเป็นเส้นตรง ถึงจะทำอันอื่นต่อ
  - asynchronous ทำงานทุกอย่างให้หมดเป็น parallel แล้วค่อยรอรับข้อมูลหลังจากเสร็จมาทำงานต่อ
  - ใช้ .then แทน await เช่น `axios({}).then((res) => { console.log(res))`
- การ import รูป

  - ถ้าใส่รูปใน public เวลาเรียกใช้ จะเป็น <img src="/image.png" />
  - ถ้าใส่ใน src เวลาเรียกใช้ต้อง import

    ```
    import Image from "../assets/image1.png"

    <img src={Image} />
    ```

- การ import ถ้าเป็นไฟล์ jsx, js, ts, tsx ไม่ต้องใส่ .extension ถ้าเป็น file อื่นต้องใส่
  ```
  import ProductComponent from "./ProductComponent"
  import Image from "../assets/image.png"
  import Data from "../assets/data.json"
  ```
- callback function ใช้ใน async function ก้อได้ หรือ กรณีที่เราส่งตัวแปร state เข้าไปใน component แล้ว child component ต้องการอัพเดทค่าเข้าไปใน parent เช่น
  const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  return <ChildComponent counter={counter} setCounter={setCounter}>

}

const ChildComponent = (props) => {
return <button onClick={() => props.setCounter(props.counter + 1)}>Increase</button>
}

- localStorage ใช้เก็บข้อมูลไว้ในเครื่อง ถ้าปิดแล้วเปิดเว็บใหม่ข้อมูลจะไม่หาย
- localStorage ต่างจาก cookie ยังไง
  - cookie มีวันหมดอายุ localStorage ไม่มี
  - cookie เก็บจะประเภทได้น้อยกว่า ขนาดเล็กกว่า localStorage
- การใช้ useEffect ระวังเรื่อง เซ็ตตัวแปร ตอน listening ห้ามใช้ตัวแปรซ้ำกัน ไม่งั้นจะวนลูปไม่จบ
- ตัวแปร hook ต้องอยู่ใน component ห้ามอยู่ข้างนอก component เช่น
  แบบนี้ใช้ได้
  ```
  const ProductComponent = () => {
    const [counter, setCounter] = useState();
    return <div>{counter}</div>
  }
  ```
  แบบนี้ผิด
  ```
  const [counter, setCounter] = useState();
  const ProductComponent = () => {
    return <div>{counter}</div>
  }
  ```
- เวลากำหนดตัวแปร useState ควรวางไว้ข้างบนๆ ของ function ไม่ควรวางไว้กลางๆ เช่น
  แบบนี้ใช้ได้

  ```
  const ProductComponent = () => {
    const [counter, setCounter] = useState();
    const increaseCounter = () => setCounter(counter + 1)

    return <div>{counter}</div>
  }
  ```

  แบบนี้ไม่ควรทำ

  ```
  const ProductComponent = () => {
    const increaseCounter = () => setCounter(counter + 1)
    const [counter, setCounter] = useState();

    return <div>{counter}</div>
  }
  ```

- DOM vs Virtual DOM ต่างกัน คือ DOM refresh จะ render โหลดทั้งหน้า, Virtual DOM ของ react จะ render เฉพาะส่วนที่เปลี่ยน ไม่ refresh ทั้งหน้า
- Event ต้องเรียกเป็น function เช่น
  แบบนี้ถูก
  <button onClick={() => setCounter(counter + 1)}>Increase</button>
  แบบนี้ผิด
  <button onClick={setCounter(counter + 1)}>Increase</button>
- Event ใน react ต้องเรียกเป็น camelCase
  แบบนี้ถูก
  <button onClick={() => setcounter(counter + 1)}>Increase</button>
  แบบนี้ผิด
  <button onclick={() => setcounter(counter + 1)}>Increase</button>
- custom style ถ้าจะใส่ต้องเป็นปีกกา แล้วข้างในเป็น object
  แบบนี้ถูก
  <button style={{backgroundColor: "red"}}>Increase</button>
  แบบนี้ผิด
  <button style={{background-color: "red"}}>Increase</button>
  <button style={backgroundColor: "red"}>Increase</button>
- button ถ้าใช้กับ form แล้วเซ็ต type="clear" สามารถเคลียร์ data ใน form ได้เลย
  <form>
    <input .../>
    <button type="clear">Clear Data</button>
  </form>
- e.preventDefault() ใช้เพื่อป้องกันการ refresh เพจเมื่อ onSubmit form
- ถ้าตัวแปร state ไม่ได้กำหนด intialize เวลาใช้ .map ต้องใส่ ?
  const [products, setProducts] = useState();

  return <div>{products?.map((r) => r)}</div>

- useState("") ใช้ ? ไม่ได้ เพราะไม่ใช่ undefined ต้องใช้ useState() แบบนี้แทน ถึงจะใช้ products?.map((r) => r) ได้
- event ของ input onChange ต้องส่งค่า (e) ไปด้วย
  <input onChange={(e) => updateDatae(e)} />
- เราสามารถใส่ id="" เข้าไปใน input ได้ เพื่อเวลาเรียกใช้ e.target จะได้เรียกผ่านชื่อ id ได้
  <input id="name" />
  `const updateData = (e) => { setData(e.target['name'].value) }`
- Link กับ a ใช้ตอนไหน
  - Link จะไม่ reload หน้าเว็บเพจใหม่ ใช้กรณี internal url (ผ่าน Router)
  - a จะ reload หน้าเว็บเพจใหม่ ใช้กรณี external url (https://google.com)
- lib icon `react-icons` สามารถเรียกใช้เป็น component ได้เลย `<FaArrow />` และสามารถส่ง className ไปได้ `<FaArrow className="mt-2" />`
- ตัวแปรที่ส่งไปใน useEffect / localStorage หรือดึงข้อมูลจากภายนอก จะเป็น string, ถ้าจะให้เป็น number ต้องเรียก Number(num)
- การตั้งชื่อตัวแปร array ต้องเป็น plural เติม s หรือ es หรือ ies
- setInterval / setTimeout
  - setInterval จะทำทุกๆ ระยะเวลา 1, 2, 3, 4, 5, 6 (นับไปเรื่อยๆ)
  - setTimeout จะทำคำสั่งนั้นๆ หลังจาก เวลาผ่านไป ทำ 1 ครั้ง เช่น 1 (นับ 1 ครั้ง)
  - clearInterval ต้องเคลียร์ด้วย ไม่งั้นผลลัพธ์จะเปลี่ยน
- ระวังเรื่องไฟล์ที่ อยู่ src กับนอก src เช่น tailwind.config.js, .firebaserc, firebase.json ต้องอยู่นอก src
- บางที import library เช่น react-router-dom แล้วพัง ให้ไปเช็ค package.json ก่อนว่า มีจริงหรือป่าว เพราะเราอาจจะลืมลง
- index.js ไม่ควรไปยุ่งมาก ถ้าจะเริ่มเขียน componet ให้เริ่มจาก App.js
- เวลาตั้งตัวแปร หรือ import ถ้ามีเรียกใช้งานจะเป็นสีสว่างๆ ถ้าไม่ถูกใช้งานจะเป็นตัวเท่าๆ
- เวลาเขียนโค้ดใน React / JavaScript จะใช้ 2 space เป็น indent แทน tab หรือ 4 space
- เวลา rename file ต้องระวังเรื่อง automatically import change
- เวลา map ใน jsx ต้องใส่ key เข้าไปด้วย ไม่งั้นจะโดนฟ้อง warning เช่น

  return <div>{
    [1, 2, 3, 4, 5].map((r, idx) => <div key={idx}>{idx}</div>)}
    </div>
- เวลาดึงข้อมูลจาก API อาจจะมีปัญหา CORS (cross origin) ถ้าเกิดปัญหาต้องแก้ที่ backend ที่ส่งมา frontend 
- tag image ต้องมี alt (คำอธิบายชื่อรูปไปด้วย) เช่น <img src="/logo.png" alt="logo-name" />
- ใน html เราใส่ spacebar ติดๆ กันไม่ได้ มันจะแสดงแค่อันเดียว แก้โดยใช้ margin ใน span แทน หรือใช้ &nbsp; (spacebar ใน ascii)
- JSON.stringify กับ JSON.parse ควรใช้เมื่อทำงานกับ object ใน localStorage หรือดึงข้อมูลจาก API

## Git

- .gitignore ต้อง ignore อะไรบ้าง
  - build
  - node_modules
  - .firebase
- git push ก่อน push จะมี step ดังนี้
  - git status
  - git add .
  - git commit -m "message"
  - git push
- git push กับ git push -u origin branchname ต่างกันยังไง
  - ถ้ายังไม่ได้สร้าง branch ขึ้นมา ต้อง git push -u origin branchname ครั้งแรกก่อน
  - git push ใช้กรณีถ้ามี branch แล้ว แล้วเราอยู่ branch ที่จะ push
  - เช็ค terminal ด้วยว่าอยู่ branch ไหน ก่อน push ไม่งั้นอาจจะผิด branch
- git pull
  - git pull vs git pull origin main
  - git pull origin main คือการดึงข้อมูลจาก branch main มาใส่ branch เรา อาจจะมี conflict ต้องแก้ก่อน
  - ก่อนจะ pull origin main ต้อง commit file ใน branch เราขึ้นไปก่อน
  - git pull เฉยๆ คือดึงข้อมูลจาก branch เราที่อยู่ใน server ลงมา local
- git checkout
  - git checkout -b branchname กับ git checkout branchname ต่างกันยังไง
    - git checkout -b branchname ใช้กรณีสร้าง branch ใหม่ที่ไม่เคยมีใน server
    - git checkout branchname ใช้กรณีมี branch อยู่แล้ว แล้วต้องการ switch branch (มีอยู่แล้วทั้งใน local หรือ server)
  - git checkout -D branchname ลบ branch ใน local ออก
- conflict คืออะไร
  - คือโค้ดที่ไม่ตรงกันบน local กับ server กรณีที่ pull ออกมา
  - แก้ยังไง เช็คดูโค้ดที่ใช้งานว่าอันไหนถูกต้อง แล้วเลือก accept current change หรือ accept incoming change
  - file ที่ conflict จะขึ้น icon ตกใจ สีแดง
  - ถ้ามี option git config global.rebase ให้เลือก false อันแรก คือเราจะไม่ rebase
  - แก้ไขข้อความเวลา commit ผิด ใช้เป็น git commit --amend -m "ข้อความใหม่"
  - ถ้า conflict มากๆ จนถอดใจไม่รู้จะแก้ยังไง ใช้ force push ไปก็ได้ แต่ต้องระวังขีดส่ง git push -uf branchname
  - ตำแหน่งไฟล์ที่เกิน conflict จะขึ้นสีแดงๆ บน slider ขวามือ
- git clone
  - แนะนำให้ใช้ clone แบบ ssh แทน https
- git push origin --delete branch ใช้กรณี delete branch บน server กรณีตั้งชื่อผิด
- เวลาที่ไฟล์ไหนยังไม่เซฟจะขึ้นวงกลมสีขาวๆ ตรงชื่อไฟล์บน vscode
- ถ้าเผลอตั้งชื่อ ตัวเล็ก แล้ว rename เป็นตัวใหญ่ แล้วไฟล์งงๆ แก้ไขโดย rename เป็น file0 แล้ว commit ไปก่อน แล้วค่อย rename เป็น File แล้ว commit ไปอีกรอบ (ชื่อไฟล์ให้มีความแตกต่าง)
- ถ้า ssh error ทำไง ไม่โหลด / ไม่ login ให้รัน
  ```
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519 หรือ ssh-add ไปเลย
  ```
- git fetch ใช้กรณีมีใครสร้าง branch ใหม่บน server แล้วเราอยากจะอัพเดทว่ามี branch นั้นๆ
- เวลาเผลอ push folder ที่ไม่ต้องการขึ้นไปเราสามารถ remove ได้ โดยใช้ git rm -rf --cache filename
- เวลารัน git status ไฟล์ไหนที่ commit แล้วจะเป็นสีเขียว ไฟล์ไหนที่ยังไม่ commit จะเป็นสีแดง
- เวลาจะ commit terminal ต้องอยู่ใน root folder ห้ามอยู่ ใน src
- ถ้า folder ไหนมี git จะมีชื่อ branch ใน terminal
- ถ้า pull branch อื่นเข้ามาใน branch เรา หรือ clone repo มาใหม่ ควรรัน yarn install ใหม่เสมอ เผื่อโค้ดมีการอัพเดท
- ก่อน push โค้ด ควร format document เสมอ และ รัน yarn build เพื่อเช็คว่าโค้ดไม่พัง
- ก่อน pull request ต้อง pull origin main (หรือ branch ที่เราจะ merge ก่อน) แล้ว resolve conflict ให้เรียบร้อย
- ข้อความใน commit ควรมี prefix "feat: text", "fix: text" (conventional commit) เพื่อให้รู้ว่า commit นี้ประเภทอะไร
- package-lock.json กับ yarn.lock ต้อง commit ขึ้น git เสมอ จะได้ไม่มีปัญหาเวลา yarn install

---

## Chart
- yarn add echarts react-echarts (ใช้ 2 ตัว)
- วิธีใช้งาน Line chart, Pie chart, Bar chart
- ทำ Chart decoration ใน key series
- Key tools จิ้มแล้ว trigger จะมีเลขปรากฎบนกราฟ
- วิธีทำแกน x, y
- `import graphic from echart` ทำให้ใส่สีเป็น gradient ได้ ตกแต่สีตรง series วิธีเรียกใช้แปลกๆ ให้ถามพี่เค้ก
- วิธีเรียกใช้ useEffect กับ echart กรณีที่โหลดข้อมูลผ่าน API
ทำเป็นตัวแปร State [chart, setChart] แล้วเรียกผ่าน useEffect
- 

## Javascript
- แทนที่จะ map ข้อมูลจาก array แต่ให้สร้างเป็น array(n) แล้วค่อย map ข้อมูลทีหลัง เช่น
```js
const result = [...Array(100).keys()].map((r, idx) => data[idx])
```
- วิธีทำ Unique ของ array of object โดยใช้ 
```js
[...new Map(...).values()]
```
- localStorage getItem, setItem, deleteItem (ยังไม่ได้สอน)
- Object.keys() จะได้ key ของ object ออกมาเป็น Array
```js
const object = Object.keys({a1: 10, a2: 2, a3: 3})
// ['a1', 'a2', 'a3']
```
```js
const object = Object.values({a1: 10, a2: 2, a3: 3})
// [10, 2, 3]
```
เราใช้ Object.keys() ใน workshop exchange rate
- เวลาเรียกข้อมูล object ที่เก็บในตัวแปร state ต้องพยายามใส่ ? เพราะบางทีค่าเริ่มอาจเป็น object ว่าง
```js
{exchangeStatistic?.last7Days?.average} 
```
- zipcode ใช้ `navigator.clipboard.writeText` สำหรับคัดลอกข้อความลง clipboard
- reduce จะวนเก็บค่าแต่ละรอบ สามารถ log acc ออกมาดูได้ ค่าจะเพิ่มขึ้นเรื่อยๆ มีการเปลี่ยนแปลง
- reduce::: acc += r กับ acc + r ใช้ต่างกันยังไง
```js
const result = datas.reduce((acc, r) => {
  acc += r;
  return acc;
}, 0)
```
```js
const result = datas.reduce((acc, r) => acc + r, 0)
```
```js
const result = datas.reduce((acc, r) => (acc + r), 0)
```
- ถ้าใช้ reduce ต้องกำหนดค่า intialize ให้ กันเพี้ยน
- useEffect อย่าลืมใส่ [], หรือ [ตัวแปร] ไม่งั้นจะวนลูปไม่หยุด
- เคส retirement ถ้า input เป็น text เวลาเอาค่ามาบวกกันจะเอา string มาต่อกัน ไม่ใช้ sum ถ้าเป็น number จะ sum
- เคส retirement ถ้า input เป็น number จะลบให้หมดไม่ได้ แล้วจะใส่ ทศนิยมไม่ได้ เพราะ เรา map onChange กับ value ทันที
- toFixed ต้องส่งเป็น number ถ้าส่งเป็น string จะพัง เช่น
```js
123.3811.toFixed(2) // แบบนี้ได้
"123.3811".toFixed(2) // แบบนี้พัง
```
- toLocaleString('TH-th') ทำให้เลขมี comma
- toLocaleString ร่วมกับ toFixed ต้องแปลงอันใดอันนึงให้เป็น number ก่อน
```js
Number(12345.80933.toFixed(2)).toLocaleString('TH-th')
```
- ตัวแปรทีมี _ นำหน้า คือตัวแปรทีสร้างแล้วใช้ครั้งเดียว จะใช้ underscore หรือ temp ก้อได้ เช่น `_data` `tempData` `tmpData`
- Custom Hook ไว้ refactor โค้ดให้มีระเบียบเรียบร้อย เราจะย้ายตัวแปรพวก useState, useEffect ไปไว้อีกไฟล์นึง แล้ว import มาใช้ โดยจะตั้งชื่อ เช่น `useData`, `useChartOption`
- จะไม่ควรเรียก custom hook ซ้อน custom hook เช่น
```js
const useData = () => {
  const {chartOption} = useChartOption(); // แบบนี้ไม่ควร
}
```
เราควรสร้าง customHook ให้อิสระต่อกัน แล้วค่อยเรียกใช้จาก Component ที่เดียว
- ใน folder ต้องมีไฟล์ index.js สำหรับทำ export ไฟล์ย่อยๆ เสมอ
- วิธีเริ่มต้น refactor ให้ย้าย useState, useEffect ออกไปเป็นก้อนเดียวก่อน ค่อยแยก เป็นทีละ hook ย่อยๆ ทีหลัง
- Step ในการเขียน App
  - 1. ปั้น mock html เป็นโครงสร้างคร่าวๆ
  - 2. mock data มาใส่ก่อน
  - 3. เริ่มส่งข้อมูล mock data เข้าไปใน component ผ่าน Props
  - 4. ดึงข้อมูลจาก API ผ่าน useEffect
- การไปแอบเอา API จากเว็บคนอื่นมาใช้ ในงานโปรเจ็คตัวเอง 
  - ไปดูที่ Network ดูว่าเค้าเรียก API อะไรบ้าง
  - ระวังเรื่อง Network Cache ให้ไป disabled cache ใน Network หรือกด Command Shift R
  - กด filter แท็บ Fetch XHR เพื่อให้ดู API ได้ง่ายขึ้น
  - ถ้า API เขาต้องการ Token ต้องส่งไปด้วย ส่วนใหญ่จะส่งใน headers ผ่าน key Authorization
  - เวลาต่อ API ข้างนอก มักจะเจอปัญหา Cross Origin (CORS) ที่ server ปิดไม่ให้เว็บเราดึงข้อมูล วิธีแก้ตรงไปตรงมา บอกให้ server allow http://localhost:3000 วิธีแก้ไม่ตรงมา ต่อผ่าน proxy
  - Error 500 ที่เจอในเคส Currency Converter เพราะลืมปิด cache ใน Network
  - วิธีแก้ API ที่ Error แล้วได้ status 500 (from disk cache) ให้ไป reload แบบ empty cache and hard reload
- การสลับค่า currency ซ้าย ขวา ต้องสร้างตัวแปร temp ขึ้นมารับ แล้วค่อย set ทีหลัง
```js
const tempCurrency = fromCurrency;
setFromCurrency(toCurrency);
setToCurrency(tempCurrency);
```
- useContext ไว้ใช้ส่ง ตัวแปรผ่าน props หลายๆ ชั้น แล้วไม่อยากต้องส่ง props nested ไปเรื่อยๆ ให้สร้าง useContext ขึ้นมาคลุม ที่ใช้ useContext เยอะๆ คือการทำ theme dark mode / light mode