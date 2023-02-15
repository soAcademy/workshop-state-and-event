import React from "react";

const LotteryCheck = () => {
  return (
    <div className="w-full font-Kanit">
      <div className="pt-5 text-center">
        <p className="text-2xl">ตรวจผลลอตเตอรี่</p>
      </div>
      <div className="bg-slate-100 m-auto w-2/3 p-5 mt-5 rounded">
        <p>กรอกเลข</p>
        <textarea className="w-full rounded mt-5 h-36" />
        <div className="flex justify-between space-x-2 mt-5">
          <button className="w-6/12 p-3 bg-emerald-400 hover:bg-emerald-300 rounded">
            ตรวจหวย
          </button>
          <button className="w-6/12 p-3 bg-slate-300 hover:bg-slate-200 rounded">
            เคลียร์เลข
          </button>
        </div>
      </div>
      <div className="bg-red-100 m-auto w-2/3 p-5 mt-5 rounded">
        <p>130999 ถูกกินครับ</p>
        <p>297410 เย้! ถูกรางวัลข้างเคียงรางวัลที่ 1</p>
        <p>557584 เย้! ถูกรางวัลที่ 3</p>
        <p>คุณถูกหวยงวดนี้ทั้งสิ้น 180,000 บาท</p>
      </div>
      <div className="text-center mt-5">
        <p>ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ 1 กุมภาพันธ์ 2566</p>
      </div>
      <div className="p-10 text-center">
        <table className="w-full">
          <tbody>
            <tr className="border">
              <th className="border" colSpan="4">
                รางวัลที่ 1
              </th>
              <th className="border" colSpan="2">
                เลขหน้า 3 ตัว
              </th>
              <th className="border" colSpan="2">
                เลขท้าย 3 ตัว
              </th>
              <th className="border" colSpan="2">
                เลขท้าย 2 ตัว
              </th>
            </tr>
            <tr className="border-l">
              <td className="border" colSpan="4">
                <p>รางวัลละ 6,000,000 บาท</p>
                <p>297411</p>
              </td>
              <td className="border" colSpan="2">
                <p>รางวัลละ 4,000 บาท</p>
                <div className="flex justify-between">
                  <p className="w-6/12 text-center">181</p>
                  <p className="w-6/12 text-center">789</p>
                </div>
              </td>
              <td className="border" colSpan="2">
                <p>รางวัลละ 4,000 บาท</p>
                <div className="flex justify-between">
                  <p className="w-6/12 text-center">101</p>
                  <p className="w-6/12 text-center">664</p>
                </div>
              </td>
              <td className="border" colSpan="2">
                <p>รางวัลละ 2,000 บาท</p>
                <p>92</p>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="4">
                <div className="flex justify-between">
                  <p className="w-6/12">รางวัลข้างเคียงรางวัลที่ 1</p>
                  <p className="w-6/12">รางวัลละ 100,000 บาท</p>
                </div>
              </td>
              <td className="border" colSpan="6">
                <div className="flex justify-between">
                  <p className="w-4/12">รางวัลที่ 2</p>
                  <p className="w-8/12 text-center">รางวัลละ 200,000 บาท</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="4">
                <div className="flex justify-between">
                  <p className="w-6/12">297410</p>
                  <p className="w-6/12">297412</p>
                </div>
              </td>
              <td className="border" colSpan="6">
                <div className="flex justify-between px-1">
                  <p className="bg-slate-300">1</p>
                  <p>229120</p>
                  <p className="bg-slate-300">2</p>
                  <p>679028</p>
                  <p className="bg-slate-300">3</p>
                  <p>677223</p>
                  <p className="bg-slate-300">4</p>
                  <p>589702</p>
                  <p className="bg-slate-300">5</p>
                  <p>670839</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12">รางวัลที่ 3</p>
                  <p className="w-8/12">รางวัลละ 80,000 บาท</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex justify-between px-1">
                  <p className="bg-slate-300">1</p>
                  <p>258348</p>
                  <p className="bg-slate-300">2</p>
                  <p>258348</p>
                  <p className="bg-slate-300">3</p>
                  <p>258348</p>
                  <p className="bg-slate-300">4</p>
                  <p>258348</p>
                  <p className="bg-slate-300">5</p>
                  <p>258348</p>
                  <p className="bg-slate-300">6</p>
                  <p>258348</p>
                  <p className="bg-slate-300">7</p>
                  <p>258348</p>
                  <p className="bg-slate-300">8</p>
                  <p>258348</p>
                  <p className="bg-slate-300">9</p>
                  <p>258348</p>
                  <p className="bg-slate-300">10</p>
                  <p>258348</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12">รางวัลที่ 4</p>
                  <p className="w-8/12">รางวัลละ 40,000 บาท</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="grid grid-cols-10">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                  <p>23</p>
                  <p>24</p>
                  <p>25</p>
                  <p>26</p>
                  <p>27</p>
                  <p>28</p>
                  <p>29</p>
                  <p>30</p>
                  <p>31</p>
                  <p>32</p>
                  <p>33</p>
                  <p>34</p>
                  <p>35</p>
                  <p>36</p>
                  <p>37</p>
                  <p>38</p>
                  <p>39</p>
                  <p>40</p>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  <p>45</p>
                  <p>46</p>
                  <p>47</p>
                  <p>48</p>
                  <p>49</p>
                  <p>50</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12">รางวัลที่ 5</p>
                  <p className="w-8/12">รางวัลละ 20,000 บาท</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="grid grid-cols-10">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                  <p>23</p>
                  <p>24</p>
                  <p>25</p>
                  <p>26</p>
                  <p>27</p>
                  <p>28</p>
                  <p>29</p>
                  <p>30</p>
                  <p>31</p>
                  <p>32</p>
                  <p>33</p>
                  <p>34</p>
                  <p>35</p>
                  <p>36</p>
                  <p>37</p>
                  <p>38</p>
                  <p>39</p>
                  <p>40</p>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  <p>45</p>
                  <p>46</p>
                  <p>47</p>
                  <p>48</p>
                  <p>49</p>
                  <p>50</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LotteryCheck;
