const countdown = () =>{
    const countDate = new Date("May 25, 2021 00:00:00").getTime();//!---目標時間---
    const now = new Date().getTime();//!---現在時間---
    const gap = countDate - now;//!---相隔時間---

    //console.log(countDate); //!---偵錯-印出數值--

    //todo---時間換算>> 日/時/分/秒 時間單位，因為 getTime預設單位為 ms---
    const second =1000;
    const minute =second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //todo---相隔時間換算>>日/時/分/秒 時間單位
    const textDay = Math.floor(gap / day);//!---floor只取整數---
    const textHour = Math.floor((gap % day) / hour);//!---% 取餘數---
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //console.log(textDay);//!---偵錯-印出數值---

    //todo---html替換成js計算結果---
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    //console.log(gap);//!---偵錯-印出數值---
}

    //countdown(); //!---只運算一次---

    //todo---不停刷新計算---
    setInterval(countdown,1000);