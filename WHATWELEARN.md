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
    const [data1, data2] = props;
  }
  เราใช้วิธีนี้เพื่อ ถ้าเราไม่รู้ว่า props ส่งข้อมูลอะไรมาบ้าง เรา จะ log เพื่อเห็น data ก่อน

## TailwindCSS

## React