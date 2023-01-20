# โจทย์ Events

1. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 1"); (onClick)

2. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 2");
แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld (onClick, function)

3. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 3"); แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld และตอนเรียก onClick ให้เรียกแบบ onClick={helloWorld2} (onClick, function)

4. สร้าง Input Field ที่เมื่อกรอกค่าใดๆ แล้ว console.log ค่าที่กรอก (onChange)

5. สร้าง div ที่วาง Mouse แล้ว console.log("Hello 5"); (onMouseOver)

6. สร้าง input ที่มี placeholder ว่า "Hello" เมื่อคลิ้กที่จะ console.log("Hello 6") (onSelect)

7. สร้าง Form ที่มี 3 inputField คือ name, tel และ email โดย name เป็น required field และมีปุ่ม Submit เมื่อกด submit จะแสดงข้อมูลเป็น object {name: "ค่าที่กรอก", tel: "ค่าที่กรอก", email: "ค่าที่กรอก"}

8. สร้าง Upload image button ที่เมื่อ browse image แล้วโชว์ console.log ชื่อไฟล์

# โจทย์ States

1. สร้าง state ชื่อ title โดย มีค่าเริ่มต้น เป็น "Bin" จากนั้นสร้างปุ่ม ที่เมื่อกดแล้ว title จะเปลี่ยนเป็น "Jam" พร้อม render ค่า title ลงบน browser

2. สร้างปุ่ม Counter ที่กดแล้ว ให้บวกเลขเพิ่มทีละ 1 โดยค่าเริ่มต้นเป็น 0

3. สร้างปุ่ม Counter + - ที่ถ้ากดแล้วบวกลบเลขทีละ 1 โดยค่าเริ่มต้นคือ 10

4. สร้าง number input field ที่เมื่อกรอกค่า จะนำค่าที่แสดงมา render หน้า input ถ้ากดปุ่ม Caluculate จะนำค่าที่ได้ + 7 แล้วแสดง

5. สร้าง state ชื่อว่า customer ที่เก็บข้อมูล `{name: "Bin", location: "Bangkok"}` เมื่อกดปุ่มแล้วจะเปลี่ยน ค่าเป็น `{name: "Jam", location: "Nonthaburi"}`

6. สร้าง number input fields 2 อัน คือ Number1 และ Number2 โดย เมื่อกรอกค่าไปให้ render number มาแสดง จากนั้นถ้ากดปุ่ม calculate ให้เอา Number1 + Number2

# โจทย์ Props

1. สร้าง Component รับ props ชื่อว่า data จากนั้น render data ออก

2. สร้าง Component รับ props ชื่อว่า data1 และ data2 จากนั้น render data1 และ data2 ออกมา

3. สร้าง Counter ที่เมื่อกดปุ่ม จะส่งค่า counter ไปใน Component ผ่าน Prop (Counter กับ Render อยู่คนละ Component)

4. สร้าง 2 Component คือ Increase และ Decrease โดยส่ง counter และ setCounter ผ่าน prop เมื่อกดแต่ละปุ่ม จะ render ค่า counter ทาง root component

# โจทย์ useEffect

1. แก้ Html Title ตามใช้ข้อความ ตามจำนวน Click โดยใช้ useState และ useEffect

2. สร้างตัวแปร useState 2 ตัว คือ name และ profile โดย name มีค่าเริ่มต้น คือ Bin และ profile มีค่าเริ่มต้นคือ My name is Bin จากนั้นสร้าง input ให้กรอกชื่อ โดยจะเปลี่ยนแปลงค่า name และ profile เป็น `My name is ${name}` โดยใช้ useEffect

3. สร้างตัวแปร useState 2 ตัว คือ num และ numSquare โดย num มีค่าเริ่มต้นคือ 0 จากนั้นสร้าง input ให้กรอกตัวเลข เมื่อมีการเปลี่ยนแปลงค่า จะแสดง ค่า num และ numSquare โดย numSquare = num * num

4. สร้าง ตัวนับเวลาถอยหลัง (Countdown Timer) โดย ลดค่าลง ทีละ 1 วินาที มีค่าเริ่มต้น 10 วินาที โดยลดค่าลงน้อยสุด 1 วินาที ห้ามติดลบ

5. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยดึงตั้งแต่โหลดหน้าเว็บ

6. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยโหลดข้อมูลเมื่อกดปุ่ม Fetch

7. สร้างปุ่ม 2 ปุ่มคือ Light 1 และ Light 2 โดยเก็บตัวแปร Boolean โดย 2 ปุ่มนี้เป็น toggle คือ true/false ถ้า light1 และ light2 เป็น true ทั้งคู่ ให้แสดงค่า เป็น "Hello" ถ้าไม่ใช่ให้แสดงค่าเป็น "Hola" โดย default ให้เป็น false ทั้งหมด