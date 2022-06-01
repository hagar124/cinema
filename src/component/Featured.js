
import React from "react";
import './Featured.css'
import mov1 from '../assets/movie1-img.png'
import mov2 from '../assets/movie2-img.png'
import mov3 from '../assets/movie3-img.png'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Featured() {
    return (
        <div className="Featured">
            <div className="container">
                {/*left*/}
                <div className="left">
                    <h2>you can choose your favourite movie as you like </h2>
                    <p>see all available movie in 2022 </p>
                    
 
                </div>
                <div className="left">
                <Stack component="form" noValidate spacing={3} >
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
      
    </Stack>
                </div>
                {/*right*/}
                <div className="right">
                  <div className="card">
                    <div className="top">
                        <img src={mov1} alt='/' />
                       </div>
                       <div className="contentsheto">
                         <p>The northman  رجل الشمال هو فيلم انتقام تاريخي امريكي من اخراج روبرت اغرز وبطوله الكسندر سكارسجارد</p>
                       </div>
                   </div>
                   <div className="card">
                    <div className="top">
                        <img src={mov2} alt='/' />
                       </div>
                       <div className="contentsheto">
                         <p>واحد تاني هو فيلم كوميدي مصري من انتاج 
                           2020 بطوله احمد حلمي وروبي وسيد رجب وعمرو عبد الجليل
                           تدور احداث الفيلم حول موظف يعمل اخصائي اجتماعي ف مصلحه السجون ويكتشف بعد مقابله زملاء قدامي فشله وفقدانه للشغف ف الحياه 
                           فيلجأ الي اختراع يعيد له الشغف ولكن الامور تنحرف بشكل غير متوقع</p>
                       </div>
                   </div>
                   <div className="card">
                    <div className="top">
                        <img src={mov3} alt='/' />
                       </div>
                       <div className="contentsheto">
                         <p>تماسيح النيل فيلم مصري بطوله بيومي فؤاد ومصطفي خاطر وحمدي المرغني
                            وتدور احداث الفيلم ف رحله نيليه ع مركب وتحدث عمليه نصب غير متوقعه
                             لاحد ركاب المركب وتتوالي الاحداث ف ناق كوميدي للبحث عن الحقيقه 
                         </p>
                       </div>
                   </div>
                      
                      
                        
                        
                       

                   


                </div>


            </div>
        </div>

    );
}
export default Featured;
